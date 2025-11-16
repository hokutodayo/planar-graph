import * as d3 from "d3-force";
import { MouseButtonEnum, Utils } from "../common/utils";
import { Control } from "../object/Control";
import { Edge } from "../object/Edge";
import { Point } from "../object/Point";
import { Vertex } from "../object/Vertex";
import { DegreeSequence } from "./DegreeSequence";
import { GraphIO } from "./GraphIO";
import { ActionType, HistoryManager } from "./HistoryManager";

// ============================================================================
// インターフェース
// ============================================================================
// グラフ情報インターフェース
export interface GraphInfo {
	vertices: Vertex[];
	edges: Edge[];
	degreeSequence: DegreeSequence;
	origin: { x: number; y: number };
	scale: number;
}

// D3のnodeインターフェース
interface SimulatedNode {
	index: number;
	x: number;
	y: number;
}

// ============================================================================
// 列挙体
// ============================================================================
// グラフレイアウトモードの列挙体
export enum GraphLayoutEnum {
	ForceDirect = "力指向",
	Fixed = "固定",
}

// 辺の描画モードの列挙体
export enum EdgeDrawingEnum {
	straightLine = "直線",
	bezierCurve = "ペジェ曲線",
}

// ============================================================================
// グラフクラス
// ============================================================================
export class GraphManager {
	// キャンバス
	private canvas: HTMLCanvasElement;
	private readonly MAX_CANVAS_WIDTH = 20000;
	private readonly MAX_CANVAS_HEIGHT = 10000;
	private ctx: CanvasRenderingContext2D;
	// グリッド表示状態
	private showGrid: boolean = true;
	// グラフレイアウトモード
	private layoutMode: GraphLayoutEnum = GraphLayoutEnum.ForceDirect;
	private edgeDrawing: EdgeDrawingEnum = EdgeDrawingEnum.straightLine;
	// マウス位置
	private mouse: { x: number; y: number } = { x: 0, y: 0 };
	// オブジェクト管理
	public vertices: Vertex[] = [];
	public edges: Edge[] = [];
	public degreeSequence: DegreeSequence = new DegreeSequence();
	// 履歴管理
	private historyManager = new HistoryManager();
	// オブジェクト操作
	private selectedVertices: Vertex[] = [];
	private selectedEdges: Edge[] = [];
	private draggingPoint: Point | null = null;
	private activeEdge: Edge | null = null;
	private dragStartPosition: { x: number; y: number } | null = null;
	// ズーム機能関連
	public origin: { x: number; y: number } = { x: 0, y: 0 };
	public scale: number = 1;
	public zoomLevels: number[] = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0];
	public currentZoomIndex: number = this.zoomLevels.indexOf(1.0);
	// パン機能
	private isDragging = false;
	private lastPos = { x: 0, y: 0 };
	// コールバック関数
	public updateDegreeSequence: (vertices: Vertex[], edges: Edge[]) => void;
	private updateInfo: (info: GraphInfo) => void;
	// 頂点情報表示
	private showIndex: boolean = true;
	private showDegree: boolean = false;
	// オブジェクト操作
	private canTransForm: boolean = true;
	private canAddRemove: boolean = true;
	// 保存読込処理
	private graphIO: GraphIO;

	constructor(canvas: HTMLCanvasElement, updateDegreeSequence: (vertices: Vertex[], edges: Edge[]) => void, updateInfo: (info: GraphInfo) => void) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d")!;
		this.updateDegreeSequence = updateDegreeSequence;
		this.updateInfo = updateInfo;
		this.setupEvents();
		this.resizeCanvas();
		this.graphIO = new GraphIO(this);
	}

	// ============================================================================
	// イベント処理
	// ============================================================================
	// イベント登録
	private setupEvents(): void {
		this.canvas.addEventListener("dblclick", this.handleDoubleClick.bind(this));
		this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
		this.canvas.addEventListener("mouseout", this.handleMouseOut.bind(this));
		this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
		this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
		this.canvas.addEventListener("contextmenu", this.handleContextMenu.bind(this));
		this.canvas.addEventListener("wheel", this.handleWheel.bind(this));
		window.addEventListener("resize", this.resizeCanvas.bind(this));
		this.setGraphLayout(this.layoutMode);
	}

	// ダブルクリック
	private handleDoubleClick(e: MouseEvent): void {
		if (this.canAddRemove) {
			this.mouse = this.getMousePosition(e);
			this.addVertexAction(this.mouse.x, this.mouse.y);
			this.drawGraph();
		}
	}

	// マウスムーブ
	private handleMouseMove(e: MouseEvent): void {
		this.mouse = this.getMousePosition(e);

		// 頂点か制御点の移動
		if (this.draggingPoint && this.canTransForm) {
			this.draggingPoint.x = this.mouse.x;
			this.draggingPoint.y = this.mouse.y;
			this.canvas.style.cursor = "move";
		}
		// キャンバスの移動
		else if (this.isDragging) {
			const dx = e.clientX - this.lastPos.x;
			const dy = e.clientY - this.lastPos.y;
			this.origin.x += dx;
			this.origin.y += dy;
			// 移動制限
			this.limitCanvasPan();
			this.lastPos.x = e.clientX;
			this.lastPos.y = e.clientY;
		}
		// 頂点選択済みの場合
		else if (this.selectedVertices.length > 0) {
			this.canvas.style.cursor = "crosshair";
		} else if (this.canTransForm) {
			// 辺の近くの場合
			const edge = Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
			edge && (this.activeEdge = edge);
			// 頂点か制御点の近くの場合
			const point = Utils.findPointAt(this.mouse.x, this.mouse.y, this.vertices, this.edges);
			this.canvas.style.cursor = point ? "move" : "default";
		}
		this.drawGraph();
	}

	// マウスアウト
	private handleMouseOut(e: MouseEvent): void {
		this.canvas.style.cursor = "default";
		this.handleMouseUp(e);
	}

	// マウスダウン
	private handleMouseDown(e: MouseEvent): void {
		// 左クリック以外は処理なし
		if (e.button !== MouseButtonEnum.Left) {
			return;
		}
		// Shiftキーが押されている場合、選択をトグルする
		const shiftKey = e.shiftKey;

		this.mouse = this.getMousePosition(e);
		const vertex = Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
		const edge = Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
		const control = Utils.findControlAt(this.mouse.x, this.mouse.y, this.edges);
		// 判定のため一時退避
		const tempSelectedVertices = this.selectedVertices;
		// 選択状態の初期化
		if (!shiftKey) {
			this.initSelected();
		}

		// 制御点の場合（ペジェ曲線の場合、選択可能）
		if (control && this.edgeDrawing === EdgeDrawingEnum.bezierCurve) {
			// ドラッグ開始
			this.dragStartPosition = { x: control.x, y: control.y };
			this.draggingPoint = control;
		}
		// 頂点の場合
		else if (vertex) {
			if (!shiftKey) {
				this.initSelected();
			}
			if (this.selectedVertices.includes(vertex)) {
				vertex.isSelected = false;
				this.selectedVertices = this.selectedVertices.filter((v) => v !== vertex);
			} else {
				// 頂点を選択済みにする
				vertex.isSelected = true;
				this.selectedVertices.push(vertex);
			}
			if (tempSelectedVertices.length > 0) {
				// 選択済み頂点と、異なる頂点が取得できた場合
				if (!tempSelectedVertices.includes(vertex) && this.canAddRemove) {
					this.addEdgeAction(tempSelectedVertices, vertex);
				}
			}
			// カーソルを選択用に変更
			this.canvas.style.cursor = "crosshair";

			// ドラッグ開始
			this.dragStartPosition = { x: vertex.x, y: vertex.y };
			this.draggingPoint = vertex;
		}
		// 辺の場合
		else if (edge) {
			if (!shiftKey) {
				this.initSelected();
			}
			if (this.selectedEdges.includes(edge)) {
				edge.isSelected = false;
				this.selectedEdges = this.selectedEdges.filter((e) => e !== edge);
			} else {
				// 辺を選択済みにする
				edge.isSelected = true;
				this.selectedEdges.push(edge);
			}
		}
		// キャンバスの選択
		else {
			this.isDragging = true;
			this.lastPos.x = e.clientX;
			this.lastPos.y = e.clientY;
		}
		this.drawGraph();
	}

	// マウスアップ
	private handleMouseUp(e: MouseEvent): void {
		// 移動があった場合、履歴に追加
		if (this.draggingPoint && this.dragStartPosition) {
			const hasMoved = this.draggingPoint.x !== this.dragStartPosition.x || this.draggingPoint.y !== this.dragStartPosition.y;
			if (hasMoved) {
				if (this.draggingPoint instanceof Vertex) {
					this.historyManager.addAction({
						type: ActionType.Move,
						target: this.draggingPoint,
						index: this.vertices.indexOf(this.draggingPoint),
						oldPosition: this.dragStartPosition
					});
				} else if (this.draggingPoint instanceof Control) {
					// 制御点が属するエッジを見つける
					const edgeIndex = this.edges.findIndex(e => e.control === this.draggingPoint);
					if (edgeIndex !== -1) {
						const edge = this.edges[edgeIndex];
						this.historyManager.addAction({
							type: ActionType.Move,
							target: edge,
							index: edgeIndex,
							oldPosition: this.dragStartPosition
						});
					}
				}
			}
		}

		if (this.draggingPoint instanceof Control) {
			// バウンディングボックスの再算出
		}
		this.draggingPoint = null;
		this.dragStartPosition = null;
		this.isDragging = false;
		this.drawGraph();
	}

	// 右クリック
	private handleContextMenu(e: MouseEvent): void {
		// コンテキストメニューを表示させない
		e.preventDefault();

		// 選択状態の初期化
		this.initSelected();

		// 追加削除できない場合は、処理終了
		if (!this.canAddRemove) {
			return;
		}

		this.mouse = this.getMousePosition(e);
		const vertex = Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
		const edge = Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);

		// 削除処理
		if (vertex) {
			// 頂点を削除
			this.deleteVertexAction(vertex);
		} else if (edge) {
			// 辺を削除
			this.deleteEdgeAction(edge);
		}
		this.drawGraph();
	}

	// マウスホイール
	private handleWheel(e: WheelEvent): void {
		e.preventDefault();
		this.mouse = this.getMousePosition(e);
		// ズームレベルの更新
		if (e.deltaY < 0) {
			// ズームイン
			this.currentZoomIndex = Math.min(this.currentZoomIndex + 1, this.zoomLevels.length - 1);
		} else {
			// ズームアウト
			this.currentZoomIndex = Math.max(this.currentZoomIndex - 1, 0);
		}

		// 新しいスケールを取得し、スケールが変更されたか確認
		const newScale = this.zoomLevels[this.currentZoomIndex];
		if (newScale !== this.scale) {
			// マウス位置をズームイン、ズームアウトする
			// scaleのキャンバスのマウス位置の割合と、newScaleのキャンバスのマウス位置の割合が同じため下記の式が成り立つ
			// (mouse + origin / scale) / (canvas / scale) = (mouse + newOrigin / newScale) / (canvas / newScale)
			// これを newOrigin について解くと、次の通りになる
			this.origin.x = this.mouse.x * (this.scale - newScale) + this.origin.x;
			this.origin.y = this.mouse.y * (this.scale - newScale) + this.origin.y;
			this.scale = newScale;

			// 移動制限
			this.limitCanvasPan();
		}

		this.drawGraph();
	}

	// ============================================================================
	// 処理関数
	// ============================================================================
	// マウス位置を取得する
	private getMousePosition(e: MouseEvent) {
		const rect = this.canvas.getBoundingClientRect();
		const x = (e.clientX - rect.left - this.origin.x) / this.scale;
		const y = (e.clientY - rect.top - this.origin.y) / this.scale;
		return { x, y };
	}

	// 選択状態を初期化する
	private initSelected(): void {
		this.selectedVertices.forEach((v) => (v.isSelected = false));
		this.selectedEdges.forEach((e) => (e.isSelected = false));
		this.selectedVertices = [];
		this.selectedEdges = [];
		this.canvas.style.cursor = "default";
	}

	// キャンバスの移動制限
	private limitCanvasPan(): void {
		const maxX = this.MAX_CANVAS_WIDTH * this.scale - this.canvas.width;
		const maxY = this.MAX_CANVAS_HEIGHT * this.scale - this.canvas.height;
		this.origin.x = this.origin.x + maxX < 0 ? -maxX : this.origin.x;
		this.origin.y = this.origin.y + maxY < 0 ? -maxY : this.origin.y;
		this.origin.x = 0 < this.origin.x ? 0 : this.origin.x;
		this.origin.y = 0 < this.origin.y ? 0 : this.origin.y;
	}

	// リサイズ
	private resizeCanvas(): void {
		this.canvas.width = window.innerWidth * 0.8;
		this.canvas.height = window.innerHeight - 90;

		// 中心を初期描画位置にする
		this.origin.x = (this.MAX_CANVAS_WIDTH - this.canvas.width / this.scale) / 2;
		this.origin.y = (this.MAX_CANVAS_HEIGHT - this.canvas.height / this.scale) / 2;
		// 座標をピクセルに変換し、値をマイナス変換をする（originの仕様）
		this.origin.x = -this.origin.x * this.scale;
		this.origin.y = -this.origin.y * this.scale;

		this.drawGraph();
	}

	// グラフの初期化
	public initGraph(): void {
		this.vertices = [];
		this.edges = [];
		this.initSelected();
		this.scale = 1;
		this.currentZoomIndex = 10;
		this.draggingPoint = null;
		this.activeEdge = null;
		this.isDragging = false;
		this.lastPos = { x: 0, y: 0 };
		// 履歴の初期化
		this.historyManager.init();
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices, this.edges);
		this.resizeCanvas();
	}

	// TODO:辺をすべて直線にする
	public straightenEdges(): void {
		for (let edge of this.edges) {
			edge.straightenEdge();
		}
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices, this.edges);
		this.drawGraph();
	}

	// ============================================================================
	// 操作処理
	// ============================================================================
	// 頂点を追加するアクション
	private addVertexAction(x: number, y: number): void {
		const vertex = new Vertex(x, y);
		this.addVertex(vertex);
		// 履歴スタック
		this.historyManager.addAction({ type: ActionType.Add, target: vertex, index: this.vertices.indexOf(vertex) });
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices, this.edges);
	}

	// 辺を追加するアクション
	private addEdgeAction(selectedVertices: Vertex[], to: Vertex): void {
		const actions = [];
		let isAddEdge = false;

		for (const from of selectedVertices) {
			// 異なる２頂点か？
			if (from && to && from !== to) {
				// 重複辺を取得
				const duplicateEdge = this.edges.find((edge) => (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from));
				// 重複辺は削除
				if (duplicateEdge) {
					// 履歴スタック
					actions.push({ type: ActionType.Delete, target: duplicateEdge, index: this.edges.indexOf(duplicateEdge) });
					this.deleteEdge(duplicateEdge);
				}
				// 新しい辺を追加
				const edge = new Edge(from, to);
				this.addEdge(edge);
				// 履歴スタック
				actions.push({ type: ActionType.Add, target: edge, index: this.edges.indexOf(edge) });
				isAddEdge = true;
			}
		}

		// 辺を追加した場合の処理
		if (isAddEdge) {
			// 履歴スタック
			this.historyManager.addGropuedAction({ actions: actions });
			// 次数配列の更新
			this.updateDegreeSequence(this.vertices, this.edges);
		}
	}

	// 頂点を削除するアクション
	private deleteVertexAction(vertex: Vertex): void {
		// 履歴配列
		const actions = [];
		// 配列コピー（削除でindexが変わらないように）
		const vertexEdges = [...vertex.edges];
		// 頂点に接続された辺を削除
		vertexEdges.forEach((edge) => {
			// 履歴スタック
			actions.push({ type: ActionType.Delete, target: edge, index: this.edges.indexOf(edge) });
			this.deleteEdge(edge);
		});
		// 履歴スタック
		actions.push({ type: ActionType.Delete, target: vertex, index: this.vertices.indexOf(vertex) });
		this.deleteVertex(vertex);
		this.historyManager.addGropuedAction({ actions: actions });
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices, this.edges);
	}

	// 辺を削除するアクション
	private deleteEdgeAction(edge: Edge): void {
		// 履歴スタック
		this.historyManager.addAction({ type: ActionType.Delete, target: edge, index: this.edges.indexOf(edge) });
		this.deleteEdge(edge);
		// 次数配列の更新
		this.updateDegreeSequence(this.vertices, this.edges);
	}

	// 頂点追加
	private addVertex(vertex: Vertex, index: number = this.vertices.length): void {
		this.vertices.splice(index, 0, vertex);
	}

	// 頂点削除
	private deleteVertex(vertex: Vertex): void {
		this.vertices.splice(this.vertices.indexOf(vertex), 1);
	}

	// 辺追加
	private addEdge(edge: Edge, index: number = this.edges.length): void {
		this.edges.splice(index, 0, edge);
		edge.from.addEdge(edge);
		edge.to.addEdge(edge);
	}

	// 辺削除
	private deleteEdge(edge: Edge): void {
		edge.from.deleteEdge(edge);
		edge.to.deleteEdge(edge);
		this.edges.splice(this.edges.indexOf(edge), 1);
	}

	// 戻せるか
	public canUndo(): boolean {
		return this.historyManager.canUndo();
	}

	// 戻す
	public undo(): void {
		if (!this.historyManager.canUndo()) {
			return;
		}
		// 履歴情報を取得し、逆操作するためリバースする
		const actions = [...this.historyManager.undo()!.actions].reverse();
		// Undoを実行
		actions.forEach((action) => {
			if (action.target instanceof Vertex) {
				// 頂点Actionのundo
				const vertex = action.target;
				switch (action.type) {
					case ActionType.Add:
						this.deleteVertex(vertex);
						break;
					case ActionType.Delete:
						this.addVertex(vertex, action.index);
						vertex.edges.forEach((edge) => {
							this.addEdge(edge, action.index);
						});
						break;
					case ActionType.Move:
						// 移動を戻す
						if (action.oldPosition) {
							vertex.x = action.oldPosition.x;
							vertex.y = action.oldPosition.y;
						}
						break;
				}
			} else if (action.target instanceof Edge) {
				// 辺ActionのUndo
				const edge = action.target;
				switch (action.type) {
					case ActionType.Add:
						this.deleteEdge(edge);
						break;
					case ActionType.Delete:
						this.addEdge(edge, action.index);
						break;
					case ActionType.Move:
						// 制御点の移動を戻す
						if (action.oldPosition) {
							edge.control.x = action.oldPosition.x;
							edge.control.y = action.oldPosition.y;
						}
						break;
				}
			}
		});

		// 次数配列の更新
		this.updateDegreeSequence(this.vertices, this.edges);
		this.drawGraph();
	}

	// やり直せるか
	public canRedo(): boolean {
		return this.historyManager.canRedo();
	}

	// やり直す
	public redo(): void {
		if (!this.historyManager.canRedo()) {
			return;
		}
		// 履歴情報を取得
		const groupedAction = this.historyManager.redo()!;
		// Redoを実行
		groupedAction.actions.forEach((action) => {
			if (action.target instanceof Vertex) {
				// 頂点ActionのRedo
				const vertex = action.target;
				switch (action.type) {
					case ActionType.Add:
						this.addVertex(vertex);
						break;
					case ActionType.Delete:
						this.deleteVertex(vertex);
						break;
					case ActionType.Move:
						// TODO: 移動を再実行
						// 移動履歴を保存する際に、移動前の情報しか保持していないため、redoができない
						// 移動後の情報も保存するように変更する必要がある
						break;
				}
			} else if (action.target instanceof Edge) {
				// 辺ActionのRedo
				const edge = action.target;
				switch (action.type) {
					case ActionType.Add:
						this.addEdge(edge);
						break;
					case ActionType.Delete:
						this.deleteEdge(edge);
						break;
					case ActionType.Move:
						// 制御点の移動を再実行
						// 移動済みなので処理不要
						break;
				}
			}
		});

		// 次数配列の更新
		this.updateDegreeSequence(this.vertices, this.edges);
		this.drawGraph();
	}

	// ============================================================================
	// 各種表示切り替え操作
	// ============================================================================
	// グリッド表示
	public setShowGrid(showGrid: boolean): void {
		this.showGrid = showGrid;
		this.drawGraph();
	}

	// グリッド表示するか
	public isShowGrid(): boolean {
		return this.showGrid;
	}

	// グラフレイアウトモード
	public setGraphLayout(graphLayout: GraphLayoutEnum): void {
		this.layoutMode = graphLayout;
		this.changeGraphLayout();
	}

	// グラフレイアウトモードが力指向か
	public isGraphLayoutForceDirect(): boolean {
		return this.layoutMode === GraphLayoutEnum.ForceDirect;
	}

	// グラフレイアウトモードが固定か
	public isGraphLayoutFixed(): boolean {
		return this.layoutMode === GraphLayoutEnum.Fixed;
	}

	// 辺の描画モード
	public setEdgeDrawing(edgeDrawing: EdgeDrawingEnum): void {
		this.edgeDrawing = edgeDrawing;
		this.drawGraph();
	}

	// 辺の描画モードが直線か
	public isEdgeDrawingStraightLine(): boolean {
		return this.edgeDrawing === EdgeDrawingEnum.straightLine;
	}
	// 辺の描画モードがペジェ曲線か
	public isEdgeDrawingBezierCurve(): boolean {
		return this.edgeDrawing === EdgeDrawingEnum.bezierCurve;
	}

	// 頂点indexの表示
	public setShowIndex(showIndex: boolean): void {
		this.showIndex = showIndex;
		this.drawGraph();
	}

	// 頂点indexの表示状態を取得
	public isShowIndex(): boolean {
		return this.showIndex;
	}

	// 頂点次数の表示
	public setShowDegree(showDegree: boolean): void {
		this.showDegree = showDegree;
		this.drawGraph();
	}

	// 頂点次数の表示状態を取得
	public isShowDegree(): boolean {
		return this.showDegree;
	}

	// オブジェクトの移動変形可否を取得
	public getCanTransForm(): boolean {
		return this.canTransForm;
	}

	// オブジェクトの移動変形可否をセット
	public setCanTransForm(canTransForm: boolean): void {
		this.canTransForm = canTransForm;
		this.drawGraph();
	}

	// オブジェクトの追加削除可否を取得
	public getCanAddRemove(): boolean {
		return this.canAddRemove;
	}

	// オブジェクトの追加削除可否をセット
	public setCanAddRemove(canAddRemove: boolean) {
		this.canAddRemove = canAddRemove;
		this.drawGraph();
	}

	// ============================================================================
	// 描画処理
	// ============================================================================
	// グリッドの描画
	private drawGrid() {
		if (!this.showGrid) {
			return;
		}

		const gridSize = 100;
		const gridCountX = Math.ceil(this.MAX_CANVAS_WIDTH / gridSize);
		const gridCountY = Math.ceil(this.MAX_CANVAS_HEIGHT / gridSize);

		this.ctx.save();
		this.ctx.strokeStyle = "#e0e0e0";
		this.ctx.lineWidth = 1;

		// グリッド線を描画
		for (let i = 0; i <= gridCountX; i++) {
			const x = i * gridSize;
			this.ctx.beginPath();
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.MAX_CANVAS_HEIGHT);
			this.ctx.stroke();
		}
		for (let j = 0; j <= gridCountY; j++) {
			const y = j * gridSize;
			this.ctx.beginPath();
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.MAX_CANVAS_WIDTH, y);
			this.ctx.stroke();
		}

		this.ctx.restore();
	}

	// グラフ描画
	public drawGraph(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.save();
		this.ctx.translate(this.origin.x, this.origin.y);
		this.ctx.scale(this.scale, this.scale);

		// グリッドの描画
		this.drawGrid();

		// 力指向モードによって辺の描画を切り替える
		if (this.layoutMode === GraphLayoutEnum.Fixed && this.edgeDrawing === EdgeDrawingEnum.bezierCurve) {
			// ペジェ曲線の描画
			this.edges.forEach((edge) => edge.drawBezier(this.ctx, this.canTransForm));
			// 制御点の描画
			if (this.canTransForm) {
				this.activeEdge && this.edges.includes(this.activeEdge) && this.activeEdge.control.draw(this.ctx);
				this.draggingPoint instanceof Control && this.draggingPoint.draw(this.ctx);
			}
		} else {
			// 直線の描画
			this.edges.forEach((edge) => edge.draw(this.ctx));
		}

		// 頂点の描画
		this.vertices.forEach((vertex, index) => vertex.draw(this.ctx, this.showIndex, index, this.showDegree));
		this.ctx.restore();

		// 画面上の情報更新
		this.updateInfo({
			vertices: this.vertices,
			edges: this.edges,
			degreeSequence: this.degreeSequence,
			origin: this.origin,
			scale: this.scale,
		});

		// 情報表示（倍率と座標）
		this.ctx.save();
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.font = "16px Sans-serif";
		const zoomText = `倍率: ${this.scale.toFixed(2)}x  座標: (${this.mouse.x.toFixed(0)}, ${this.mouse.y.toFixed(0)})`;
		const zoomTextWidth = this.ctx.measureText(zoomText).width;
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(0, this.canvas.height - 30, zoomTextWidth + 20, 30);
		this.ctx.fillStyle = "black";
		this.ctx.fillText(zoomText, 10, this.canvas.height - 10);
		this.ctx.restore();
	}

	// ============================================================================
	// 力指向アルゴリズム
	// ============================================================================
	private intervalId: NodeJS.Timeout | null = null;

	// グラフレイアウトモード変更
	public changeGraphLayout(): void {
		// 初期化
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
		// 力指向モード、
		if (this.layoutMode === GraphLayoutEnum.ForceDirect) {
			this.edgeDrawing = EdgeDrawingEnum.straightLine;
			this.intervalId = setInterval(() => {
				this.updateForceDirectedLayout();
			}, 50);
		}
	}

	// 力指向レイアウトの更新
	private updateForceDirectedLayout(): void {
		// 斥力
		const repulsionConstant = 200;
		// 引力
		const attractionConstant = 200;
		const maxDisplacement = 50;
		const minDistance = 10;

		// 初期変位を0で設定
		let displacements = this.vertices.map(() => ({ x: 0, y: 0 }));

		// 斥力
		this.vertices.forEach((from, i) => {
			this.vertices.forEach((to, j) => {
				if (i !== j) {
					const dx = from.x - to.x;
					const dy = from.y - to.y;
					let distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < repulsionConstant * 1.5) {
						distance = Math.max(distance, minDistance);
						const force = repulsionConstant / distance;
						displacements[i].x += (dx / distance) * force;
						displacements[i].y += (dy / distance) * force;
					}
				}
			});
		});

		// 引力
		this.edges.forEach((edge) => {
			const fromIndex = this.vertices.indexOf(edge.from);
			const toIndex = this.vertices.indexOf(edge.to);
			const dx = edge.from.x - edge.to.x;
			const dy = edge.from.y - edge.to.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			const force = distance / attractionConstant;
			displacements[fromIndex].x -= (dx / distance) * force;
			displacements[fromIndex].y -= (dy / distance) * force;
			displacements[toIndex].x += (dx / distance) * force;
			displacements[toIndex].y += (dy / distance) * force;
		});

		// 移動座標設定
		displacements.forEach((displacement, index) => {
			const scalar = Math.sqrt(displacement.x * displacement.x + displacement.y * displacement.y);
			if (scalar > 0) {
				const limitedDispX = (displacement.x / scalar) * Math.min(scalar, maxDisplacement);
				const limitedDispY = (displacement.y / scalar) * Math.min(scalar, maxDisplacement);
				this.vertices[index].x += Math.round(limitedDispX);
				this.vertices[index].y += Math.round(limitedDispY);
			}
		});

		this.drawGraph();
	}

	// ============================================================================
	// 保存読込処理
	// ============================================================================
	// グラフの状態をJSONとして保存
	public saveToJson(): string {
		return this.graphIO.saveToJson();
	}

	// JSONからグラフの状態をロード
	public loadFromJson(jsonString: string): void {
		this.graphIO.loadFromJson(jsonString);
	}

	// ============================================================================
	// グラフ生成
	// ============================================================================
	public createGraphFromMatrix(): void {
		this.historyManager.init();
		const adjacencyMatrix = this.degreeSequence.generateAdjacencyMatrix();
		if (!adjacencyMatrix) {
			return;
		}
		const matrix = adjacencyMatrix.getMatrix();
		if (!matrix) {
			return;
		}

		// キャンバスの中心座標を取得
		const centerX = this.MAX_CANVAS_WIDTH / 2;
		const centerY = this.MAX_CANVAS_HEIGHT / 2;

		// 力指向レイアウトを適用して頂点を配置
		this.vertices = this.applyForceDirectedLayout(matrix, centerX, centerY);
		this.edges = [];

		// 辺の作成
		for (let i = 0; i < matrix.length; i++) {
			for (let j = i + 1; j < matrix[i].length; j++) {
				if (matrix[i][j] === 1) {
					const newEdge = new Edge(this.vertices[i], this.vertices[j]);
					this.edges.push(newEdge);
					this.vertices[i].addEdge(newEdge);
					this.vertices[j].addEdge(newEdge);
				}
			}
		}
		this.resizeCanvas();
	}

	// 力指向レイアウト適用
	private applyForceDirectedLayout(matrix: number[][], centerX: number, centerY: number): Vertex[] {
		const nodes = matrix.map((_, i) => ({ index: i })) as SimulatedNode[];
		const links = [];
		for (let i = 0; i < matrix.length; i++) {
			for (let j = i + 1; j < matrix[i].length; j++) {
				if (matrix[i][j] === 1) {
					links.push({ source: i, target: j });
				}
			}
		}
		// 力指向アルゴリズムの設定
		let simulation = d3.forceSimulation(nodes);
		simulation.force("link", d3.forceLink(links).distance(50));
		simulation.force("charge", d3.forceManyBody().strength(-100));
		simulation.force("center", d3.forceCenter(centerX, centerY));
		simulation.stop();

		// シミュレーションの実行
		for (let i = 0; i < 100; i++) simulation.tick();
		// 頂点オブジェクトの生成
		return nodes.map((node) => new Vertex(node.x, node.y));
	}
}

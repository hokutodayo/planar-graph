// GraphIO.ts

import { Edge } from "../object/Edge";
import { Vertex } from "../object/Vertex";
import { GraphManager } from "./GraphManager";

// ============================================================================
// グラフ保存読込クラス
// ============================================================================
export class GraphIO {
	private graphManager: GraphManager;

	constructor(graphManager: GraphManager) {
		this.graphManager = graphManager;
	}

	// グラフの状態をJSONとして保存
	public saveToJson(): string {
		const saveData = {
			vertices: this.graphManager.vertices.map((vertex, index) => ({
				id: index,
				x: vertex.x,
				y: vertex.y,
			})),
			edges: this.graphManager.edges.map((edge) => ({
				from: this.graphManager.vertices.indexOf(edge.from),
				to: this.graphManager.vertices.indexOf(edge.to),
				control: {
					x: edge.control.x,
					y: edge.control.y,
				},
			})),
			origin: { x: this.graphManager.origin.x, y: this.graphManager.origin.y },
			scale: this.graphManager.scale,
		};
		return JSON.stringify(saveData);
	}

	// JSONからグラフの状態をロード
	public loadFromJson(jsonString: string): void {
		const loadData = JSON.parse(jsonString);
		this.graphManager.vertices = loadData.vertices.map((vData: any) => new Vertex(vData.x, vData.y));
		this.graphManager.edges = loadData.edges.map((eData: any) => {
			const fromVertex = this.graphManager.vertices[eData.from];
			const toVertex = this.graphManager.vertices[eData.to];
			const edge = new Edge(fromVertex, toVertex);
			edge.control.x = eData.control.x;
			edge.control.y = eData.control.y;
			return edge;
		});
		this.graphManager.origin = loadData.origin;
		this.graphManager.scale = loadData.scale;
		this.graphManager.currentZoomIndex = this.graphManager.zoomLevels.indexOf(loadData.scale);
		// 次数配列の更新
		this.graphManager.updateDegreeSequence(this.graphManager.vertices, this.graphManager.edges);
		this.graphManager.drawGraph();
	}
}

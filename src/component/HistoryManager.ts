import { Edge } from "../object/Edge";
import { Vertex } from "../object/Vertex";

// ============================================================================
// インターフェース
// ============================================================================
// 実行のインターフェース
export interface Action {
	type: ActionType;
	target: Vertex | Edge;
	index: number;
	oldPosition?: { x: number; y: number }; // 移動前の座標（Move時に使用）
}

// 実行グループのインターフェース
export interface GroupedAction {
	actions: Action[];
}

// ============================================================================
// 列挙体
// ============================================================================
// 実行タイプのEnum
export enum ActionType {
	Add = "add",
	Delete = "delete",
	Move = "move",
}

// ============================================================================
// 履歴管理クラス
// ============================================================================
export class HistoryManager {
	// 履歴管理配列
	private history: GroupedAction[] = [];
	private currentPosition = -1;

	constructor() {
		this.init();
	}

	// 初期化
	public init(): void {
		this.history = [];
		this.currentPosition = -1;
	}

	// Action追加
	public addAction(action: Action): void {
		this.addGropuedAction({ actions: [action] });
	}

	// GroupedAction追加
	public addGropuedAction(actions: GroupedAction): void {
		// 未来の履歴をすべて削除する
		this.history = this.history.slice(0, this.currentPosition + 1);
		this.history.push(actions);
		this.currentPosition++;
	}

	// 戻す
	public undo(): GroupedAction | null {
		if (this.currentPosition < 0) return null;
		const action = this.history[this.currentPosition];
		this.currentPosition--;
		return action;
	}

	// やり直す
	public redo(): GroupedAction | null {
		if (this.currentPosition >= this.history.length - 1) return null;
		const action = this.history[this.currentPosition + 1];
		this.currentPosition++;
		return action;
	}

	// 戻せるか
	public canUndo(): boolean {
		return this.currentPosition >= 0;
	}

	// やり直せるか
	public canRedo(): boolean {
		return this.currentPosition < this.history.length - 1;
	}
}

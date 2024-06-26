import { Position } from "./Position";

// ============================================================================
// 矩形クラス
// ============================================================================
export class Box extends Position {
	// 幅
	public width: number;
	// 高さ
	public height: number;
	// 余白
	public static readonly MARGIN = 10;

	constructor(x: number, y: number, width: number, height: number) {
		super(x, y);
		this.width = Math.round(width);
		this.height = Math.round(height);
	}

	// 範囲内か
	public isNear(x: number, y: number): boolean {
		const inX = this.x - Box.MARGIN <= x && x <= this.x + this.width + Box.MARGIN;
		const inY = this.y - Box.MARGIN <= y && y <= this.y + this.height + Box.MARGIN;
		return inX && inY;
	}
}

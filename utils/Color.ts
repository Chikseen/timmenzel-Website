import { Theme } from "./Theme";

export default class Color {
	public color: string;
	private theme: Theme;

	constructor() {
		this.color = this.setRandomColor();
		this.theme = new Theme();
	}

	public setThemeBaseColor(): string {
		if (this.theme.mode == "dark") return this.brightness(this.color, -200);
		else return this.brightness(this.color, 50);
	}

	public brightness(color: string, magnitute: number = 1): string {
		const hexColor: string = color.replace(`#`, ``);

		const decimalColor = parseInt(hexColor, 16);
		let r: number = (decimalColor >> 16) + magnitute;
		r > 255 && (r = 255);
		r < 0 && (r = 0);
		let g: number = (decimalColor & 0x0000ff) + magnitute;
		g > 255 && (g = 255);
		g < 0 && (g = 0);
		let b: number = ((decimalColor >> 8) & 0x00ff) + magnitute;
		b > 255 && (b = 255);
		b < 0 && (b = 0);
		return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
	}

	private setRandomColor(): string {
		const color: string = Math.floor(Math.random() * 16777215).toString(16);
		if (color.length === 6) return color;
		else return this.setRandomColor();
	}
}

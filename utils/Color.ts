import { Theme } from "./Theme";

export default class Color {
	public color: string;

	constructor() {
		this.color = this.getRandomColor();
	}

	public setThemeBaseColor(): string {
		const hexColor: string = this.getRandomColor();
		const decimalColor: number = parseInt(hexColor, 16);

		let max: number = 0;
		let min: number = 0;

		if (Theme.mode == "dark") {
			max = 150;
			min = 100;
		} else {
			max = 200;
			min = 150;
		}

		let r: number = decimalColor >> 16;
		r > max && (r = max);
		r < min && (r = min);
		let g: number = decimalColor & 0x0000ff;
		g > max && (g = max);
		g < min && (g = min);
		let b: number = (decimalColor >> 8) & 0x00ff;
		b > max && (b = max);
		b < min && (b = min);

		return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
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

	public getRandomColor(): string {
		const color: string = Math.floor(Math.random() * 16777215).toString(16);
		if (color.length === 6) return color;
		else return this.getRandomColor();
	}
}

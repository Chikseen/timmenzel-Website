export class Theme {
	mode: string = "dark";

	constructor() {
		//const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		if (false) {
			this.mode = "dark";
		} else {
			this.mode = "light";
		}
	}
}

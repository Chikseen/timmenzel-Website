<template>
	<div class="wave_wrapper">
		<svg class="wave_svg" height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg" :style="`fill: ${color}`">
			<path :d="pathString" />
		</svg>
	</div>
</template>

<script lang="ts">

export default {
	props: {
		path: Array<number>,
		waveConfig: Object,
		index: Number,
	},
	data() {
		return {
			pathString: "M 0 100",
			color: ""
		}
	},
	methods: {},
	created() {
		this.color = new Color().brightness(this.waveConfig?.baseColor, (this.index! + 1) * 30);

		// set path
		if (this.path != undefined) {
			for (let i = 0; i < (this.path.length); i++) {

				switch (i) {
					case 0: {
						const value: number = this.path[i];
						this.pathString += ` L 0 ${value}`
						break;
					}

					case 1: {
						const value: number = this.path[i];
						const offSet: number = 5 - (Math.random() * 10)
						this.pathString += ` Q 5 ${value + offSet} ${((i) * 10)} ${value}`
						break;
					}

					default: {
						const value = this.path[i];
						this.pathString += ` T ${((i) * 10)} ${value}`
						break;
					}
				}
			}
			this.pathString += ` L 100 100`
		}
	},
}
</script>

<style lang="scss">
.wave {
	&_wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	&_svg {
		min-width: 750px
	}
}
</style>
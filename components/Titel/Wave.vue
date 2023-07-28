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
		color: String,
		waveConfig: Object,
		index: Number,
	},
	methods: {},
	computed: {
		pathString() {
			let string: string = "M 0 100"

			// set path
			if (this.path != undefined) {
				for (let i = 0; i < (this.path.length); i++) {
					switch (i) {
						case 0: {
							const value: number = this.path[i];
							string += ` L 0 ${value}`
							break;
						}

						case 1: {
							const value: number = this.path[i];
							const offSet: number = 5 - (Math.random() * 10)
							string += ` Q 5 ${value + offSet} ${((i) * 10)} ${value}`
							break;
						}

						default: {
							const value: number = this.path[i];
							string += ` T ${((i) * 10)} ${value}`
							break;
						}
					}
				}
				string += ` L 100 100`
			}
			return string
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
		min-width: 750px;
		transition: fill 0.5s ease-out;

		path {
			transition: d 0.5s ease-out;
		}
	}
}
</style>
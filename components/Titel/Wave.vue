<template>
	<div class="wave_wrapper">
		<svg class="wave_svg" height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg" :style="'fill: ' + getRandomColor()">
			<path :d="pathString" />
		</svg>
		<p>{{ pathString }}</p>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		path: Array
	},
	data() {
		return {
			pathString: "M 0 100"
		}
	},
	methods: {
		getRandomColor() {
			return "#" + Math.floor(Math.random() * 16777215).toString(16);
		}
	},
	created() {
		for (let i = 0; i < (this.path.length); i++) {
			const value = this.path[i];
			this.pathString += ` L ${((i) * 10)} ${value}`
		}
		this.pathString += ` L 100 100`
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
		transition: all 1s;

		:nth-child(2) {
			filter: brightness(2);
		}
	}

	&_svg {
		transition: all 1s;
	}
}
</style>
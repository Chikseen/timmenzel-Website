<template>
	<div class="background_wrapper" :style="`background-color: ${waveConfig?.baseColor};`">
		<div v-for="(item, index) in waves" :key="index">
			<Wave :path="item" :waveConfig="waveConfig" :index="index" />
		</div>
		<h1 class="background_text">Tim Keutel</h1>
	</div>
</template>

<script lang="ts">

export default {
	data() {
		return {
			waves: [],
			waveConfig: {
				amplitute: 5,
				numberOfWaves: 4,
				baseColor: "",
			}
		}
	},
	methods: {
		setBaseColor() {
			this.waveConfig.baseColor = new Color().setThemeBaseColor();
		},
		calcWaves() {
			let localWaves: Array<Array<number>> = []

			for (let i: number = 0; i < this.waveConfig.numberOfWaves; i++) {

				let points: Array<number> = []
				for (let j: number = 0; j < 11; j++) {
					const value: number = (Math.random() * this.waveConfig.amplitute) + (100 / this.waveConfig.numberOfWaves * (i + 0.5))
					points.push(value)
				}
				localWaves.push(points);
			}
			this.waves = JSON.parse(JSON.stringify(localWaves))
		}
	},
	created() {
		this.setBaseColor()
		this.calcWaves()
	},
}
</script>

<style lang="scss">
.background {
	&_wrapper {
		display: flex;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	&_text {
		margin: auto;
		z-index: 10;
	}
}
</style>
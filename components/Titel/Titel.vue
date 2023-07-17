<template>
	<div v-for="(item, index) in waves" :key="index">
		<Wave :path="item" />
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			waves: []
		}
	},
	methods: {
		calcWaves() {
			this.waves = []

			let localWaves: Array<Array<number>> = []
			const numberOfWaves: number = 7;

			for (let i: number = 0; i < numberOfWaves; i++) {

				let points: Array<number> = []

				for (let j: number = 0; j < 11; j++) {
					const value: number = Math.floor((Math.random() * -10) + ((i + 1) * 10))
					points.push(value)
				}

				localWaves.push(points);
			}

			this.waves = JSON.parse(JSON.stringify(localWaves))

			setTimeout(() => this.calcWaves(), 2000)
		}
	},
	created() {
		this.calcWaves()
	},
}
</script>
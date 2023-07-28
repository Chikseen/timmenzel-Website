<template>
	<div class="background_wrapper background-color-transition" @click="changeBackground">
		<div v-for="(item, i) in waves" :key="i">
			<wave :path="item" :waveConfig="waveConfig" :index="i" :color="waveColors![i]"
				:class="`layer ${(i == waveColors!.length - 1) || (i == waveColors!.length - 2) ? 'background_layer_over' : ''}`" />
		</div>
		<div class="background_blend background-color-transition"
			:style="`height: ${blender.height}px; background-color: ${waveColors![waveColors!.length - 1]}`"></div>
		<TextBoxWrapper class="background_titel">
			<h1>Tim Keutel</h1>
		</TextBoxWrapper>
		<div class="title_switches">
			<span @click="changeBackground">Change Background</span>
		</div>
	</div>
</template>

<script lang="ts">

export default {
	props: {
		waveConfig: Object,
		waves: Array<Array<number>>,
		waveColors: Array<string>,
	},
	data() {
		return {
			blender: {
				height: 0,
				color: ""
			}
		}
	},
	methods: {
		changeTheme() {
			this.$emit("changeTheme")
		},
		changeBackground() {
			this.$emit("changeBackground")
		},
		parallax() {
			const layers: HTMLCollectionOf<any> = document.getElementsByClassName("layer");
			const factor: number = 0.25

			for (let i = 0; i < layers.length; i++) {
				layers[i].style.transform = `translateY(${(window?.pageYOffset * i * -1) * factor}px)`;
			}
			this.blender.height = (window?.pageYOffset * (layers.length - 1)) * factor;
		}
	},
	mounted() {
		window.addEventListener("scroll", () => this.parallax());
	}
}
</script>

<style lang="scss">
.background {
	&_wrapper {
		display: flex;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow-y: hidden;
		overflow-x: visible;
	}

	&_layer {
		&_over {
			z-index: 50;
		}
	}

	&_titel {
		z-index: 10;
		padding: 100px;
	}

	&_blend {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: azure;
		z-index: 500;
	}
}

.title {
	&_switches {
		position: fixed;
		top: 15px;
		right: 15px;
		width: max-content;
	}
}
</style>
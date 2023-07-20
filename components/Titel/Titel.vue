<template>
	<div class="background_wrapper" :style="`background-color: ${waveConfig?.baseColor};`" @click="changeBackground">
		<div v-for="(item, i) in waves" :key="i">
			<wave :path="item" :waveConfig="waveConfig" :index="i" :color="waveColors![i]" class="layer" />
		</div>
		<h1 :class="['background_text', Theme.mode == 'dark' ? 'dark-text-box' : 'light-text-box']">Tim Keutel</h1>
		<div class="title_switches">
			<p @click="changeTheme">Theme Toggle</p>
			<p @click="changeBackground">Change Background</p>
		</div>
	</div>
</template>

<script lang="ts">

export default {
	props: {
		waveConfig: Object,
		waves: Array,
		waveColors: Array,
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

			console.log(window?.pageYOffset)
			console.log(layers)

			for (let i = 0; i < layers.length; i++) {
				layers[i].style.transform = `translateY(${window?.pageYOffset * i * -1}px)`;
			}

			/*
			let mbg = document.getElementById("l1");
			let st1 = document.getElementById("l2");
			let st2 = document.getElementById("home");
			let st3 = document.getElementById("l4");
			let st4 = document.getElementById("l5");


			if (window.pageYOffset >= 750) {
				mbg.style.transform = "translateY(-1500px)";
				st1.style.transform = "translateY(-1600px)";
				st2.style.transform = "translateY(-1700px)";
				st3.style.transform = "translateY(-1800px)";
				if (window.pageYOffset >= 1000) {
					st4.style.transform = "translateY(-1900px)";
				}
			}

			else {

				mbg.classList.add("myclass");
				mbg.style.transform = "translateY(" + (scrolled * 0.8) + "px)";

				st1.classList.add("myclass");
				st1.style.transform = "translateY(" + (scrolled * 0.3) + "px)";

				st2.classList.add("myclass");
				st2.style.transform = "translateY(" + (scrolled * 0.5) + "px)";

				st3.classList.add("myclass");
				st3.style.transform = "translateY(" + (scrolled * -0.3) + "px)";

				st4.classList.add("myclass");
				st4.style.transform = "translateY(" + (scrolled * -1.3) + "px)";
			}*/
		},
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
		transition: all 0.5s ease-out;
	}

	&_text {
		margin: auto;
		z-index: 10;
		padding: 100px;
		box-shadow: 0 0 5px 1px $gold;
		border-radius: 10px;
		backdrop-filter: blur(25px);
		transition: all 0.5s;
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

.layer {
}
</style>
<template>
	<div class="menu_wrapper">
		<div class="menu">
			<a class="menu_item" href="#aboutme" aria-label="About Me">About Me</a>
			<a class="menu_item" href="#projects" aria-label="Projects">Projects</a>
			<a class="menu_item" href="#sae" aria-label="Skills and Experience">Skills and Experience</a>
		</div>
	</div>
</template>

<style lang="scss">
.menu {
	display: flex;
	justify-content: center;
	gap: 25px;
	max-width: 1500px;
	height: 100%;
	margin: 5px;
	padding: 5px;
	font-size: 1.5rem;
	background-color: #e9c85ecb;
	backdrop-filter: blur(25px);
	border-radius: 10px;

	&_wrapper {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		z-index: 1000;
	}

	&_item {
		margin: auto 0;
		text-decoration: none;
		color: $dark-text;
	}
}
</style>
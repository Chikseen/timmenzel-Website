<template>
	<div :class="['textBox', Theme.mode == 'dark' ? 'textBox_dark' : 'textBox_light']">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.textBox {
	margin: auto;
	box-shadow: 0 0 5px 1px $gold;
	border-radius: 10px;
	backdrop-filter: blur(25px);
	transition: background-color 0.5s;

	&_light {
		background-color: $light-background;
		color: $dark-text;
		transition: background-color 0.5s ease-out;
		transition: color 0.5s ease-out;
	}

	&_dark {
		background-color: $dark-background;
		color: $light-text;
		transition: background-color 0.5s ease-out;
		transition: color 0.5s ease-out;
	}
}
</style>
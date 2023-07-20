<template>
	<div class="content_wrapper" :style="`background-color: ${color};`">
		content
	</div>
</template>

<script lang="ts">

export default {
	props: {
		color: String
	},
}
</script>

<style lang="scss">
.content {
	&_wrapper {
		padding: 15px;
		transition: all 0.5s ease-in-out;
		z-index: 100;
	}
}
</style>
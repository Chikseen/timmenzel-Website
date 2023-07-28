<template>
	<TextBoxWrapper class="content_container_header">
		<h2>About me</h2>
	</TextBoxWrapper>
	<TextBoxWrapper class="content_container_text">
		<img v-if="showTrueImage" src="/img/profilpic.webp" alt="Image of Tim Keutel"
			@click="showTrueImage = !showTrueImage" width="500" height="500">
		<img v-else src="/img/profilpic-EG.webp" alt="Funny Easter Egg" @click="showTrueImage = !showTrueImage" width="500" height="500">
		<p>I am a passionate Fullstack Web-Creator, creating everything related to the big World Wide Web.</p>
	</TextBoxWrapper>
	<TextBoxWrapper class="content_container_text">
		<h3>Contact me</h3>
		<p>If you are looking for a new Website, want to realize some amazing APIs, or even for cool IOT projects.
		</p>
		<p>Together we can create something <strong>BIG</strong></p>
		<div class="content_container_icons">
			<a href="mailto:Tim_Menzel@t-online.de" aria-label="Mail me">
				<MailIcon />
			</a>
			<a href="https://github.com/Chikseen" aria-label="Github Page">
				<GitHubIcon />
			</a>
		</div>
	</TextBoxWrapper>
</template>

<script lang="ts">
export default {
	data() {
		return {
			showTrueImage: true
		}
	},
}
</script>
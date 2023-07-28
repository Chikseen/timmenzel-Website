<template>
	<div class="content_wrapper background-color-transition">
		<div class="content_container">
			<MenuBar />
			<span id="aboutme">
				<AboutMe />
			</span>
			<span id="projects">
				<Projects />
			</span>
			<span id="sae">
				<SaE />
			</span>
		</div>
	</div>
</template>

<style lang="scss">
.content {
	&_wrapper {
		width: 100%;
		z-index: 500;
	}

	&_container {
		max-width: 1500px;
		padding: 15px;
		margin: 0 auto;

		span {
			padding: 50px;
		}

		&_header {
			padding: 10px;
			margin: 10px;


			h2 {
				margin: 0 0 0 45px;
			}
		}

		&_text {
			padding: 10px;
			margin: 15px 50px;
			display: flex;
			flex-direction: column;

			&_Hlist {
				display: flex;
				flex-wrap: wrap;
				gap: 10px;
				margin: 10px 0;
				padding: 0 !important;

				h4,
				p {
					margin: 0;
				}
			}

			img {
				width: 100%;
				max-width: 500px;
				max-height: 500px;
				margin: 0 auto;
				border-radius: 10px;
			}
		}

		&_grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
			grid-auto-flow: dense;
			gap: 15px;
			padding: 15px;
			margin: 15px 50px;

			&_item {
				text-decoration: none;
				color: #eeeeee;

				img {
					max-width: 100%;
					max-height: 100%;
					border-radius: 10px;
				}
			}
		}

		&_icons {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 15px;

			div {
				height: 40px;
				border-radius: 10px;
				overflow: hidden;
			}
		}
	}
}

@media only screen and (max-width: 500px) {
	.content {
		&_container {
			&_header {
				padding: 10px;
				margin: 50px 0 10px 0;

				h2 {
					margin: 0 0 0 15px;
				}
			}

			&_text {
				margin: 15px;
			}

			&_grid {
				grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
				margin: 15px;
			}
		}
	}
}
</style>
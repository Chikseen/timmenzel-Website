// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import  "@/assets/styles/_global.scss";',
				},
			},
		},
	},
	runtimeConfig: {
		public: {},
	},
	components: [{ path: "~/components", pathPrefix: false }],
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "Tim K",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description_main",
					name: "description",
					content: "Official Webpage for the Programmer and Webdeveloper Tim keutel",
				},
				{
					hid: "keywords_main",
					name: "keywords",
					content: "Tim, Menzel, Keutel, Programmer, Software, Software architekt, Software developer, IOT, For hire, hire, freelancer",
				},
				{ hid: "author_main", name: "author", content: "Tim Menzel" },
			],
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
				},
			],
		},
	},
	routeRules: {
		"img/**": { swr: 55555 },
	},
});

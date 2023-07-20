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
});

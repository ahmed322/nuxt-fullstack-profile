// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",

	future: {
		compatibilityVersion: 4,
	},

	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],

	components: [
		// {
		// 	path: "~/components/base",
		// 	pathPrefix: false,
		// },
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	devtools: { enabled: true },
});

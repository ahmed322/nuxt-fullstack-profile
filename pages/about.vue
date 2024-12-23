<script setup lang="ts">
useHead({
	htmlAttrs: {
		lang: "en",
	},
	title: "About",
	meta: [
		{
			name: "description",
			content:
				"I’m Ahmed, a full-stack developer with a focus on building both intuitive front-end interfaces and efficient back-end systems. My expertise spans HTML, CSS, JavaScript (JS), and TypeScript (TS), along with responsive design using Bootstrap 5 and Tailwind CSS. I enjoy creating visually appealing and user-friendly applications, especially using Vue.js and Nuxt (including TypeScript integration) to develop dynamic SPAs and SSR apps.On the back end, I work with Fastify.js to deliver fast, scalable server-side applications, often integrating with MongoDB and Mongoose for handling data. My approach prioritizes clean, maintainable code and best practices in both front-end and back-end development.",
		},
	],
});
</script>
<template>
	<section class="prose dark:prose-invert">
		<ContentDoc path="/about" />
	</section>
</template>

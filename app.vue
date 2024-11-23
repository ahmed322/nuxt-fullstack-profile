<script setup lang="ts">
useHead({
	link: [
		{
			rel: "icon",
			type: "image/x-icon",
			href: "/favicon.ico",
		},
	],
	titleTemplate: (titleChunck) => {
		return titleChunck ? `${titleChunck}` : `Ahmed-portfolio`;
	},
});
</script>
<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtLoadingIndicator error-color="red" />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
body {
	@apply bg-gray-100 text-gray-900 dark:bg-slate-800  dark:text-white;
}
</style>

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
			<NuxtLoadingIndicator />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
body {
	@apply bg-gray-100 text-gray-900 dark:bg-slate-800  dark:text-white;
}

/* we will explain what these classes do next! */
/* .page-enter-active,
.page-leave-active {
	transition: opacity 1s ease;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
} */
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
}
</style>

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

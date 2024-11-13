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
		return titleChunck ? `${titleChunck} - Ahmed-portfolio` : `Ahmed-portfolio`;
	},
});
</script>
<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

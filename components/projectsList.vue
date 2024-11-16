<script setup lang="ts">
useHead({
	title: "projects page list",
	meta: [
		{
			name: "description",
			content:
				"Explore a curated list of development projects uploaded to GitHub, showcasing a range of coding skills, frameworks, and technologies.",
		},
	],
});

const { data, status, error } = await useFetch<any>("https://api.github.com/users/ahmed322/repos");

// watch for errors
watch(error, () => {
	if (error.value) {
		throw createError({ statusCode: 500, statusMessage: "Error fetching data from GitHub API." });
	}
});

// get only the repos that have a description
let repos = computed(() => data.value?.filter((repo: any) => repo.description));
</script>
<template>
	<div v-if="status === 'pending'">Loading...</div>
	<div v-else-if="status === 'error'">Error: Try Again!</div>
	<div v-if="data">
		<ul class="grid grid-cols-1 gap-4">
			<li
				v-for="repo in repos"
				:key="repo.id"
				class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 transition-all duration-300 font-mono"
			>
				<NuxtLink :to="repo.html_url" target="_blank">
					<div class="flex items-center justify-between">
						<div class="font-semibold text-sm">{{ repo.name }}</div>
						<div class="">{{ repo.stargazers_count }} ★</div>
					</div>
					<div class="text-sm text-gray-600 c">{{ repo.description }}</div>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

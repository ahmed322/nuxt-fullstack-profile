<script setup lang="ts">
// fetch blog list from content folder
const { data: blogList } = await useAsyncData("blog-list", () => {
	return queryContent("/blog")
		.sort({ publisheYear: -1 })
		.only(["title", "_path", "id", "publisheYear"])
		.find();
});
</script>
<template>
	<section class="mono not-prose">
		<div class="column text-sm text-gray-400">
			<div>date</div>
			<div>time</div>
		</div>
		<ul>
			<li
				v-for="blog in blogList"
				:key="blog._path"
				class="transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
			>
				<NuxtLink :to="blog._path" class="column">
					<div class="text-gray-500">{{ blog.publisheYear }}</div>
					<div>{{ blog.title }}</div>
				</NuxtLink>
			</li>
		</ul>
	</section>
</template>

<style scoped>
.column {
	@apply flex items-center space-x-8  py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>

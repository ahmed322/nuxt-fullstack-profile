<script setup lang="ts">
const route = useRoute();
</script>
<template>
	<article>
		<div>Page: blog/id</div>
		<div>
			{{ route.params.id }}
			{{ route.query.name }}
		</div>
	</article>
</template>

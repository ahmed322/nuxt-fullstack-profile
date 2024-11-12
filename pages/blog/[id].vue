<script setup lang="ts">
const route = useRoute();
</script>
<template>
	<div>Page: blog/id</div>
	<div>
		{{ route.params.id }}
		<br />
		{{ route.query.name }}
	</div>
</template>

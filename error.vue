<template>
	<NuxtLayout>
		<h1 class="text-center text-3xl font-bold">
			{{ error.statusMessage }}
		</h1>
		<p class="text-center">
			{{ error.statusCode }}
		</p>
	</NuxtLayout>
</template>

<script setup>
defineProps({ error: Object });
</script>

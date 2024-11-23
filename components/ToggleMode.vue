<script setup lang="ts">
// set the color mode
const toggleColorMode = () => {
	useColorMode().preference = useColorMode().preference === "light" ? "dark" : "light";
};

// get the current color mode
const colorMode = computed(() => {
	const mode = useColorMode().preference;
	if (mode === "dark") {
		return "light";
	} else {
		return "dark";
	}
});
</script>

<template>
	<div @click="toggleColorMode">
		<ul>
			<li
				v-if="colorMode === 'light'"
				class="cursor-pointer transition duration-500 ease-in-out hover:rotate-45 p-2"
			>
				☀️
			</li>

			<li
				v-else
				class="cursor-pointer transition duration-500 ease-in-out p-2 rotate-90 hover:rotate-45"
			>
				🌙
			</li>
		</ul>
	</div>
</template>

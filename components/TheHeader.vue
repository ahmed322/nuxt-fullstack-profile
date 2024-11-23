<template>
  <header class="flex items-center justify-between h-16 mb-6">
    <NuxtLink to="/" class="link font-semibold">AHMED</NuxtLink>
    <nav>
      <ul class="flex items-center space-x-4 font-mono">
        <li><NuxtLink to="/about" class="link">About</NuxtLink></li>
        <li><NuxtLink to="/" class="link">Home</NuxtLink></li>
        <li><NuxtLink to="/projects" class="link">Projects</NuxtLink></li>
      </ul>
    </nav>
    <ClientOnly>
      <ToggleMode />
    </ClientOnly>
  </header>
</template>
<style scoped>
.link {
  @apply hover:bg-gray-200 p-1 transition duration-300 rounded-sm;
}
</style>

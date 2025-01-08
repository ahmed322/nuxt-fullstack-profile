<script setup lang="ts">
let route = useRoute();




</script>
<template>
	<div class="relative">
		<article class="prose grid max-w-none grid-cols-12 gap-4 dark:prose-invert">
			<ContentDoc v-slot="{ doc }">
				<section class="col-span-9">
					<ContentRenderer :value="doc" />
				</section>
				<aside class="not-prose sticky top-6 col-span-3 h-fit p-1" v-if="doc.body.toc.links">
					<ul>
						<li v-for="header in doc.body.toc.links" :key="header.id">
							<NuxtLink
								:to="{ path: route.path, hash: `#${header.id}` }"
								class="no-underline hover:text-gray-500"
							>
								{{ header.text }}

								<li v-if="header.children" v-for="child in header.children">
									<NuxtLink
										:to="{ path: child.path, hash: `# ${child.id}` }"
										class="ml-4 no-underline"
									>
										{{ child.text }}
									</NuxtLink>
								</li>
							</NuxtLink>
						</li>
					</ul>
				</aside>
			</ContentDoc>
		</article>
	</div>
</template>

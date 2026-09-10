<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href: string
}>()

const isRouteLink = computed(() => props.href.startsWith('/'))
</script>

<template>
  <NuxtLink v-if="isRouteLink" class="navigation-item" :to="href">
    <slot />
  </NuxtLink>

  <a v-else class="navigation-item" :href="href">
    <slot />
  </a>
</template>

<style scoped>
.navigation-item {
  display: inline-block;
  padding: 0.5rem;
  text-decoration: none;
  font-weight: 700;
}

.navigation-item:hover {
  text-decoration: underline;
}
</style>

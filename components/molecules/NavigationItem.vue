<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a class="navigation-item" :href="href">
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

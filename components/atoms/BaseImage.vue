<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    eager?: boolean
  }>(),
  {
    eager: false
  }
)
</script>

<template>
  <img
    class="base-image"
    :src="src"
    :alt="alt"
    :loading="eager ? 'eager' : 'lazy'"
    decoding="async"
  />
</template>

<style scoped>
.base-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

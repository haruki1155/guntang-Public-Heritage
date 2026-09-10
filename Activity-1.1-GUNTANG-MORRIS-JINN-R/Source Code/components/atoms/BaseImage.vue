<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    eager?: boolean
  }>(),
  {
    eager: false
  }
)

const config = useRuntimeConfig()

const resolvedSrc = computed(() => {
  // Leave absolute URLs and already-prefixed paths untouched.
  if (/^(?:[a-z]+:)?\/\//i.test(props.src)) {
    return props.src
  }

  const base = config.app.baseURL.replace(/\/$/, '')
  if (!base || props.src.startsWith(base)) {
    return props.src
  }

  return `${base}${props.src}`
})
</script>

<template>
  <img
    class="base-image"
    :src="resolvedSrc"
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

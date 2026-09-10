<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: ''
  }
)
</script>

<template>
  <span
    class="base-icon"
    :aria-hidden="label ? undefined : 'true'"
    :aria-label="label || undefined"
  >
    <slot />
  </span>
</template>

<style scoped>
.base-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 1.125rem;
  block-size: 1.125rem;
  color: currentColor;
  flex: 0 0 auto;
}

.base-icon :deep(svg) {
  inline-size: 100%;
  block-size: 100%;
}
</style>

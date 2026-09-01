<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    type: 'button'
  }
)
</script>

<template>
  <button class="base-button" :type="type">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  min-height: 44px;
  padding: 0.75rem 1.25rem;
  border: 0;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.base-button:hover {
  background: var(--color-primary-dark);
}

.base-button:active {
  transform: translateY(1px);
}
</style>

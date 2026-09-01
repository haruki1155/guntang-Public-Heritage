<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    tone?: 'default' | 'muted' | 'accent'
  }>(),
  {
    as: 'p',
    tone: 'default'
  }
)
</script>

<template>
  <component :is="as" class="base-typography" :class="`base-typography--${tone}`">
    <slot />
  </component>
</template>

<style scoped>
.base-typography {
  margin-top: 0;
}

.base-typography--muted {
  color: var(--color-muted);
}

.base-typography--accent {
  color: var(--color-primary);
}
</style>

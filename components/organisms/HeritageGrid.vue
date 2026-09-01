<script setup lang="ts">
import type { Destination } from '~~/data/destinations'

defineProps<{
  destinations: Destination[]
}>()
</script>

<template>
  <div class="heritage-grid">
    <HeritageCard
      v-for="destination in destinations"
      :key="destination.title"
      :title="destination.title"
      :location="destination.location"
      :description="destination.description"
      :image="destination.image"
      :image-alt="destination.imageAlt"
    />
  </div>
</template>

<style scoped>
.heritage-grid {
  container-type: inline-size;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}

@container (min-width: 40rem) {
  .heritage-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 64rem) {
  .heritage-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<script setup lang="ts">
defineProps<{
  title: string
  location: string
  description: string
  image: string
  imageAlt: string
}>()
</script>

<template>
  <article class="heritage-card surface-card">
    <div class="heritage-card__image">
      <BaseImage :src="image" :alt="imageAlt" />
    </div>

    <div class="heritage-card__content">
      <div class="heritage-card__location">
        <BaseIcon>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21s6-5.373 6-11a6 6 0 1 0-12 0c0 5.627 6 11 6 11Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.75"
            />
            <circle cx="12" cy="10" r="2.25" fill="currentColor" />
          </svg>
        </BaseIcon>
        <span>{{ location }}</span>
      </div>

      <h3>{{ title }}</h3>
      <BaseTypography>{{ description }}</BaseTypography>
    </div>
  </article>
</template>

<style scoped>
.heritage-card {
  overflow: hidden;
}

.heritage-card__image {
  aspect-ratio: 16 / 10;
}

.heritage-card__content {
  padding: var(--space-3);
}

.heritage-card__location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.25rem;
  color: var(--color-primary);
  font-weight: 700;
}

h3 {
  margin: 0 0 0.5rem;
}

.base-typography {
  margin-bottom: 0;
}
</style>

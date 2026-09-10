<script setup lang="ts">
import { destinations } from '~~/data/destinations'

const route = useRoute()
const destination = destinations.find((item) => item.slug === route.params.slug)

if (!destination) {
  throw createError({ statusCode: 404, statusMessage: 'Destination not found' })
}

useHead(() => ({
  title: destination ? `${destination.title} | Pangasinan Heritage` : 'Destination not found',
  meta: destination
    ? [{ name: 'description', content: destination.description }]
    : []
}))
</script>

<template>
  <div>
    <HeaderNavigation />

    <main id="main-content" v-if="destination">
      <section class="detail-hero">
        <div class="container">
          <NuxtLink class="back-link" to="/#destinations">← Back to destinations</NuxtLink>
          <div class="detail-hero__content">
            <div>
              <p class="eyebrow">{{ destination.location }}</p>
              <h1>{{ destination.title }}</h1>
              <BaseTypography class="detail-hero__summary" tone="muted">
                {{ destination.description }}
              </BaseTypography>
            </div>
            <div class="detail-hero__image surface-card">
              <BaseImage :src="destination.image" :alt="destination.imageAlt" eager />
            </div>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="about-destination-title">
        <div class="container detail-copy">
          <p class="eyebrow">About this destination</p>
          <h2 id="about-destination-title" class="section-title">A place worth discovering</h2>
          <BaseTypography tone="muted">{{ destination.details }}</BaseTypography>
          <NuxtLink class="detail-action" to="/#destinations">Explore more destinations</NuxtLink>
        </div>
      </section>
    </main>

    <footer class="site-footer"><div class="container"><p>&copy; Pangasinan Heritage Digital Showcase</p></div></footer>
  </div>
</template>

<style scoped>
.detail-hero { padding-block: var(--space-4) var(--space-5); background: linear-gradient(180deg, var(--color-surface), #fff); }
.back-link { display: inline-block; margin-bottom: var(--space-4); color: var(--color-primary); font-weight: 700; text-decoration: none; }
.detail-hero__content { display: grid; gap: var(--space-4); align-items: center; }
h1 { max-width: 16ch; margin: 0; font-size: clamp(2.25rem, 6vw, 4.5rem); line-height: 1.05; }
.detail-hero__summary { max-width: 40rem; margin-top: var(--space-3); font-size: 1.1rem; }
.detail-hero__image { aspect-ratio: 16 / 10; overflow: hidden; }
.detail-copy { max-width: 48rem; }
.detail-copy .base-typography { margin-block: var(--space-2) var(--space-3); font-size: 1.1rem; }
.detail-action { display: inline-block; padding: 0.75rem 1.25rem; border-radius: var(--radius-sm); background: var(--color-primary); color: #fff; font-weight: 700; text-decoration: none; }
.site-footer { padding-block: var(--space-3); background: var(--color-text); color: #fff; }
.site-footer p { margin: 0; }
@media (min-width: 48rem) { .detail-hero__content { grid-template-columns: 1fr 1.05fr; } }
</style>

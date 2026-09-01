<script setup lang="ts">
import { computed, ref } from 'vue'
import { destinations } from '~~/data/destinations'

const search = ref('')

const filteredDestinations = computed(() => {
  const query = search.value.trim().toLowerCase()

  if (!query) {
    return destinations
  }

  return destinations.filter((destination) => {
    return (
      destination.title.toLowerCase().includes(query) ||
      destination.location.toLowerCase().includes(query)
    )
  })
})

const highlightStats = [
  { label: 'Featured destinations', value: '5' },
  { label: 'Responsive breakpoints', value: '3' },
  { label: 'Atomic design levels', value: '3' }
]

useHead({
  title: 'Pangasinan Heritage Digital Showcase',
  meta: [
    {
      name: 'description',
      content:
        'Discover selected heritage and tourist destinations in Pangasinan through a fast, accessible, and mobile-friendly digital showcase.'
    }
  ]
})
</script>

<template>
  <div id="top">
    <HeaderNavigation />

    <main id="main-content">
      <section class="hero" aria-labelledby="hero-title">
        <div class="container hero__layout">
          <div>
            <p class="eyebrow">Explore Pangasinan</p>
            <h1 id="hero-title">Discover the beauty and heritage of Pangasinan</h1>
            <BaseTypography class="hero__description" tone="muted">
              Explore selected destinations that showcase the province&apos;s natural beauty,
              culture, and heritage.
            </BaseTypography>

            <a class="hero__action" href="#destinations">
              Explore destinations
            </a>
          </div>

          <div class="hero__panel surface-card" aria-label="Showcase highlights">
            <ul class="hero__stats">
              <li v-for="stat in highlightStats" :key="stat.label">
                <span class="hero__stat-value">{{ stat.value }}</span>
                <span class="hero__stat-label">{{ stat.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="destinations"
        class="section"
        aria-labelledby="destinations-title"
      >
        <div class="container">
          <p class="eyebrow">Featured places</p>
          <h2 id="destinations-title" class="section-title">Destinations</h2>

          <div class="search-wrapper">
            <SearchForm v-model="search" />
          </div>

          <HeritageGrid :destinations="filteredDestinations" />

          <p v-if="filteredDestinations.length === 0" class="empty-state" role="status">
            No destinations match your search.
          </p>
        </div>
      </section>

      <section id="about" class="section section--surface" aria-labelledby="about-title">
        <div class="container about">
          <div>
            <p class="eyebrow">About the showcase</p>
            <h2 id="about-title" class="section-title">A lightweight tourism experience</h2>
          </div>

          <BaseTypography tone="muted">
            The Pangasinan Heritage Digital Showcase is a small Nuxt project designed to
            present selected destinations through a mobile-first, maintainable, and
            accessible interface that can be generated as a static site.
          </BaseTypography>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <p>&copy; Pangasinan Heritage Digital Showcase</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.hero {
  padding-block: var(--space-6);
  background:
    radial-gradient(circle at top left, rgba(230, 184, 74, 0.2), transparent 30%),
    linear-gradient(180deg, var(--color-surface), #fff);
}

.hero__layout {
  display: grid;
  gap: var(--space-3);
  align-items: center;
}

.hero h1 {
  max-width: 18ch;
  margin: 0;
  font-size: clamp(2rem, 7vw, 4.5rem);
  line-height: 1.05;
}

.hero__description {
  max-width: 42rem;
  margin-block: 1rem 1.5rem;
}

.hero__action {
  display: inline-block;
  min-height: 44px;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.hero__panel {
  padding: var(--space-3);
  background: linear-gradient(180deg, #fff, var(--color-surface));
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: var(--space-2);
  padding: 0;
  margin: 0;
  list-style: none;
}

.hero__stats li {
  padding: var(--space-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: #fff;
}

.hero__stat-value {
  display: block;
  color: var(--color-primary);
  font-size: 1.75rem;
  font-weight: 800;
}

.hero__stat-label {
  color: var(--color-muted);
}

.section {
  padding-block: var(--space-5);
}

.section--surface {
  background: var(--color-surface);
}

.search-wrapper {
  max-width: 42rem;
  margin-block: var(--space-3);
}

.empty-state {
  margin-top: var(--space-3);
}

.about {
  display: grid;
  gap: var(--space-3);
}

.site-footer {
  padding-block: var(--space-3);
  background: var(--color-text);
  color: #fff;
}

.site-footer p {
  margin: 0;
}

@media (min-width: 64rem) {
  .hero__layout,
  .about {
    grid-template-columns: 1.3fr 1fr;
  }
}
</style>

<script setup lang="ts">
import { destinations } from '~~/data/destinations'

useHead({
  title: 'Component Showcase | Pangasinan Heritage Digital Showcase',
  meta: [
    {
      name: 'description',
      content: 'Component showcase page used to document the Pangasinan Heritage atomic design system.'
    }
  ]
})
</script>

<template>
  <div>
    <HeaderNavigation />

    <main id="main-content" class="showcase">
      <div class="container">
        <p class="eyebrow">Atomic Design Manual Preview</p>
        <h1 class="section-title">Component Showcase</h1>
        <BaseTypography tone="muted" class="intro">
          This page presents each required atom, molecule, and organism for clean
          documentation screenshots and manual references.
        </BaseTypography>

        <section class="showcase-section" aria-labelledby="atoms-title">
          <h2 id="atoms-title">Atoms</h2>

          <div class="showcase-grid">
            <article id="preview-button" class="surface-card showcase-card">
              <h3>Button</h3>
              <BaseButton>Explore</BaseButton>
            </article>

            <article id="preview-typography" class="surface-card showcase-card">
              <h3>Typography</h3>
              <BaseTypography as="p">
                Mobile-first readable text for tourism storytelling.
              </BaseTypography>
            </article>

            <article id="preview-colors" class="surface-card showcase-card">
              <h3>Color Tokens</h3>
              <ul class="swatches">
                <li><span class="swatch swatch--primary" /> Primary</li>
                <li><span class="swatch swatch--accent" /> Accent</li>
                <li><span class="swatch swatch--surface" /> Surface</li>
              </ul>
            </article>

            <article id="preview-icon" class="surface-card showcase-card">
              <h3>Icon</h3>
              <BaseIcon label="Location pin">
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
            </article>

            <article id="preview-image" class="surface-card showcase-card">
              <h3>Image</h3>
              <div class="image-preview">
                <BaseImage
                  src="/images/hundred-islands.jpg"
                  alt="Hundred Islands National Park for showcase preview"
                  eager
                />
              </div>
            </article>
          </div>
        </section>

        <section class="showcase-section" aria-labelledby="molecules-title">
          <h2 id="molecules-title">Molecules</h2>

          <div class="showcase-grid showcase-grid--wide">
            <article id="preview-heritage-card" class="surface-card showcase-card">
              <h3>Heritage Card</h3>
              <HeritageCard v-bind="destinations[0]" />
            </article>

            <article id="preview-search-form" class="surface-card showcase-card">
              <h3>Search Form</h3>
              <SearchForm />
            </article>

            <article id="preview-navigation-item" class="surface-card showcase-card">
              <h3>Navigation Item</h3>
              <NavigationItem href="#atoms-title">Jump to atoms</NavigationItem>
            </article>
          </div>
        </section>

        <section class="showcase-section" aria-labelledby="organisms-title">
          <h2 id="organisms-title">Organisms</h2>

          <div class="showcase-grid showcase-grid--full">
            <article id="preview-header-navigation" class="surface-card showcase-card">
              <h3>Header Navigation</h3>
              <div class="organism-preview">
                <HeaderNavigation />
              </div>
            </article>

            <article id="preview-heritage-grid" class="surface-card showcase-card">
              <h3>Heritage Grid</h3>
              <HeritageGrid :destinations="destinations" />
            </article>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
.showcase {
  padding-block: var(--space-5);
}

.intro {
  max-width: 48rem;
  margin-bottom: var(--space-4);
}

.showcase-section + .showcase-section {
  margin-top: var(--space-5);
}

.showcase-grid {
  display: grid;
  gap: var(--space-3);
}

.showcase-card {
  padding: var(--space-3);
}

.swatches {
  display: grid;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.swatches li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.swatch {
  inline-size: 2.5rem;
  block-size: 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
}

.swatch--primary {
  background: var(--color-primary);
}

.swatch--accent {
  background: var(--color-accent);
}

.swatch--surface {
  background: var(--color-surface);
}

.image-preview {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-sm);
}

.organism-preview {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

@media (min-width: 48rem) {
  .showcase-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .showcase-grid--wide,
  .showcase-grid--full {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 72rem) {
  .showcase-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>

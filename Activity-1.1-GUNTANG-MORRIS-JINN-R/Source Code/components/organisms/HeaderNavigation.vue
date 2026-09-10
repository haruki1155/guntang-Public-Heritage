<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="brand" href="/#top">
        <BaseIcon>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.75"
            />
            <path
              d="M9.5 12.5 11 14l4-4"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.75"
            />
          </svg>
        </BaseIcon>
        <span>Pangasinan Heritage</span>
      </a>

      <nav aria-label="Main navigation">
        <ul class="nav-list">
          <li><NavigationItem href="/#top">Home</NavigationItem></li>
          <li><NavigationItem href="/#destinations">Destinations</NavigationItem></li>
          <li><NavigationItem href="/#about">About</NavigationItem></li>
          <li><NavigationItem href="/showcase">Showcase</NavigationItem></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  container-type: inline-size;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
}

.site-header__inner {
  padding-block: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--color-primary);
  font-size: 1.15rem;
  font-weight: 800;
  text-decoration: none;
}

.nav-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0;
  margin: 0.5rem 0 0;
  list-style: none;
}

@container (min-width: 48rem) {
  .site-header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-list {
    margin-top: 0;
  }
}
</style>

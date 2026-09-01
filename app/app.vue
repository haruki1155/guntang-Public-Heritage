<template>
  <div>
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--color-accent)" />
    <NuxtPage />
  </div>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1000;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--color-text);
  color: #fff;
  text-decoration: none;
  transform: translateY(-200%);
}

.skip-link:focus {
  transform: translateY(0);
}
</style>

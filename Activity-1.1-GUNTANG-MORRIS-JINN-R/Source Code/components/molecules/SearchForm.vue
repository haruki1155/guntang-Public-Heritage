<script setup lang="ts">
const model = defineModel<string>({
  default: ''
})
</script>

<template>
  <form class="search-form" role="search" @submit.prevent>
    <label for="heritage-search">Search destinations</label>

    <div class="search-form__controls">
      <input
        id="heritage-search"
        v-model="model"
        type="search"
        placeholder="Search destinations..."
      />

      <BaseButton type="submit">Search</BaseButton>
    </div>
  </form>
</template>

<style scoped>
.search-form {
  display: grid;
  gap: 0.5rem;
}

.search-form__controls {
  display: grid;
  gap: 0.75rem;
}

label {
  font-weight: 700;
}

input {
  width: 100%;
  min-height: 44px;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

@media (min-width: 40rem) {
  .search-form__controls {
    grid-template-columns: 1fr auto;
  }
}
</style>

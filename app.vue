<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
body, html {
  min-height: 100%;
}

.app-container {
  @apply mx-auto;
}
</style>

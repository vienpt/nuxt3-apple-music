<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://js-cdn.music.apple.com/musickit/v3/musickit.js',
      async: true,
      ['data-web-components']: ''
    }
  ],
})
</script>

<style lang="postcss">
body, html {
  min-height: 100%;
}

.app-container {
  @apply mx-auto;
}
</style>

<template>
  <header class="p-1 bg-gray-800 h-[55px]">
    <div class="header h-full mx-10">
      <div class="flex justify-center">playing</div>
      <div class="flex justify-center">song name/play</div>
      <div class="flex justify-between">
        <div class="inline-block">volumn/account</div>
        <div>user</div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    place-content: center;
    //place-items: center;
  }
</style>

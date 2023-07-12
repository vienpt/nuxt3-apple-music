<template>
  <div class="main">
    <!-- left sidebar -->
    <Nav></Nav>

    <!-- right main -->
    <div class="main-section">
      <!-- main header -->
      <TheHeader></TheHeader>
      <!-- main content -->
      <main class="main-section_container overflow-y-auto">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { employees } from "@/data.ts"

// console.log('employee', employees)
</script>

<style lang="postcss">
  .main {
    display: grid;
    grid-template-columns: fit-content(260px) minmax(0, 1fr);
    height: 100vh;
    overflow: hidden;
  }

  .main-section {
    display: grid;
    grid-template-rows: auto 1fr;
    //overflow-y: scroll;

    &_container {
      @apply px-10 pb-20;
    }
  }
</style>

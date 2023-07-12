<template>
  <div class="main">
    <!-- left sidebar -->
    <Nav></Nav>
    <!-- right main -->
    <div class="main-section">
      <!-- main header -->
      <TheHeader></TheHeader>
      <!-- main content -->
      <main class="main-section_container">
        <slot></slot>
      </main>
      <!-- main footer -->
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<style lang="postcss">
  .main {
    display: grid;
    grid-template-columns: fit-content(260px) minmax(0, 1fr);
    height: 100vh;
    overflow: hidden;
  }

  .main-section {
    @apply grid;

    &_container {
      @apply px-20;
    }
  }
</style>

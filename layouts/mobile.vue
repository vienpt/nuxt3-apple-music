<template>
  <div class="px-8">
    <header>
      <TheHeader />
    </header>
    <div class="main-section">
      <main class="container">
        <slot></slot>
      </main>
    </div>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

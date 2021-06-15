<template>
  <section class="card">
    <slot></slot>
  </section>
</template>

<style lang="scss">
.card {
  padding: 20px;
  border-radius: 20px;
}

@media (min-width: 600px) {
  .card {
    padding: 40px;
    width: 600px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  }
}
</style>

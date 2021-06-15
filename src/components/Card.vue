<template>
  <section class="card">
    <slot></slot>
  </section>
</template>

<style lang="scss">
.card {
  width: 600px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
</style>

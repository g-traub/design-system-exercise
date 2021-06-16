<template>
  <h2 class="subheading">
    <slot></slot>
  </h2>
</template>

<style lang="scss">
@import "../../../assets/scss/utils/vars/typography";

.subheading {
  @include text-subheading;
}
</style>

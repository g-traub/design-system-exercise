<template>
  <p class="text">
    <slot></slot>
  </p>
</template>

<style lang="scss">
@import "../../../assets/scss/utils/vars/typography";

.subheading {
  @include text-body;
}
</style>

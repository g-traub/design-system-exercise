<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<style lang="scss">
@import "../../../assets/scss/utils/vars/typography";

.title {
  @include text-heading--l;
}
</style>

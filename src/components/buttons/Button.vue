<template>
  <button class="button button__color--blue">{{ text }}</button>
</template>

<style lang="scss">
@import "../../assets/scss/utils/vars/colors";
@import "../../assets/scss/utils/vars/typography";

.button {
  @include text-button;

  border: none;
  height: 50px;
  padding: 15px 25px;
  border-radius: 5px;

  &:hover {
    background-color: $primary--dark;
  }

  &:focus {
    background-color: $primary;
    box-shadow: 0 0 1px 3px rgba(64, 125, 208, 0.35);
  }

  &:disabled {
    background-color: $primary--light;
  }

  &__color {
    &--blue {
      background-color: $primary;
      color: $text--light;
    }
  }
}
</style>

<script>
export default {
  props: ["text"],
};
</script>

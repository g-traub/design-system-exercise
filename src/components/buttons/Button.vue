<template>
  <div>
    <button :class="buttonInterface" :disabled="disabled">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    interface: { type: String, required: true },
    disabled: { type: Boolean },
  },
  computed: {
    buttonInterface() {
      return `button button__style--${this.interface}`;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/utils/vars/colors";
@import "../../assets/scss/utils/vars/typography";

.button {
  @include text-button;

  height: 50px;
  padding: 15px 25px;
  border-radius: 5px;
  margin: 5px;
  transition: 0.2s all;

  &__style {
    &--outline {
      border: 1px solid $grey--medium;
      color: $primary;
      background-color: white;

      &:hover {
        border-color: $primary;
      }

      &:focus {
        box-shadow: 0 0 1px 3px rgba(64, 125, 208, 0.35);
      }

      &:disabled {
        border: 1px solid $grey--medium;
        color: $primary--light;
      }
    }

    &--fill {
      border: none;
      background-color: $primary;
      color: $text--light;

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
    }
  }
}
</style>

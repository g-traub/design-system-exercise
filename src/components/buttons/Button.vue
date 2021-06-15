<template>
  <button :class="buttonInterface" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: true,
      validator: (value) => value === "primary" || value === "secondary",
    },
    disabled: { type: Boolean },
  },
  computed: {
    buttonInterface() {
      return `button button__style--${this.variant}`;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/utils/vars/colors";
@import "../../assets/scss/utils/vars/typography";

.button {
  @include text-button;

  padding: 15px 25px;
  border-radius: 5px;
  transition: 0.2s all;

  &__style {
    &--secondary {
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

    &--primary {
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

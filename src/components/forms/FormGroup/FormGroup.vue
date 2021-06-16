<template>
  <fieldset class="formGroup">
    <label class="formGroup__label" :for="labelFor">{{ label }}</label>
    <div>
      <slot></slot>
      <small v-if="feedback" :class="feedbackClasses">{{ feedback }}</small>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    feedback: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    labelFor: {
      type: String,
      default: null,
    },
    state: {
      default: null,
      validator: (value) => typeof value === "boolean" || value === null,
    },
  },
  computed: {
    feedbackClasses() {
      const classes = ["formGroup__feedback"];
      if (this.state === false) {
        classes.push("formGroup__feedback--invalid");
      } else if (this.state === true) {
        classes.push("formGroup__feedback--valid");
      }

      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils/vars/typography";
@import "../../../assets/scss/utils/vars/colors";
@import "../../../assets/scss/utils/vars/spacing";

.formGroup {
  &__feedback {
    display: inline-block;
    @include text-small;
    color: $text--medium;
    margin-top: $spacer--1;
    &--invalid {
      color: $danger;
    }

    &--valid {
      color: $success;
    }
  }

  &__label {
    display: inline-block;
    @include text-body--bold;
    color: $text--dark;
    margin-bottom: $spacer--1;
  }
}
</style>

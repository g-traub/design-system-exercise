<template>
  <div class="container">
    <input
      :id="$attrs.id"
      :class="inputClasses"
      :value="modelValue"
      :type="inputType"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      :aria-required="required"
      :aria-disabled="disabled"
      :aria-invalid="isInputInvalid"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="icon-container">
      <slot name="icon">
        <VIcon class="icon" :name="iconName" :size="18" />
      </slot>
    </div>
  </div>
</template>

<script>
// Limited to these inputs for now,
// need to add other props for some types (number, range...)
const TYPES = ["text", "password", "email", "url", "search"];

export default {
  name: "FormInput",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    state: {
      default: null,
      validator: (value) => typeof value === "boolean" || value === null,
    },
    required: Boolean,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
      validator: (value) => TYPES.includes(value),
    },
    iconRight: {
      type: String,
      default: null,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    inputClasses() {
      const classes = ["form-input"];

      if (this.iconRight) {
        classes.push("form-input--hasIcon");
      }
      return classes;
    },
    isInputInvalid() {
      if (this.state === false) {
        return true;
      } else if (this.state === true) {
        return false;
      } else {
        return null;
      }
    },
    iconName() {
      if (this.iconRight) {
        return this.iconRight;
      }
      if (this.isInputInvalid === true) {
        return "alert-circle";
      }
      if (this.isInputInvalid === false) {
        return "check";
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils/vars/spacing";
@import "../../../assets/scss/utils/vars/colors";
@import "../../../assets/scss/utils/vars/typography";

@use "sass:color";

.container {
  position: relative;
  display: flex;
  min-width: 200px;
  max-width: 320px;
}

.icon-container {
  position: absolute;
  right: $spacer--2;
  top: 50%;
  transform: translateY(-50%);
}

.form-input {
  @include text-body;

  flex: 1;
  height: 42px;
  min-width: 200px;

  border: 1px solid $grey--medium;
  border-radius: 5px;
  padding: $spacer--2;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 1px 3px transparentize($primary, 0.65);
    border: 1px solid $primary;
  }

  &:disabled {
    border: 1px solid $grey--medium;
    background-color: $grey--light;
  }

  &[aria-invalid="true"] {
    border: 1px solid $danger;
    &:focus {
      box-shadow: 0px 0px 1px 3px transparentize($danger, 0.65);
    }
    & + .icon {
      color: $danger;
    }
  }

  &[aria-invalid="false"] {
    border: 1px solid $success;
    &:focus {
      box-shadow: 0px 0px 1px 3px transparentize($success, 0.65);
    }
    & + .icon {
      color: $success;
    }
  }

  &--hasIcon {
    padding-right: $spacer--6;

    & + .icon.icon {
      color: $grey--dark;
    }
  }
}
</style>

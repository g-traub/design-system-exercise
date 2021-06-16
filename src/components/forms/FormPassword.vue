<template>
  <FormInput
    :model-value="modelValue"
    :state="state"
    :required="required"
    :disabled="disabled"
    :input-type="inputType"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template #icon>
      <VIcon
        class="icon--clickable"
        :name="iconName"
        :size="18"
        @click="togglePasswordVisibility"
      />
    </template>
  </FormInput>
</template>

<script>
import FormInput from "@/components/forms/FormInput.vue";

export default {
  name: "FormPassword",
  components: {
    FormInput,
  },
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
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isPasswordVisible: false,
    };
  },
  computed: {
    iconName() {
      return this.isPasswordVisible ? "eye-off" : "eye";
    },
    inputType() {
      return this.isPasswordVisible ? "text" : "password";
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils/vars/colors";

.icon {
  color: $grey--dark;
  &:hover {
    color: $black;
  }
}
</style>

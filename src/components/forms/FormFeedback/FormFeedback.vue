<template>
  <section class="validator">
    <VIcon
      v-if="valid"
      name="check"
      size="20"
      class="validator--correct"
    ></VIcon>
    <VIcon
      v-else
      name="alert-circle"
      size="20"
      class="validator--incorrect"
    ></VIcon>

    <article class="validator__content">
      <slot></slot>
    </article>
  </section>
</template>

<style lang="scss">
@import "../../../assets/scss/utils/vars/colors";

.validator {
  display: flex;
  align-items: center;

  &__content {
    margin-left: 5px;
  }

  &--correct {
    color: $success;
  }

  &--incorrect {
    color: $danger;
  }
}
</style>

<script>
import VIcon from "@/components/VIcon/VIcon";
export default {
  components: { VIcon },
  props: {
    valid: { type: Boolean, required: true },
  },
};
</script>

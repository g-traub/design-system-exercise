<template>
  <router-link class="link" :to="to">
    <div class="link__content">
      <VIcon :name="iconLeft" stroke-width="3"></VIcon>
      <slot></slot>
      <VIcon :name="iconRight" stroke-width="3"></VIcon>
    </div>
  </router-link>
</template>

<script>
import VIcon from "@/components/VIcon";
export default {
  components: { VIcon },
  props: {
    to: { type: String, default: null },
    // target: { type: String, default: null },
    iconLeft: { type: String, default: null },
    iconRight: { type: String, default: null },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/utils/vars/colors";
@import "../../../assets/scss/utils/vars/typography";

.link {
  display: flex;
  align-items: center;

  &__content {
    color: $primary;

    &:hover,
    &:visited,
    &:focus {
      color: $primary--dark;
    }
  }

  svg {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>

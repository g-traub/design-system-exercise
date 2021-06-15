<template>
  <a class="link" :href="href" target="_blank">
    <div class="link__content">
      <VIcon :name="iconLeft" stroke-width="3"></VIcon>
      {{ text }}
      <VIcon :name="iconRight" stroke-width="3"></VIcon>
    </div>
  </a>
</template>

<script>
import VIcon from "@/components/VIcon";
export default {
  components: { VIcon },
  props: {
    text: { type: String, required: true },
    href: { type: String, required: true },
    iconLeft: { type: String },
    iconRight: { type: String },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/utils/vars/colors";
@import "../../assets/scss/utils/vars/typography";

.link {
  margin: 5px;
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

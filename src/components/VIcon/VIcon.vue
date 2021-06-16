<template>
  <component
    :is="componentName"
    :size="size"
    :stroke-width="strokeWidth"
  ></component>
</template>

<script>
import icons from "../../assets/icons/icons.json";
import { h } from "vue";

const components = Object.entries(icons).reduce(
  (prev, [currName, currValue]) => {
    return Object.assign(prev, {
      [`icon-${currName}`]: {
        props: ["size", "strokeWidth"],
        render() {
          return h("div", {
            style: { display: "inline-block" },
            innerHTML: toSvg(currValue, {
              width: this.size,
              height: this.size,
              "stroke-width": this.strokeWidth,
            }),
          });
        },
      },
    });
  },
  {}
);

/**
 * Render an icon using it's name
 * It's used globally, so you don't have to import it
 * To color it pass a class to the component, with a "color" attribute
 * NB: size and strokeWidth are optionnal
 *
 * @example
 * <v-icon name="eye" size="12" strokeWidth="1" />
 */
export default {
  name: "VIcon",
  components,
  props: {
    name: {
      type: String,
      default: "",
      validator: (value) => {
        return !value || value in icons;
      },
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    componentName() {
      if (this.name) {
        return `icon-${this.name}`;
      } else {
        return null;
      }
    },
  },
};

function toSvg(svgString, attrs) {
  const combinedAttrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" ${attrsToString(
    attrs
  )}`;
  return `<svg ${combinedAttrs} >${svgString}</svg>`;
}

function attrsToString(attrs) {
  return Object.keys(attrs)
    .map(function (key) {
      return key + '="' + attrs[key] + '"';
    })
    .join(" ");
}
</script>

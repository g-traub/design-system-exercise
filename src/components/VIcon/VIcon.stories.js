import VIcon from "@/components/VIcon/VIcon";

export default {
  title: "VIcon",
  component: VIcon,
};

const Template = (args) => {
  return {
    components: { VIcon },
    setup: () => {
      return {
        args,
      };
    },
    template:
      '<VIcon :name="args.name" :size="args.size" :stroke-width="args.strokeWidth"></VIcon>',
  };
};

export const VIconContent = Template.bind({});
VIconContent.label = "VIcon";
VIconContent.args = {
  name: "arrow-left",
};

export const VIconStrokeWidthContent = Template.bind({});
VIconStrokeWidthContent.label = "VIcon Stroke Width";
VIconStrokeWidthContent.args = {
  name: "arrow-left",
  strokeWidth: "5",
};

export const VIconSizeContent = Template.bind({});
VIconSizeContent.label = "VIcon Size";
VIconSizeContent.args = {
  name: "arrow-left",
  size: 64,
};

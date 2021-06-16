import Button from "@/components/Actions/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => {
  return {
    components: { Button },
    setup: () => {
      return {
        args,
      };
    },
    template:
      '<Button :variant="args.variant" :disabled="args.disabled">{{args.text}}</button>',
  };
};

export const Primary = Template.bind({});
Primary.label = "Primary button";
Primary.args = {
  variant: "primary",
  text: "Button",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.label = "Primary button disable";
PrimaryDisabled.args = {
  variant: "primary",
  disabled: true,
  text: "Button",
};

export const Secondary = Template.bind({});
Secondary.label = "Primary button";
Secondary.args = {
  variant: "secondary",
  text: "Button",
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.label = "Secondary button disable";
SecondaryDisabled.args = {
  variant: "primary",
  disabled: true,
  text: "Button",
};

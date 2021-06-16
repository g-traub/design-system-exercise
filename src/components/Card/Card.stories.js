import Card from "@/components/Card/Card";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => {
  return {
    components: { Card },
    setup: () => {
      return {
        args,
      };
    },
    template: "<Card>{{args.text}}</Card>",
  };
};

export const CardComponent = Template.bind({});
CardComponent.label = "Card";
CardComponent.args = {
  text: "Hello world !",
};

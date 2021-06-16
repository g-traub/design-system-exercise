import Text from "@/components/texts/Text/Text";

export default {
  title: "Text",
  component: Text,
};

const Template = (args) => {
  return {
    components: { Text },
    setup: () => {
      return {
        args,
      };
    },
    template: "<Text>{{args.text}}</Text>",
  };
};

export const TextContent = Template.bind({});
TextContent.label = "Text";
TextContent.args = {
  text: "The form was successfully submitted",
};

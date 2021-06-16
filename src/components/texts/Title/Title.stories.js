import Title from "@/components/texts/Title/Title";

export default {
  title: "Title",
  component: Title,
};

const Template = (args) => {
  return {
    components: { Title },
    setup: () => {
      return {
        args,
      };
    },
    template: "<Title>{{args.text}}</Title>",
  };
};

export const SubheadingContent = Template.bind({});
SubheadingContent.label = "Title";
SubheadingContent.args = {
  text: "Sign Up",
};

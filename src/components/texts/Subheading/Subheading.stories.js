import Subheading from "@/components/texts/Subheading/Subheading";

export default {
  title: "Subheading",
  component: Subheading,
};

const Template = (args) => {
  return {
    components: { Subheading },
    setup: () => {
      return {
        args,
      };
    },
    template: "<Subheading>{{args.text}}</Subheading>",
  };
};

export const SubheadingContent = Template.bind({});
SubheadingContent.label = "Subheading";
SubheadingContent.args = {
  text: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team",
};

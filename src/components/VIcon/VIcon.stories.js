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
    template: "<VIcon>{{args.text}}</VIcon>",
  };
};

// export const SubheadingContent = Template.bind({});
// SubheadingContent.label = "Subheading";
// SubheadingContent.args = {
//   text: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team",
// };

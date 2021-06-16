import Link from "@/components/Actions/Link/Link";

export default {
  title: "Link",
  component: Link,
};

const Template = (args) => {
  return {
    components: { Link },
    setup: () => {
      return {
        args,
      };
    },
    template:
      '<Link :icon-left="args.iconLeft" :icon-right="args.iconRight" :to="args.to">{{args.text}}</Link>',
  };
};

export const LinkPrimary = Template.bind({});
LinkPrimary.label = "Link";
LinkPrimary.args = {
  text: "Register",
  to: "www.jean.tostivint.dev",
};

export const LinkLeftIcon = Template.bind({});
LinkLeftIcon.label = "Link left icon";
LinkLeftIcon.args = {
  text: "Register",
  to: "www.jean.tostivint.dev",
  iconLeft: "arrow-left",
};

export const LinkRightIcon = Template.bind({});
LinkRightIcon.label = "Link right icon";
LinkRightIcon.args = {
  text: "Register",
  to: "www.jean.tostivint.dev",
  iconRight: "external-link",
};

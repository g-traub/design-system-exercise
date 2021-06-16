import FormFeedback from "./FormFeedback.vue";

export default {
  title: "FormFeedBack",
  component: FormFeedback,
};

const Template = (args) => {
  return {
    components: { FormFeedback },
    setup: () => {
      return {
        args,
      };
    },
    template: '<FormFeedback :valid="args.valid">{{args.text}}</FormFeedback>',
  };
};

export const Valid = Template.bind({});
Valid.label = "Valid";
Valid.args = {
  text: "The form was successfully submitted",
  valid: true,
};

export const Incorrect = Template.bind({});
Incorrect.label = "Incorrect";
Incorrect.args = {
  text: "Incorrect email address and / or password.",
  valid: false,
};

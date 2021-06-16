import FormGroup from "./FormGroup.vue";

export default {
  title: "FormGroup",
  component: FormGroup,
};

const Template = (args) => {
  return {
    components: { FormGroup },
    setup: () => {
      return {
        args,
      };
    },
    template:
      '<FormGroup :state="args.state" :labelFor="args.labelFor" :label="args.label" :feedback="args.feedback">{{args.text}}</FormGroup>',
  };
};

export const Text = Template.bind({});
Text.label = "Text";
Text.args = {
  text: "The form was successfully submitted",
};

export const Feedback = Template.bind({});
Feedback.label = "Feedback";
Feedback.args = {
  feedback: "The form was successfully submitted",
};

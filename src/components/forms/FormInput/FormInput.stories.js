import FormInput from "./FormInput.vue";

export default {
  title: "FormInput",
  component: FormInput,
};

const Template = (args) => {
  return {
    components: { FormInput },
    setup: () => {
      return {
        args,
      };
    },
    template:
      '<FormInput :modelValue="args.modelValue" :state="args.state" :required="args.required" :disabled="args.disabled" :placeholder="args.placeholder" :type="args.type" :iconRight="args.iconRight"></FormInput>',
  };
};

export const Input = Template.bind({});
Input.label = "Input";

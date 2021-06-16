import Button from "@/components/buttons/Button";

export default {
  title: "Components:Button",
  component: Button,
  //👇 Creates specific argTypes with options
  argTypes: {
    propertyA: {
      control: { type: "string" }, // automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ["Another Item One", "Another Item Two", "Another Item Three"],
    },
  },
};

//👇 Some function to demonstrate the behavior
// const someFunction = (valuePropertyA, valuePropertyB) => {
// Makes some computations and returns something
// };

const Template = (args) => {
  //👇 Assigns the function result to a variable
  // const functionResult = someFunction(args.propertyA, args.propertyB);
  console.log(args);
  return {
    components: { Button },
    setup() {
      //👇 The args will now be passed down to the template
      return {
        args,
      };
    },
    template:
      '<Button :variant="args.variant" :disabled="args.disabled">{{args.variant}}</button>',
  };
};

export const Large = Template.bind({});

Large.parameters = {
  controls: { hideNoControlsWarning: true },
};

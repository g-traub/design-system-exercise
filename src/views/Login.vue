<template>
  <section class="page">
    <Card class="page__card card">
      <section class="card__header">
        <Title class="card__header--title">Login</Title>
        <Subheading class="card__header--subheading"
          >A new tool that blends your everyday work apps into one. It's the
          all-in-one workspace for you and your team.
        </Subheading>
        <Link class="card__header--link" to="/signup"
          >Don’t have an account ? Sign up</Link
        >
      </section>

      <form class="card__form">
        <FormGroup label="Email" label-for="email" class="card__form--input">
          <FormInput
            id="email"
            v-model="email"
            input-type="email"
            required
            placeholder="example@email.com"
            :state="isEmailValid"
          ></FormInput>
        </FormGroup>

        <FormGroup
          label="Password"
          label-for="password"
          class="card__form--input"
        >
          <FormPassword
            id="password"
            v-model="password"
            type="password"
            required
          ></FormPassword>
        </FormGroup>

        <Link class="card__form--link" to="/login/reset-password"
          >Don’t remember your password ?</Link
        >
        <Button
          :disabled="!isFormValid"
          variant="primary"
          class="card__form--button"
          >log in</Button
        >
      </form>
    </Card>
  </section>
</template>

<script>
import Card from "@/components/Card/Card";
import Title from "@/components/texts/Title/Title";
import Subheading from "@/components/texts/Subheading/Subheading";
import Link from "@/components/Actions/Link/Link";
import Button from "@/components/Actions/Button/Button";
import FormGroup from "@/components/forms/FormGroup/FormGroup";
import FormInput from "@/components/forms/FormInput/FormInput";
import FormPassword from "@/components/forms/FormPassword";

import { emailValidator } from "@/utils/validation";

export default {
  components: {
    FormInput,
    FormPassword,
    FormGroup,
    Button,
    Link,
    Subheading,
    Title,
    Card,
  },
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isEmailValid() {
      return this.email ? emailValidator(this.email) : null;
    },
    isFormValid() {
      return this.isEmailValid && this.password;
    },
  },
};
</script>

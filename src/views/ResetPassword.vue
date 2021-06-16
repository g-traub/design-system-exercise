<template>
  <section class="page">
    <Card class="page__card card">
      <section class="card__header">
        <Link class="card__header--link" to="/login" icon-left="arrow-left"
          >Login</Link
        >

        <Title class="card__header--title">Reset your password</Title>
        <Subheading class="card__header--subheading"
          >Entrer the email associated with your account and we’ll send you a
          link to reset your password.
        </Subheading>
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

        <Button
          :disabled="!isEmailValid"
          class="card__form--button"
          variant="primary"
          >reset password</Button
        >
      </form>
    </Card>
  </section>
</template>

<script>
import Card from "@/components/Card/Card";
import Title from "@/components/texts/Title/Title";
import Subheading from "@/components/texts/Subheading/Subheading";
import Link from "@/components/actions/Link/Link";
import Button from "@/components/actions/Button/Button";
import FormInput from "@/components/forms/FormInput/FormInput";
import FormGroup from "@/components/forms/FormGroup/FormGroup";

import { emailValidator } from "@/utils/validation";
export default {
  components: { FormInput, FormGroup, Button, Link, Subheading, Title, Card },
  data() {
    return {
      email: "",
    };
  },
  computed: {
    isEmailValid() {
      return this.email ? emailValidator(this.email) : null;
    },
  },
};
</script>

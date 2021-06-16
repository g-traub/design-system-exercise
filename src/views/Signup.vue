<template>
  <section class="page">
    <Card class="page__card card">
      <section class="card__header">
        <Title class="card__header--title">Sign up</Title>
        <Subheading class="card__header--subheading"
          >A new tool that blends your everyday work apps into one. It's the
          all-in-one workspace for you and your team.
        </Subheading>
        <Link class="card__header--link" to="/login"
          >Already signed up ? Log in</Link
        >
      </section>

      <form class="card__form">
        <FormGroup label="Email" label-for="email" class="card__form--input">
          <FormInput
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="example@email.com"
          ></FormInput>
        </FormGroup>

        <FormGroup
          label="Password"
          label-for="password"
          class="card__form--input"
          feedback="Minimun 8 characters"
        >
          <FormInput
            id="password"
            v-model="password"
            type="password"
            required
            placeholder=""
          ></FormInput>
        </FormGroup>

        <Button class="card__form--button" variant="primary">Sign up</Button>
      </form>
    </Card>
  </section>
</template>

<style lang="scss"></style>

<script>
import Card from "@/components/Card";
import Title from "@/components/texts/Title";
import Subheading from "@/components/texts/Subheading";
import Link from "@/components/buttons/Link";
import Button from "@/components/buttons/Button";
import FormInput from "@/components/forms/FormInput";
import FormGroup from "@/components/forms/FormGroup";
export default {
  components: { FormInput, FormGroup, Button, Link, Subheading, Title, Card },
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

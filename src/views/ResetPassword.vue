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
            type="email"
            required
            placeholder="example@email.com"
          ></FormInput>
        </FormGroup>

        <Button class="card__form--button" variant="primary"
          >Reset password</Button
        >
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
};
</script>

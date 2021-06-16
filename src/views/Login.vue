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
        <Link class="card__form--link" to="/login/reset-password"
          >Don’t remember your password ?</Link
        >
        <Button variant="primary">Log in</Button>
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
import Button from "@/components/buttons/Button/Button";
export default {
  components: { Button, Link, Subheading, Title, Card },
};
</script>

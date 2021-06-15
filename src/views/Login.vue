<template>
  <section class="login">
    <Card class="login__card card">
      <section class="card__header">
        <Title class="card__header--title">Login</Title>
        <Subheading class="card__header--subheading"
          >A new tool that blends your everyday work apps into one. It's the
          all-in-one workspace for you and your team.
        </Subheading>
        <Link class="card__header--link">Don’t have an account ? Sign up</Link>
      </section>

      <form class="card__form">
        <Link class="card__form--link">Don’t remember your password ?</Link>
        <Button variant="primary">Log in</Button>
      </form>
    </Card>
  </section>
</template>

<style lang="scss">
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import Card from "@/components/Card";
import Title from "@/components/texts/Title";
import Subheading from "@/components/texts/Subheading";
import Link from "@/components/buttons/Link";
import Button from "@/components/buttons/Button";
export default {
  components: { Button, Link, Subheading, Title, Card },
};
</script>

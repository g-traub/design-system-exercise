<template>
  <!--  <router-view />-->
  <section>
    <article>
      <Button text="Hello world !" interface="fill"></Button>
      <Button text="Hello world !" interface="fill" disabled></Button>
      <Button text="Hello world !" interface="outline"></Button>
      <Button text="Hello world !" interface="outline" disabled></Button>
    </article>

    <article>
      <Register
        text="Register"
        href="https://www.jean-tostivint.dev/"
      ></Register>
      <br />
      <Register
        text="Register"
        icon-left="arrow-left"
        href="https://www.jean-tostivint.dev/"
      ></Register>
      <br />

      <Register
        text="Register"
        icon-right="external-link"
        href="https://www.jean-tostivint.dev/"
      ></Register>
    </article>
  </section>
</template>

<style lang="scss" src="./assets/scss/styles.scss"></style>
<script>
import Button from "@/components/buttons/Button";
import Register from "@/components/buttons/Register";

export default {
  components: { Button, Register },
};
</script>

<template>
  <!--  <router-view />-->
  <div>
    <Button text="Hello world !" interface="fill"></Button>
    <Button text="Hello world !" interface="outline"></Button>
  </div>
</template>

<style lang="scss" src="./assets/scss/styles.scss"></style>
<script>
import Button from "@/components/buttons/Button";
export default {
  components: { Button },
};
</script>

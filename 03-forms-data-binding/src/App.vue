<template>
  <SignupForm />
</template>

<script>
import { defineComponent } from "vue";

import SignupForm from "./components/SignupForm.vue";

export default defineComponent({
  components: { SignupForm, SignupForm },
  setup() {},
});
</script>

<style>
body {
  margin: 0;
  background: #eee;
}

</style>

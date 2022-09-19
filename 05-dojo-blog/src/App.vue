<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Navbar from "./components/Navbar.vue";


export default defineComponent({
  components: { Navbar }, 
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="spin"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff8000;

  animation: spin 1s ease infinite;
}

@keyframes spin {
  to { transform: rotateZ(360deg) }
}
</style>

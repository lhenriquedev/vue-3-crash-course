<template lang="">
  <p>{{ score }}ms</p>
  <p class="rank">{{ rank }}</p>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: ["score"],

  setup(props) {
    const rank = ref<string>("");

    onMounted(() => {
      if (props.score < 250) {
        rank.value = "Ninja Fingers";
      } else if (props.score < 400) {
        rank.value = "Rapid reflexes";
      } else {
        rank.value = "Snail pace...";
      }
    });

    return { rank };
  },
});
</script>
<style>
.rank {
  font-size: 1.4em;
  font-weight: bold;
  color: #0faf87;
}
</style>

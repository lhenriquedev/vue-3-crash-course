<template>
  <h1>Ninja Reaction timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block :delay="delay" v-if="isPlaying" @end="endGame" />
  <Results :score="score" v-if="showResults"/>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default defineComponent({
  props: [],
  components: { Block, Results },

  setup() {
    const isPlaying = ref<boolean>(false);
    const delay = ref<number | null>(null);
    const score = ref<number>(0);
    const showResults = ref<boolean>(false);

    const start = () => {
      delay.value = 2000 + Math.random() * 5000;
      isPlaying.value = true;
      showResults.value = false;
    };

    // recebendo emit com o param o valor que foi emitido.
    const endGame = (reactionTime: number) => {
      score.value = reactionTime;
      isPlaying.value = false;
      showResults.value = true;
    };

    return { isPlaying, delay, start, endGame, score, showResults };
  },
});
</script>

<style scoped>
button{
  background-color: #0faf87;
  color: #fff;
  padding: 8px 16px;
}

button[disabled] {
  cursor: not-allowed;
  opacity: .5;
}
</style>

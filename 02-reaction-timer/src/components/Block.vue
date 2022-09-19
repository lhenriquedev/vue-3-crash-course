<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated, ref } from "vue";

export default defineComponent({
  props: ["delay"],
  setup(props, context) {
    const showBlock = ref<boolean>(false);
    const timer = ref<number>(0);
    const reactionTime = ref<number>(0);

    const startTimer = () => {
      timer.value = setInterval(() => {
        reactionTime.value += 10;
      }, 10);
    };
    const stopTimer = () => {
      clearInterval(timer.value);
      // emitindo esse evento para outros lugares, primeiro param é o nome e o segundo é o valor
      context.emit('end', reactionTime.value)
    };

    onMounted(() => {
      console.log("component mounted");
      setTimeout(() => {
        showBlock.value = true;
        startTimer();
      }, props.delay);
    });

    onUpdated(() => {
      console.log("component updated");
    });

    onUnmounted(() => {
      console.log("component unmounted");
    });

    return { showBlock, startTimer, stopTimer, timer, reactionTime };
  },
});
</script>
<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #ffffff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>

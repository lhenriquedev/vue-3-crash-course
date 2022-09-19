<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default defineComponent({
  props: ["posts"],
  components: { SinglePost },
  setup() {
    onMounted(() => console.log("onMounted"));
    onUnmounted(() => console.log("onUnmounted"));
    onUpdated(() => console.log("onUpdate"));

    return {};
  },
});
</script>

<style scoped></style>

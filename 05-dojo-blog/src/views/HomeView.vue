<template>
  <!-- <div>
    <input type="text" v-model="search" />
  </div>
  <div v-for="name in matchingNames" :key="name">{{ name }}</div> -->
  <div class="home">
    <h2>Home</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";

import getPosts from "../composables/getPosts";
import TagCloud from "../components/TagCloud.vue";

export default defineComponent({
  components: { PostList, Spinner, TagCloud },
  setup() {
    // const search = ref("");
    // const names = ref([
    //   "Henrique",
    //   "Camila",
    //   "Lucas",
    //   "Magda",
    //   "Gilmar",
    //   "Cassio",
    // ]);
    // const matchingNames = computed(() =>
    //   names.value.filter((name) => name.toLowerCase().includes(search.value))
    // );
    const { posts, error, load } = getPosts();

    onMounted(() => {
      load();
    });

    return {
      posts,
      error,
    };
  },
});
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>

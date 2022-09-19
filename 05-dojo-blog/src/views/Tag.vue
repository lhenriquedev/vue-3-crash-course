<template>
  <div class="tag">
    <Spinner v-if="filteredPosts.length === 0" />
    <div class="layout" v-else>
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="filteredPosts" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts";

import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";

export default defineComponent({
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();

    const { posts, load, error } = getPosts();

    const filteredPosts = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    onMounted(() => load());

    return {
      filteredPosts,
      error,
    };
  },
});
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>

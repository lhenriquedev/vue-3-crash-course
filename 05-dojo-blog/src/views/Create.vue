<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="create">
    <form @submit.prevent="handleCreatePost">
      <label>Title:</label>
      <input type="text" v-model="title" required />

      <label>Content:</label>
      <textarea v-model="body" required></textarea>

      <label>Tags (hit enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" />
      
      <div class="pill" v-for="tag in tags" :key="tag">#{{ tag }}</div>
      <button>Add a post</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ""); // removes all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleCreatePost = async () => {
      try {
        const post = {
          title: title.value,
          body: body.value,
          tags: tags.value,
        };
        await fetch(`http://localhost:3000/posts`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(post),
        });

        router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      title,
      body,
      tag,
      tags,
      handleKeyDown,
      handleCreatePost,
    };
  },
});
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>

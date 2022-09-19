<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" required v-model="title" />

    <label>Details</label>
    <textarea required v-model="details"></textarea>

    <button>Update project</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: ["id"],
  setup(props) {
    const router = useRouter();

    const title = ref("");
    const details = ref("");
    const uri = "http://localhost:3000/projects/" + props.id;


    const getEditProjectData = () => {
      fetch(uri)
        .then((res) => res.json())
        .then((data) => {
          title.value = data.title;
          details.value = data.details;
        })
        .catch((err) => alert(err));
    }

    const handleSubmit = () => {
      fetch(uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: title.value, details: details.value }),
      })
        .then(() => router.push({ name: 'Home' }))
        .catch((err) => alert(err));
    };

    onMounted(() => {
      getEditProjectData();
    });

    return {
      title,
      details,
      handleSubmit
    };
  },
});
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>

<template>
  <div v-if="job">
    <h1>{{ job?.title }}</h1>
    <p>{{job?.details}}</p>
  </div>
  <div v-else>
    Loading......
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

interface JobProps {
  title: string;
  id: number;
  details: string;
}

export default defineComponent({
  props: ['id'],
  setup (props) {
    const job = ref<JobProps | null>(null);

    onMounted(() => {
      fetch('http://localhost:3000/jobs/' + props.id)
      .then(res => res.json())
      .then(data => job.value = data)
      .catch((err) => console.log(err.message))
    })

    return {
      job
    }
  }
})
</script>

<style scoped>

</style>
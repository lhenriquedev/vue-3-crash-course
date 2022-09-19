<template>
  <div class="home">
    <FilterNav
      @filterChange="currentFilter = $event"
      :current="currentFilter"
    />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

interface ProjectsProps {
  id: number;
  title: string;
  details: string;
  complete: boolean;
}

export default defineComponent({
  components: { SingleProject, FilterNav },
  setup() {
    const projects = ref<ProjectsProps[]>([]);
    const currentFilter = ref("all");

    const handleDelete = (id: number) => {
      projects.value = projects.value.filter((project) => id !== project.id);
    };

    const handleComplete = (id: number) => {
      let p: any = projects.value.find((project) => project.id === id);
      p.complete = !p.complete;
    };

    const filteredProjects = computed(() => {
      if (currentFilter.value === "completed") {
        return projects.value.filter((project) => project.complete);
      }

      if (currentFilter.value === "ongoing") {
        return projects.value.filter((project) => !project.complete);
      }

      return projects.value;
    });

    onMounted(() => {
      fetch("http://localhost:3000/projects")
        .then((res) => res.json())
        .then((data) => (projects.value = data))
        .catch((err) => err.message);
    });
    return {
      projects,
      handleDelete,
      handleComplete,
      currentFilter,
      filteredProjects,
    };
  },
});
</script>

<style scoped></style>

<template>
  <nav class="filter-nav">
    <button 
      :class="{ active: current === 'all' }" 
      @click="updateFilter('all')">
      View all
    </button>
    <button
      :class="{ active: current === 'completed' }"
      @click="updateFilter('completed')">
      Completed
    </button>
    <button
      :class="{ active: current === 'ongoing' }"
      @click="updateFilter('ongoing')">
      Ongoing
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["current"],
  setup(props, { emit }) {
    const updateFilter = (filterBy: string) => {
      emit("filterChange", filterBy);
    };

    return {
      updateFilter,
    };
  },
});
</script>

<style scoped>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>

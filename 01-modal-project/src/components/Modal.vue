<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <div class="actions">
        <slot name="actions" />
      </div>

      <slot name="forms" />

      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["theme"],

  setup(_, { emit }) {
    const closeModal = () => emit("close");

    return { closeModal };
  },
});
</script>

<style scoped>
  .modal {
    width: 600px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;

    position: relative;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }

  .modal.sale {
    background-color: red;
  }

  .modal .actions {
    display: flex;
  }
  .modal .actions button {
    margin-left: auto;
    border: none;
    background: none;
    font-size: 32px;
    color: red;
  }
</style>

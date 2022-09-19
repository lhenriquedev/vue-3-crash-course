<template>
  <Teleport to="body" v-if="showModal">
    <Modal theme="dark" @close="toggleModal">
      <template v-slot:actions>
        <button @click="toggleModal">X</button>
      </template>

      <template v-slot:forms>
        <input placeholder="Nome" />
        <input placeholder="Senha" />
      </template>
    </Modal>
  </Teleport>
  <button @click="toggleModal">Open modal</button>
</template>

<script>
import { defineComponent, ref } from "vue";
import Modal from "./components/Modal.vue";

export default defineComponent({
  components: { Modal },

  setup() {
    const headerTitle = ref("Sign up for the giveway!");
    const text = ref("Grab your ninja swag for half price.");
    const showModal = ref(false);

    const toggleModal = () => (showModal.value = !showModal.value);

    return { headerTitle, text, showModal, toggleModal };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

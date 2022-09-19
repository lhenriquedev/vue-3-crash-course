<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go Forward</button>

  <router-view />
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    // programmatic navigation
    const redirect = () => router.push({ name: 'Home'});
    const back = () => router.go(-1);
    const forward = () => router.go(1);

    return {
      redirect,
      back,
      forward
    };
  },
};
</script>

<style lang="scss" scoped></style>

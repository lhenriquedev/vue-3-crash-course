<template lang="">
  <div v-if="isSubmitted">Sua conta foi criada com sucesso.</div>

  <div v-if="!isSubmitted">
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" required v-model="email" />

      <label>Password:</label>
      <input type="password" required v-model="password" />
      <div class="error" v-if="passwordError">{{ passwordError }}</div>

      <label>Role:</label>
      <select v-model="role">
        <option value="frontend">Front-end</option>
        <option value="backend">Back-end</option>
        <option value="fullstack">Full stack</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
      <div
        class="pill"
        v-for="skill in skills"
        :key="skill"
        @click="removeSkill(skill)"
      >
        {{ skill }}
      </div>

      <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept terms and condition</label>
      </div>

      <div class="submit">
        <button>Create an account</button>
      </div>
    </form>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");
    const role = ref("frontend");
    const terms = ref(false);
    const tempSkill = ref("");
    const skills = ref([]);
    const passwordError = ref("");

    const isSubmitted = ref(false);

    const addSkill = (e) => {
      if (e.key === "," && tempSkill.value) {
        if (!skills.value.includes(tempSkill.value))
          skills.value.push(tempSkill.value);
        return (tempSkill.value = "");
      }
    };

    const removeSkill = (skill) => {
      skills.value = skills.value.filter((s) => s !== skill);
    };

    const handleSubmit = () => {
      // validate password
      passwordError.value =
        password.value.length > 5
          ? ""
          : "Password must be at least chars long.";

      if (!passwordError.value) {
        setTimeout(() => {
          isSubmitted.value = true;
        }, 1200);
      }
    };

    return {
      email,
      password,
      role,
      terms,
      tempSkill,
      skills,
      addSkill,
      removeSkill,
      isSubmitted,
      handleSubmit,
      passwordError,
    };
  },
});
</script>

<style>
form {
  max-width: 600px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 3px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>

<template>
  <form @submit.prevent="updateActiveUserData">
    <label>Username:</label>
    <input v-model="username" type="text" />
    <label>Age:</label>
    <input v-model="age" type="number" />
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  emits: {
    "update-active-user-data": (activeUserData) => {
      if (typeof activeUserData === "object") {
        return true;
      } else {
        console.warn("'activeUserData' must be an object!");
        return false;
      }
    },
  },
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    updateActiveUserData() {
      this.$emit("update-active-user-data", {
        username: this.username,
        age: this.age,
      });
    },
  },
};
</script>

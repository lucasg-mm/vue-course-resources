<template>
  <table>
    <tr>
      <td class="active-user-cell">
        <active-user :username="username" :age="age"></active-user>
      </td>
      <td class="user-data-cell">
        <user-data @update-active-user-data="updateActiveUserData"></user-data>
      </td>
    </tr>
  </table>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
export default {
  components: { ActiveUser },
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    updateActiveUserData(activeUserData) {
      this.username = activeUserData.username;
      this.age = activeUserData.age;
    },
  },
};
</script>

<style>
.user-data-cell {
  padding-left: 100px;
}
</style>

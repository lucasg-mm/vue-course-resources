const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(elementIndex) {
      this.goals.splice(elementIndex, 1);
    },
  },
});

app.mount("#user-goals");

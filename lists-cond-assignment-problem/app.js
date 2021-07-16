const app = Vue.createApp({
  data() {
    return { tasks: [], taskToBeAdded: "", isListVisible: true };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskToBeAdded);
      this.taskToBeAdded = "";
    },
    toggleListVisibility() {
      this.isListVisible = !this.isListVisible;
    },
  },
});

app.mount("#assignment");

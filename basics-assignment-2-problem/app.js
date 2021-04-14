const app = Vue.createApp({
  data() {
    return {
      text: "",
    };
  },
  methods: {
    showAlert() {
      alert("AYO!");
    },

    updateText(event) {
      this.text = event.target.value;
    },
  },
});

app.mount("#assignment");

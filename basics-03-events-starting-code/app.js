const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("yo");
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");

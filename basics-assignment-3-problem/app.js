const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    value(newValue) {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
  computed: {
    output() {
      if (this.value < 37) {
        return "Not there yet";
      } else if (this.value === 37) {
        return this.value;
      } else {
        return "Too much";
      }
    },
  },
  methods: {
    addNum(num) {
      this.value += num;
    },
  },
});

app.mount("#assignment");

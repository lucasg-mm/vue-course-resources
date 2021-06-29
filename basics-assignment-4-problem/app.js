const app = Vue.createApp({
  data() {
    return {
      classToBeAdded: "",
      isVisible: true,
      choseBackgroundColor: "",
    };
  },
  computed: {
    paragraphClass() {
      return [
        this.classToBeAdded,
        { visible: this.isVisible, hidden: !this.isVisible },
      ];
    },
    choseStyle() {
      return {
        backgroundColor: this.choseBackgroundColor,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");

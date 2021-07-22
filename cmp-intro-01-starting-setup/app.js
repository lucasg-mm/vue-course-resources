const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Jones",
          phone: "21611 616161",
          email: "email@email.com",
        },
        {
          id: "manuel2",
          name: "Manuel Jones",
          phone: "21611 616161",
          email: "email@email.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Jones",
        phone: "21611 616161",
        email: "email@email.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");

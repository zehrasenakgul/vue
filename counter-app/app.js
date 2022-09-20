const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    plus() {
      this.counter++;
    },
    minus() {
      this.counter--;
    },
  },
}).mount("#app");

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
  computed: {
    getCounterResult() {
      console.log("Counter çalıştı");
      return this.counter > 5 ? "5'ten Büyük" : "5'ten Küçük";
    },
  },
}).mount("#app");

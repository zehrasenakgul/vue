const app = Vue.createApp({
  data() {
    return {
      showContainer: false,
      counter: 0,
    };
  },
  methods: {},
  computed: {
    counterBoxClasses() {
      return {
        "bg-success": this.counter > 0,
        "bg-danger": this.counter < 0,
        "bg-white": this.counter == 0,
      };
    },
  },
}).mount("#app");

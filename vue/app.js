const app = Vue.createApp({
  data() {
    return {
      toDoText: null,
      toDoList: [],
    };
  },
  methods: {
    addToDo() {
      this.toDoList.push(this.toDoText);
    },
  },
}).mount("#app");

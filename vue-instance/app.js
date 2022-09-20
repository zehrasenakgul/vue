const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js",
      content: "Lorem ipsum dolor sit amet",
      link: {
        url: "https://zehrasenakgul.com",
        title: "Zehra Sena Akgül",
        blank: "_target",
        alt: "Zehrasenakgul | vuejs",
        content: "Websiteye erişim için tıklayınız",
      },
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(event) {
      //   console.log(event.x, event.y);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
    resetCoords() {
      this.coords = {
        x: 0,
        y: 0,
      };
    },
  },
}).mount("#app");

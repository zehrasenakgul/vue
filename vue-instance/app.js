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
    };
  },
  methods: {
    changeTitle(pTitle) {
      this.title = pTitle;
    },
  },
}).mount("#app");

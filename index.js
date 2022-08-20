/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from Javascript!",
      name: "harry",
      city: "san francisco",
      fruits: ['mangosteen, pineapples, peaches, plums'],
      newFruit: "",
      showInfo: true
    };
  },
  methods: {
    changeMessage: function () {
      console.log('skdfkjhfjhdfk')
      this.name = "george";
    },
    addFruit: function () {
      console.log('adding fruit...')
      this.fruits.push(this.newFruit);
      // this.name = "george";
    },
    toggleMessage: function () {
      console.log('toggling message...');
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
      this.showInfo = !this.showInfo;
      // this.name = "george";
    }
  }
};


Vue.createApp(App).mount('#app');

// console.log('hellloooo');

// window.prompt('will this work?');
import App from "./App.js"
// import AppHeader from "./components/AppHeader.js";
// import AppNav from "./components/AppNav.js";
// import AppView from "./components/AppView.js";
// import BookComponent from "./components/BookComponent.js";
import AppHeader from "./components/AppHeader.vue"
import AppNav from "./components/AppNav.vue";
import AppView from "./components/AppView.vue";


const app = Vue.createApp();
app.component("AppNav", AppNav);
app.component("AppHeader", AppHeader);
app.component("AppView", AppView);
app.component("BookComponent", BookComponent);
app.mount("#app");

import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCCxd9GCbVkBPdWH9a1q2ORkGqj9e289K0',
  authDomain: 'javymarmol-rooms.firebaseapp.com',
  databaseURL: 'https://javymarmol-rooms.firebaseio.com',
  projectId: 'javymarmol-rooms',
  storageBucket: 'javymarmol-rooms.appspot.com',
  messagingSenderId: '14652717124',
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');

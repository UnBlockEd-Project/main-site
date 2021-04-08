// This file will build the demo
import Vue from 'vue';
import VModal from 'vue-js-modal';
import Demo from './Demo.vue';

// required vue-js-modal plugin must be installed with the default component name of 'modal'
Vue.use(VModal);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  template: '<Demo/>',
  components: { Demo },
  render(h) {
    return h(Demo);
  },
});

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import typeNav from './components/TypeNav';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination';
import store from './store';
import './mock/mockServe';
import "swiper/css/swiper.css";
import * as API from '@/api/index';
import {
  Button, MessageBox
} from 'element-ui';
import VueLazyload from 'vue-lazyload';
import lazyDefaultPicture from '../src/assets/images/1.gif';
import '@/plugins/validate';
Vue.config.productionTip = false
Vue.component('typeNav', typeNav);
Vue.component('carousel', Carousel);
Vue.component('Pagination', Pagination);
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.use(VueLazyload, {
  loading: lazyDefaultPicture
});
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$api = API;
  }
}).$mount('#app')

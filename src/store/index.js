import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import home from './Home'
import search from './Search'
import detail from './Detail'
import shopCart from './ShopCart';
import user from './user';
import trade from './Trade';
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopCart,
        user,
        trade
    }
})
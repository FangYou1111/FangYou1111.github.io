import { reqGetCartList, reqDeleteCart, reqChangeChecked } from '@/api';
const actions = {
    async getCartList({ commit }) {
        let result = await reqGetCartList();
        if (result.code === 200) {
            commit('GETCARTLIST', result.data);
        }
    },
    async deleteCartList({ commit }, skuId) {
        let result = await reqDeleteCart(skuId);
        if (result.code === 200) {
            return 'ok';
        }
        return Promise.reject(new Error('failure'));
    },
    async changeChecked({ commit }, { skuId, isChecked }) {
        let result = await reqChangeChecked(skuId, isChecked);
        if (result.code === 200) {
            return 'ok';
        }
        return Promise.reject(new Error('failure'));
    },
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked === 1 ? dispatch('deleteCartList', item.skuId) : '';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    changeAllCheckedCart({ dispatch, getters }, isChecked) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked === 0 ? dispatch('changeChecked', { skuId: item.skuId, isChecked }) : '';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
};
const mutations = {
    async GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const state = {
    cartList: []
};
const getters = {
    cartList() {
        return state.cartList[0] || {};
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
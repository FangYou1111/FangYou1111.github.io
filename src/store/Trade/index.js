import { reqGetUserAddressLists, reqUserTrade } from '@/api'
const actions = {
    async userAddressLists({ commit }) {
        let result = await reqGetUserAddressLists();
        if (result.code === 200) {
            commit('USERADDRESSLISTS', result.data);
        }
    },
    async orderInfo({ commit }) {
        let result = await reqUserTrade();
        if (result.code === 200) {
            commit('ORDERINFO', result.data);
        }
    }
};
const mutations = {
    USERADDRESSLISTS(state, addressInfo) {
        state.addressInfo = addressInfo;
    },
    ORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
    }
};
const state = {
    addressInfo: [],
    orderInfo: []
};
const getters = {};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
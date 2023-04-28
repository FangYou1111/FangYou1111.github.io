import { reqGetSearchInfo } from "@/api";
const actions = {
    async SearchInfo({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code === 200) {
            commit('SEARCHINFO', result.data);
        }
    },
};
const mutations = {
    SEARCHINFO(state, searchList) {
        state.searchList = searchList;
    }
};
const state = {
    searchList: {}
};
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || {};
    },
    trademarkList(state) {
        return state.searchList.trademarkList || {};
    },
    attrsList(state) {
        return state.searchList.attrsList || {};
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
const actions = {
    async CategoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data);
        }
    },
    async BannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code === 200) {
            commit('BANNERLIST', result.data);
        }
    },
    async FloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code === 200) {
            commit('FLOORLIST', result.data);
        }
    }
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList,
            state.categoryList.length = 16;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
const getters = {

};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
import { reqGetCode, reqRegister, reqLogin, regUserInfo, reqLogout } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code === 200) {
            commit('GETCODE', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('failure'));
        }
    },
    async register({ commit }, data) {
        let result = await reqRegister(data);
        if (result.code === 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('failure'));
        }
    },
    async userLogin({ commit }, data) {
        let result = await reqLogin(data);
        if (result.code === 200) {
            commit('USERLOGIN', result.data.token);
            setToken(result.data.token);
            return 'ok';
        } else {
            return Promise.reject(new Error('failure'));
        }
    },
    async userInfo({ commit }) {
        let result = await regUserInfo();
        if (result.code === 200) {
            commit('USERINFO', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('failure'));
        }
    },
    async logOut({ commit }) {
        let result = await reqLogout();
        if (result.code === 200) {
            commit('LOGOUT');
            return 'ok';
        } else {
            return Promise.reject(new Error('failure'));
        }
    }
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    USERINFO(state, data) {
        state.userInfo = data;
    },
    LOGOUT(state) {
        state.userInfo = {};
        state.token = '';
        removeToken();
    }
};
const state = {
    code: '',
    token: getToken(),
    userInfo: {}
};
const getters = {};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
// import { reqGetCode } from '@/api'
// const actions={};
// const mutations={};
// const state={

// };
// const getters={};
// export default {
//     namespaced: true,
//     state,
//     actions,
//     mutations,
//     getters
// }
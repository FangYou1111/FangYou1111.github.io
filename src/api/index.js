import requests from "./request";
import mockRequests from "./mockRequst";
export const reqCategoryList = () => {
    return requests({ url: 'product/getBaseCategoryList', method: 'GET' });
}
//可以简写getBaseCategoryList=()=>requests({ url: 'product/getBaseCategoryList', method: 'GET' });
export const reqGetBannerList = () => {
    return mockRequests({ url: 'banner', method: 'GET' });
}
export const reqFloorList = () => {
    return mockRequests({ url: 'floor', method: 'GET' });
}
export const reqGetSearchInfo = (params) => {
    return requests({ url: '/list', method: 'POST', data: params });
}
export const reqGoodsInfo = (skuId) => {
    return requests({ url: `item/${skuId}`, method: 'GET' });
}
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return requests({ url: `cart/addToCart/${skuId}/${skuNum}`, method: 'POST' });
}
export const reqGetCartList = () => {
    return requests({ url: '/cart/cartList', method: 'GET' });
}
export const reqDeleteCart = (skuId) => {
    return requests({ url: `cart/deleteCart/${skuId}`, method: 'DELETE' });
}
export const reqChangeChecked = (skuId, isChecked) => {
    return requests({ url: `cart/checkCart/${skuId}/${isChecked}`, method: 'GET' });
}
export const reqGetCode = (phone) => {
    return requests({ url: `user/passport/sendCode/${phone}`, method: 'get' });
}
export const reqRegister = (data) => {
    return requests({ url: 'user/passport/register', method: 'post', data })
}
export const reqLogin = (data) => {
    return requests({ url: 'user/passport/login', method: 'post', data })
}
export const regUserInfo = () => {
    return requests({ url: 'user/passport/auth/getUserInfo', method: 'get' });
}
export const reqLogout = () => {
    return requests({ url: 'user/passport/logout', method: 'get' });
}
export const reqGetUserAddressLists = () => {
    return requests({ url: 'user/userAddress/auth/findUserAddressList', method: 'get' });
}
export const reqUserTrade = () => {
    return requests({ url: 'order/auth/trade', method: 'get' });
}
export const reqSubmitOrder = (tradeNo, data) => {
    return requests({ url: `order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data });
}
export const reqOrderMessage = (orderId) => {
    return requests({ url: `payment/weixin/createNative/${orderId}`, method: 'get' })
}
export const reqPayState = (orderId) => {
    return requests({ url: `payment/weixin/queryPayStatus/${orderId}`, method: 'get' })
}
export const reqMyOrderList = (page, limit) => {
    return requests({ url: `order/auth/${page}/${limit}`, method: 'get' });
}
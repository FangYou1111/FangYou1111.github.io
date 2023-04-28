export default [
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
            footShow: true,
        }
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: {
            footShow: false,
        }
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: {
            footShow: false,
        }
    },
    {
        name: 'search',
        path: '/search/:keyWord?',
        component: () => import('@/pages/Search'),
        meta: {
            footShow: true,
        },
        props($route) {
            return {
                keyWord: $route.params.keyWord,
            }
        }
    },
    {
        path: '/detail/:skuId?',
        component: () => import('@/pages/Detail'),
        meta: {
            footShow: true,
        },
    },
    {
        name: "addCartSuccess",
        path: '/addCartSuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: {
            footShow: true,
        },
    },
    {
        name: "shopCart",
        path: '/shopCart',
        component: () => import('@/pages/ShopCart'),
        meta: {
            footShow: true
        }
    }, {
        name: "trade",
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: {
            footShow: true
        }
    }, {
        name: 'pay',
        path: '/pay',
        component: () => import('@/pages/Pay'),
        props($route) {
            return {
                orderId: $route.query.orderId,
            }
        },
        meta: {
            footShow: true
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next();
            } else {
                next(false);
            }
        }
    }, {
        name: 'paySuccess',
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: {
            footShow: true
        }
    },
    {
        name: 'center',
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: {
            footShow: true
        },
        children: [{
            path: 'myOrder',
            component: () => import('@/pages/Center/MyOrder'),
        }, {
            path: 'groupOrder',
            component: () => import('@/pages/Center/GroupOrder'),
        }, {
            path: '/center',
            redirect: '/center/myOrder'
        },]
    }
]
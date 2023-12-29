import { createRouter, createWebHashHistory } from "vue-router";


const routes= [
    {
        name: "MainPage",
        path: "/",
        component : () => import ("../views/MainPage.vue")
    },
    {
        name:"Login",
        path: "/login",
        component : () => import("../views/Login.vue")
    },
    {
        name:"Register",
        path: "/register",
        component : () => import("../views/Register.vue")
    },
    {
        name:"Product",
        path: "/products",
        component : () => import("../views/ProductPage.vue")
    },
    {
        name:"Cart",
        path: "/cart",
        component : () => import("../views/Cart.vue")
    },
    {
        name:"ProductDetail",
        path: "/productDetail",
        component : () => import("../views/ProductDetail.vue")
    },
    {
        name:"PayAccount",
        path: "/payAccount",
        component : () => import("../views/PayAccount.vue")
    },
    {
        name:"CreditCard",
        path: "/creditCard",
        component : () => import("../views/CreditCard.vue")
    },
    {
        name:"SallerPage",
        path: "/sallerPage",
        component : () => import("../saller/SallerPage.vue")
    },
    {
        name:"AddProduct",
        path: "/addProduct",
        component : () => import("../saller/AddProduct.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

// router.beforeEach((to,_,next) => {
//     const authRequiredRoutes = ["ChatRoom"];
//     const authNotRequiredRoutes = ["Welcome","SignUp"];
//     const _isAuthenticated = projectAuth.currentUser;

//     if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);
//     if(authRequiredRoutes.indexOf(to.name) > -1){
//         if(_isAuthenticated) next()
//         else next({name: "Welcome"})
//     }
//     else{
//         next()
//     }
// })


export default  router
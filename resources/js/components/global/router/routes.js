import VueRouter from 'vue-router'



const appHome = require('../AppHome.vue');
const auth = require('../../auth/Auth.vue');



//children component
const mainHome = require('../../home/component/mainHomeComponent.vue');
const showCommand = require('../../buy/showCommand.vue');
 const login = require('../../auth/component/login.vue');
 const register = require('../../auth/component/register.vue');

const routes=[

    {
    path:'/',
    name:'home',
    component: appHome,
    redirect:'/home',

        children:[
            {
                path:'/home',
                component:mainHome,
                name:'mainHome'

        },
            {
                path:'/article/command',
                component:showCommand,
                name:'showCommand'
            }

        ]
},

    {
        path:'/auth',
        name:'auth',
        component:auth,
        redirect: '/auth/login',
        children : [
            {

            path:'/auth/login',
            name:'login',
            component:login
        } ,

            {

            path:'/auth/register',
            name:'register',
            component:register
        }
        ]
    }

];




const router = new VueRouter({

    history: true,
    mode: 'history',
    routes,
});


export default router;

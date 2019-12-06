import VueRouter from 'vue-router'



const appHome = require('../components/global/AppHome.vue');
const auth = require('../components/auth/Auth.vue');



//children component
const mainHome = require('../components/home/component/mainHomeComponent.vue');
const showCommand = require('../components/buy/showCommand.vue');
 const login = require('../components/auth/component/login.vue');
 const register = require('../components/auth/component/register.vue');
 const video = require('../components/video/video');
 const videoPlay = require('../components/video/videoPlay');
 const actus = require('../components/actus/actus');
 const profil = require('../components/profil/profil.vue');
 const messenger = require('../components/messenger/messenger.vue');
 const annonce = require('../components/annonce/annonce.vue');
 const form = require('../components/actus/form.vue');

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
            },
            {

                path:'/video',
                component:video,
                name:'video'
            },
            {
                path:'/videoPlay',
                component:videoPlay,
                name:'videoPlay'
            }

            ,
            {
                path:'/actus',
                component:actus,
                name:'actus',

                children : [
                {
                path:'/form',
                component:form,
                name:'form'
                }
            ]
            }  ,
            {
                path:'/profil',
                component:profil,
                name:'profil'
            } ,
            {
                path:'/messenger',
                component:messenger,
                name:'messenger'
            },
            {
                path:'/annonce',
                component:annonce,
                name:'annonce'
            },

        
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

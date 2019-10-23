const mainHome = require('../../components/home/component/mainHomeComponent.vue');


let route= [
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
    }];

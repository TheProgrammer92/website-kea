
require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './app.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/routes';


import EasySlider from 'vue-easy-slider'

Vue.use(EasySlider)



Vue.use(BootstrapVue);
Vue.use(VueRouter);

//global component
Vue.component('sidebar-component', require('./components/global/SidebarComponent.vue'));
Vue.component('header-component',require('./components/global/headercomponent.vue'));


//global variables
Vue.mixin({

    data(){
        return{

            pathIcone:"https://zili.local/img/icone/",
            pathImg:"https://zili.local/img/image/",
            pathLogo:"https://zili.local/img/logo/",
            pathMontre:"https://zili.local/img/image/montre/",
            pathHorloge:"https://zili.local/img/image/horloge/",


            tabProduct:  [

                [

                    {   id: 1,
                        name:"Rolex TheProgrammer",
                        description:"Rolex TheProgrammer bien centré, vous n'en regretterez  pas xd",
                        image:'1.jpg',
                    } ,

                    {
                        id:2,
                        name:"Breitling  theProgrammer",
                        description:"Theprogrammer, frexture, vous n'n",
                        image:'2.jpg',
                    }

                    ,
                    {

                        id: 3,
                        name:" TAG Heuer (La Chaux-de-Fonds)",
                        description:"Theprogrammer, frexture, vous n'n",
                        image:'3.jpg',
                    }
                ]
                ,

                [
                    {
                        id: 4,
                        name:"Omega (Bienne) theProgrammer",
                        description:"Theprogrammer, frexture, vous n'n",
                        image:'4.jpg',
                    },

                    {
                        id: 5,
                        name:"Zenith (Le Locle)",
                        description:"Theprogrammer, frexture, vous n'n",
                        image:'5.jpg',
                    }  ,

                    {
                        id:6,
                        name:"Jaeger-LeCoultre (Le Sentier)",
                        description:"Theprogrammer, frexture, vous n",
                        image:'2.jpg',
                    }
                ]
            ]



        }
    }
});

const app = new Vue({
    el: '#app',
    components: {App},
    router
});

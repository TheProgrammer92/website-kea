<template>


    <div class="container-global">

        <transition name="fadeInLeft">



            <sidebar-component v-if="isOpenSidebar"></sidebar-component>
        </transition>

        <div class="container-home">


                <header-component></header-component>
                <br>

                <transition name="fade">


                    <router-view></router-view>
                </transition>
           <!--     <main-home-component></main-home-component>-->

                <footer-component></footer-component>




        </div>

    </div>

</template>

<script>
    import mainHomeComponent from './../../components/home/component/mainHomeComponent.vue'
    import footerComponent from '../global/footerComponent.vue';
    export default {
        data( ) {

             return {

                 isOpenSidebar: true
             }

        },
        components: {
            mainHomeComponent,
            footerComponent
        },

        watch: {
            // whenever question changes, this function will run
            isOpenSidebar: function () {

                if (this.isOpenSidebar===false) {

                    $('.container-home').css('width','100%')

                }
                else{
                    $('.container-home').css('width','calc(100% - 280px)')


                }
            }
        },

        methods: {

          closeSidebar: function(){

              this.isOpenSidebar = !this.isOpenSidebar;
          }
        },
        created() {
            $(document).ready(function () {
                $('body').css('background', 'white')
            })

            this.closeSidebar()

        }
    }
</script>

<style lang="scss" src="../../../sass/global/AppHome.scss" ></style>

<style>

    .fadeInLeft-enter-active {
        animation: fadeInLeft .5s;
    }
    .fadeInLeft-leave-active {
        animation: fadeOutLeft .5s;
    }


</style>

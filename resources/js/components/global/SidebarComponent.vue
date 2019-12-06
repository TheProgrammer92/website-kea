<template>




        <div class="sidebar-img" v-if="success">

            <div class="sidebar">

                <b-row class="logoDiv" align-h="center">
                    <span class="ml-auto" style="margin-right:15px;">
                        <img :src="pathIcone + 'images.png'" alt="close sidebar" width="50" height="50" class="img-close-sidebar" @click.prevent="closeSidebar"></span>

                <!--   <a class="navbar-brand logo" href="/">KEA AFRICA</a>-->

                    <img :src="pathImg + 'logo1.bmp'" alt=""  class="imgUser">

                </b-row>



            <b-row align-h="center" class="navSidebar">

                <b-nav vertical class="w-100">
                    <b-nav-item  active :to="{name: 'home'}">   <i class="material-icons">face</i>
                        THEPROGRAMMER</b-nav-item>
                    <b-nav-item :to="{name: 'showCommand'}">
                        <i class="material-icons">add</i>

                        NGUIMATIO

                    </b-nav-item>
                    <b-nav-item>
                        <i class="material-icons">add</i>
                        AGE 21
                    </b-nav-item>
                    <b-nav-item>
                        <i class="material-icons">add</i>

                        NOUVEAU
                    </b-nav-item>


                </b-nav>

            </b-row>

            </div>
        </div>


</template>


<style>
    .lightSpeedIn-enter-active {
        animation: lightSpeedIn .5s;
    }
    .lightSpeedIn-leave-active {
        animation: lightSpeedOut .5s;
    }
</style>

<script>

    export default {

        data () {
            return {
                success: true
            }
        },

        methods: {

            closeSidebar: function () {


                this.$parent.closeSidebar()


            }

        },

    }
</script>


<style src="../../../sass/global/sidebarComponent.scss" scoped></style>


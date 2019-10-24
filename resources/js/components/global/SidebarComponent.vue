<template>




        <div class="sidebar-img" >

            <div class="sidebar">

                <b-row class="logoDiv" align-h="center">
                    <span class="ml-auto" style="margin-right:15px;">
                        <img :src="pathIcone + 'images.png'" alt="close sidebar" width="50" height="50" class="img-close-sidebar" @click.prevent="closeSidebar"></span>

                    <a class="navbar-brand logo" href="/">KEA AFRICA</a>
<!--
                    <img :src="pathImg + 'logo.jpg'" alt="" width="50" height="50">
-->
                </b-row>



            <b-row align-h="center" class="navSidebar">

                <b-nav vertical class="w-100">
                    <b-nav-item  active :to="{name: 'home'}">ACCUEIL</b-nav-item>
                    <b-nav-item :to="{name: 'showCommand'}">MESSENGER</b-nav-item>
                    <b-nav-item>ANNONCE</b-nav-item>
                    <b-nav-item>PROFIL</b-nav-item>
                    <b-nav-item>THE PROGRAMMER</b-nav-item>

                    <b-nav-item :to="{name:'auth'}">LOGIN</b-nav-item>
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

        methods: {

            closeSidebar: function () {


                this.$parent.closeSidebar()


            }

        }

    }
</script>


<style src="../../../sass/global/sidebarComponent.scss" scoped></style>


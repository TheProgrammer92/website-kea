<template>

    <b-row align-h="center" class="w-100" >



        <b-navbar toggleable="lg" type="success" sticky  class="headerPrincipal">

         <!--<b-navbar-toggle target="nav_collapse">Bonjour!! einnn</b-navbar-toggle>-->

            <span><img :src="pathIcone + 'images.png'" alt="close sidebar" width="50" height="50" class="img-close-sidebar" @click.prevent="closeSidebar"></span>


            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">





                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em><img :src="pathIcone + 'profil.jpg'" width="35" height="35" alt="" style="border-radius:25px"></em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>






        </b-navbar>

    </b-row>
</template>

<script>
    export default {
        data() {

            return  {

            }
        },

        methods: {

            closeSidebar: function() {


                this.$parent.closeSidebar()


            }
        },


    }
</script>

<style lang="scss" src="../../../sass/global/headerComponent.scss"  scoped></style>

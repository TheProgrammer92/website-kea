<template>

    <b-container>

        <b-navbar toggleable="md"  class="headerLogin">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#" class="logo">ZILI</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">



                    <b-navbar-nav right>
                        <b-nav-item :to="{name:'login'}" >Login</b-nav-item>
                        <b-nav-item :to="{name:'register'}" >Register</b-nav-item>
                        <b-nav-item :to="{name:'home'}" >Home</b-nav-item>
                    </b-navbar-nav>


                </b-navbar-nav>

            </b-collapse>
        </b-navbar>

        <br><br>


        <router-view></router-view>

    </b-container>
</template>

<script>
    export  default {

        created() {
          $(document).ready(function () {
            $('body').css('background','url(https://zili.local/images/login.jpg) center center  /cover')
        })
        }
    }
</script>


<style lang="scss" src="../../../sass/auth/auth.scss" >

</style>

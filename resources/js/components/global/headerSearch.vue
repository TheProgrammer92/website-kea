<template>




    <header class="header-search sm:bg-dark">

        <div class="container">

            <div class="float-left  div_search_musics">

                <b-form-input  placeholder="Enter your name" class="input_search"></b-form-input>
                <span class="search_icon" >
                    <i class="material-icons">search</i></span>
            </div>

            <nav class="float-right">


                <router-link   :to="{name:'home'}">  Accueil </router-link>
                <router-link v :to="{name:'video'}">  Video </router-link>
                <router-link   :to="{name:'video'}">  Annonces</router-link>
                <router-link   :to="{name:'actus'}">  Actualités</router-link>
                <router-link   :to="{name:'video'}">Messagerie   </router-link>


            </nav>
        </div>

    </header>

</template>

<script>



    export default {

        props: {
            url:Array, // toute les url des lien a afficher dans la page,
            type:String
        },
        name: "header-search",

        data() {
            return {


                liens: [
                    {
                        link:"Amour"
                    },

                    {
                        link:"Pais"
                    },
                    {
                        link:"Chemin"
                    },

                    {
                        link:"Jesus"
                    },
                ],

                search_input:''
            }
        },




        mounted() {

            $('.input_search').focusin(function () {
                $('.div_search_musics').animate({'width':'50%'},500);

            }).focusout(function () {
                $('.div_search_musics').animate({'width':'30%'},500);

            });
        }

    }
</script>


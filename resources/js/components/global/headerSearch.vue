<template>




    <header class="header-search sm:bg-dark">

        <div class="container  header-search-content">

            <div class="float-left  div_search_musics">
                <span class="mr-8"><img :src="pathIcone + 'images.png'" alt="close sidebar" width="50" height="50" class="img-close-sidebar" @click.prevent="closeSidebar"></span>
                <b-form-input  placeholder="Enter your name" class="input_search"></b-form-input>
                <span class="search_icon" >
                    <i class="material-icons">search</i></span>
            </div>

            <nav class="float-right nav-content">
                <i class="material-icons float-right pointer"  v-if="!isHeader" @click.prevent="closeHeader">vertical_align_bottom
                </i>
              <div class=" list-link h-full">

                  <router-link   :to="{name:'home'}" v-if="isHeader">  Accueil </router-link>
                  <router-link   :to="{name:'video'}"  v-if="isHeader" >  Video </router-link>
                  <router-link   :to="{name:'video'}" v-if="isHeader" >  Annonces</router-link>
                  <router-link   :to="{name:'actus'}"  v-if="isHeader">  Actualités</router-link>
                  <router-link   :to="{name:'video'}" v-if="isHeader">Messagerie   </router-link>
                  <router-link   :to="{name:'profil'}" v-if="isHeader">profil     <i class="material-icons float-right md:invisible  sm:visible"  @click.prevent="closeHeader" v-if="isHeader">close</i>
                  </router-link>

              </div>


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
                isHeader:true,

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


        methods: {

            closeSidebar: function() {


                this.$parent.closeSidebar()




            },

            closeHeader:function () {

                if(this.isHeader) {

                    $('.nav-content').animate({'height':'15px'},500)
                }
             else {

                    $('.nav-content').animate({'height':'100%'},500)
                }
                this.isHeader=!this.isHeader

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


<template>




    <header class="header-search sm:bg-dark">

        <div class="container  header-search-content">

            <div class="float-left  div_search_musics">
                <span class="mr-8" v-if="isProfil"><img :src="pathIcone + 'images.png'" alt="close sidebar" width="50" height="50" class="img-close-sidebar" @click.prevent="closeSidebar"></span>
                <b-form-input  placeholder="Enter your name" class="input_search"></b-form-input>
               <span class="search_icon" ><i class="material-icons" >search</i></span>

            </div>

            <!-- <nav class="float-right nav-content">
                <i class="material-icons float-right pointer"  v-if="!isHeader" @click.prevent="closeHeader">vertical_align_bottom
                </i>
              <div class=" list-link h-full">

                     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">A propos</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
         bloc menu déroulant -->
        <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Service 1</a>
          <a class="dropdown-item" href="#">Autre service action</a>
          <a class="dropdown-item" href="#">Dernier service</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>  -->

    <div class="container">
      <nav>
        <ul class="nav">
        <li class="nav-item"><a class="nav-link " href="#"><router-link v-bind:to="'home'">Acceuil</router-link></a></li>
        <li class="nav-item"><a class="nav-link " href="#"><router-link v-bind:to="'video'">Videos</router-link></a></li>
        <li class="nav-item"><a class="nav-link " href="#"><router-link v-bind:to="'annonce'">Annonce</router-link></a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actualite</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#"><router-link v-bind:to="'actus'">Actualite</router-link></a>
              <a class="dropdown-item" href="#">JavaScript</a>
              <a class="dropdown-item" href="#">PHP et MySQL</a>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link " href="#"><router-link v-bind:to="'messenger'">Messagerie</router-link></a></li>
          <li class="nav-item"><a class="nav-link " href="#"><router-link v-bind:to="'profil'">Profil</router-link></a></li>

        </ul>
      </nav>
    </div>

    <div class="login">
        <nav>
        <ul class="nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons prefix bluelog">account_circle</i></a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">login</a>
              <a class="dropdown-item" href="#">logout</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>

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

                isProfil:false,

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


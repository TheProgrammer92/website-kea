<template>

    <div>


   <b-row  class="transparent-command-img" :style="{background:'url('+ pathMontre +  productSelected.image + ') center center /cover'}">

     <b-row class="transparent-command-opacity">


           <b-col cols="5" class="show-produit-to-buy">

               <img  :src="pathHorloge + productSelected.image" alt="Image a acheter" >
           </b-col>

             <b-col  cols="5">

                 <b-card header="Nature et Culture"
                         header-tag="header"
                         title="Sac a dos 199">
                     <span class="card-text">{{productSelected.description}}</span><br>
                     <span>A vendre</span><br><br>
                     <h2>1544 Fcfa</h2>
                     <b-button href="#" variant="primary">Acheter</b-button>
                 </b-card>
           </b-col>

     </b-row>
   </b-row>



        <recent-product :tabRecentProduct="tabRecentProduct"></recent-product>




    </div>
</template>

<script>

    import recentProduct from "./../display/RecentProduct"
    import tabRecent from "../tools/variable"
    export default {
        name: "showArticleBuy",


        data() {

            return {

                styleObject:"background:url(https://zili.local/img/image/montre/1.jpg) center center /cover);",



                //recuperation de l'element séléctionné , par les params de la route
                productSelected:this.$route.params.productSelected,

                  tabRecentProduct: tabRecent

            }
        },

        components: {
            recentProduct
        },


        beforeRouteEnter(to,from,next) {

            //verification si le tableau d'affichage de l'element a acheter n'est pas vide

            if (localStorage.getItem('product')) {
                try {
                    let product= JSON.parse(localStorage.getItem('product'));

                    to.params.productSelected=product;
                    next()

                } catch(e) {
                    localStorage.removeItem('product');
                }
            }

        }

    }
</script>

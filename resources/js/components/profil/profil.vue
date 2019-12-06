<template>
    <div class="profil">

        <b-row class="w-100 container m-auto" style="background:#d8aa46;">


            <div class="container-fluid profil-info">


                <div class="list-annonce" >

                    <b-card
                        v-for="(a,index) in 5" :key="a"
                        header="Devenir riche en langue !"
                        header-tag="header"



                    >

                        <b-card-img :src="pathImg + 'afrique2.jpg'" alt="Image" bottom></b-card-img>
                        <b-card-text>
                            Some quick example text to build on the card and make up the bulk of the card's content.
                        </b-card-text>
                        <template v-slot:footer>
                            <small class="text-muted"><button>s'inscrire</button></small>
                        </template>


                    </b-card>

                </div>

                <div class="droite">
                    <H2>MES ANNONCES</H2>
                    <div class="ligne"></div>
                    <div class="annonce">
                        <img :src="pathImg + 'darlin2.jpg'" alt="">
                        <p>Emision Pilote</p>
                    </div>
                    <div class="annonce">
                        <img :src="pathImg + 'darlin.jpg'" alt="">
                        <p>Emision Pilote</p>
                    </div>
                    <div class="annonce">
                        <img :src="pathImg + 'darlin2.jpg'" alt="">
                        <p>Emision Pilote</p>
                    </div>
                    <div class="annonce">
                        <img :src="pathImg + 'darlin.jpg'" alt="">
                        <p>Emision Pilote</p>
                    </div>
                    <div class="annonce">
                        <img :src="pathImg + 'darlin2.jpg'" alt="">
                        <p>Emision Pilote</p>
                    </div>

                </div>

            </div>

        </b-row>

    </div>
</template>

<script>
    export default {
        name: "profil",
        data () {
            return {
                success: true,
                link1: false,
                link2:  false
            }
        },
        methods:{
            change1: function () {
                if (this.link1 == false) {
                    this.link1 = true;
                    this.link2 = false;
                }else{
                    this.link1 = false;
                }

            },

            change2: function () {
                if (this.link2 == false) {
                    this.link2 = true;
                    this.link1 = false;
                }else{
                    this.link2 = false;
                }

            }
        },
        mounted(){
            this.$parent.$children[0].isProfil = true
            this.$parent.$children[0].closeSidebar()
        },

        beforeRouteLeave(to,from,next) {

            this.$parent.$children[0].isProfil = false

            next()

        }

    }
</script>

<style scoped>

</style>

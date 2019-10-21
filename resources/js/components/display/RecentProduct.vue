<template>

    <div class="w-100 row mt-4">

        <div class="container">




        <b-row class="w-100" v-for="(tab,index) in tabRecentProduct"  :key="index">





            <b-row aligh-h="center" >


              <h1 >Nos différents membres</h1>

           </b-row>

            <br>
            <br>
            <b-row align-h="center" class="mt-4"  >
                <b-card-group deck class="mb-4">


                    <router-link v-for="element in tab" :key="element.id"   :to="{name:'showCommand', params:{elements:element}}" >



                        <b-card  @click="insertStokage(element)" :title="element.name"
                                :img-src="pathMontre + element.image"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 24rem;"
                                class="mb-2"
                                align="center"
                        >
                            <p class="card-text">
                                 {{element.description}}
                            </p>

                            <button class="btn btn-orange">
                                Voir plus
                            </button>

                        </b-card>
                    </router-link>



                </b-card-group>
            </b-row>

        </b-row>


    </div>
    </div>

</template>

<script>
    export default {
        props: {

            tabRecentProduct:Array

        },
        data() {
            return {

                i:1
            }
        },

        methods: {

            insertStokage:function (element) {


                if(this.$route.name === "showCommand") {


                    const parsed = JSON.stringify(element);
                    localStorage.setItem('product', parsed);
                    this.$parent.productSelected=element;
                }

                else {
                    const parsed = JSON.stringify(element);
                    localStorage.setItem('product', parsed);


                }

            }
        }


    }
</script>

<style scoped lang="scss" src="../../../sass/global/recentProduct.scss"></style>

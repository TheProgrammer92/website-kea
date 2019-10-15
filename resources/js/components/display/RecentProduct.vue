<template>

    <div class="w-100 row">


        <b-row class="w-100" v-for="(tab,index) in tabRecentProduct"  :key="index">





            <b-row aligh-h="center" >


              <h2 >Nature and Culture</h2>

           </b-row>

            <br>
            <b-row align-h="center"  >
                <b-card-group deck class="mb-4">


                    <router-link v-for="element in tab" :key="element.id"   :to="{name:'showCommand', params:{elements:element}}" >



                        <b-card  @click="insertStokage(element)" :title="element.title"
                                :img-src="pathHorloge + element.image"
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
                            <b-button href="#" variant="primary">Acheter</b-button>
                        </b-card>
                    </router-link>



                </b-card-group>
            </b-row>

        </b-row>


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

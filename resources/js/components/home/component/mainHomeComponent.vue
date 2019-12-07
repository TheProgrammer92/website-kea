<template>


    <div>

        <b-row class="w-100" style="background:url('/img/image/langue1.jpg') center  center /cover;height:700px">


        </b-row>






       <home-video></home-video>
        <br><br><br><br><br>
        <div>



            <b-row class="w-100  even-coming" >


             <div class="container mt-4">
                <h1 class="font-bold">Evenement a Venir</h1>

                <p class="txt-event">On aurait pu choisir de faire le minimum des evenement a venir , mais...</p>

                <div class="list-even">


                    <div class="list-even-card" v-for="a in 3">

                        <i class="material-icons">event</i>
                        <div class="h3">Special Event </div>

                        <p>Chaque Evenement se presentent de cette facon,
                            le design fait par TheProgrammer, ensuite on
                            boss sur la suite</p>
                    </div>


                </div>
             </div>

            </b-row>


            <recent-product :tabRecentProduct="tabRecentProduct"></recent-product>



            <b-row align-h="center" class="w-100">

                <div class="container">



            <h1>Nos Récents jeux</h1>
                    <br><br>
                <b-carousel id="carousel1"
                            style="text-shadow: 1px 1px 2px #333;width: 100%"
                            controls
                            indicators
                            background="#ababab"
                            :interval="4000"
                            img-width="1024"
                            img-height="480"
                            v-model="slide"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                >


                    <b-carousel-slide caption="First slide"
                                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                      :img-src="'/img/image/jeux1.jpeg'"
                    ></b-carousel-slide>


                    <b-carousel-slide :img-src="'/img/image/jeux2.jpg'">
                        <h1>Hello world!</h1>
                    </b-carousel-slide>

                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                    </b-carousel-slide>

                    <b-carousel-slide :img-src="'/img/image/jeux3.jpg'">

                    </b-carousel-slide>


                    <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                      <h1>Nos jeux en presentation</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                            ut lacus vel interdum.
                        </p>
                    </b-carousel-slide>

                </b-carousel>


                </div>
            </b-row>

            <br><br>

            <b-row class="home-service">
                    <h1>Nos differents service</h1>

                        <div class="main-service container">

                            <div class="max-w-sm rounded overflow-hidden shadow-lg card-service" v-for="a in 3">
                                <img class="w-full" src="/img/image/1.jpg" alt="Sunset in the mountains">
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">My service</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div class="px-6 py-4">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                                </div>
                            </div>
                        </div>
            </b-row>

            <b-row class="home-contact">


                <div class="container main-home-contact">

                    <h1>Restons en <strong class="text-black">contact</strong></h1>

                    <br>
                    <p class="txt-2xl">
                        Inscrivez-vous à la lettre mensuelle de nouvelles d’Annabelle et Jérémy.
                        Soyez ainsi encouragé toute l’année à aller plus loin avec Dieu, et recevez en + des cadeaux !
                    </p>

                    <br><br>


                    <form class="w-full max-w-sm">
                        <div class="flex flex-wrap -mx-3 mb-2">


                            <div class="w-full  px-3 mb-6 md:mb-0">

                                <input placeholder="Email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text">
                            </div>




                            <div class="w-full  px-3 mb-6 mt-2 md:mb-0">

                                <textarea   placeholder="Message" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4
                                leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" cols="30" rows="10"></textarea>
                            </div>

                            <br>
                            <div class="w-full mt-4  px-3 mb-6 md:mb-0">

                                <input placeholder="Email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="file">
                            </div>



                            <button class="btn btn-blue btn-primary ml-auto mr-auto mt-4">
                                Valider
                            </button>

                        </div>
                    </form>



                </div>


            </b-row>



   </div>



    </div>

</template>

<script>

    import recentProduct from "./../../display/RecentProduct"
    import tabRecent from "../../tools/variable"
    import homeVideo from "./video-home"
    export default {
        data () {
            return {
                slide: 0,
                sliding: null,
                tabRecentProduct:tabRecent

            }
        },
        methods: {
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
        },

        components: {
            homeVideo,
            recentProduct
        },

    }
</script>

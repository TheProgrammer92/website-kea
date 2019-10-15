<template>


    <div>




        <b-row align-h="center" class="w-100">
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

                <!-- Text slides with image -->
                <b-carousel-slide caption="First slide"
                                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                  :img-src="pathMontre + '1.jpg'"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide :img-src="pathMontre + '2.jpg'">
                    <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide :img-src="pathMontre + '3.jpg'">

                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                        ut lacus vel interdum.
                    </p>
                </b-carousel-slide>

            </b-carousel>



        </b-row>


        <br><br>
        <div>


            <recent-product :tabRecentProduct="tabRecentProduct"></recent-product>





   </div>



    </div>

</template>

<script>

    import recentProduct from "./../../display/RecentProduct"
    import tabRecent from "../../tools/variable"
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
            recentProduct
        },

    }
</script>

<style   lang="scss" src="../../../../sass/global/displayProduct.scss">

</style>

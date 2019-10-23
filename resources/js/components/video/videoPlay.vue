<template>
    <b-row class="video">

        <b-row class="w-100 header-video" style="height:450px">

            <iframe class="w-full h-full" src="https://www.youtube.com/embed/3HcyHxy1Bic?list=RDMM2MYIrw2W04k"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media;
                     gyroscope; picture-in-picture" allowfullscreen></iframe>
        </b-row>


        <section class="container  section-list-video">

            <h3 class="font-bold font-black">Les derniers contenus</h3>
            <div class="list-video">


                <card-video v-for="(a,index) in 5" :key="index"></card-video>

            </div>


        </section>

    </b-row>
</template>

<script>

    import cardVideo from './modules/card-video'
    export default {
        name: "video",

        components:  {
            cardVideo
        }

    }
</script>

<style scoped>

</style>

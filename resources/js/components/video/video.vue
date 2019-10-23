<template>
    <b-row class="video">

        <b-row class="w-100 header-video" style="background:url('/img/image/1.jpg') center  center /cover;height:400px">

            <div class="container">

                <div class="text-header-home">

                    <h1>Apprenez de nouvelles choses
                    </h1>

                    <p class="mt-4">Decouvres nos nouvelle fonctionnalités</p>
                </div>
            </div>
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

    import cardVideo from './modules/card-video.vue'


    export default {
        name: "video",

        components: {
            cardVideo
        }
    }
</script>

<style scoped>

</style>

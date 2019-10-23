<template>
    <div class="rounded overflow-hidden shadow-lg card-video" @click.prevent="goToPlay">
        <img class="w-full" src="/img/image/video.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
                Lorem i, exercitati
            </p>
        </div>

    </div>

</template>

<script>
    export default {
        name: "card-video",

        methods: {

            goToPlay: function () {

                this.$router.push('/videoPlay')
            }
        }
    }
</script>

<style scoped>

</style>

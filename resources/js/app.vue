<template>


    <div class="container-global">


        <router-view v-if="startApp"></router-view>


        <b-row v-if="!startApp" style="height:800px;justify-content:center;align-items:center">

            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
                </div>
                </div>



        </b-row>

    </div>

</template>

<script>


    export default {

        data() {

            return {
                startApp: false
            }
        },

        mounted() {
            let _this=this;
            setTimeout(function () {
                _this.startApp =!this.startApp;
            },300)
        }

    }
</script>

<style lang="scss" src="../sass/app.scss" ></style>

<template>
    <b-row class="actus">


        <div class="container">
            <h1>Fils d'acualités</h1>
            <br>

            <div class="list-annonce" >

                <b-card
                    v-for="(a,index) in 5" :key="a"
                    header="Devenir riche en langue !"
                    header-tag="header"



                >
                    <b-card-img :src="pathImg + 'afrique2.jpg'" alt="Image" bottom></b-card-img>
                    <template v-slot:footer>
                        <small class="text-muted">Vous pouvez en faire plus !</small>
                    </template>

                    <b-card>
                        <b-media>
                            <template v-slot:aside>

                                <img src="/img/image/pro.jpeg"  width="64" alt="Media Aside">

                            </template>

                            <h5 class="mt-0">TheProgrammer annonce</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                                ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <p>
                                Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                            <br><br>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border
                                border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          id="grid-first-name" type="text" placeholder="Entrez un commentaire"></textarea>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>

                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Valider
                                </button>
                            </div>

                        </b-media>
                    </b-card>

                </b-card>

            </div>



        </div>
    </b-row>
</template>

<script>
    export default {
        name: "actus"
    }
</script>

<style scoped>

</style>

<template>

    <div class="home-video container">

        <div class="text-home-video">

            <h1 class="font-bold font-black text-black">Présentation Kea entreprise</h1>
            <h1 class="font-bold">en live</h1>

            <h3 class="mt-4 text-2xl">Découvres nos video dans cette partie</h3>
             <ul>
                 <li>Version TheProgrammer</li>
                 <li>Version Live</li>
                 <li>Version Streaming</li>
             </ul>
        </div>
        <div class="video-home-video">

            <div class="leader-iframe">
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>

            </div>

            <div class="children-iframe">

                    <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>

            </div>
        </div>


    </div>
</template>

<script>

    import { Slider, SliderItem } from 'vue-easy-slider'

    export default {
        name: "video",

        components: {
            Slider, SliderItem
        },

        data() {

            return {

                testimonies:[
                    {
                        "image":"/testimony.jpg",
                        "content":`Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le
                texte. `,
                        "name":"Amanda 18",
                        "school":"Lycée de beaujoix",
                        "classe":"Tles"
                    },
                    {
                        "image":"/testimony.jpg",
                        "content":`Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                ensemble d`,
                        "name":"kevin teguia 18",
                        "school":"Lycée de beaujoix",
                        "classe":"Tles"
                    },
                ],
                imageIsChanging:true,

                references: [
                    {
                        image:"/img/image/langue1.jpg",
                        nom:"Mathieux Nebra",
                        content:"Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
                    },
                    {
                        image:"/img/image/langue1.jpg",
                        nom:"Mathieux Nebra",
                        content:"Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
                    },
                    {
                        image:"/img/image/langue1.jpg",
                        nom:"Mathieux Nebra",
                        content:"Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
                    },
                    {
                        image:"/img/image/langue1.jpg",
                        nom:"Mathieux Nebra",
                        content:"Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
                    },
                    {
                        image:"/img/image/langue1.jpg",
                        nom:"Mathieux Nebra",
                        content:"Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
                    },
                ]
            }
        }
    }
</script>


<template>

    <div class="home-video container">

        <div class="video-home-video">

            <div class="leader-iframe">
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>

            </div>

            <div class="like-iframe">   
                <div class="like-iframe-title">
                    <h2>Titre de la video</h2>
                </div>

                <div>
                    <div class="nbre-vue">300 vues</div>
                    <div class="like-iframe-icon">
                        <span><i class="material-icons prefix beige" :class="link1 ? 'iconblue': 'iconbeige'" @click="change1">thumb_up</i> 100k</span>
                        <span><i class="material-icons prefix beige" :class="link2 ? 'iconblue': 'iconbeige'" @click="change2">thumb_down</i> 15</span>
                        <span><i class="material-icons prefix beige">share</i> 15</span>
                    </div>
                </div>
                    
                
            </div>

            <div class="children-iframe">

                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>
                <iframe src="https://www.youtube.com/embed/AuMAtwpCrIw?feature=oembed&amp;amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="fitvid0"></iframe>
            </div>
        </div>

        <div class="text-home-video">

            <h1 class="font-bold font-black text-black align-center">Présentation Kea entreprise</h1>
            <h1 class="font-bold">en live</h1>

            <h3 class="mt-4 text-2xl">Découvres nos videos dans cette partie</h3>
             <ul>
                 <li>Version TheProgrammer</li>
                 <li>Version Live</li>
                 <li>Version Streaming</li>
             </ul>
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
                link1: false,
                link2:  false,
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
        },

        methods:{
            change1: function () {
                if (this.link1 == false) {
                    this.link1 = true;
                    this.link2 = false;
                }else{
                    this.link1 = false;
                }
                
            },

            change2: function () {
                if (this.link2 == false) {
                    this.link2 = true;
                    this.link1 = false;
                }else{
                    this.link2 = false;
                }
                
            }
        }
    }
</script>

<style>
    @media only screen and (max-width : 1055px){
    body{
        font-family: sans-serif;
    }

    span{
        color: blueviolet;
    }
    
}
</style>


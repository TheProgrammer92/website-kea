<template>
    <div class="annonce">
        <div class="annonce-container container">
            <div class="annonce-title">
                <h1>Les Annonces</h1>
            </div>


            <div class="wrap">

                <div class="annonce-card">
                    <div class="card-title">
                        <h1>Une Conference a ne pas rater</h1>
                    </div>
                    <div class="ligne orange"></div>
                    <div class="card-img">
                        <img :src="pathImg + 'afrique2.jpg'" alt="">
                    </div>
                    <div class="card-desc">
                        <h1>Description</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore iure fugit quis eos rerum, laudantium ipsa alias.
                        Odit corporis laboriosam aperiam pariatur. Doloremque beatae
                        et quia laudantium voluptate minus vitae.</p>
                    </div>
                <div class="card-footer">
                    <div class="like-comment"><span>like</span> <span><i class="fas fa-comment-alt"></i></span> <span>share</span></div>
                    <div class="temps">Il y a 27 minutes</div>
                </div>
                </div>

                <div class="annonce-card">
                    <div class="card-title">
                        <h1>La Motivation pour la reussite</h1>
                    </div>
                    <div class="ligne orange"></div>
                    <div class="card-img">
                        <img :src="pathImg + 'evenement1.jpeg'" alt="">
                    </div>
                    <div class="card-desc">
                        <h1>Description</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore iure fugit quis eos rerum, laudantium ipsa alias.
                        Odit corporis laboriosam aperiam pariatur. Doloremque beatae
                        et quia laudantium voluptate minus vitae.</p></div>
                    <div class="card-footer"><div class="like-comment"><i class="fas fa-thumbs-up"></i> <span>comment</span> <span>share</span></div>
                    <div class="temps">Il y a 2h</div></div>
                </div>

                <div class="annonce-card">
                        <div class="card-title">
                            <h1>Etudier en toute serenite</h1>
                        </div>
                        <div class="ligne orange"></div>
                        <div class="card-img">
                            <img :src="pathImg + 'jeux1.jpg'" alt="">
                        </div>
                        <div class="card-desc">
                            <h1>Description</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Tempore iure fugit quis eos rerum, laudantium ipsa alias.
                            Odit corporis laboriosam aperiam pariatur. Doloremque beatae
                            et quia laudantium voluptate minus vitae.</p></div>
                        <div class="card-footer">
                            <div class="like-comment"><span>like</span> <span>comment</span> <span>share</span></div>
                            <div class="temps">Il y a 3jours</div>
                        </div>
                    </div>

                </div>


        </div>
    </div>

</template>

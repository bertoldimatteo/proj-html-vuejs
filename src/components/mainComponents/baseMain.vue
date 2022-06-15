<template>
    <main>
        <section class="first-section">
            <div class="container-lg">
                <div class="right-section">
                    <img class="book-icon" src="../../assets/reference/img/Books-icon.png" alt="books">
                    <Monocard v-for="element in dataShared.data[1].section1" :key="element.id" :info="element"/>
                </div>
                <div class="left-section">
                    <img src="../../assets/reference/img/Graduation-Illustration.png" alt="graduation-image">
                </div>
            </div>
        </section>
        <section class="second-section">
            <div class="container-lg">
                <h2>Faculties available ad EduPrime</h2>
                    <div class="container-p">
                        <p>A single university with a load of courses, tailored to satisfy any student's needs.</p>
                    </div> 
            </div>
            <div class="carousel-images">
                <div class="box">
                    </div>
                    <div class="box box-active">
                        <div class="box-image">
                            <img class="image hover-image" src="../../assets/reference/img/Gavel-v2.png" alt="gavel-image">
                            <p>Law Faculty</p>
                        </div>
                        <div class="arrow-down"></div>
                    </div>
                    <div class="box">
                        <div class="box-image">
                            <img class="image" src="../../assets/reference/img/Coins-tabs-v2.png" alt="gavel-image">
                            <p>Economy</p>
                        </div>
                        <div class="arrow-down"></div>
                    </div>
                    <div class="box">
                        <div class="box-image">
                            <img class="image" src="../../assets/reference/img/Medicine-tabs-v2.png" alt="gavel-image">
                            <p>Medicine</p>
                        </div>
                        <div class="arrow-down"></div>
                    </div>
                    <div class="box">
                        <div class="box-image">
                            <img class="image" src="../../assets/reference/img/Computer-tabs-v2.png" alt="gavel-image">
                            <p>Computer Science</p>
                        </div>
                        <div class="arrow-down"></div>
                    </div>
                    <div class="box">
                        <div class="box-image">
                            <img class="image" src="../../assets/reference/img/Palette-tabs-v2.png" alt="gavel-image">
                            <p>Grapich Designs</p>
                        </div>
                        <div class="arrow-down"></div>
                    </div>
                    <div class="box">
                </div>
            </div>  
        </section>
    </main>
</template>

<script>
import dataShared from '../sharedBehaviours/dataShared.js';
import Monocard from '../blockComponents/MonoCard.vue';

export default {
    name: 'baseMain',

    data() {
        return {
            dataShared,
        }
    },
    components: {
        Monocard,
    },
}
</script>

<style lang="scss" scoped>
.first-section {
    background-image: url('../../assets/reference/img/home-background.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    height: 600px;
}
.first-section .container-lg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 180px 0;
    gap: 100px;
}
.book-icon {
    width: 50px;
}
.left-section img {
    width: 480px;
}
.second-section {
    margin: 200px 0;
}
.second-section .container-lg {
    text-align: center;
}
.second-section p {
    color: var(--gray-seven);
    margin: 30px 0;
    line-height: 25px;
}
.carousel-images {
    display: flex;
    justify-content: center;
}
.box {
    width: 365px;
    height: 250px;
    border: 2px solid var(--gray-eight);
}
.box-image {
    border: 2px solid var(--gray-eight);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
}
.box-active {
    background-color: var(--color-two);
    display: flex;
    justify-content: center;
    position: relative;
    align-self: center;
}
.box p {
    color: var(--color-two);
    font-weight: 600;
    font-size: var(--font-md);
}
.box-active p {
    color: var(--white-one);
    font-weight: 600;
    font-size: var(--font-md);
}
.box-image .image {
    margin-top: 50px;
    width: 110px;
}
.box-active .image {
    margin-top: 30px;
    width: 110px;
}
.hover-image {
    filter: brightness(0) invert(1);
}
.arrow-down {
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid var(--color-two);;
    position: absolute;
    top: 240px;
}
</style>
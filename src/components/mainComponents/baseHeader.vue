<template>
    <header>
        <div class="left-menu">
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            <a href="#"><i class="fa-solid fa-book-open"></i></a>
            <a href="#"><i class="fa-regular fa-life-ring"></i></a>
        </div>
        <nav>
            <div class="left-navbar">
                <img src="../../assets/reference/img/theme_eduprime_logo.png" alt="">
            </div>
            <div class="right-navbar">
                <ul>
                    <li class="li-navbar" v-for="link in dataShared.links" :key="link.id"><a href="#">{{link.navLink}}<i class="icon fa-solid fa-caret-down" :class="{'multiLink' : link.status === 'multiLink', 'monoLink' : link.status === 'monoLink'}"></i></a></li>
                </ul>
                <button class="btn navbar-btn" type="button">VIEW COURSES</button>
            </div>
        </nav>
        <div class="hero">
            <CardHero :info="dataShared.data.hero"/>
        </div>
        <div class="background-wave"></div>
    </header>
</template>

<script>
import dataShared from '../sharedBehaviours/dataShared.js';
import CardHero from '../blockComponents/CardHero.vue';

export default {
    name: 'baseHeader',
   
    data() {
        return {
            dataShared,
        }
    },
    components: {
        CardHero,
    },
}
</script>

<style lang="scss" scoped>
header {
    background-image: linear-gradient(rgba(220,109,111,0.9), rgba(220,109,111,0.9)), url('../../assets/reference/img/theme_slider2_bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 880px;
    width: 100%;
    position: relative;
}
.left-menu {
    position: absolute;
    top: 280px;
    background-color: var(--color-one);
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 5px 5px 50px #444444;
}
.left-menu > * {
    margin: 6px 0;
    color: var(--white-one);
}
nav {
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left-navbar img {
    width: 300px;
}
.right-navbar {
    display: flex;
    align-items: center;
}
.background-wave {
    position: absolute;
    background-image: url('../../assets/reference/img/Wave-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 175px;
    top: 710px;
}
ul {
    list-style-type: none;
    display: flex;
    align-items: center;
}
li, button {
    margin: 0 20px;
}
a {
    text-decoration: none;
    color: var(--white-one);
    font-weight: 500;
}
button {
    font-weight: 600;
    font-size: var(--font-md);
    color: var(--white-one);
    background-color: var(--color-one);
}
.icon {
    margin: 0 5px;
}
.monoLink {
    display: none;
}
.hero {
    display: flex;
    justify-content: center;
    padding: 100px;
}
</style>
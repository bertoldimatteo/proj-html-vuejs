<template>
    <main>
        <nav>
            <div class="left-navbar">
                <img src="../../assets/reference/img/theme_eduprime_logo.png" alt="">
            </div>
            <div class="right-navbar">
                <ul>
                    <li v-for="link in dataShared.links" :key="link.id"><a href="#">{{link.navLink}}<i class="icon fa-solid fa-caret-down" :class="{'multiLink' : link.status === 'multiLink', 'monoLink' : link.status === 'monoLink'}"></i></a></li>
                </ul>
                <button class="btn" type="button">VIEW COURSES</button>
            </div>
        </nav>
        <div class="hero">
            <BlockTwoButtons v-for="element in dataShared.data.hero" :key="element.id" :info="element"/>
        </div>
        <div class="background-wave"></div>
    </main>
</template>

<script>
import dataShared from '../sharedBehaviours/dataShared.js';
import blockTwoButtons from '../blockComponents/blockTwoButtons.vue';

export default {
    name: 'baseMain',

    data() {
        return {
            dataShared,
            blockTwoButtons,
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    background-image: linear-gradient(rgba(220,109,111,0.9), rgba(220,109,111,0.9)), url('../../assets/reference/img/theme_slider2_bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 880px;
    position: relative;
    width: 100%;
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
</style>
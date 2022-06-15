<template>
    <main>
        <nav>
            <div class="left-navbar">
                <img src="../../assets/reference/img/theme_eduprime_logo.png" alt="">
            </div>
            <div class="right-navbar"></div>
        </nav>
        <div class="background-wave"></div>
    </main>
</template>

<script>
export default {
    name: 'baseMain',
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
}
.left-navbar img {
    width: 300px;
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
</style>
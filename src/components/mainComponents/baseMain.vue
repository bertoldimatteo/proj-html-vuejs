<template>
    <main>
        <div class="background-container"></div>
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
    background:(var(--color-three));
    height: 850px;
}
.background-container {
    background-image: url('../../assets/reference/img/theme_slider2_bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 850px;
    opacity: 0.1;
    position: relative;
}
.background-wave {
    position: absolute;
    background-image: url('../../assets/reference/img/Wave-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 130px;
    top: 720px;
}
</style>
<template>
    <main>
        <div class="background-container">

        </div>
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
    height: 800px;
}
.background-container {
    background-image: url('../../assets/reference/img/theme_slider2_bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 800px;
    opacity: 0.1;
}
</style>
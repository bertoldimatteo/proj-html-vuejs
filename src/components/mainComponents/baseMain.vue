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
.container-lg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px 0;
    gap: 100px;
}
.book-icon {
    width: 50px;
}
.left-section img {
    width: 480px;
}
</style>
<template>
    <main>
        <section class="first-section">
            <div class="container-lg">
                <div class="right-section">
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
    gap: 50px;
}
.right-section {
    background-image: url('../../assets/reference/img/Books-icon.png');
    background-repeat: no-repeat;
    background-size: contain;
}
.left-section img {
    width: 530px;
}
</style>
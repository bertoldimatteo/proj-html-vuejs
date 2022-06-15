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
}
</style>
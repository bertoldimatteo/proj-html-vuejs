<template>
    <main>
        <section class="Upper-part">
            <section class="first-section">
                <div class="container-lg">
                    <div class="right-section">
                        <img class="book-icon" src="../../assets/reference/img/Books-icon.png" alt="books">
                        <MonoCardYBtn :info="dataShared.data.section1"/>
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
                        </div>
                        <div class="box">
                            <div class="box-image">
                                <img class="image" src="../../assets/reference/img/Medicine-tabs-v2.png" alt="gavel-image">
                                <p>Medicine</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-image">
                                <img class="image" src="../../assets/reference/img/Computer-tabs-v2.png" alt="gavel-image">
                                <p>Computer Science</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-image">
                                <img class="image" src="../../assets/reference/img/Palette-tabs-v2.png" alt="gavel-image">
                                <p>Grapich Designs</p>
                            </div>
                        </div>
                        <div class="box">
                    </div>
                </div>  
            </section>
            <div class="third-section">
                 <div class="container-lg">
                    <div class="right-section">
                        <img src="../../assets/reference/img/Gavel-Illustration-e1556884768193.png" alt="graduation-image">
                    </div>
                    <div class="left-section">
                        <MonoCardRBtn :info="dataShared.data.section3"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="middle-part">
            <div class="wave-bg-top"></div>
                <section class="middle-section">
                    <div class="container-lg">
                        <div class="top-info">
                            <img class="info-image" src="../../assets/reference/img/Clock-and-Bell.png" alt="clico-bell-image">
                            <h2><mark class="highlight">University Year</mark></h2>
                            <div class="paragraph top-paragraph">
                                <div class="par-one container-p-nm">
                                    <h3>Demo Classes</h3>
                                    <p>In the first week, students try to accomodate with the teaching style and choose their optional courses.</p>
                                </div>
                                 <div class="par-two container-p-nm">
                                    <h3>Graduation Day</h3>
                                    <p>On the day of graduation, all students gather for the ceremony and then network and party among others.</p>
                                </div>
                            </div>
                            <img src="../../assets/reference/img/Timeline-Item.png" alt="studies-line">
                            <div class="paragraph bottom-paragraph">
                                <div class="par-three container-p-nm">
                                    <h3>Orientation</h3>
                                    <p>First day of the univerity year, all students gather for the opening ceremony and then network woth others.</p>
                                </div>
                                 <div class="par-four container-p-nm">
                                    <h3>Evaluation</h3>
                                    <p>At the end of a semester, students take a general evaluation test for every subject they're learning.</p>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-info">
                            <img class="info-image" src="../../assets/reference/img/upcoming-events-calendar-icon.png" alt="calendar-image">
                            <h2>Upcoming Events</h2>
                            <div class="card">
                                <EventCard v-for="element in dataShared.data.section5" :key="element.id" :info="element" />
                            </div>
                            <button class="btn yellow-btn" type="button">View All Events</button>
                        </div> 
                    </div>     
                </section>
            <div class="wave-bg-btm"></div>
        </section>
        <section class="lower.part">
            <div class="container-lg">
                <h2>Latest Courses</h2>
                <div class="Latest-courses">
                    <CoursesCard v-for="element in dataShared.data.section6" :key="element" :info="element"/>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import dataShared from '../sharedBehaviours/dataShared.js';
import MonoCardYBtn from '../blockComponents/MonoCardYBtn.vue';
import MonoCardRBtn from '../blockComponents/MonoCardRBtn.vue';
import EventCard from '../blockComponents/EventCard.vue';
import CoursesCard from '../blockComponents/CoursesCard.vue';

export default {
    name: 'baseMain',

    data() {
        return {
            dataShared,
        }
    },
    components: {
        MonoCardYBtn,
        MonoCardRBtn,
        EventCard,
        CoursesCard,
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
    padding-top: 150px;
}
.first-section .container-lg, .third-section .container-lg  {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding-bottom: 150px;
}
.book-icon {
    width: 50px;
}
.first-section .left-section img {
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
.second-section .box-image .image {
    margin-top: 50px;
    width: 110px;
}
.second-section .box-active .image {
    margin-top: 30px;
    width: 110px;
}
.second-section .hover-image {
    filter: brightness(0) invert(1);
}
.second-section .arrow-down {
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid var(--color-two);;
    position: absolute;
    top: 240px;
}
.third-section .right-section img {
    width: 480px;
}
.highlight {
    background-color: var(--color-seven);
    color: var(--white-one);
}
.middle-section h2, h3, h4, p {
    color: var(--white-one);
}
.middle-section .paragraph {
    display: flex;
}
.top-paragraph {
    justify-content: flex-end;
    margin-right: 200px ;
    gap: 110px;
}
.bottom-paragraph {
    margin-left: 200px ;
    gap: 110px;
}
.middle-part {
    margin: 120px 0;
    padding: 80px 0;
    background-color: var(--color-two);
    position: relative;
    text-align: center;
}
.top-info h2 {
    margin: 10px 0 100px 0;
}
.wave-bg-top {
    position: absolute;
    top: -260px;
    width: 100%;
    height: 260px;
    background-image: url('../../assets/reference/svg/svg-0.svg');
    background-repeat: no-repeat;
    background-size: cover;
}
.wave-bg-btm {
    position: absolute;
    bottom: -250px;
    width: 100%;
    height: 260px;
    background-image: url('../../assets/reference/svg/svg-1.svg');
    background-repeat: no-repeat;
    background-size: cover;
}
.bottom-info {
    margin-top: 80px;
}
.info-image {
    width: 55px;
}
.card {
    display: flex;
    padding: 80px 0;
}
.Latest-courses {
    display: flex;
    justify-content: center;
    gap: 50px;
}
</style>
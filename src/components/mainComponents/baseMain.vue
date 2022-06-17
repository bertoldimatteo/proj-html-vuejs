<template>
    <main>
        <div class="body-banner-left">
            <p>Purchase Eduprime on Envato Market</p>
        </div>
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
                        <div class="box-empty">
                        </div>
                        <div class="box">
                            <div class="box-image">
                                <img class="image" src="../../assets/reference/img/Gavel-v2.png" alt="gavel-image">
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
                        <div class="box-empty">
                        </div>
                </div>  
            </section>
            <div class="third-section">
                 <div class="container-lg">
                    <div class="right-section">
                        <img class="imageCard" src="../../assets/reference/img/Gavel-Illustration-e1556884768193.png" alt="graduation-image">
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
                            <button class="btn yellow-btn event-btn" type="button">View All Events</button>
                        </div> 
                    </div>     
                </section>
            <div class="wave-bg-btm"></div>
        </section>
        <section class="lower-part">
            <div class="container-lg">
                <div class="section-one">
                    <h2>Latest Courses</h2>
                    <div class="Latest-courses">
                        <CoursesCard v-for="element in dataShared.data.section6" :key="element.id" :info="element"/>
                    </div>
                </div>
                <div class="section-two">
                    <div class="right-section">
                        <img class="info-image" src="../../assets/reference/img/Exam-icon.png" alt="exam-icon">
                        <MonoCardRBtn :info="dataShared.data.section7"/>
                    </div>
                    <div class="left-section">
                        <img class="imageCard" src="../../assets/reference/img/Exam-Illustration.png" alt="graduation-image">
                    </div>
                </div>
                <div class="section-three">
                    <div class="right-section">
                        <img class="imageCard" src="../../assets/reference/img/Girl-Illustration.png" alt="graduation-image">
                    </div>
                    <div class="left-section">
                        <MonoCardRBtn :info="dataShared.data.section8"/>
                    </div>
                </div>
            </div>
            <div class="partners-section">
                    <div class="container-lg partners">
                        <h3>Subscribe Now to Our Newsletter !</h3>
                        <form class="partner-form">
                            <input type="text" placeholder="Email address..."><button class="icon-form"><i class="fa-solid fa-paper-plane fa-lg"></i></button><br>
                        </form> 
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
main {
    position: relative;
}
.body-banner-left {
    background-color: var(--gray-one);
    max-width: 230px;
    text-align: center;
    position: absolute;
    left: 50px;
    top: -20px;
    padding: 3px 8px;
    border-radius: 5px;
    font-size: var(--font-sm);
}
.body-banner-left:after {
    content:'';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-top: solid 8px var(--gray-one);
    border-left: solid 8px transparent;
    border-right: solid 8px transparent;
}
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
.box, .box-empty {
    width: 365px;
    height: 250px;
    border: 2px solid var(--gray-eight);
    position: relative;
}
.box-image {
    border: 2px solid var(--gray-eight);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
}
.box p {
    color: var(--color-two);
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
.imageCard {
    width: 500px;
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
    justify-content: space-between;
    gap: 50px;
    margin: 50px 0;
}
.lower-part .section-two, .lower-part .section-three {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
}
.partners-section {
    background-color: var(--color-two);
}
.partners {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
}
.partners h3 {
    font-size: var(--font-xl);
}
.partner-form {
    position: relative;
}
input[type=text] {
    width: 450px;
    height: 60px;
    padding: 25px;
    border: none;
    border-radius: 35px;
}
.icon-form {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background-color: var(--color-one);
    color: var(--white-one);
    position: absolute;
    right: 0;
} 
</style>
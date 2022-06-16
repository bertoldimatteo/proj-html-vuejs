<template>
    <footer>
        <div class="footer-top">
            <div class="container-lg partner">
                <h2>Partners</h2>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative apporaches to corporate strategy.</p>
                <div class="partners-images">
                    <img src="../../assets/reference/img/partner-2.png" alt="" srcset="">
                    <img src="../../assets/reference/img/partner-3.png" alt="" srcset="">
                    <img src="../../assets/reference/img/partner-4.png" alt="" srcset="">
                    <img src="../../assets/reference/img/partner-5.png" alt="" srcset="">
                    <img src="../../assets/reference/img/partner-6.png" alt="" srcset="">
                    <img src="../../assets/reference/img/partner-8.png" alt="" srcset="">
                    <img src="../../assets/reference/img/partner-1.png" alt="" srcset="">
                    <img src="../../assets/reference/img/partner-7.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container-lg footer-container">
                <div class="footer-left container-p-nm">
                    <img src="../../assets/reference/img/theme_eduprime_logo.png" alt="logo">
                    <p>EduPrime is the most versatile WordPress theme for educational purpose, showcasing, universities, courses, secondary school etc.</p>
                    <div class="social-icons">
                        <div class="box-icon"><i class="icons fa-brands fa-facebook-f fa-lg"></i></div>
                        <div class="box-icon"><i class="icons fa-brands fa-twitter fa-lg"></i></div>
                        <div class="box-icon"><i class="icons fa-brands fa-instagram fa-lg"></i></div>
                    </div>
                </div>
                <div class="footer-middle">
                    <ul class="Eduprime">
                        <h4>Get EduPrime</h4>
                        <li><a href="#">Request a website</a></li>
                        <li><a href="#">Browse Themes</a></li>
                        <li><a href="#">Payment options</a></li>
                        <li><a href="#">Support System</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Purchase Theme</a></li>
                    </ul>
                     <ul class="Eduprime">
                        <h4>Networking</h4>
                        <li><a href="#">Purchase Theme</a></li>
                        <li><a href="#">Our Benefits</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Other Products</a></li>
                        <li><a href="#">My account</a></li>
                    </ul>
                </div>
                <div class="footer-right container-p-nm">
                    <form action="/action_page.php">
                            <input type="text" placeholder="Email address..."><button class="icon-form"><i class="fa-solid fa-paper-plane fa-lg"></i></button><br>
                    </form> 
                    <h5>Search categories</h5>
                    <div class="macro-theme">
                        <span><a href="#">ECONOMY</a></span>
                        <span><a href="#">DESIGN</a></span>
                        <span><a href="#">COACHING</a></span>
                        <span><a href="#">BUSINESS</a></span>
                        <span><a href="#">MEDICINE</a></span>
                        <span><a href="#">LAW</a></span>
                        <span><a href="#">FITNESS</a></span>
                    </div>
                    <p>ModelTheme. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'baseFooter',
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
ul {
    list-style-type: none;
}
p, h4, a, h5 {
    color: var(--white-one)
}
h4 {
    font-size: var(--font-lg);
    margin-bottom: 40px;
}
h5 {
    font-size: var(--font-md)
}
span {
    font-weight: 300;
    font-size: var(--font-sm);
    margin-left: 15px;
}
li {
    margin: 10px 0;
    font-weight: 300;
}
.footer-top {
    background-repeat: no-repeat;
    background-size: contain;
    height: 750px;
}
.partner {
    text-align: center;
    padding: 80px 0;
}
.partner > * {
    margin: 20px 0;
}
.partner p {
    max-width: 550px;
    margin: auto;
}
.partners-images {
    display: flex;
    justify-content: space-between;
    height: 50px;
}
.partners-images img {
    opacity: 0.2;
}
.footer-bottom {
    background-color: var(--color-two);
}
.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-left > * {
    margin: 15px 0;
}
.footer-left img {
    width: 300px;
}
.social-icons {
    display: flex;
}
.box-icon {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    border: 2px solid var(--color-one);
    margin-right:10px;
}
.icons {
    margin: 0 10px;
    color: var(--white-one);
}
.footer-middle {
    display: flex;
    gap: 50px;
}
.footer-right {
    text-align: right;
}
.footer-right > * {
    margin: 15px 0;
}
.macro-theme {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}
input[type=text] {
    width: 380px;
    height: 60px;
    padding: 25px;
    border: none;
    border-radius: 35px;
    position: relative;
}
.icon-form {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background-color: var(--color-one);
    color: var(--white-one);
    position: absolute;
    right: 550px;
} 

</style>
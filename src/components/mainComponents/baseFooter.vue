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
            <div class="container-lg">

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
.footer-top {
    background-image: url('../../assets/reference/img/background-wave3.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 800px;
}
.partner {
    text-align: center;
    padding: 80px 0;
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
</style>
<template>
    <div class="card-hero container-xs">
        <h1>{{info.title}}</h1>
        <p>{{info.paragraph}}</p>
        <button class="btn yellow-btn"><i class="icon fa-solid fa-magnifying-glass"></i>{{info.firstButton}}</button>
        <button class="btn white-btn"><i class="icon fa-solid fa-user-plus"></i>{{info.secondButton}}</button>
    </div>
</template>

<script>

export default {
    name: 'CardHero',
    props: {
        info: Object,
    }
}
</script>

<style lang="scss" scoped>
.card-hero {
    text-align: center;
}
.card-hero > * {
    margin: 50px 0;
}
h1 {
    color: var(--white-one);
    font-size: var(--font-xxxl);
}
p {
    color: var(--white-one);
    font-size: var(--font-md);
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 35px;
}
.btn {
    margin: 10px 20px;
}
.icon {
    margin-right: 10px;
}
</style>
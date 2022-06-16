<template>
    <div class="mono-card container-xxs">
        <h2>{{info.title}}</h2>
        <p>{{info.paragraph}}</p>
        <button class="btn yellow-btn">{{info.firstButton}}</button>
    </div>
</template>

<script>
export default {
    name: 'MonoCardYBtn',
    props: {
        info: Object,
    }
}
</script>

<style lang="scss" scoped>
.mono-card > * {
    margin: 25px 0;
}
p {
    color: var(--gray-seven);
    font-weight: 400;
    line-height: 25px;
    margin-top: 10px;
}
</style>
<template>
    <div class="mono-card container-xxs">
        <h2>{{info.title}}</h2>
        <p>{{info.paragraph}}</p>
        <button class="btn red-btn" :class="{'yellow-hover' : info.hover === 'yellow-hover', 'red-hover' : info.hover === 'red-hover',}">{{info.firstButton}}</button>
    </div>
</template>

<script>
export default {
    name: 'MonoCardRBtn',
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
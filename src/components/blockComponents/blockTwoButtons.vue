<template>
    <div>
        <h1>{{info.title}}</h1>
        <p>{{info.paragraph}}</p>
        <button>{{info.firstButton}}</button>
        <button>{{info.secondButton}}</button>
    </div>
</template>

<script>
export default {
    name: 'blockTwoButtons',
    props: {
        info: Object,
    }
}
</script>

<style lang="scss" scoped>

</style>
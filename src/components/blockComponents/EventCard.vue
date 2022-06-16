<template>
    <div class="container-card event-card">
        <h3>{{info.title}}</h3>
        <span><i class="fa-regular fa-calendar-days"></i>{{info.date}}</span>
        <p>{{info.paragraph}}</p>
        <button class="btn red-btn" type="button"><i class="fa-solid fa-plus "></i>{{info.button}}</button>
    </div>
</template>

<script>
export default {
    name: 'EventCard',
    props: {
        info: Object,
    }
}
</script>

<style lang="scss" scoped>
h3 {
    color: var(--gray-two);
    font-size: var(--font-xl);
    font-weight: 800;
}
span {
    font-size: var(--font-sm);
}
span, p {
    color: var(--gray-nine);
}
.event-card {
    background-color: var(--white-one);
    padding: 30px 30px 60px 30px;
    border-radius: 15px;
    position: relative;
}
.event-card > * {
    margin: 5px 0;
}
button {
    position: absolute;
    bottom: -30px;
    left: 125px;
    box-shadow: 0.5px 0.5px 0.1px #666666;
}
</style>
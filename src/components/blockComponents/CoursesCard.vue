<template>
    <div class="card-courses">
        <img :src="info.image" alt="">
        <h3>{{info.title}}</h3>
        <p><i class="fa-regular fa-user"></i>{{info.teacher}}</p>
        <p><i class="fa-regular fa-money-bill-1"></i>{{info.price}}</p>
        <button class="btn red-btn" type="button"><i class="fa-solid fa-eye"></i>{{info.button}}</button>
    </div>
</template>

<script>
export default {
    name: 'CoursesCard',
     props: {
        info: Object,
    },
}
</script>

<style lang="scss" scoped>
.card-courses {
    text-align: center;
    padding: 50px;
    box-shadow: 1px 1px 20px 0.5px var(--gray-eight);
    border-radius: 10px;
    position: relative;
}
.card-courses > * {
    margin: 10px;
}
img {
    width: 60px;
}
button {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -40px;
    left: 40px;
}
button > * {
    margin: 0px 8px;
}
</style>
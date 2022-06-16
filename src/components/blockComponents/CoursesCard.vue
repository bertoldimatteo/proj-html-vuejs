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

</style>
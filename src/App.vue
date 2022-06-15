<template>
  <div id="app">
    <BaseHeader/>
    <BaseMain/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseFooter from './components/mainComponents/baseFooter.vue'
import BaseHeader from './components/mainComponents/baseHeader.vue'
import BaseMain from './components/mainComponents/baseMain.vue'


export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseMain,
    BaseFooter,

  }
}
</script>

<style lang="scss">
@import 'assets/style/global.scss'
</style>

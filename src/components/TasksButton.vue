<template lang="pug">
  button.button 
    span.button__text {{ text }}
</template>

<script>
export default {
  name: "TasksButton",
  props:{
    text: { type: String }
  },
  methods:{
    // more(){
    //   console.log('more');
    //   this.$store.commit('loadTasks');
    // }
  }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.button
  border: 1px solid #CDD3DB
  border-radius: 500px
  width: 100%
  height: 53px
  background-color: transparent
  cursor: pointer

  &__text
    font-family: Montserrat-Bold
    font-size: 15px
    line-height: 18px

</style>
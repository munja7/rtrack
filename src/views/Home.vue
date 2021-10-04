<template lang="pug">
  .container-main
    Tasks
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Tasks: () => import("@/components/Tasks.vue")
  }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.container-main
  max-width: calc( 100% - 160px )
  margin: 0 auto

</style>

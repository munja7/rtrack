<template lang="pug">
  #app
    DefaultLayout
  </div>
</template>

<script>
export default {
  components: {
    DefaultLayout: () => import("@/layouts/DefaultLayout.vue"),
  }
}
</script>

<style lang="sass">
@import './common/index'
#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $text-primary
  font-family: $font-family-base
  font-size: $font-size-base
  font-weight: $font-weight-base
  line-height: $line-height-base

html
  background-color: $background-primary

</style>

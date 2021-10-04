<template lang="pug">
  #app
    DefaultLayout
    //- #nav
    //-   router-link(to="/") Home |
    //-   router-link(to="/about") About
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

#nav 
  padding: 30px

  a 
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active 
      color: #42b983
    
  

</style>

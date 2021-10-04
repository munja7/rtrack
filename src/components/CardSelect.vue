<template lang="pug">
  //- .select-container
  //-   .select
  //-     .select__icon
  //-     span.select__text
  //-     .select__dropdown-icon
  //-   .select__options
  //-     ul.select__list
  //-       li.
  select.select
    option(v-for="(item, index) in selectList", :key="index").select__option 
      .select__icon 
      span.select__text {{ item.text }}
</template>

<script>
export default {
  name: 'CardSelect',
  props: {
    selectList: {
      type: Array,
      default: () => ([]),
    }
  }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.select
  -webkit-appearance: none
  -moz-appearance: none
  appearence: none
  background: url(../assets/images/Vector.png) no-repeat right
  padding: 5px
  width: 225px

  option
    background: url(../assets/images/fire.png) no-repeat right
    

  &__option
    background: url("../assets/images/fire.png") 0 0 no-repeat
    background: red

  &__icon
    width: 10px
    height: 10px
    background: url("../assets/images/fire.png") 0 0 no-repeat

  &__text
</style>
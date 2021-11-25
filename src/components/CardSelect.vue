<template lang="pug">
  .card-select
    v-select(
      label="text" 
      :options="selectList" 
      :clearable="false"
      :searchable="false"
      v-model="selected")
        template(#option="{ icon, text, style }")
          .card-select__option(:style="style")
            img(:src="require(`@/assets/images/${icon}`)").card-select__icon
            .card-select__text {{ text }}
        template(#selected-option="{ icon, text, style }")
          .card-select__option(:style="style")
            img(:src="require(`@/assets/images/${icon}`)").card-select__icon
            .card-select__text {{ text }}
</template>

<script>
export default {
  name: 'CardSelect',
  props: {
    selectList: {
      type: Array,
      default: () => ([]),
    }
  },
  data() {
    return {    
      selected: this.selectList[0]
    }
  },
  mounted(){console.log(this.selected);}
}
</script>

<style lang="sass">

@import '@/common/index'

.card-select
  width: 225px

  &__icon
    margin-right: 9px
    max-width: 15px
    height: 11px
    
  &__text
    font-size: 13px
    line-height: 18px

  &__option
    display: flex
    align-items: center
    width: 225px
    position: relative
    border-radius: 5px
    padding: 8px 20px 

  & .vs__search,
  & .vs__dropdown-toggle,
  & .vs__dropdown-menu 
    border: none

  & .vs__dropdown-menu
    margin-top: 35px
    width: 100%
    padding: 0

  & .vs__dropdown-menu li 
    padding: 0
    
    & .card-select__option
      border-radius: 0

  & .vs__actions
    display: flex
    align-items: center
    width: 25px
    position: absolute
    right: 0
    top: 7px

  & .vs__dropdown-toggle
    padding: 0

  & .vs__selected
    margin: 0 
    padding: 0 
    border: 0

    & .card-select__text
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      max-width: 125px

  & .vs__search
    position: absolute
    left: -20px

  & .vs__open-indicator 
    fill: #fff


</style>
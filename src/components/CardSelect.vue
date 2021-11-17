<template lang="pug">
  .select
    .myclass ertfref
    v-select(label="text" :options="selectList" :clearable="false")
      template(#option="{ icon, text, color }")
        .select__option
          img(:src="require(`@/assets/images/${icon}`)").select__icon
          .select__text {{ text }}
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
      color: 'red'    

    }
  },
}
</script>

<style scoped lang="sass">

@import '@/common/index'

.myclass
  color: v-bind(color)

.select
  width: 250px
    
  &__option
    display: flex
    align-items: center

  &__icon
    width: 10px
    height: 10px

  &__text
    color: v-bind('color')

</style>
<template lang="pug">
  .filter-select    
    v-select(
      label="text" 
      :options="selectList" 
      :clearable="false"
      :searchable="false"
      v-model="priority")
        template(#option="{ text, checked }")
          .filter-select__option
            label.filter-select__label
              input(type="checkbox" :checked="checked" ).filter-select__input
              span.filter-select__text {{ text }}
</template>

<script>
export default {
    name: 'FilterSelect',
    props: {
    selectList: {
        type: Array,
        default: () => ([]),
        }
    },
    data(){
        return{
          priority: '',
        }
    },
    methods:{
      show(){
        console.log(this.selectList[0].checked);
      }
    }
}
</script>

<style lang="sass">

@import '@/common/index'

.filter-select

</style>
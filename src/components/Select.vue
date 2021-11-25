<template lang="pug">
  .card-select
    v-select(
      label="text" 
      :options="selectList" 
      :clearable="false"
      :searchable="false"
      :reduce="text => text.id"
      :placeholder="placeholder"
      v-model="newval"
      @input="show")
        template(#option="{ icon, text, style, checked }" )
          .card-select__option(:style="style" v-if="property != 'filter'")
            img(:src="require(`@/assets/images/${icon}`)").card-select__icon
            .card-select__text {{ text }}
          label.card-select__option(:style="style" v-if="property === 'filter'")
            input(type="checkbox" v-model="checked") 
            .card-select__text {{ text }}
        template(#selected-option="{ icon, text, style }" )
          .card-select__option(:style="style" v-if="property != 'filter'")
            img(:src="require(`@/assets/images/${icon}`)").card-select__icon
            .card-select__text {{ text }}
          label.card-select__option(:style="style" v-if="property === 'filter'")
            input(type="checkbox" v-model="checked") 
            .card-select__text {{ text }}
            


</template>

<script>
export default {
  name: 'Select',
  props: {
    selectList: {
      type: Array,
      default: () => ([]),
    },
    value: {
      default: () => (null),
    },
    placeholder: {
      type: String,
      default: () => (''),
    },
    taskId: {
      type: Number,
      default: () => (1),
    },
    property:{
      type: String,
      default: () => ('')
    },
  },
  data() {
    return {    
      newval: null,
    }
  },
  mounted(){
    this.value && (this.newval = this.selectList.find(el => el.id === this.value));
  },
  computed:{
    selected(){
        console.log(('log', this.selectList.find(el => el.id === this.value)) || null);
        return this.selectList.find(el => el.id === this.value);     
    },
  },
  methods:{
      show(){
        if(this.property != 'filter'){
          this.selectList.find((el) => {
            if(el.id === this.value){
              this.$store.commit('setTaskStatus', {
              status: this.newval, taskId: this.taskId, property: this.property
              }); 
            }     
          });
        }
        else{console.log('selected', this.selected);
          this.$store.getters.tasksStatus(this.selected);
          

        }
      },
  },
  updated(){
    console.log(this.placeholder);
    console.log('newval', this.newval);
    console.log(this.$store.state.tasks);
  }
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
    left: -5px

  & .vs__open-indicator 
    fill: #fff


</style>
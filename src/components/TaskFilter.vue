<template lang="pug">
  .filter
    .filter__main
      .filter__header
        span.filter__text Сортировать: &nbsp;
        span.filter__sort-method по дате
        .filter__icon
      .filter__content
        .filter__select
          SelectCustom(:list="projects" :placeholder="'Проект'" :filter="true" :type="'project'")
        .filter__select
          SelectCustom(:list="status" :placeholder="'Статус'" :filter="true" :type="'status'")
        .filter__select
          SelectCustom(:list="priority" :placeholder="'Приоритет'" :filter="true" :type="'priority'")
        .filter__select
          SelectCustom(:list="author" :placeholder="'Автор'" :filter="true" :type="'author'")
        .filter__select
          SelectCustom(:list="particip" :placeholder="'Участие'" :filter="true" :type="'particip'")
    TasksButton(:text = "'Очистить фильтр'" @click.native="filter")

</template>

<script>
export default {
  name: "TaskFilter",
  components:{
    TasksButton: () => import("@/components/TasksButton.vue"),
    SelectCustom: () => import("@/components/SelectCustom.vue")
  },
  data(){
    return{
    }
  },
  computed:{
    projects(){ return this.$store.getters.getFilterSelecr('project'); },
    priority(){ return this.$store.getters.getFilterSelecr('priority'); },
    status(){ return this.$store.getters.getFilterSelecr('status'); },
    author(){ return this.$store.getters.getFilterSelecr('author'); },
    particip(){ return this.$store.state.particip; }
  },
  methods:{
    filter(){
      console.log('filters');
      this.$store.commit('resetFilters');
    }
  }
}
</script>

<style lang="sass">
@import '@/common/index'

.filter
  max-width: 100%
  text-align: center

  &__select
    width: 100%
    margin-bottom: 15px

    & .select__label
      display: flex
      align-items: center
      padding: 10px 0

      & .select__input
        display: block
        margin-right: 10px
        width: 17px
        height: 17px

      & .select__text
        font-size: 14px
        line-height: 18px

    & .vs__search
      border: none
      padding: 9px 20px

    & .vs__dropdown-option--highlight
      background-color: rgba(216, 230, 255, 0.62)
      color: $text-primary

    &:last-child
      margin-bottom: 0

  & .vs__actions
    display: flex
    align-items: center
    width: 25px
    position: absolute
    right: 8px
    top: 17px

  &__main
    background-color: $background-secondary
    border-radius: 5px
    margin-bottom: 20px

  &__header
    padding: 27px 20px
    border-bottom: 1px solid #E0E4E9
    display: flex
    align-items: center

  &__text
    font-size: 14px
    line-height: 17px
    color: $text-primary

  &__sort-method
    font-size: 14px
    line-height: 15px
    border-bottom: 1px solid
    color: #93979B

  &__icon
    width: 20px
    height: 20px
    background: url(../assets/images/sort.png) no-repeat
    margin-left: auto

  &__content
    padding: 20px
    padding-top: 30px
  
  
    
    

</style>
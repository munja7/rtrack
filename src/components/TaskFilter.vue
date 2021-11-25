<template lang="pug">
  .filter
    .filter__main
      .filter__header
        span.filter__text Сортировать: &nbsp;
        span.filter__sort-method по дате
        .filter__icon
      .filter__content
        .filter__select
          SelectCustom(:list="projects" :placeholder="'Проект'")
        .filter__select
          SelectCustom(:list="status" :placeholder="'Статус'")
        .filter__select
          SelectCustom(:list="priority" :placeholder="'Приоритет'")
        .filter__select
          SelectCustom(:list="author" :placeholder="'Автор'")
        .filter__select
          SelectCustom(:list="particip" :placeholder="'Участие'")
    TasksButton(:text = "'Очистить фильтр'")

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
    projects(){ return this.$store.state.projects; },
    priority(){ return this.$store.state.priority; },
    status(){ return this.$store.state.status; },
    author(){ return this.$store.state.author; },
    particip(){ return this.$store.state.particip; }
  }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.filter
  max-width: 100%
  text-align: center

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
  
  &__select
    width: 100%
    margin-bottom: 15px
    height: 52px

    & .vs__search
      border: none
      padding: 17px 20px

    &:last-child
      margin-bottom: 0
    
    

</style>
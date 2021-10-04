<template lang="pug">
  .filter
    .filter__main
      .filter__header
        span.filter__text Сортировать: &nbsp;
        span.filter__sort-method по дате
        .filter__icon
      .filter__content
        select
          option Проект
        select
          option Статус
        select
          option Приоритет
        select
          option Автор
        select
          option Участие
    TasksButton(:text = "'Очистить фильтр'")
</template>

<script>
export default {
  name: "TaskFilter",
  components:{
    TasksButton: () => import("@/components/TasksButton.vue")
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

  select
    width: 100%
    margin-bottom: 15px
    height: 52px

    &:last-child
      margin-bottom: 0
    

</style>
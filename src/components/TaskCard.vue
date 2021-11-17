<template lang="pug">
    .card
      .card__header
        h5.card__proj-name {{ task.project }} &mdash; 
        span.card__proj-descr &nbsp; {{ task.descr }}
      .card__content
        .card__col-left
          CardSelect(:selectList = "statuses").card__select
          //- CardSelect(:selectList = "task.author").card__select
          //- CardSelect(:selectList = "task.priority").card__select
        .card__col-right
          .card__date {{ task.date }}
          .card__sub-row
            span.card__comments-count {{ task.comments }}
            .card__comments-icon
            span.card__likes-count {{ task.likes }}
            .card__likes-icon

</template>

<script>
export default {
  name: 'TaskCard',
  props:{
    task: {
      type: Object,
      default: () => ({}),
  }
},
  components: {
    CardSelect: () => import("@/components/CardSelect.vue")
  },
  data() {
    return {
      statuses: [
              {
                icon: 'in_progress.png',
                text: 'Сделан',
                color: '#D9F5E6',
              },
              {
                icon: 'in_progress.png',
                text: 'Нужна проверка',
                color: '#D9F5E6',
              },
              {
                icon: 'in_progress.png',
                text: 'Нужна оценка',
                color: '#D9F5E6',
              },
              {
                icon: 'in_progress.png',
                text: 'На утверждении',
                color: '#D9F5E6',
              },
              {
                icon: 'in_progress.png',
                text: 'Нужны доработки',
                color: '#D9F5E6',
              },
              {
                icon: 'in_progress.png',
                text: 'Новый',
                color: '#D9F5E6',
              },
              {
                icon: 'in_progress.png',
                text: 'Все ОК',
                color: '#D9F5E6',
              },
            ]
    }
  }
}
</script>

<style scoped lang="sass">
@import '@/common/index'


.card
  background-color: $background-secondary
  padding: 18px 29px 25px 30px

  &__select
    margin-right: 10px

  &__header
    display: flex
    max-width: 86%

  &__proj-name
    font-family: "Montserrat-Bold"
    font-size: 15px
    line-height: 18px
    font-weight: $font-weight-bold
    white-space: nowrap

  &__proj-descr
    font-size: 15px
    line-height: 18px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

  &__content
    display: flex
    justify-content: space-between

  &__col-left
    display: flex
    width: 87%
    padding-top: 12px

  &__status-select

  &__author-select

  &__priority-select

  &__col-right
    width: 12%
    display: flex
    flex-wrap: wrap
    justify-content: end

  &__date
    font-family: "Gilroy-Regular"
    font-size: 12px
    line-height: 15px
    color: $text-secondary
    margin-bottom: 18px
    margin-top: -3px

  &__sub-row
    display: flex
    align-items: center

  &__comments-count
    font-size: 13px
    line-height: 16px
    color: $text-secondary
    margin-right: 8px

  &__comments-icon
    width: 17px
    height: 14px
    background: url(../assets/images/comment.png) no-repeat
    margin-right: 20px

  &__likes-count
    font-size: 13px
    line-height: 16px
    color: $text-secondary
    margin-right: 8px

  &__likes-icon
    width: 17px
    height: 17px
    background: url(../assets/images/star-sm.png) no-repeat right
  

</style>
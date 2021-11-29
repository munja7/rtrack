<template lang="pug">
    .card
      .card__header
        h5.card__proj-name {{ project }} &mdash; 
        span.card__proj-descr &nbsp; {{ task.descr }}
      .card__content
        .card__col-left
          .card__select
            SelectCustom(:list="status" :value="task.status" :taskId="task.id", :type="'status'")
          .card__select
            SelectCustom(:list="author" :value="task.author" :taskId="task.id", :type="'author'")
          .card__select
            SelectCustom(:list="priority" :value="task.priority" :taskId="task.id", :type="'priority'")
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
    Select: () => import("@/components/Select.vue"),
    SelectCustom: () => import("@/components/SelectCustom.vue")
  },
  data() {
    return {
    }
  },
  computed:{
    priority(){
      return this.$store.state.selects.priority;
    },
    author(){
      return this.$store.state.selects.author
    },
    status(){
      return this.$store.state.selects.status
    },
    project(){
      return this.$store.getters.getTaskProject(this.task.project);
    },
  }
}
</script>

<style lang="sass">
@import '@/common/index'


.card
  background-color: $background-secondary
  padding: 18px 29px 25px 30px

  &__select
    margin-right: 10px
    width: 225px

    & .select__option
      display: flex
      align-items: center
      width: 225px
      position: relative
      border-radius: 5px
      padding: 8px 20px 

    & .select__icon
      margin-right: 9px
      max-width: 15px
      height: 11px

    & .select__text
      font-size: 13px
      line-height: 18px

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

      & .select__option
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

    & .select__text
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      max-width: 125px

  & .vs__search
    position: absolute
    left: -5px

  & .vs__open-indicator 
    fill: #fff

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
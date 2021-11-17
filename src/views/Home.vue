<template lang="pug">
.home
  .container-main
    Tasks.home__tasks
    .content-container
      .content-container__column-left
        Learning.home__learning
        GeneralInfo.home__general-info
        Videos.home__videos
        Reviews.home__reviews
      .content-container__column-right
        .home__aside-menu
          ul.home__aside-menu-list
            li.home__aside-menu-item(v-for="item, index in menu" 
            :class="{ 'home__aside-menu-item--active': activeItem === index}")
              a(v-scroll-to="{el: item.link}",
              @click.prevent="activeItem = index").home__aside-menu-link {{ item.text }}
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Tasks: () => import("@/components/Tasks.vue"),
    Learning: () => import("@/components/Learning.vue"),
    GeneralInfo: () => import("@/components/GeneralInfo.vue"),
    Videos: () => import("@/components/Videos.vue"),
    Reviews: () => import("@/components/Reviews.vue"),
  },
   data() {
      return {
        menu: [
          {
            link: '.home__learning',
            text: "Краткое обучение",
          },
          {
            link: '.home__general-info',
            text: "Общая информация",
          },
          {
            link: '.home__videos',
            text: "Видео-уроки",
          },
          {
            link: '.home__reviews',
            text: "Отзывы",
          },
        ],
        value: null,
        activeItem: 0,
      }
    }
}
</script>

<style scoped lang="sass">
@import '@/common/index'
@import "vue-select/src/scss/vue-select.scss"

.home

  &__aside-menu
    position: sticky
    top: 15%

  &__aside-menu-list

  &__aside-menu-item
    border-bottom: 1px solid #CDD3DB

    &:last-child
      border-bottom: none

    &--active
      background-color: $background-secondary
      font-family: "Montserrat-Bold"
      border-radius: 5px
      border-bottom: none
    
  &__aside-menu-link, &:visited
    display: flex
    align-items: center
    padding: 0 30px
    height: 54px
    color: $text-primary
    font-size: 15px
    line-height: 18px
    cursor: pointer

    &:active
      background-color: $background-secondary
      font-family: "Montserrat-Bold"

.container-main
  max-width: calc( 100% - 160px )
  margin: 0 auto

.content-container
  display: flex

  &__column-left
    width: 68.8%

  &__column-right
    position: relative
    padding-left: 50px
    width: 31%

.home__tasks
  margin-top: 64px
  margin-bottom: 69px

.home__learning
  margin-bottom: 42px

.home__general-info
  margin-bottom: 35px

.home__videos
  margin-bottom: 50px

.home__reviews
  margin-bottom: 100px


</style>

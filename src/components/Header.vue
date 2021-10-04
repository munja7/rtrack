<template lang="pug">
  .header
    .container-main
      .header__logo
        .header__logo-image
        span.header__logo-text Rtrack
      nav.header__menu
        ul.header__menu-list
          li(v-for="(item, index) in menu", :key="index", 
            :class="[ item === 'Проекты' ? 'header__menu-item-projects' : '', 'header__menu-item']")
            a(href="#").header__menu-link {{ item }}
            span(v-if="item === 'Проекты'").header__dropdown-arrow 
      .header__user-area
        .header__star
          img(src = "@/assets/images/star.png")
        .header__bell
          img(src = "@/assets/images/bell.png")
        .header__user-profile
          .header__avatar
            img(src = "@/assets/images/avatar.png").header__avatar-image
            span.header__dropdown-arrow
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      menu: ['Проекты', 'Задачи для меня','База знаний','Все задачи','Просмотренные'],
    }
  },
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.header
  background-color: $background-secondary
  width: 100%

  .container-main
    display: flex
    max-width: calc( 100% - 163px )
    margin: 0 auto
    padding: 20px 0 25px 0
    align-items: center

  &__logo
    display: flex
    align-items: center
    margin-right: 60px

  &__logo-image
    width: 34px
    height: 30px
    flex-shrink: 0
    margin-right: 15px
    background: url("../assets/images/Path 1.png") 0 0 no-repeat

  &__logo-img
    object-fit: cover

  &__logo-text
    font-family: "Montserrat-ExtraBold"
    font-size: 22px
    line-height: 27px
    font-weight: $font-weight-extra-bold

  &__menu

  &__menu-list
    display: flex
    margin: 0 -17.5px

  &__menu-item
    padding: 0 17.5px

  &__menu-item-projects
    &:hover
      cursor: pointer
      
      .header__dropdown-arrow
        transform: rotate(180deg)
        transition: all .3s  ease-in-out

  &__menu-link
    color: $text-primary
    font-size: 14px
    line-height: 17px

  &__user-area
    display: flex
    align-items: center
    margin-left: auto

  &__star
    width: 25px
    height: 22px
    cursor: pointer
    margin-right: 23px

  &__bell
    width: 21px
    height: 24px
    cursor: pointer
    margin-right: 45px

  &__user-profile
    display: flex
    align-items: center

  &__avatar
    display: flex
    align-items: center

    &:hover
      cursor: pointer
      
      .header__dropdown-arrow
        transform: rotate(180deg)
        transition: all .3s  ease-in-out

  &__avatar-image
    display: block
    border-radius: 50%
    width: 42px
    height: 42px

  &__dropdown-arrow
    display: inline-block
    background: url("../assets/images/Vector.png") no-repeat right center
    width: 10px
    height: 5px
    margin-left: 10px
    transition: all .3s  ease-in-out

</style>
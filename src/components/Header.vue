<template lang="pug">
  .header
    .container-main
      .header__logo
        .header__logo-image
        span.header__logo-text Rtrack
      nav.header__menu
        ul.header__menu-list
          li(v-for="(item, index) in menu", :key="index").header__menu-item
            template(v-if="item.subMenu && item.subMenu.length > 0")
              MenuDropdown
                span(slot="target").header__menu-link {{ item.label }}
                ProjectsMenu(slot="menu", :menu="item.subMenu")         
            template(v-else)
              a(:href="item.url").header__menu-link {{ item.label }}
      .header__user-area
        .header__star
          img(src = "@/assets/images/star.png")
        .header__bell
          img(src = "@/assets/images/bell.png")
        .header__user-profile
          MenuDropdown
            .header__avatar(slot="target")
              img(src = "@/assets/images/avatar.png").header__avatar-image
            UserMenu(slot="menu")
</template>

<script>
import MenuDropdown from "@/components/MenuDropdown";

export default {
  name: 'Header',
  components: {
    MenuDropdown,
    UserMenu: () => import("@/components/UserMenu.vue"),
    ProjectsMenu: () => import("../components/ProjectsMenu.vue"),
  },
  data(){
    return{
      menu: [
        {
          label: 'Проекты',
          subMenu: [
            {
              label: 'RS digital',
              is_favorite: true,
              my_tasks: 4,
              all_tasks: 5,
            },
            {
              label: 'Rocketware',
              is_favorite: true,
              my_tasks: 4,
              all_tasks: 12,
            },
            {
              label: 'Самообразование',
              is_favorite: true,
              my_tasks: 0,
              all_tasks: 10,
            },
            {
              label: 'Mecto.ru',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 45,
            },
            {
              label: 'Travel-promo',
              is_favorite: false,
              my_tasks: 22,
              all_tasks: 8,
            },
            {
              label: 'B2B оружие',
              is_favorite: false,
              my_tasks: 9,
              all_tasks: 30,
            },
            {
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
            {
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
            {
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
            {
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
            {
              label: 'Кинотеатр "Москва"',
              is_favorite: false,
              my_tasks: 0,
              all_tasks: 54,
            },
          ],
        },
        {
          label: 'Задачи для меня',
          url: '#',
        },
        {
          label: 'База знаний',
          url: '#',
        },
        {
          label: 'Все задачи',
          url: '#',
        },
        {
          label: 'Просмотренные',
          url: '#',
        },
      ],
      userMenu: ["Профиль","Статистика","Токены","API",],
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
    padding: 17px 0 20px 0
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
    display: flex
    align-items: center

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

  &__avatar-image
    display: block
    border-radius: 50%
    width: 42px
    height: 42px

  &__user-menu
    margin: 15px 20px 20px 20px

  &__projects-menu
    margin: 30px 25px

</style>
<template lang="pug">
  .projects
    vue-scroll
      ul.projects__list
        li(v-for="item in menu").projects__item
          .projects__favourite(@click="item.is_favorite = !item.is_favorite")
            .projects__is-favourite(v-if="item.is_favorite")
              font-awesome-icon( icon="star" )
            .projects__not-favourite(v-else)
              font-awesome-icon( :icon="['far', 'star']")
          .projects__title {{ item.label }}
          .projects__tasks
            .projects__my-tasks(v-if="item.my_tasks > 0") {{ item.my_tasks }}
            .projects__total-tasks {{ item.all_tasks }}
    .projects__bottom-transparent
    
</template>

<script>
export default {
  name: 'ProjectsMenu',
  props:{
    menu:{
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.projects
  min-width: 350px
  height: 325px
  position: relative
  padding: 30px 0 30px 25px

  &__list
    font-family: "Montserrat"
    margin-right: 25px

  &__item
    display: flex
    align-items: center
    margin-bottom: 15px

    &:last-child
      margin-bottom: 0
				
  &__favourite
    cursor: pointer
    margin-right: 9px

  &__is-favourite
    color: #FFB661

  &__not-favourite
    color: $text-primary
    opacity: 0.5
				
  &__title
    font-size: 14px
    line-height: 18px
    opacity: 0.5
    cursor: pointer

    &:hover
      text-decoration: underline
	
  &__tasks
    margin-left: auto
    display: flex
	
  &__my-tasks
    width: 35px
    height: 25px
    border-radius: 5px
    display: flex
    align-items: center
    justify-content: center
    background-color: #0066FF
    color: $background-secondary
    font-size: 14px
    line-height: 17px
    margin-right: 5px
    cursor: pointer
		
  &__total-tasks
    width: 35px
    height: 25px
    border-radius: 5px
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid #CDD3DB
    font-size: 14px
    line-height: 17px
    color: #93979B
    cursor: pointer

  &__bottom-transparent
    position: absolute
    bottom: 0
    left: 0
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)
    width: 100%
    height: 76px

</style>
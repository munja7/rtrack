<template lang="pug">
  .videos
    .videos__title Видео-уроки
    .videos__content
      .videos__card-container(v-for="card in cards")
        VideoCard(:card="card").videos__card
    
</template>

<script>
export default {
  name: 'Videos',
  components: {
    VideoCard: () => import("@/components/VideoCard.vue"),
  },
  data(){
    return {
      cards: [
        {
          poster: "1.png",
          video: "1.mp4",
          descr: "Команда и управление людьми",
        },
        {
          poster: "2.png",
          video: "2.mp4",
          descr: "Мотивирование подчиненных и коллег к участию в улучшениях",
        },
        {
          poster: "3.png",
          video: "3.mp4",
          descr: "Навык постоянного личностного развития",
        },
        {
          poster: "4.png",
          video: "1.mp4",
          descr: "Принятие на себя лидерства",
        },
        {
          poster: "5.png",
          video: "2.mp4",
          descr: "Личная эффективность",
        },
        {
          poster: "6.png",
          video: "3.mp4",
          descr: "Факторы влияющие на вовлеченность в коллективе",
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.videos

  &__title
    font-family: "Montserrat-Bold"
    font-size: 25px
    line-height: 37px
    margin-bottom: 24px

  &__content
    display: flex
    flex-wrap: wrap
    margin: 0 -10px
    
  &__card
    margin-bottom: 20px

  &__card-container
    padding: 0 10px
    width: 33.3%

</style>
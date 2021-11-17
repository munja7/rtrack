<template lang="pug">
  .video-card
    .video-card__content
      Video(:video="card.video", :poster="card.poster")
    .video-card__description {{ card.descr }}
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    card: {
      type: Object,
      default: () => ({}),
    }
  },
  components: {
    Video: () => import("@/components/Video.vue"),
  },
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.video-card
  width: 100%
  border: 1px solid #CDD3DB
  border-radius: 5px

  &__content
    margin-bottom: 17px
    width: 100%

  &__description
    font-family: "Montserrat-Bold"
    font-size: 14px
    line-height: 21px
    padding: 0 15px
    min-height: 70px

</style>
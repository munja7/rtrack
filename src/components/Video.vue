<template lang="pug">
  .video
    .video__preview
      video.video__content(:src="require(`@/assets/video/${video}`)", 
      preload="metadata", 
      :poster="require(`@/assets/images/${poster}`)", 
      ref="video")
      button(v-if="paused" @click="toggleVideo").video__button
        .video__button-icon
      .video__time(v-if="paused") {{ time }}

</template>

<script>
export default {
  name: 'Video',
  props: {
    video: {
      type: String,
      default: () => ('')
    },
    poster: {
      type: String,
      default: () => ('')
    },
  },
  data(){
    return {
      time: null,
      paused: true,
      ongoing: false
    }
  },
  methods: {
    getVideoTime(){
      let i = setInterval(() => {
      if(this.$refs.video.readyState > 0){
        this.transformTime(this.$refs.video.duration);
        clearInterval(i);
      }
      return "00:00";

    }, 200);
    },
    toggleVideo(){
      this.$refs.video.controls = true;
      this.paused = false;
      this.$refs.video.play();
      // if(this.$refs.video.currentTime > 0){
      //   this.transformTime(this.$refs.video.currentTime);
      
      // }
      // this.paused ? this.play() : this.pause();
      // this.paused = this.$refs.video.paused;
    },
    // play(){
    //   this.ongoing = true;
    //   this.$refs.video.play();
    // },
    // pause() {
    //   this.$refs.video.pause();
    // },
    transformTime(time){
      let min = parseInt(time / 60, 10) ? parseInt(time / 60, 10) : "0";
      let sec = (Math.floor(time % 60) >= 10) ? Math.floor(time % 60) : `0${Math.floor(time % 60)}`
      this.time = `${min}:${sec}`;
    },
  },
  mounted(){
    this.getVideoTime();
  },
}
</script>

<style lang="sass" scoped>
@import '@/common/index'

.video
    
  &__preview
    width: 100%
    position: relative
    display: flex
    align-items: center
    justify-content: center
    border-radius: 5px

  &__content
    width: 100%
    border-radius: 5px

  &__button
    background-color: rgba(0, 0, 0, 0.7)
    opacity: 0.65
    position: absolute
    border: none
    padding: 0
    border-radius: 50%
    width: 60px
    height: 60px
    cursor: pointer
    transition: all 0.1s

    &:hover
      border: 3px solid $background-secondary
      width: 73px
      height: 73px

  &__time
    position: absolute
    width: 46px
    background: rgba(0, 0, 0, 0.7)
    border-radius: 2px
    left: 10px
    bottom: 10px
    color: $background-secondary
    padding: 0 5px
    font-size: 14px
    line-height: 22px
    text-align: center

  &__button-icon
    display: inline-block
    border-top: 10px solid transparent
    border-left: 17px solid $background-secondary
    border-bottom: 10px solid transparent
    border-radius: 3px
    
</style>
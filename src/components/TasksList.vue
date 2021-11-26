<template lang="pug">
    .tasks-list
      TaskCard(v-for="task in tasks", :key="task.id" :task = "task").tasks-list__item
</template>

<script>
export default {
    name: 'TasksList',
    components: {
      TaskCard: () => import("@/components/TaskCard.vue")
    },
    data(){
      return{
      }
    },
    computed:{
      tasks(){
        return this.$store.getters.getTasks;
      }
    }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.tasks-list

  &__item
    margin-bottom: 2px
</style>
<template lang="pug">
  .tasks
    h1.tasks__title Мои задачи
    .tasks__container
      .tasks__column-left
        TasksList.tasks__tasklist
        TasksButton(:text = "'Загрузить еще'" @click.native="loadMore")
      .tasks__column-right 
        TaskFilter

</template>

<script>
export default {
    name: 'Tasks',
    components:{
      TasksList: () => import("@/components/TasksList.vue"),
      TaskFilter: () => import("@/components/TaskFilter.vue"),
      TasksButton: () => import("@/components/TasksButton.vue")
    },
    methods:{
      loadMore(){
        this.$store.commit('loadTasks');
      }
    }
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.tasks

  &__title
    font-family: "Montserrat-Bold"
    font-size: 50px
    line-height: 37px
    margin-bottom: 41px

  &__container
    display: flex
  
  &__column-left
    width: 68.8%

  &__tasklist
    margin-bottom: 20px

  &__column-right
    padding-left: 50px
    width: 31%

</style>
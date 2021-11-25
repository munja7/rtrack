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
        // tasks: [
        //   {
        //     id: 1,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 2,
        //     status: 5,
        //     author: 'Константин Сергиенко',
        //     priority: 1,
        //   },
        //   {
        //     id: 2,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитиюСформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 10,
        //     likes: 2,
        //     status: 1,
        //     author: 'Константин Сергиенко',
        //     priority: 2,
        //   },
        //   {
        //     id: 3,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 102,
        //     likes: 25,
        //     status: 4,
        //     author: 'Константин Сергиенко',
        //     priority: 1,
        //   },
        //   {
        //     id: 4,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 2,
        //     status: 2,
        //     author: 'Константин Сергиенко',
        //     priority: 5,
        //   },
        //   {
        //     id: 5,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 277,
        //     status: 1,
        //     author: 'Константин Сергиенко',
        //     priority: 1,
        //   },
        //   {
        //     id: 6,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 2,
        //     status: 1,
        //     author: 'Константин Сергиенко',
        //     priority: 2,
        //   },
        //   {
        //     id: 7,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 2,
        //     status: 6,
        //     author: 'Константин Сергиенко',
        //     priority: 3,
        //   },
        //   {
        //     id: 8,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 2,
        //     status: 1,
        //     author: 'Константин Сергиенко',
        //     priority: 6,
        //   },
        //   {
        //     id: 9,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 2,
        //     status: 1,
        //     author: 'Константин Сергиенко',
        //     priority: 7,
        //   },
        //   {
        //     id: 10,
        //     project: "Риск культура",
        //     descr: "Сформировать мотивацию к дальнейшему развитию",
        //     date: "06.05.2020",
        //     comments: 0,
        //     likes: 2,
        //     status: 1,
        //     author: 'Константин Сергиенко',
        //     priority: 6,
        //   },
        // ],
      }
    },
    computed:{
      tasks(){
        return this.$store.state.tasks;
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
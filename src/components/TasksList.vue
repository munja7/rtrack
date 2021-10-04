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
        tasks: [
          {
            id: 1,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: 'in_progress.png',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 2,
          },
          {
            id: 2,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитиюСформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 10,
            likes: 2,
          },
          {
            id: 3,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 102,
            likes: 25,
          },
          {
            id: 4,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 2,
          },
          {
            id: 5,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 277,
          },
          {
            id: 6,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 2,
          },
          {
            id: 7,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 2,
          },
          {
            id: 8,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 2,
          },
          {
            id: 9,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 2,
          },
          {
            id: 10,
            project: "Риск культура",
            descr: "Сформировать мотивацию к дальнейшему развитию",
            status: [
              {
                icon: '',
                text: 'Сделан',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна проверка',
                color: '',
              },
              {
                icon: '',
                text: 'Нужна оценка',
                color: '',
              },
              {
                icon: '',
                text: 'На утверждении',
                color: '',
              },
              {
                icon: '',
                text: 'Нужны доработки',
                color: '',
              },
              {
                icon: '',
                text: 'Новый',
                color: '',
              },
              {
                icon: '',
                text: 'Все ОК',
                color: '',
              },],
            author: [
              {
                icon: '',
                text: "Константин Сергиенко",
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
              {
                icon: '',
                text: "Константин Сергиенко"
              },
            ],
            priority: [
              {
                icon: '',
                text: 'Минимальный',
                color: '',
              },
              {
                icon: '',
                text: 'Низкий',
                color: '',
              },
              {
                icon: '',
                text: 'Средний',
                color: '',
              },
              {
                icon: '',
                text: 'Высокий',
                color: '',
              },
              {
                icon: '',
                text: 'Критичный баг',
                color: '',
              },
              {
                icon: '',
                text: 'Максимум',
                color: '',
              }
            ],
            date: "06.05.2020",
            comments: 0,
            likes: 2,
          },
        ],
      }
    },
}
</script>

<style scoped lang="sass">
@import '@/common/index'

.tasks-list

  &__item
    margin-bottom: 2px
</style>
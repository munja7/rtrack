import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: null,
    filterProp: null,
    filteredTasks: [],
    tasks: [
      {
        id: 1,
        project: 4,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 2,
        status: 5,
        author: 1,
        priority: 1,
      },
      {
        id: 2,
        project: 4,
        descr: "Сформировать мотивацию к дальнейшему развитиюСформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 10,
        likes: 2,
        status: 1,
        author: 2,
        priority: 2,
      },
      {
        id: 3,
        project: 4,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 102,
        likes: 25,
        status: 4,
        author: 2,
        priority: 1,
      },
      {
        id: 4,
        project: 4,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 2,
        status: 2,
        author: 5,
        priority: 5,
      },
      {
        id: 5,
        project: 4,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 277,
        status: 1,
        author: 3,
        priority: 1,
      },
      {
        id: 6,
        project: 3,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 2,
        status: 1,
        author: 4,
        priority: 2,
      },
      {
        id: 7,
        project: 3,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 2,
        status: 6,
        author: 4,
        priority: 3,
      },
      {
        id: 8,
        project: 3,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 2,
        status: 1,
        author: 1,
        priority: 6,
      },
      {
        id: 9,
        project: 2,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 2,
        status: 1,
        author: 6,
        priority: 6,
      },
      {
        id: 10,
        project: 1,
        descr: "Сформировать мотивацию к дальнейшему развитию",
        date: "06.05.2020",
        comments: 0,
        likes: 2,
        status: 1,
        author: 7,
        priority: 6,
      },
    ],
    // status: [
    //   {
    //     id: 1,
    //     icon: 'in_progress.png',
    //     text: 'В работе',
    //     checked: false,
    //     style: {backgroundColor: '#D9F5E6', color: '#32C979'},
    //   },
    //   {
    //     id: 2,
    //     icon: 'in_progress.png',
    //     text: 'Сделан',
    //     checked: false,
    //     style: {backgroundColor: '#4ca197', color: '#326b63'},
    //   },
    //   {
    //     id: 3,
    //     icon: 'in_progress.png',
    //     text: 'Нужна проверка',
    //     checked: false,
    //     style: {backgroundColor: '#c7ca6a', color: '#75763e'},
    //   },
    //   {
    //     id: 4,
    //     icon: 'in_progress.png',
    //     text: 'Нужна оценка',
    //     checked: false,
    //     style: {backgroundColor: '#8d97d2', color: '#505678'},
    //   },
    //   {
    //     id: 5,
    //     icon: 'in_progress.png',
    //     text: 'На утверждении',
    //     checked: false,
    //     style: {backgroundColor: '#9362ff', color: '#4f368c'},
    //   },
    //   {
    //     id: 6,
    //     icon: 'in_progress.png',
    //     text: 'Нужны доработки',
    //     checked: false,
    //     style: {backgroundColor: '#e14c4c', color: '#792828'},
    //   },
    //   {
    //     id: 7,
    //     icon: 'in_progress.png',
    //     text: 'Новый',
    //     checked: false,
    //     style: {backgroundColor: '#f77b72', color: '#a5524c'},
    //   },
    //   {
    //     id: 8,
    //     icon: 'in_progress.png',
    //     text: 'Все ОК',
    //     checked: false,
    //     style: {backgroundColor: '#b9db93', color: '#768b5d'},
    //   },
    // ],
    filterStatus: [],
    particip: [],

    selects:{
      project: [
        {
          id: 1,
          text: "RS digital",
          tasks: 1,
          checked: false,
        },
        {
          id: 2,
          text: "Самообразование",
          tasks: 1,
          checked: false,
        },
        {
          id: 3,
          text: "Travel-promo",
          tasks: 3,
          checked: false,
        },
        {
          id: 4,
          text: "Риск культура",
          tasks: 5,
          checked: false,
        },
      ],
      priority: [
        {
          id: 1,
          icon: 'fire.png',
          text: 'Минимальный',
          checked: false,
          style: {backgroundColor: '#fff8e1', color: '#dad4c1'},
        },
        {
          id: 2,
          icon: 'fire.png',
          text: 'Низкий',
          checked: false,
          style: {backgroundColor: '#F9E6D9', color: '#93979B'},
        },
        {
          id: 3,
          icon: 'fire.png',
          text: 'Средний',
          checked: false,
          style: {backgroundColor: '#ffe082', color: '#ac9758'},
        },
        {
          id: 4,
          icon: 'fire.png',
          text: 'Высокий',
          checked: false,
          style: {backgroundColor: '#ffcc80', color: '#aa8755'},
        },
        {
          id: 5,
          icon: 'fire.png',
          text: 'Критичный баг',
          checked: false,
          style: {backgroundColor: '#ffae2c', color: '#b06100'},
        },
        {
          id: 6,
          icon: 'fire.png',
          text: 'Максимум',
          checked: false,
          style: {backgroundColor: '#F9E6D9', color: '#FF8330'},
        }
      ],
      author: [
        {
          id: 1,
          icon: 'person.png',
          text: "Константин Сергиенко",
          checked: false,
          style: {backgroundColor: '#F1F3F5', color: '#93979B'},
        },
        {
          id: 2,
          icon: 'person.png',
          text: "Андрей Игнатов",
          checked: false,
          style: {backgroundColor: '#F1F3F5', color: '#93979B'},
        },
        {
          id: 3,
          icon: 'person.png',
          text: "Андрей Игнатов",
          checked: false,
          style: {backgroundColor: '#F1F3F5', color: '#93979B'},
        },
        {
          id: 4,
          icon: 'person.png',
          text: "Варвара Третьякова",
          checked: false,
          style: {backgroundColor: '#F1F3F5', color: '#93979B'},
        },
        {
          id: 5,
          icon: 'person.png',
          text: "Николай Козин",
          checked: false,
          style: {backgroundColor: '#F1F3F5', color: '#93979B'},
        },
        {
          id: 6,
          icon: 'person.png',
          text: "Константин Сергиенко",
          checked: false,
          style: {backgroundColor: '#F1F3F5', color: '#93979B'},
        },
        {
          id: 7,
          icon: 'person.png',
          text: "Степан Котов",
          checked: false,
          style: {backgroundColor: '#F1F3F5', color: '#93979B'},
        },
      ],
      status: [
        {
          id: 1,
          icon: 'in_progress.png',
          text: 'В работе',
          checked: false,
          style: {backgroundColor: '#D9F5E6', color: '#32C979'},
        },
        {
          id: 2,
          icon: 'in_progress.png',
          text: 'Сделан',
          checked: false,
          style: {backgroundColor: '#4ca197', color: '#326b63'},
        },
        {
          id: 3,
          icon: 'in_progress.png',
          text: 'Нужна проверка',
          checked: false,
          style: {backgroundColor: '#c7ca6a', color: '#75763e'},
        },
        {
          id: 4,
          icon: 'in_progress.png',
          text: 'Нужна оценка',
          checked: false,
          style: {backgroundColor: '#8d97d2', color: '#505678'},
        },
        {
          id: 5,
          icon: 'in_progress.png',
          text: 'На утверждении',
          checked: false,
          style: {backgroundColor: '#9362ff', color: '#4f368c'},
        },
        {
          id: 6,
          icon: 'in_progress.png',
          text: 'Нужны доработки',
          checked: false,
          style: {backgroundColor: '#e14c4c', color: '#792828'},
        },
        {
          id: 7,
          icon: 'in_progress.png',
          text: 'Новый',
          checked: false,
          style: {backgroundColor: '#f77b72', color: '#a5524c'},
        },
        {
          id: 8,
          icon: 'in_progress.png',
          text: 'Все ОК',
          checked: false,
          style: {backgroundColor: '#b9db93', color: '#768b5d'},
        },
      ],
    },

    filteredSelect:{
      status: [],
      project: [],
      priority: [],
      author: [],
      particip: [],
    }
  },
  getters: {
    getFilterSelecr: state => name => {
      state.filteredSelect[name] = [];
      const tasks = state.filteredTasks.length > 0 ? state.filteredTasks : state.tasks;
      tasks.forEach((elTasks) => {
        state.selects[name].forEach((el) => {
          if(el.id === elTasks[name])
            state.filteredSelect[name].push(el);
        })
      })
      state.filteredSelect[name] = state.filteredSelect[name].filter(function(elem, pos) {
        return state.filteredSelect[name].indexOf(elem) == pos;
    });
      return state.filteredSelect[name];
    },
    // getFilterStatus: state => {
    //   state.filterStatus = [];
    //   const tasks = state.filteredTasks.length > 0 ? state.filteredTasks : state.tasks;
    //   tasks.forEach((elTasks) => {
    //     state.status.forEach((elStatus) => {
    //       if(elStatus.id === elTasks.status)
    //         state.filterStatus.push(elStatus);
    //     })
    //   } )
    //   state.filterStatus = state.filterStatus.filter(function(elem, pos) {
    //     return state.filterStatus.indexOf(elem) == pos;
    // });
    //   console.log('filterStatus', state.filterStatus);
    //   return state.filterStatus;
    // },
    getTasks: state => {
      console.log('filter', state.filter); 
      if(state.filter){
        console.log('filterProp', state.filterProp);
        
        const filtered = state.tasks.filter(task => task[state.filterProp] === state.filter);
        filtered.forEach(el => state.filteredTasks.push(el))
        return state.filteredTasks;
      }
      return state.tasks;
    },
  },
  mutations: {
    setFilter(state, payload){
      state.filter = payload.filter;
      state.filterProp = payload.type;
    },
    setTask(state, payload){
      state.tasks.find((task) => {
        if(task.id === payload.taskId){
          task[payload.property] = payload.id;
        }
      })
    },
    filterTasks(state, payload){
      const filtered = state.tasksI.filter(task => task.status === payload.status);
      state.tasks = [];
      console.log(state.tasks);
      filtered.forEach(el => state.tasks.push(el))
      console.log(state.tasks);
    },
    loadTasks(state){
      const newTasks = state.tasks.slice(0, 3);
      for(let i = 0; i < newTasks.length; i++){
        state.tasks.push(newTasks[i]);
      } 
    }
  },
  actions: {
  },
  modules: {
  }
})

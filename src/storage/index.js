import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tasks: [],
            tasksCount: 0,
            tasksDoneCount: 0,
            taskName: ''
        }
    },
    mutations: {
        addTask(state, taskName) {
            console.log(taskName)
            state.tasks.push({ id: state.tasks.length + 1, name: taskName , isDone: false})
            state.tasksCount = state.tasks.length
            state.taskName = ''
          },
        deleteTask(state, taskId) { 
            const indexToDelete = state.tasks.findIndex((task) => task.id === taskId)
            const taskToUpdate = state.tasks.find((task) => task.id === taskId)

            if (taskToUpdate.isDone) {
                state.tasksDoneCount =  state.tasksDoneCount - 1 
            }

            if (indexToDelete !== -1) {
                state.tasks.splice(indexToDelete, 1);
                state.tasksCount = state.tasks.length;
            }
        },
        deleteAllTask(state) {  
            state.tasks.splice(0, state.tasks.length);
            state.tasksCount = 0
            state.tasksDoneCount = 0
        },
        updateStatus(state, status, taskId) {  
            const taskToUpdate = state.tasks.find((task) => task.id === taskId);
            state.tasksDoneCount = status ? state.tasksDoneCount + 1 : state.tasksDoneCount - 1

            if (taskToUpdate.length > 0) {
                taskToUpdate.isDone = status
            }
        }
    }
})

export default store;
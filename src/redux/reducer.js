const initialState = ((localStorage['toDoStore']) ? JSON.parse(localStorage['toDoStore']) : {taskList:[]})

export default function reducer(state = initialState, action) {

switch(action.type) {

 case 'ON_CLICK_INPUT':
      const newTask = state.taskList
         newTask.push(action.payload)
      return{
         ...state, taskList: newTask
      }
 case 'ON_CHECKED_CHECKBOX':
      const index = state.taskList.findIndex(e => e.id === action.payload)
      const task = state.taskList[index]
      const checkedTask = {...task, checked: !task.checked}
      const newTaskList = [
         ...state.taskList.slice(0, index),
         checkedTask,
         ...state.taskList.slice(index + 1)
      ]
      return{
         taskList: newTaskList
      }
 case 'DONE_HANDLER':
      const number = state.taskList.findIndex(e => e.id === action.payload)
      const i = state.taskList[number]
      const doneTask = {...i, done: !i.done}
      const newTasks = [
         ...state.taskList.slice(0, number),
         doneTask,
         ...state.taskList.slice(number + 1)
      ]
       return{
          taskList: newTasks
      }

 case 'DELETE_TASK':
      const tasks = [...state.taskList]
      const deleteTaskList = tasks.filter(item => item.checked === false)
      return {
         taskList: deleteTaskList
      }
 default:
        return state
   }
}
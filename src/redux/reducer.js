const initialState = {
   taskList: [],
}

export default function reducer(state = initialState, action) {

switch(action.type) {
   
 case 'ON_CLICK_INPUT':
      const list = state.taskList
      list.push(action.payload)
      return{
         ...state, taskList: list
      }

   default:
        return state
   }
}
const initialState = {
   taskList: [
     'Test Task String',
     'qeweewewe'
   ],
}

export default function reducer(state = initialState, action) {



   switch(action.type) {
      case 'ON_CHANGE_INPUT':
         return {

         }

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
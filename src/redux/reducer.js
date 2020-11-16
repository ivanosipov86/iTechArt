const initialState = {
   newTask: '1',
   taskList: [
     'Test Task String'
   ],
}

export default function reducer(state = initialState, action) {



   switch(action.type) {
      case 'ON_CHANGE_INPUT':
         return {

         }

      case 'ON_CLICK_INPUT':
         return {

         }
      default :
   }
     return state
}
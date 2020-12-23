import { ON_CLICK_INPUT,
         ON_CHECKED,
         ON_DONE,
         DELETE_TASK,
         GET_INITIAL_STATE,
         SET_LOGGED
      } from "./actions/actionTypes";

const initialState = ({taskList:[], logged: null});

export default function reducer(state = initialState, action) {

switch(action.type) {

   case SET_LOGGED:
      return{
         taskList: state.taskList,
         logged: action.payload
      }

   case ON_CLICK_INPUT:
      return{
         taskList: state.taskList,
         logged: state.logged
      }

   case ON_CHECKED:
      return{
         taskList: state.taskList,
         logged: state.logged
      }

   case ON_DONE:
       return{
          taskList: state.taskList,
          logged: state.logged
      }

   case DELETE_TASK:
      return{
         taskList: state.taskList,
         logged: state.logged
      }

   case GET_INITIAL_STATE:
      return{
         taskList: action.payload,
         logged: state.logged
      }
   default:
        return state
   }
}
import { ON_CLICK_INPUT,
         ON_CHECKED_CHECKBOX,
         DONE_HANDLER,
         DELETE_TASK,
         GET_INITIAL_STATE
      } from "./actions/actionTypes";
import db from '../config/fbConfig';

const initialState = ({taskList:[]});

export default function reducer(state = initialState, action) {

switch(action.type) {

 case ON_CLICK_INPUT:
      const newTaskPush = db.ref('taskList').push();
      // const newTaskPush = db.ref('taskList').push();
      const pushKey = newTaskPush.key;
      action.payload.id = pushKey;
      newTaskPush.set(action.payload);
      return{
         taskList: state.taskList
      }

 case ON_CHECKED_CHECKBOX:
      const index = state.taskList.findIndex(e => e.id === action.payload);
      const checkTask = state.taskList[index];
      db.ref('taskList/' + checkTask.id).update({checked: !checkTask.checked});
      return{
         taskList: state.taskList
      }

 case DONE_HANDLER:
      const number = state.taskList.findIndex(e => e.id === action.payload);
      const doneTask = state.taskList[number];
      db.ref('taskList/' + doneTask.id).update({done: !doneTask.done});
       return{
          taskList: state.taskList
      }

 case DELETE_TASK:
      const items = state.taskList.filter(item => item.checked === true);
      for(let i = 0; i < items.length; i++) {
         db.ref('taskList/' + items[i].id).remove();
      }
      return{
         taskList: state.taskList
      }

 case GET_INITIAL_STATE:
      return{
         taskList: action.payload
      }
 default:
        return state
   }
}
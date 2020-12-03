import { ON_CLICK_INPUT,
         ON_CHECKED_CHECKBOX,
         DONE_HANDLER,
         DELETE_TASK,
         GET_INITIAL_STATE } from "./actionTypes";
import db from '../../config/fbConfig';



export function onClickInput(value) {
   return {
      type: ON_CLICK_INPUT,
      payload: value
   }
}

export function onCheckedCheckbox(value) {
   return {
      type: ON_CHECKED_CHECKBOX,
      payload: value
   }
}

export function doneHandler(value) {
   return {
      type: DONE_HANDLER,
      payload: value
   }
}

export function deleteTask() {
   return {
      type: DELETE_TASK
   }
}


export function getInitialState(value){
   return dispatch => {
      setTimeout(() => {
         dispatch({type: GET_INITIAL_STATE, payload: value})
      }, 0)
   }
}




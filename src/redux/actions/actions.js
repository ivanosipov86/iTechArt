import { ON_CLICK_INPUT,
         ON_CHECKED,
         ON_DONE,
         DELETE_TASK,
         GET_INITIAL_STATE,
         SET_LOGGED } from "./actionTypes";
import db from '../../config/fbConfig';

export default function newUid () {
   const uid = localStorage.getItem('uid');
   return uid;
}

export function onChecked (id, check) {

   return dispatch => {
      db.ref(newUid() + '/taskList/' + id).update({checked: !check}, (error) => {
         if (error) {
            console.log("The write failed...")
         } else {
            console.log("The write DONE!!!!")
            dispatch({type: ON_CHECKED})
         }
      })
   }
}

export function onDone (id, done) {
   return dispatch => {
      db.ref(newUid() + '/taskList/' + id).update({done: !done}, (error) => {
         if (error) {
           console.log("The write failed...")
         } else {
            console.log("The write DONE!!!!")
            dispatch({type: ON_DONE})
         }
      })
   }
}

export function deleteTask(){
   return dispatch => {
      db.ref( newUid() + '/taskList').orderByChild('checked').equalTo(true).once('value',(snapshot) => {
         const updates = {};
         snapshot.forEach(child => updates[child.key] = null);
         db.ref( newUid() + '/taskList').update(updates).then(() => dispatch({type: DELETE_TASK}))
      })
   }
}

export function onClickInput(value) {
   return dispatch => {
      const newTaskPush = db.ref(newUid() + '/taskList').push();
      const pushKey = newTaskPush.key;
      value.id = pushKey;
      newTaskPush.set(value)
      .then(dispatch ({
         type: ON_CLICK_INPUT,
         payload: value
      }))
   }
}

export function checkLogged() {
   const loggedNow = localStorage.getItem('uid') ? true : false
   return {
      type: SET_LOGGED,
      payload: loggedNow
   }
}

export function startData(){
   return dispatch => {
      db.ref( newUid() + '/taskList').on('value', (snapshot) => {
         const data = snapshot.val();
         const dataValue = data ? Object.values(data) : [];
         dispatch({type: GET_INITIAL_STATE, payload: dataValue })
      })
   }
}
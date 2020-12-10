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

function newUid () {
   const uid = localStorage.getItem('uid');
   return uid;
 }

export function getInitialState(value){
   return dispatch => {
      setTimeout(() => {
         dispatch({type: GET_INITIAL_STATE, payload: value})
         console.log('its me')
      }, 3000)
   }
}

// function getInitialState(value) {
//    return {
//       type: GET_INITIAL_STATE,
//       payload: value
//    }
// }



// function newUid () {
//    const uid = localStorage.getItem('uid');
//    return uid;
//  }



export function startData(){
   return dispatch => {
      const uid = newUid();
      let data
      db.ref( uid + '/taskList').on('value', (snapshot) => {
         data = Object.values(snapshot.val())
         dispatch({type: GET_INITIAL_STATE, payload: data})
         console.log('test', data)
         console.log('its start-data.js', uid);
       }
     );
     if (data) {
      dispatch({type: GET_INITIAL_STATE, payload: data})
   } else {
      console.log("test11111")
      dispatch({type: GET_INITIAL_STATE, payload: []})
   }
   }
}

// export function startData(){
//    const uid = newUid();

//    db.ref( uid + '/taskList').on('value', (snapshot) => {
//    const data = snapshot.val();
   
//    const newData = Object.values(data)
//    console.log('test', data)
//    data ? getInitialState(newData) : getInitialState([]);
//    console.log('its start-data.js', uid);
//     }
//   );
// }



// export  function getInitialState(){

//    const uid = localStorage.getItem('uid');
//    setTimeout(() => {
//       db.ref( uid + '/taskList').on('value', (snapshot) => {
//          const data = snapshot.val();
//          if(data) {
//             const dataValue = Object.values(data);
//             return dispatch => {
         
//                         dispatch({type: GET_INITIAL_STATE, payload: dataValue})
//                      }
//                   }
//                   else {
//             return dispatch => {
              
//                   dispatch({type: GET_INITIAL_STATE, payload: []})
              
//             }
//          }
//       }
//       )
//    }, 0)

// }





// export function startData(value){
//    getInitialState(value)
// }

// export function startData(){
//    const uid = newUid();
//    db.ref( uid + '/taskList').on('value', (snapshot) => {
//    const data = snapshot.val();
//    console.log('its start-data.js', uid)
//     if(data) {
//       const dataValue = Object.values(data);
//      getInitialState(dataValue);
//       } else{
//           getInitialState([])
//       }
//     }
//   );
// }




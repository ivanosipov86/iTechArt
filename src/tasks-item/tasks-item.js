import React from 'react'
import {connect} from 'react-redux'

import './tasks-item.css'

function TasksItem (props){

function doneHandler(event) {
   let item = event.target
   item.classList.toggle("done")
   }


   const task = props.task
      return(
         <li
            className="item"
            onClick={doneHandler}>
            {task.task}

         <input
            type='checkbox'
            className="checkBox"
            onClick={() => props.onClickInput(task.id)}
            />
         </li>)
}

function mapDispatchToProps(dispatch) {
   return {
     onClickInput: (value) => dispatch({type: 'ON_CHANGE_CHECKBOX', payload: value})
   }
 }

export default connect(null, mapDispatchToProps)(TasksItem)
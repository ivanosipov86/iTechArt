import React from 'react'
import {connect} from 'react-redux'
import './tasks-item.css'

function TasksItem (props){

const task = props.task

const done = (props.task.done ? ' done' : '')
   return(
      <li
         className={"item" + done}
         onClick={() => props.doneHandler(task.id)}
         >
         {task.task}

      <input
         defaultChecked={task.checked}
         type='checkbox'
         className="checkBox"
         onClick={() => props.onChecked(task.id)}
         />
      </li>)
}


function mapDispatchToProps(dispatch) {
   return {
     onChecked: (value) => dispatch({type: 'ON_CHECKED_CHECKBOX', payload: value}),
     doneHandler: (value) => dispatch({type: 'DONE_HANDLER', payload: value})
   }
 }

export default connect(null, mapDispatchToProps)(TasksItem)
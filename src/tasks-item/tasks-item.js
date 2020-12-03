import React from 'react';
import {connect} from 'react-redux';
import { onCheckedCheckbox, doneHandler } from '../redux/actions/actions';

import './tasks-item.css';



function TasksItem (props){

const task = props.task;

const done = (props.task.done ? ' done' : '');
   return(
      <div className="itemContainer">
         <li
            className={"item" + done}
            onClick={() => props.doneHandler(task.id)}>
            {task.task}
         </li>
      <input
         defaultChecked={task.checked}
         type='checkbox'
         className="checkBox"
         onClick={() => props.onCheckedCheckbox(task.id)}/>
      </div>
   )
}


function mapDispatchToProps(dispatch) {
   return {
     onCheckedCheckbox: (value) => dispatch(onCheckedCheckbox(value)),
     doneHandler: (value) => dispatch(doneHandler(value))
   }
 }

export default connect(null, mapDispatchToProps)(TasksItem);
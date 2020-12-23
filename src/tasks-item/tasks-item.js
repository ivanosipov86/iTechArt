import React from 'react';
import {connect} from 'react-redux';
import { onChecked, onDone } from '../redux/actions/actions';
import './tasks-item.css';


function TasksItem (props){

   const task = props.task;

   const done = (props.task.done ? ' done' : '');
      return(
         <div className="itemContainer">
            <li
               className={"item" + done}
               onClick={() => props.doneHandler(task.id, props.task.done)}>
               {task.task}
            </li>
            <input
               defaultChecked={task.checked}
               type='checkbox'
               className="checkBox"
               onClick={() => props.onCheckedCheckbox(task.id, task.checked)}/>
         </div>
      )
}

function mapDispatchToProps(dispatch) {
   return {
     onCheckedCheckbox: (id, check) => dispatch(onChecked(id, check)),
     doneHandler: (id, done) => dispatch(onDone(id, done))
   }
 }

export default connect(null, mapDispatchToProps)(TasksItem);
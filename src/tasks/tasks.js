import React, {Component} from 'react'
import TasksItem from '../tasks-item/tasks-item'
import './tasks.css'


export default class Task extends Component {




   render() {
      return(
         <div className="tasks">
            <ol>
             <TasksItem/>
            </ol>
            </div>
      )
   }
}




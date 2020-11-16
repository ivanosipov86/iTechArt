import React, {Component} from 'react'
import './tasks-item.css'

export default class TasksItem extends Component{


   doneHandler = (event) => {
      let item = event.target
      item.classList.toggle("done")
      console.log(item)
      }

   render() {
      return(
         <div>
            { this.props.taskList.map((task) =>
            <li
             className="item"
             onClick={this.doneHandler}
             key={task.toString() + Math.random()} >
              { task }
            <input
              name="checkbox"
              type='checkbox'
              className="checkBox"
            //   onChange={this.taskCheckHandler}
              />
            </li>) }
         </div>
      )
   }
}



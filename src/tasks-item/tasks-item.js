import React, {Component} from 'react'
import {connect} from 'react-redux'
import './tasks-item.css'

class TasksItem extends Component{

doneHandler = (event) => {
   let item = event.target
   item.classList.toggle("done")
   }

render() {
   const task = this.props.task
   return(
      <li
      className="item"
      onClick={this.doneHandler}
       >
      {task}
      <input
      name="checkbox"
      type='checkbox'
      className="checkBox"
      />
      </li>)
   }
}

function mapStateToProps(state) {
   return {
     taskList: [...state.taskList]
   }
}

export default connect(mapStateToProps)(TasksItem)
import React, {Component} from 'react'
import TasksItem from '../tasks-item/tasks-item'
import {connect} from 'react-redux'
import './tasks.css'


class Tasks extends Component {

render() {
   return(
      <div className="tasks">
         <ol>
          {this.props.taskList.map(item => {
           return <TasksItem
                  task={item}
                  key={item.toString() + Math.random()}/>
             })}
         </ol>
      </div>
    )
   }
}

function mapStateToProps(state) {
   return {
      taskList: [...state.taskList]
   }
}

export default connect(mapStateToProps)(Tasks)



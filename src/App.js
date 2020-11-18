import React, { Component } from 'react'
import Tasks from './tasks/tasks'
import AddTask from './add-task/add-task'
import Buttons from './buttons/buttons'
import {connect} from 'react-redux'
import './index.css'

class App extends Component {

addNewTask = (input) => {
     if (input) {
       this.props.onClickInput(input)
  } return
   }

render() {
    return (
      <div className="App">
        <h1>{ this.props.taskList.length } Task today </h1>
        <div className="contentWrapper">
          <Tasks
          doneHandler={this.doneHandler}/>
          <AddTask
          addNewTask={this.addNewTask}/>
           <Buttons/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
   return {
     taskList: [...state.taskList]
   }
}

function mapDispatchToProps(dispatch) {
  return {
   onClickInput: (value) => dispatch({type: 'ON_CLICK_INPUT', payload: value})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react'
import Tasks from './tasks/tasks'
import AddTask from './add-task/add-task'
import Buttons from './buttons/buttons'
import {connect} from 'react-redux'
import './index.css'

function App(props) {


function addNewTask(input, id){
     if (input) {
       const newTask = {
         task: input,
         checked: false,
         id: id++
       }
       props.onClickInput(newTask)
  } return
   }

    return (
      <div className="App">
        <h1>{ props.taskList.length } Task today </h1>
        <div className="contentWrapper">
          <Tasks />
          <AddTask addNewTask={addNewTask}/>
          <Buttons/>
        </div>
        {console.log(props.taskList)}
      </div>
    )
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
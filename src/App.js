import React, { Component } from 'react'
import Tasks from './tasks/tasks'
import AddTask from './add-task/add-task'
import Buttons from './buttons/buttons'
import {connect} from 'react-redux'
import './index.css'


class App extends Component {

  //  state = {
  //     newTask: '',
  //     taskList: [
  //       'Test Task String'
  //     ],
  //   }

taskInInput = (input) => {
  console.log(this.props.newTask, this.props.taskList, input.value)
    this.setState({
        newTask: input
    })
  }

addNewTask = (input) => {
     if (this.props.newTask !== '') {
       console.log(this.props.taskList)
          const list = this.props.taskList
          list.push(input)
           this.setState({
             newTask: '',
             taskList: list
           })
  } return
   }

  taskCheckHandler(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : null;
    const name = target.name;
    console.log('Checked', name, value)
  }

  doneHandler = (e) => {
    console.log(e.target.done)

  }

render() {
    return (
      <div className="App">
        <h1>{ this.props.taskList.length } Task today </h1>
        <div className="contentWrapper">

          <Tasks
          name={this.props.name}
          taskList={this.props.taskList}
          doneHandler={this.doneHandler}
          />

          <AddTask
          taskInInput={this.taskInInput}
          newTask={this.props.newTask}
          addNewTask={this.addNewTask}
          taskList={this.props.taskList}
          />

           <Buttons/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
   return {
     newTask: state.newTask,
     taskList: state.taskList
   }
}

function mapDispatchToProps(dispatch) {
  return {
   onChangeInput: () => dispatch({type: 'ON_CHANGE_INPUT' }),
   onClickInput: () => dispatch({type: 'ON_CLICK_INPUT'})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React, { Component } from 'react'
import Tasks from './tasks/tasks'
import AddTask from './add-task/add-task'
import Buttons from './buttons/buttons'
import {connect} from 'react-redux'
import './index.css'

class App extends Component {


addNewTask = () => {
     this.props.onClickInput();
   }
// addNewTask = (input) => {
//      if (this.props.newTask !== '') {
//        console.log(this.props.taskList)
//           const list = this.props.taskList
//           list.push(input)
//            this.setState({
//              newTask: '',
//              taskList: list
//            })
//   } return
//    }

render() {
    return (
      <div className="App">
        <h1>{ this.props.taskList.length } Task today </h1>
        <div className="contentWrapper">

          <Tasks
          doneHandler={this.doneHandler}
          />

          <AddTask
          addNewTask={this.addNewTask}
          />

           <Buttons/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
   return {
     taskList: state.taskList
   }
}

function mapDispatchToProps(dispatch) {
  return {
   onChangeInput: () => dispatch({type: 'ON_CHANGE_INPUT' }),
   onClickInput: () => dispatch({type: 'ON_CLICK_INPUT', payload: "test is ok"})
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
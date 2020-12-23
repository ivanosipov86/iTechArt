import React from 'react'
import Tasks from '../tasks/tasks';
import AddTask from '../add-task/add-task';
import Buttons from '../buttons/buttons';
import {connect} from 'react-redux';
import { onClickInput, checkLogged } from '../redux/actions/actions';
import { withRouter} from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';
import {confirmExit} from '../config/sweetAlertConfig'

const SlideInDown = styled.div`animation: 0.5s ${keyframes`${slideInDown}`}`;

function ToDoList({history, onClickInput, taskList, setLogged}) {

  function addNewTask(input){
    if (input) {
        const newTask = {
        task: input,
        checked: false,
        done: false,
        id: ''
       }
      onClickInput(newTask);
  } return
  }

  return (
    <SlideInDown>
        <div className="App">
          <h1>{ taskList.length === 0 ? "No" : taskList.length } task today </h1>
          <div className="contentWrapper">
            <Tasks />
            <AddTask addNewTask={addNewTask}/>
            <Buttons/>
          </div>
          <button
            className="delButton exit"
            onClick={() => confirmExit(history, setLogged)}>
            Exit</button>
          </div>
    </SlideInDown>
     );
  }

function mapStateToProps(state) {
   return {
    taskList: [...state.taskList]
   }
 }

function mapDispatchToProps(dispatch) {
   return {
     onClickInput: (value) => dispatch(onClickInput(value)),
     setLogged: () => dispatch(checkLogged())
   }
 }

const GoToMainPage = withRouter(ToDoList)

export default connect (mapStateToProps, mapDispatchToProps)(GoToMainPage)
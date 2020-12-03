import React from 'react';
// import Tasks from './tasks/tasks';
// import AddTask from './add-task/add-task';
// import Buttons from './buttons/buttons';
import ToDoList from './to-do-list/toDoList'
import UserReg from './user-reg/user-reg'
import UserAuth from './user-auth/userAuth'
import StartPage from './start-page/startPage'
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'
import { useEffect } from 'react';
import './index.css';
import { onClickInput, getInitialState } from './redux/actions/actions';
import db from './config/fbConfig';

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const SlideInDown = styled.div`animation: 0.7s ${keyframes`${fadeIn}`}`;



function App(props) {

useEffect(() => {
  db.ref('taskList').on('value', (snapshot) => {
  const data = snapshot.val();
    if(data) {
      const dataValue = Object.values(data);
      props.getInitialState(dataValue);
      } else{
          props.getInitialState([])
      }
    }
  );
}, []);


function addNewTask(input){
  if (input) {
    const newTask = {
      task: input,
      checked: false,
      done: false,
      id: ''
    }
  props.onClickInput(newTask);
} return
}


return (
<div
    className="App">
        
        <Route path="/to-do-list" exact render={() => <SlideInDown><ToDoList/></SlideInDown>} />

        <Route path="/user-reg" exact render={() => <SlideInDown><UserReg/></SlideInDown>} />

        <Route path="/user-auth" exact render={() => <SlideInDown><UserAuth/></SlideInDown>} />

        <Route path="/" exact render={() => <StartPage/>} />
      </div>
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
    getInitialState: (value) => dispatch(getInitialState(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
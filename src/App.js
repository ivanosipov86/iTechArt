import React from 'react';
// import Tasks from './tasks/tasks';
// import AddTask from './add-task/add-task';
// import Buttons from './buttons/buttons';
import ToDoList from './to-do-list/toDoList'
import UserReg from './user-reg/user-reg'
import UserAuth from './user-auth/userAuth'
import StartPage from './start-page/startPage'
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import { useEffect } from 'react';
import './index.css';
import { getInitialState } from './redux/actions/actions';
// import db from './config/fbConfig';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { startData } from './redux/actions/actions'



const SlideInDown = styled.div`animation: 0.7s ${keyframes`${fadeIn}`}`;


function App(props) {

useEffect(() => {
  props.getInitialState();
  // startData();
}, []);



// useEffect(() => {
//   // const uid = localStorage.getItem('uid');
//   const uid = newUid();
//   db.ref( uid + '/taskList').on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log('its app.js', uid)
//     if(data) {
//       const dataValue = Object.values(data);
//       props.getInitialState(dataValue);
//       } else{
//           props.getInitialState([])
//       }
//     }
//   );
// }, []);



return (
<div>
  <Switch>
    <Route path="/to-do-list" render={() => <SlideInDown><ToDoList/></SlideInDown>} />
    <Route path="/user-reg"  render={() => <SlideInDown><UserReg/></SlideInDown>} />
    <Route path="/user-auth"  render={() => <SlideInDown><UserAuth/></SlideInDown>} />
    <Route path="/"  render={() => <SlideInDown><StartPage/></SlideInDown>} />
    <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}} >404 NOT FOUND</h1>}/>
  </Switch>

      </div>
    );
}



function mapDispatchToProps(dispatch) {
  return {
    getInitialState: () => dispatch(startData())
  }
}

export default connect(null, mapDispatchToProps)(App);
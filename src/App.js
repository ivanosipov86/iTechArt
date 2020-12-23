import React from 'react';
import ToDoList from './to-do-list/toDoList';
import UserReg from './user-reg/user-reg';
import UserAuth from './user-auth/userAuth';
import StartPage from './start-page/startPage';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { startData, checkLogged } from './redux/actions/actions';
import './index.css';

const SlideInDown = styled.div`animation: 0.7s ${keyframes`${fadeIn}`}`;

function App({logged,  getLogged}) {

  useEffect(() => {
    getLogged();
  }, []);

  return (
    <div>
      <Switch>
        {logged ? <Route path="/to-do-list" render={() => <SlideInDown><ToDoList /></SlideInDown>}/> : null}
        {logged ? null : <Route path="/user-reg"  render={() => <SlideInDown><UserReg/></SlideInDown>} />}
        {logged ? null : <Route path="/user-auth"  render={() => <SlideInDown><UserAuth/></SlideInDown>} />}
        {logged ? null : <Route path="/"  render={() => <SlideInDown><StartPage/></SlideInDown>} />}
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
   logged: state.logged
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLogged: () => dispatch(checkLogged())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
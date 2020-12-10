import React from 'react'
import Tasks from '../tasks/tasks';
import AddTask from '../add-task/add-task';
import Buttons from '../buttons/buttons';
import {connect} from 'react-redux';
import { onClickInput } from '../redux/actions/actions';
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';


const SlideInDown = styled.div`animation: 0.5s ${keyframes`${slideInDown}`}`;




function ToDoList(props) {

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
  <SlideInDown>
      <div className={"App"}>
       <h1>{ props.taskList.length === 0 ? "No" : props.taskList.length } task today </h1>
         <div className="contentWrapper">
           <Tasks />
           <AddTask addNewTask={addNewTask}/>
           <Buttons/>
         </div>
         <NavLink to="/"><button>Exit</button></NavLink>
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
     onClickInput: (value) => dispatch(onClickInput(value))
   }
 }

 export default connect (mapStateToProps, mapDispatchToProps)(ToDoList)
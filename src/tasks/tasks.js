import React from 'react';
import TasksItem from '../tasks-item/tasks-item';
import {connect} from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import { useEffect } from 'react';
import {startData} from '../redux/actions/actions'
import './tasks.css'

const FadeInUp = styled.div`animation: 0.8s ${keyframes`${fadeInUp}`}`;

function Tasks ({getInitialState, taskList}) {

   useEffect(() => {
      getInitialState()
    }, []);

   return(
      <div className="tasks">
         <ol>
            {taskList.map(item => {
               return <FadeInUp
                        key={item.id}>
                           <TasksItem task={item}/>
                      </FadeInUp>
            })}
         </ol>
      </div>
   )
}

function mapStateToProps(state) {
   return {
      taskList: [...state.taskList]
   }
}

function mapDispatchToProps(dispatch) {
   return{
      getInitialState: () => dispatch(startData())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);


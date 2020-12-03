import React from 'react';
import TasksItem from '../tasks-item/tasks-item';
import {connect} from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import './tasks.css'

const FadeInUp = styled.div`animation: 0.8s ${keyframes`${fadeInUp}`}`;

function Tasks (props) {
   return(
      <div className="tasks">
         <ol>
            {props.taskList.map(item => {
               return <FadeInUp
                        key={item.id}>
                           <TasksItem
                              task={item}/>
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

export default connect(mapStateToProps)(Tasks);


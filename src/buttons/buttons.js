import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/actions/actions';
import './buttons.css';

function Buttons(props) {

function clearInput(){
   const a = document.getElementById('taskInput');
   a.value = ''
}


return(
   <div className="buttonsContainer">
      <button
         className="delButton"
         onClick={() => props.deleteTask()}>
         Delete checked task</button>
         <button
            className="clearButton"
            onClick={clearInput}>
         Clear input</button>
     </div>
      )
   }

function mapDispatchToProps(dispatch){
   return {
      deleteTask: () => dispatch(deleteTask())
   }
}

export default connect(null, mapDispatchToProps)(Buttons);

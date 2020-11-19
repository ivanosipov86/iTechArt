import React from 'react'
import { connect } from 'react-redux'
import './buttons.css'

function Buttons(props) {

      return(
         <div className="buttonsContainer">
         <button
            className="delButton"
            onClick={() => props.deleteTask()}>
               Delete checked task</button>
         <button
            className="clearButton">
               Clear input</button>
     </div>
      )
   }

function mapDispatchToProps(dispatch){
   return {
      deleteTask: () => dispatch({type: 'DELETE_TASK'}),
      clearInput: () => dispatch({type: 'CLEAR_INPUT'})

   }
}

export default connect(null, mapDispatchToProps)(Buttons)

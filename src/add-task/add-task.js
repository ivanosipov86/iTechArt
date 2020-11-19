import React, { Component } from 'react';
 export default class AddTask extends Component {

taskId = 1;

state = {
 value: ''
}

taskInInput = (input) => {
   this.setState({
       value: input
   })
}

render() {
   return(
      <div className="formContainer">
         <input
            placeholder="NewInput"
            name="taskText"
            value={this.state.value}
            className="input"
            onChange={ input => this.taskInInput(input.target.value) }
            type='text'>
         </input>
      <button
         className="button"
         onClick={ () =>
          {this.props.addNewTask(this.state.value, this.taskId )
             this.taskId++
             this.setState({
               value: ''
             })}
         }
          >Add task
         </button>
       </div>
      )
   }
}


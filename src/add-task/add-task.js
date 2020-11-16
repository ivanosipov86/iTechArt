import React, { Component } from 'react';


export default class AddTask extends Component {

   render() {
      return(
         <div className="formContainer">
         <input
           placeholder="NewInput"
           name="taskText"
           value={this.props.newTask}
           className="input"
           onChange={ input => this.props.taskInInput(input.target.value) }
           type='text'>
         </input>
         <button
           className="button"
          onClick={ () => {this.props.addNewTask(this.props.newTask)} }
          >Add task
         </button>
       </div>
      )
   }

}


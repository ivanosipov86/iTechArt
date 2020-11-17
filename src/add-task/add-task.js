import React, { Component } from 'react';
import { connect } from 'react-redux';


 class AddTask extends Component {

   state = {
      value: ''
   }

   taskInInput = (input) => {
      this.setState({
          value: input
      })
      console.log(this.state.value)
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
          onClick={ () => {this.props.addNewTask(this.state.value)} }
          >Add task
         </button>
       </div>
      )
   }
}

export default connect()(AddTask)
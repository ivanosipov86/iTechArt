import React, { useState } from 'react';
export default function AddTask (props) {



const [value, setValue] = useState('');
const addTaskFunc = () => {
   props.addNewTask(value);
   setValue('');
}

return(
   <div className="formContainer">
      <input
         id="taskInput"
         placeholder="NewInput"
         name="taskText"
         value={value}
         className="input"
         onChange={ input => setValue(input.target.value) }
         onKeyPress={(e) => {
            if( e.key === 'Enter'){addTaskFunc()}}}
         type='text'>
      </input>

      <button
         className="button"
         onClick={ () =>
          {addTaskFunc()}}
          >Add task
      </button>
   </div>
      );
   }


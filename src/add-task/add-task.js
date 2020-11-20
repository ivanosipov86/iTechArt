import React, { useState } from 'react';

export default function AddTask (props) {

const [value, setValue] = useState('')
const [id, setId] = useState(1)

return(
   <div className="formContainer">
      <input
         placeholder="NewInput"
         name="taskText"
         value={value}
         className="input"
         onChange={ input => setValue(input.target.value) }
         type='text'>
      </input>
   <button
         className="button"
         onClick={ () =>
          {props.addNewTask(value, id)
             setId(id + 1)
             setValue('')}
         }
          >Add task
         </button>
   </div>
      )
   }

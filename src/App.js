import React from 'react'
import classes from './index.module.css'





class App extends React.Component {
   constructor(props) {
     super(props);

    this.state = {
      newTask: '',
      taskList: []
    }
   }
   nextNewTask(){
    const getTask = document.getElementById('inp').value;
    console.log(getTask)
    this.setState({
      newTask: getTask
    });
  }

   addNewTask(){
     if (this.state.newTask != '') {
     this.state.taskList.push(this.state.newTask);
     document.getElementById('inp').value = '';
     this.setState({
      newTask: ""
    });
  } return
     console.log(this.state.taskList)
   }



  render() {
    return (
      <div className={classes.App}>
        <h1>{this.state.taskList.length} Task today </h1>
        <div className={classes.contentWrapper}>
          <div className={classes.tasks}>
            <ol>
    {this.state.taskList.map((task) => <li className={classes.item}>{task}</li>)}
            </ol>
            </div>
            <div className={classes.formContainer}>
              <input 
              id={'inp'}
              className={classes.input} 
              onChange={() => this.nextNewTask()} 
              type='text' 
              >
              </input>
              <button
               className={classes.button}
               onClick={() => this.addNewTask()}
               >Add task</button>
            </div>
        </div>

      </div>
    )
  }
}






export default App


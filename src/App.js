import React from 'react'
import classes from './index.module.css'

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      taskList: [],
    }
   }
newTask(input){
    this.setState({
        newTask: input
    })
  }
addNewTask(input){
     if (this.state.newTask !== '') {
          const list = this.state.taskList;
          list.push(input);
           this.setState({
            newTask: '',
             taskList: list
           })
  } return
   }
render() {
    return (
      <div className={ classes.App }>
        <h1>{ this.state.taskList.length } Task today </h1>
        <div className={ classes.contentWrapper }>
          <div className={ classes.tasks }>
            <ol>
             { this.state.taskList.map((task) => 
             <li className={ classes.item } key={task.toString() + Math.random()} > 
                   { task }
                   <input type="checkbox" className={classes.checkBox}/>  
             </li>) }
            </ol>
            </div>
            <div className={ classes.formContainer }>
              <input 
                value={this.state.newTask}
                className={ classes.input } 
                onChange={ input => this.newTask(input.target.value) } 
                type='text'>
              </input>
              <button
                className={ classes.button }
                onClick={ () => this.addNewTask(this.state.newTask) }
               >Add task
              </button>
            </div>
            <div className={ classes.buttonsCotainer }>
                <button className={classes.delButton}>Delete checked task</button>
                <button className={classes.clearButton} >Clear input</button>
            </div>
        </div>
      </div>
    )
  }
}
export default App
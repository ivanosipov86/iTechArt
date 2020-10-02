import React, {Component} from 'react';
import './App.css';


class App extends Component {

state = {
  tasks: [
    {}
  ],
  title: 'Задачи'
}

addTask = () => {
const taskText = document.getElementById('taskInput').value;
const newTask = {text: taskText};
this.state.tasks.push(newTask);
// for (let i = 1; i < this.state.tasks.length; i ++) {
// let taskList = (this.state.tasks[i]);
// console.log(taskList)
// }
console.log(this.state.tasks);
document.getElementById('taskInput').value = "";
}

returnList = () => {
  const taskList = this.state.tasks;
const taskListItems = taskList.map((taskList) => {

return <li>{taskList}</li>
})
return taskListItems;
}


render () {

  return (
    <div className="container">
      <div className="taskField">
        <h1>{this.state.title}</h1>
        <ol className="tasksList">
          {this.taskListItems}
        </ol>
        <label className="label">
          <input type="text" id="taskInput"></input>
          <button id="addButton" onClick={this.addTask}>"Добавить задачу"</button>
        </label>
      </div>
      </div>
  );
}
};




export default App;

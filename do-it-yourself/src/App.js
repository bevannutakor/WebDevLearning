import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        counter: 1,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        counter: this.state.task.counter
      }
    })
  }


  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {text: '', id: uniqid(), counter: this.state.task.counter+1}
    })
    console.log(this.state.task.counter)

  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => el.id !== id),
      task:{text: '', id: '', counter: this.state.task.counter-1} //doesn't work:(
    }))
  } 

  render(){
    const {task, tasks} = this.state;
    return(
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
              onChange={this.handleChange}
              value={task.text}
              type="text" 
              id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}



export default App;

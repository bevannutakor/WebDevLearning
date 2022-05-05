import React, { Component } from 'react';
import MyComponent from './Mycomponent';

class App extends Component{
  constructor(props){
    super(props);
    this.onClickBtn = this.onClickBtn.bind(this);
    
    //working with state
    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp(){
    this.setState({
      count: this.state.count + 1,
    })
  }

  onClickBtn(){
    console.log('Button has been clicked!');
  }
  render(){
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn}/>
        <button onClick={this.countUp}>Count up</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}



export default App;

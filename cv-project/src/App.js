import React, {Component} from 'react';
import Information from './components/Information';
import General from './components/General';
import './App.css';

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <General/>
      </div>
    )
  }
}

export default App;

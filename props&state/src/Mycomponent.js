import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {title, onButtonClicked} = this.props; //destructuring
        return (
            <div>
                <h1>{title}</h1>
                <button onClick={onButtonClicked}>Click Me!</button>
            </div>
        )
    }
}
//functional components
//function MyComponent(props)....

export default MyComponent;
import React, { Component } from 'react';

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    };
  }

  render(){
    return(
      // this.state.value is what is written inside the button
      // this.setState will update the component's statement to a new thing
      <div className="Square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </div>
    );
  }
}

export { Square };

import React, { Component } from 'react';

class Square extends Component {
  render(){
    return(
      // this.props.value is what is written inside the button
      <div className="Square">
        {this.props.value}
      </div>
    );
  }
}

export { Square };

import React from 'react';

function Square(props) {
  return(
    // this.state.value is what is written inside the button
    // this.setState({value: 'X'}) would update the component's statement to a new thing
    <div className="Square" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export { Square };

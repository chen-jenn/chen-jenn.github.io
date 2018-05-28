import React, { Component } from 'react';
import { Square } from './Square';

class Grid extends Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render(){
    const status = 'Next player: X';

    return(
      <div className='Grid'>
        <div className='status'><h1>{status}</h1></div>

        <div className="wrapper">
          {/* What is 'this' in this case? */}
          <div>{this.renderSquare(0)}</div>
          <div>{this.renderSquare(1)}</div>
          <div>{this.renderSquare(2)}</div>
          <div>{this.renderSquare(3)}</div>
          <div>{this.renderSquare(4)}</div>
          <div>{this.renderSquare(5)}</div>
          <div>{this.renderSquare(6)}</div>
          <div>{this.renderSquare(7)}</div>
          <div>{this.renderSquare(8)}</div>
        </div>

      </div>
    );
  }
}

export { Grid };

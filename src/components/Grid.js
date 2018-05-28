import React, { Component } from 'react';
import { Square } from './Square';

class Grid extends Component {
  renderSquare(i) {
    return <Square />;
  }

  render(){
    const status = 'Next player: X';

    return(
      <div className='Grid'>
        <div className='status'>{status}</div>
        <div className="grid-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="grid-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="grid-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export { Grid };

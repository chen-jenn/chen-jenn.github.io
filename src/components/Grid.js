import React, { Component } from 'react';
import { Square } from './Square';

class Grid extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      //resetting the state at each click
      xIsNext: !this.state.xIsNext
    });
  }

  function winner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]; 

    for (let i = 0; i < lines.length; i++){

    }
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render(){
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return(
      <div className='Grid'>
        <div className='status'><h1>{status}</h1></div>

        <div className="wrapper">
          {/* 'this' is referring to the grid class; call the renderSquare function on class */}
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

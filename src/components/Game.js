import React, { Component } from 'react';
import { Grid } from './Grid';

class Game extends Component {
  render(){
    return(
      <div className='Game'>
        <div className='game-grid'>
          <Grid />
        </div>
        <div className='game-info'>
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}

export { Game };

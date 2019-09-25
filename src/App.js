import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selColorIdx: 0,
      guesses: [],
      code: this.genCode()
    };
  }
  
  genCode() {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * colors.length));
  };

  render() {
    return (
      <div className="App">
          <button onClick={() => 
            this.setState({selColorIdx: ++this.state.selColorIdx % 4})}>
            Next Color
          </button>
        Selected Color: {colors[this.state.selColorIdx]}
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard />
          <div>
            <ColorPicker />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;

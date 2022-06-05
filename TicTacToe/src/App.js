import React, { Component } from 'react';
import './App.module.css';
import Cell from './components/Cell';
import styles from './App.module.css';

export default class App extends Component  {
  constructor(props){
    super(props);

    this.state = {
      playerTurn: 1,
      board: [
          0, 0, 0,
          0, 0, 0,
          0, 0, 0,
      ]
    };
  }

  cellClick = (id) => {

      let newBoard = [...this.state.board];
      newBoard[id] = this.state.playerTurn;

      this.setState({ board: newBoard });
      if(this.state.playerTurn === 1) {
        this.setState({ playerTurn: 2 });
      }else {
        this.setState({ playerTurn: 1 });
      }
    }


s

  render () {
    return (
        <div className={ styles.board }>
          { this.state.board.map((c, index) => <Cell
                                                                key={index}
                                                                value={c}
                                                                onCellClick={ this.cellClick }
                                                                id={index}
                                                              />)
            }

        </div>
    )
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

  //  A propriedade onClick do DOM embutida no componente <button> diz ao React para criar um evento de escuta (event listener). 
   
  //  Quando o botão é clicado, o React irá chamar a função o manipulador de eventos onClick definido no método render() do Quadrado.
   
  //  Esse manipulador de eventos chamará a função recebida através da propriedade onClick que foi criada no Tabuleiro (this.props.onClick()).

  // Como o Tabuleiro passou onClick={() => this.handleClick(i)} para o Quadrado, a função this.handleClick(i) será chamada quando o Quadrado for clicado.

function Square(props){
  return (
    <button 
      className="square" 
      onClick={props.onClick}//Chama função onClick do Tabuleiro
    >
      {props.value}
    </button>
  );
}

  
class Board extends React.Component {//Tabuleiro

  constructor(props){
    
    super(props);

    this.state = ({
      squares: Array(9).fill(null)
    });
  }

  handleClink(i){
    const squares = this.state.squares.slice();
    squares[i] = 'x';
    this.setState({squares: squares})
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={()=> this.handleClink(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
  }
}

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
  
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
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

  handleClink(i){
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
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
    const winner =  calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = 'Winner: ' + winner;
    }
    else{
      status = 'Next player: ' + (this.state.xIsNext ? 'x': 'o');
    }
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

// Dado um array de 9 quadrados, esta função irá verificar se há um vencedor e retornará 'X', 'O' ou null conforme apropriado
function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
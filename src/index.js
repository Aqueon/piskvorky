import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(100).fill(0).map(row => new Array(100).fill(null)),
            xIsNext: true,
        };
    }

    handleClick(i, j) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i][j]) {
            return;
        }
        squares[i][j] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i, j) {
    return <Square
                value={this.state.squares[i][j]}
                onClick={() => this.handleClick(i, j)}
            />;
    }

    createBoard = () => {
        let board = [];

        for (let i = 0; i < 50; i++) {
            let row = [];
            for (let j = 0; j < 50; j++) {
                row.push(this.renderSquare(i, j));
            }
            board.push(<div className="board-row">{row}</div>);
        }

        return board;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else if (checkTie(this.state.squares)) {
            status = 'It\'s a tie';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                {/* <div className="board-row">
                    {this.renderSquare(0,0)}
                    {this.renderSquare(0,1)}
                    {this.renderSquare(0,2)}
                    {this.renderSquare(0,3)}
                    {this.renderSquare(0,4)}
                    {this.renderSquare(0,5)}
                    {this.renderSquare(0,6)}
                    {this.renderSquare(0,7)}
                    {this.renderSquare(0,8)}
                    {this.renderSquare(0,9)}
                    {this.renderSquare(0,10)}
                    {this.renderSquare(0,11)}
                    {this.renderSquare(0,12)}
                    {this.renderSquare(0,13)}
                    {this.renderSquare(0,14)}
                    {this.renderSquare(0,15)}
                    {this.renderSquare(0,16)}
                    {this.renderSquare(0,17)}
                    {this.renderSquare(0,18)}
                    {this.renderSquare(0,19)}
                    {this.renderSquare(0,20)}
                    {this.renderSquare(0,21)}
                    {this.renderSquare(0,22)}
                    {this.renderSquare(0,23)}
                    {this.renderSquare(0,24)}
                    {this.renderSquare(0,25)}
                    {this.renderSquare(0,26)}
                    {this.renderSquare(0,27)}
                    {this.renderSquare(0,28)}
                    {this.renderSquare(0,29)}
                    {this.renderSquare(0,30)}
                    {this.renderSquare(0,31)}
                    {this.renderSquare(0,32)}
                    {this.renderSquare(0,33)}
                    {this.renderSquare(0,34)}
                    {this.renderSquare(0,35)}
                    {this.renderSquare(0,36)}
                    {this.renderSquare(0,37)}
                    {this.renderSquare(0,38)}
                    {this.renderSquare(0,39)}
                    {this.renderSquare(0,40)}
                    {this.renderSquare(0,41)}
                    {this.renderSquare(0,42)}
                    {this.renderSquare(0,43)}
                    {this.renderSquare(0,44)}
                    {this.renderSquare(0,45)}
                    {this.renderSquare(0,46)}
                    {this.renderSquare(0,47)}
                    {this.renderSquare(0,48)}
                    {this.renderSquare(0,49)}
                    {this.renderSquare(0,50)}
                    {this.renderSquare(0,51)}
                    {this.renderSquare(0,52)}
                    {this.renderSquare(0,53)}
                    {this.renderSquare(0,54)}
                    {this.renderSquare(0,55)}
                    {this.renderSquare(0,56)}
                    {this.renderSquare(0,57)}
                    {this.renderSquare(0,58)}
                    {this.renderSquare(0,59)}
                    {this.renderSquare(0,60)}
                    {this.renderSquare(0,61)}
                    {this.renderSquare(0,62)}
                    {this.renderSquare(0,63)}
                    {this.renderSquare(0,64)}
                    {this.renderSquare(0,65)}
                    {this.renderSquare(0,66)}
                    {this.renderSquare(0,67)}
                    {this.renderSquare(0,68)}
                    {this.renderSquare(0,69)}
                    {this.renderSquare(0,70)}
                    {this.renderSquare(0,71)}
                    {this.renderSquare(0,72)}
                    {this.renderSquare(0,73)}
                    {this.renderSquare(0,74)}
                    {this.renderSquare(0,75)}
                    {this.renderSquare(0,76)}
                    {this.renderSquare(0,77)}
                    {this.renderSquare(0,78)}
                    {this.renderSquare(0,79)}
                    {this.renderSquare(0,80)}
                    {this.renderSquare(0,81)}
                    {this.renderSquare(0,82)}
                    {this.renderSquare(0,83)}
                    {this.renderSquare(0,84)}
                    {this.renderSquare(0,85)}
                    {this.renderSquare(0,86)}
                    {this.renderSquare(0,87)}
                    {this.renderSquare(0,88)}
                    {this.renderSquare(0,89)}
                    {this.renderSquare(0,90)}
                    {this.renderSquare(0,91)}
                    {this.renderSquare(0,92)}
                    {this.renderSquare(0,93)}
                    {this.renderSquare(0,94)}
                    {this.renderSquare(0,95)}
                    {this.renderSquare(0,96)}
                    {this.renderSquare(0,97)}
                    {this.renderSquare(0,98)}
                    {this.renderSquare(0,99)}
                </div> */}
                {this.createBoard()}
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

function checkTie(squares) {
    let tie = true;
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares.length; j++) {
            if (!squares[i][j]) {
                tie = false;
                break;
            }
        }
    }
    return tie;
}

function calculateWinner(squares) {
    // const lines = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6],
    // ];

    // for (let i = 0; i < lines.length; i++) {
    //     const [a, b, c] = lines[i];
    //     if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
    //         return squares[a];
    //     }
    // }

    for (let i = 0; i < squares.length; i++) {
        
    }
    return null;
}
  
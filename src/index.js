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
            squares: Array(30).fill().map(row => Array(30).fill(null)),
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
                    key={i+","+j}
                />;
    }

    createBoard = () => {
        let board = [];

        for (let i = 0; i < 30; i++) {
            let row = [];
            for (let j = 0; j < 30; j++) {
                row.push(this.renderSquare(i, j));
            }
            board.push(<div className="board-row" key={i}>{row}</div>);
        }

        return board;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
            alert("Winner: " + winner);
        } else if (checkTie(this.state.squares)) {
            status = 'It\'s a tie';
            alert("It's a tie");
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
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
    let winner = null;
    for (let i = 0; i < squares.length; i++) {
        for (let j = 0; j < squares.length; j++) {
            if (i <= squares.length - 5 && squares[i][j]) {
                if (squares[i][j] === squares[i+1][j] &&
                    squares[i][j] === squares[i+2][j] &&
                    squares[i][j] === squares[i+3][j] &&
                    squares[i][j] === squares[i+4][j]) {
                        winner = squares[i][j];
                    }
            }
            if (j <= squares.length - 5 && squares[i][j]) {
                if (squares[i][j] === squares[i][j+1] &&
                    squares[i][j] === squares[i][j+2] &&
                    squares[i][j] === squares[i][j+3] &&
                    squares[i][j] === squares[i][j+4]) {
                        winner = squares[i][j];
                    }
            }
            if (i <= squares.length - 5 && j <= squares.length - 5 && squares[i][j]) {
                if (squares[i][j] === squares[i+1][j+1] &&
                    squares[i][j] === squares[i+2][j+2] &&
                    squares[i][j] === squares[i+3][j+3] &&
                    squares[i][j] === squares[i+4][j+4]) {
                        winner = squares[i][j];
                    }
            }
            if (i >= 4 && j <= squares.length - 5 && squares[i][j]) {
                if (squares[i][j] === squares[i-1][j+1] &&
                    squares[i][j] === squares[i-2][j+2] &&
                    squares[i][j] === squares[i-3][j+3] &&
                    squares[i][j] === squares[i-4][j+4]) {
                        winner = squares[i][j];
                    }
            }
        }
    }
    return winner;
}
  
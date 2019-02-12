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
            squares: Array(100).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
    return <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />;
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
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                    {this.renderSquare(63)}
                    {this.renderSquare(64)}
                    {this.renderSquare(65)}
                    {this.renderSquare(66)}
                    {this.renderSquare(67)}
                    {this.renderSquare(68)}
                    {this.renderSquare(69)}
                    {this.renderSquare(70)}
                    {this.renderSquare(71)}
                    {this.renderSquare(72)}
                    {this.renderSquare(73)}
                    {this.renderSquare(74)}
                    {this.renderSquare(75)}
                    {this.renderSquare(76)}
                    {this.renderSquare(77)}
                    {this.renderSquare(78)}
                    {this.renderSquare(79)}
                    {this.renderSquare(80)}
                    {this.renderSquare(81)}
                    {this.renderSquare(82)}
                    {this.renderSquare(83)}
                    {this.renderSquare(84)}
                    {this.renderSquare(85)}
                    {this.renderSquare(86)}
                    {this.renderSquare(87)}
                    {this.renderSquare(88)}
                    {this.renderSquare(89)}
                    {this.renderSquare(90)}
                    {this.renderSquare(91)}
                    {this.renderSquare(92)}
                    {this.renderSquare(93)}
                    {this.renderSquare(94)}
                    {this.renderSquare(95)}
                    {this.renderSquare(96)}
                    {this.renderSquare(97)}
                    {this.renderSquare(98)}
                    {this.renderSquare(99)}
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
                </div>
                <div className="board-row">
                    
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

function checkTie(squares) {
    let tie = true;
    for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
            tie = false;
            break;
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
        if (squares[i] === squares[i+1] && squares[i] === squares[i+2] && squares[i] === squares[i+3] && squares[i] === squares[i+4]) {
            console.log(squares[i]);
            return squares[i];
        }
    }
    return null;
}
  
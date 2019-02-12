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
                </div>
                <div className="board-row">
                    {this.renderSquare(1,0)}
                    {this.renderSquare(1,1)}
                    {this.renderSquare(1,2)}
                    {this.renderSquare(1,3)}
                    {this.renderSquare(1,4)}
                    {this.renderSquare(1,5)}
                    {this.renderSquare(1,6)}
                    {this.renderSquare(1,7)}
                    {this.renderSquare(1,8)}
                    {this.renderSquare(1,9)}
                    {this.renderSquare(1,10)}
                    {this.renderSquare(1,11)}
                    {this.renderSquare(1,12)}
                    {this.renderSquare(1,13)}
                    {this.renderSquare(1,14)}
                    {this.renderSquare(1,15)}
                    {this.renderSquare(1,16)}
                    {this.renderSquare(1,17)}
                    {this.renderSquare(1,18)}
                    {this.renderSquare(1,19)}
                    {this.renderSquare(1,20)}
                    {this.renderSquare(1,21)}
                    {this.renderSquare(1,22)}
                    {this.renderSquare(1,23)}
                    {this.renderSquare(1,24)}
                    {this.renderSquare(1,25)}
                    {this.renderSquare(1,26)}
                    {this.renderSquare(1,27)}
                    {this.renderSquare(1,28)}
                    {this.renderSquare(1,29)}
                    {this.renderSquare(1,30)}
                    {this.renderSquare(1,31)}
                    {this.renderSquare(1,32)}
                    {this.renderSquare(1,33)}
                    {this.renderSquare(1,34)}
                    {this.renderSquare(1,35)}
                    {this.renderSquare(1,36)}
                    {this.renderSquare(1,37)}
                    {this.renderSquare(1,38)}
                    {this.renderSquare(1,39)}
                    {this.renderSquare(1,40)}
                    {this.renderSquare(1,41)}
                    {this.renderSquare(1,42)}
                    {this.renderSquare(1,43)}
                    {this.renderSquare(1,44)}
                    {this.renderSquare(1,45)}
                    {this.renderSquare(1,46)}
                    {this.renderSquare(1,47)}
                    {this.renderSquare(1,48)}
                    {this.renderSquare(1,49)}
                    {this.renderSquare(1,50)}
                    {this.renderSquare(1,51)}
                    {this.renderSquare(1,52)}
                    {this.renderSquare(1,53)}
                    {this.renderSquare(1,54)}
                    {this.renderSquare(1,55)}
                    {this.renderSquare(1,56)}
                    {this.renderSquare(1,57)}
                    {this.renderSquare(1,58)}
                    {this.renderSquare(1,59)}
                    {this.renderSquare(1,60)}
                    {this.renderSquare(1,61)}
                    {this.renderSquare(1,62)}
                    {this.renderSquare(1,63)}
                    {this.renderSquare(1,64)}
                    {this.renderSquare(1,65)}
                    {this.renderSquare(1,66)}
                    {this.renderSquare(1,67)}
                    {this.renderSquare(1,68)}
                    {this.renderSquare(1,69)}
                    {this.renderSquare(1,70)}
                    {this.renderSquare(1,71)}
                    {this.renderSquare(1,72)}
                    {this.renderSquare(1,73)}
                    {this.renderSquare(1,74)}
                    {this.renderSquare(1,75)}
                    {this.renderSquare(1,76)}
                    {this.renderSquare(1,77)}
                    {this.renderSquare(1,78)}
                    {this.renderSquare(1,79)}
                    {this.renderSquare(1,80)}
                    {this.renderSquare(1,81)}
                    {this.renderSquare(1,82)}
                    {this.renderSquare(1,83)}
                    {this.renderSquare(1,84)}
                    {this.renderSquare(1,85)}
                    {this.renderSquare(1,86)}
                    {this.renderSquare(1,87)}
                    {this.renderSquare(1,88)}
                    {this.renderSquare(1,89)}
                    {this.renderSquare(1,90)}
                    {this.renderSquare(1,91)}
                    {this.renderSquare(1,92)}
                    {this.renderSquare(1,93)}
                    {this.renderSquare(1,94)}
                    {this.renderSquare(1,95)}
                    {this.renderSquare(1,96)}
                    {this.renderSquare(1,97)}
                    {this.renderSquare(1,98)}
                    {this.renderSquare(1,99)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2,0)}
                    {this.renderSquare(2,1)}
                    {this.renderSquare(2,2)}
                    {this.renderSquare(2,3)}
                    {this.renderSquare(2,4)}
                    {this.renderSquare(2,5)}
                    {this.renderSquare(2,6)}
                    {this.renderSquare(2,7)}
                    {this.renderSquare(2,8)}
                    {this.renderSquare(2,9)}
                    {this.renderSquare(2,10)}
                    {this.renderSquare(2,11)}
                    {this.renderSquare(2,12)}
                    {this.renderSquare(2,13)}
                    {this.renderSquare(2,14)}
                    {this.renderSquare(2,15)}
                    {this.renderSquare(2,16)}
                    {this.renderSquare(2,17)}
                    {this.renderSquare(2,18)}
                    {this.renderSquare(2,19)}
                    {this.renderSquare(2,20)}
                    {this.renderSquare(2,21)}
                    {this.renderSquare(2,22)}
                    {this.renderSquare(2,23)}
                    {this.renderSquare(2,24)}
                    {this.renderSquare(2,25)}
                    {this.renderSquare(2,26)}
                    {this.renderSquare(2,27)}
                    {this.renderSquare(2,28)}
                    {this.renderSquare(2,29)}
                    {this.renderSquare(2,30)}
                    {this.renderSquare(2,31)}
                    {this.renderSquare(2,32)}
                    {this.renderSquare(2,33)}
                    {this.renderSquare(2,34)}
                    {this.renderSquare(2,35)}
                    {this.renderSquare(2,36)}
                    {this.renderSquare(2,37)}
                    {this.renderSquare(2,38)}
                    {this.renderSquare(2,39)}
                    {this.renderSquare(2,40)}
                    {this.renderSquare(2,41)}
                    {this.renderSquare(2,42)}
                    {this.renderSquare(2,43)}
                    {this.renderSquare(2,44)}
                    {this.renderSquare(2,45)}
                    {this.renderSquare(2,46)}
                    {this.renderSquare(2,47)}
                    {this.renderSquare(2,48)}
                    {this.renderSquare(2,49)}
                    {this.renderSquare(2,50)}
                    {this.renderSquare(2,51)}
                    {this.renderSquare(2,52)}
                    {this.renderSquare(2,53)}
                    {this.renderSquare(2,54)}
                    {this.renderSquare(2,55)}
                    {this.renderSquare(2,56)}
                    {this.renderSquare(2,57)}
                    {this.renderSquare(2,58)}
                    {this.renderSquare(2,59)}
                    {this.renderSquare(2,60)}
                    {this.renderSquare(2,61)}
                    {this.renderSquare(2,62)}
                    {this.renderSquare(2,63)}
                    {this.renderSquare(2,64)}
                    {this.renderSquare(2,65)}
                    {this.renderSquare(2,66)}
                    {this.renderSquare(2,67)}
                    {this.renderSquare(2,68)}
                    {this.renderSquare(2,69)}
                    {this.renderSquare(2,70)}
                    {this.renderSquare(2,71)}
                    {this.renderSquare(2,72)}
                    {this.renderSquare(2,73)}
                    {this.renderSquare(2,74)}
                    {this.renderSquare(2,75)}
                    {this.renderSquare(2,76)}
                    {this.renderSquare(2,77)}
                    {this.renderSquare(2,78)}
                    {this.renderSquare(2,79)}
                    {this.renderSquare(2,80)}
                    {this.renderSquare(2,81)}
                    {this.renderSquare(2,82)}
                    {this.renderSquare(2,83)}
                    {this.renderSquare(2,84)}
                    {this.renderSquare(2,85)}
                    {this.renderSquare(2,86)}
                    {this.renderSquare(2,87)}
                    {this.renderSquare(2,88)}
                    {this.renderSquare(2,89)}
                    {this.renderSquare(2,90)}
                    {this.renderSquare(2,91)}
                    {this.renderSquare(2,92)}
                    {this.renderSquare(2,93)}
                    {this.renderSquare(2,94)}
                    {this.renderSquare(2,95)}
                    {this.renderSquare(2,96)}
                    {this.renderSquare(2,97)}
                    {this.renderSquare(2,98)}
                    {this.renderSquare(2,99)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3,0)}
                    {this.renderSquare(3,1)}
                    {this.renderSquare(3,2)}
                    {this.renderSquare(3,3)}
                    {this.renderSquare(3,4)}
                    {this.renderSquare(3,5)}
                    {this.renderSquare(3,6)}
                    {this.renderSquare(3,7)}
                    {this.renderSquare(3,8)}
                    {this.renderSquare(3,9)}
                    {this.renderSquare(3,10)}
                    {this.renderSquare(3,11)}
                    {this.renderSquare(3,12)}
                    {this.renderSquare(3,13)}
                    {this.renderSquare(3,14)}
                    {this.renderSquare(3,15)}
                    {this.renderSquare(3,16)}
                    {this.renderSquare(3,17)}
                    {this.renderSquare(3,18)}
                    {this.renderSquare(3,19)}
                    {this.renderSquare(3,20)}
                    {this.renderSquare(3,21)}
                    {this.renderSquare(3,22)}
                    {this.renderSquare(3,23)}
                    {this.renderSquare(3,24)}
                    {this.renderSquare(3,25)}
                    {this.renderSquare(3,26)}
                    {this.renderSquare(3,27)}
                    {this.renderSquare(3,28)}
                    {this.renderSquare(3,29)}
                    {this.renderSquare(3,30)}
                    {this.renderSquare(3,31)}
                    {this.renderSquare(3,32)}
                    {this.renderSquare(3,33)}
                    {this.renderSquare(3,34)}
                    {this.renderSquare(3,35)}
                    {this.renderSquare(3,36)}
                    {this.renderSquare(3,37)}
                    {this.renderSquare(3,38)}
                    {this.renderSquare(3,39)}
                    {this.renderSquare(3,40)}
                    {this.renderSquare(3,41)}
                    {this.renderSquare(3,42)}
                    {this.renderSquare(3,43)}
                    {this.renderSquare(3,44)}
                    {this.renderSquare(3,45)}
                    {this.renderSquare(3,46)}
                    {this.renderSquare(3,47)}
                    {this.renderSquare(3,48)}
                    {this.renderSquare(3,49)}
                    {this.renderSquare(3,50)}
                    {this.renderSquare(3,51)}
                    {this.renderSquare(3,52)}
                    {this.renderSquare(3,53)}
                    {this.renderSquare(3,54)}
                    {this.renderSquare(3,55)}
                    {this.renderSquare(3,56)}
                    {this.renderSquare(3,57)}
                    {this.renderSquare(3,58)}
                    {this.renderSquare(3,59)}
                    {this.renderSquare(3,60)}
                    {this.renderSquare(3,61)}
                    {this.renderSquare(3,62)}
                    {this.renderSquare(3,63)}
                    {this.renderSquare(3,64)}
                    {this.renderSquare(3,65)}
                    {this.renderSquare(3,66)}
                    {this.renderSquare(3,67)}
                    {this.renderSquare(3,68)}
                    {this.renderSquare(3,69)}
                    {this.renderSquare(3,70)}
                    {this.renderSquare(3,71)}
                    {this.renderSquare(3,72)}
                    {this.renderSquare(3,73)}
                    {this.renderSquare(3,74)}
                    {this.renderSquare(3,75)}
                    {this.renderSquare(3,76)}
                    {this.renderSquare(3,77)}
                    {this.renderSquare(3,78)}
                    {this.renderSquare(3,79)}
                    {this.renderSquare(3,80)}
                    {this.renderSquare(3,81)}
                    {this.renderSquare(3,82)}
                    {this.renderSquare(3,83)}
                    {this.renderSquare(3,84)}
                    {this.renderSquare(3,85)}
                    {this.renderSquare(3,86)}
                    {this.renderSquare(3,87)}
                    {this.renderSquare(3,88)}
                    {this.renderSquare(3,89)}
                    {this.renderSquare(3,90)}
                    {this.renderSquare(3,91)}
                    {this.renderSquare(3,92)}
                    {this.renderSquare(3,93)}
                    {this.renderSquare(3,94)}
                    {this.renderSquare(3,95)}
                    {this.renderSquare(3,96)}
                    {this.renderSquare(3,97)}
                    {this.renderSquare(3,98)}
                    {this.renderSquare(3,99)}
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
  
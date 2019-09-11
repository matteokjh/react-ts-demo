import * as React from 'react';
const useState = React.useState;
// import { useState, useEffect } from 'react';
import './ticTacToe.css';
// 对着教程打的九宫格井字棋游戏
// react first demo

// 静态类型
export type GameHistory = {
    squares: Array<string>
}
export type BoardProps = {
    squares: Array<string>,
    onClick: (i: number) => void,
}
export type SquareProps = {
    onClick: () => void,
    value: string
}

function Square(props: SquareProps) { // 每一个小方格
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function Board(props: BoardProps) { // 棋盘
    const renderSquare = (i: number) => (
        <Square
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
        />
    )
    return (
        <div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

function Game() { // 游戏wrapper
    const INIT_HISTORY = [
        {
            squares: Array(9).fill(null)
        }
    ]
    const [history, setHistory] = useState(INIT_HISTORY as Array<GameHistory>);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);


    const jumpTo = (step: number) => { // 跳转事件，这个函数不改变历史
        setStepNumber(step);// 跳到指定步
        setXIsNext(step % 2 === 0)// 奇数步为X(偶数步的下一步)
    }
    const handleClick = (i: number) => { // 具体每个格子点击事件，会更新所有信息
        const $history = history.slice(0, stepNumber + 1); // 走过的路径
        const cur = $history[$history.length - 1]; // 当前路径
        const squares = cur.squares.slice(); // 当前路径数值集合
        if (calculateWinner(squares) || squares[i]) { // 如果出了winner或者该格被点过
            return;
        } else {
            squares[i] = xIsNext ? 'X' : 'O';
            setHistory($history.concat({ squares }))
            setStepNumber($history.length)
            setXIsNext(!xIsNext)
            console.log(i,squares)
        }
    }
    const cur = history[stepNumber]; // 如果触发了jumpTo，当前记录的最新历史会根据jumpTo改变的stepNumber变化
    const winner = calculateWinner(cur.squares) // 结出冠军
    
    let status;
    if (winner) { // 提示文字
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }
    return (
        <div className='game'>
            <p>井字棋</p>
            <div className='game-board'>
                <Board
                    squares={cur.squares}
                    onClick={handleClick}
                />
            </div>
            <div className='game-info'>
                <div>{status}</div>
                <ol>{
                    history.map((s, m) => { // 根据历史，生成模板，渲染出来并挂上点击事件；
                        const desc = m ?
                            'Go to move #' + m :
                            'Go to game start';
                        return (
                            <li key={m}>
                                <button onClick={() => jumpTo(m)}>
                                    {desc}
                                </button>
                            </li>
                        )
                    })
                }</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares: Array<string>) { // 冠军函数
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

export default Game
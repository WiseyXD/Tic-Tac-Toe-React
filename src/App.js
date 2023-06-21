import "./App.css";
import "./index.css";
import { useState } from "react";

function Square(props) {
	return (
		<button className="square" onClick={props.squareClicked}>
			{props.value}
		</button>
	);
}

export default function Board() {
	const [sqaures, setSquares] = useState(Array(9).fill(null));
	const [XisNext, setXisNext] = useState(true);
	const winner = checkWinner(sqaures);
	let status;
	winner
		? (status = "Winner is " + winner)
		: (status = XisNext ? "Next is X" : "Next is O");
	function handleClick(i) {
		if (sqaures[i] || checkWinner(sqaures)) {
			return;
		}
		const nextSqaures = sqaures.slice();

		XisNext ? (nextSqaures[i] = "X") : (nextSqaures[i] = "O");
		setXisNext(!XisNext);
		setSquares(nextSqaures);
	}
	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square
					value={sqaures[0]}
					squareClicked={() => handleClick(0)}
				/>
				<Square
					value={sqaures[1]}
					squareClicked={() => handleClick(1)}
				/>
				<Square
					value={sqaures[2]}
					squareClicked={() => handleClick(2)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={sqaures[3]}
					squareClicked={() => handleClick(3)}
				/>
				<Square
					value={sqaures[4]}
					squareClicked={() => handleClick(4)}
				/>
				<Square
					value={sqaures[5]}
					squareClicked={() => handleClick(5)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={sqaures[6]}
					squareClicked={() => handleClick(6)}
				/>
				<Square
					value={sqaures[7]}
					squareClicked={() => handleClick(7)}
				/>
				<Square
					value={sqaures[8]}
					squareClicked={() => handleClick(8)}
				/>
			</div>
		</>
	);
}

function checkWinner(sqaures) {
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
		let [a, b, c] = lines[i];
		if (
			sqaures[a] &&
			sqaures[a] === sqaures[b] &&
			sqaures[b] === sqaures[c]
		) {
			return sqaures[a];
		}
	}
	return null;
}

import React, { useState } from "react";
import PropTypes from "prop-types";

export function Cat(props) {
	const [winner, setWinner] = useState(null);

	const [turn, setTurn] = useState(props.first);

	const [position, setPosition] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);
	function checkWinner() {
		//horizontales fila 1

		if (
			position[0] == position[1] &&
			position[0] == position[2] &&
			position[0] != ""
		) {
			setWinner(position[0]);
			return;
		}
		// horizontales fila 2
		if (
			position[3] == position[4] &&
			position[3] == position[5] &&
			position[3] != ""
		) {
			setWinner(position[3]);
			console.log(position[3]);
			return;
		}
		//horizontales fila 3
		if (
			position[6] == position[7] &&
			position[6] == position[8] &&
			position[6] != ""
		) {
			setWinner(position[6]);
			return;
		}

		//Verticales Columna 1

		if (
			position[0] == position[3] &&
			position[0] == position[6] &&
			position[0] != ""
		) {
			setWinner(position[0]);
			return;
		}
		//Verticales Columna 2

		if (
			position[1] == position[4] &&
			position[1] == position[7] &&
			position[1] != ""
		) {
			setWinner(position[1]);
			return;
		}
		//Verticales Columna 3

		if (
			position[2] == position[5] &&
			position[2] == position[8] &&
			position[2] != ""
		) {
			setWinner(position[2]);
			return;
		}

		//Diagonal Izquierda Derecha
		if (
			position[0] == position[4] &&
			position[0] == position[8] &&
			position[0] != ""
		) {
			setWinner(position[0]);
			return;
		}
		//Diagonal Derecha Izquierda
		if (
			position[2] == position[4] &&
			position[2] == position[6] &&
			position[2] != ""
		) {
			setWinner(position[2]);
			return;
		}
	}

	function renderTurn(newPosition) {
		let copia = position;
		if (copia[newPosition] == "") {
			copia[newPosition] = turn;
			turn == "X" ? setTurn("O") : setTurn("X");
		}

		setPosition(copia);

		checkWinner();
	}
	return (
		<div className="container-cat">
			<div className="heading">
				<h1> Tic Tac Toe in React.js</h1>
				<h2>It is a {turn} turn!</h2>
				<button
					type="button"
					className="btn btn-light"
					id="boton"
					onClick={() => {
						setPosition(["", "", "", "", "", "", "", "", ""]);
						setWinner();
					}}>
					Start Over
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(0);
					}}>
					{position[0]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(1);
					}}>
					{position[1]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(2);
					}}>
					{position[2]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(3);
					}}>
					{position[3]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(4);
					}}>
					{position[4]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(5);
					}}>
					{position[5]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(6);
					}}>
					{position[6]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(7);
					}}>
					{position[7]}
				</button>
			</div>
			<div className="square">
				<button
					className="boxes"
					onClick={() => {
						renderTurn(8);
					}}>
					{position[8]}
				</button>
			</div>
			<h1>{winner != null ? "The Winner is " + winner : ""}</h1>
		</div>
	);
}
Cat.propTypes = {
	first: PropTypes.string
};

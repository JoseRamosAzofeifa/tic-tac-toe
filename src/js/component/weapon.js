import React, { useState } from "react";
import PropTypes from "prop-types";

export function Weapon(props) {
	return (
		<div className="box">
			<div className="choose">
				<p>CHOOSE YOUR WEAPON</p>
			</div>
			<div className="useres">
				<div className="form-group">
					<label htmlFor="exampleInputPassword1" id="user">
						User 1
					</label>
					<input
						type="name"
						className="form-control"
						id="nombre"
						placeholder="Name"
						onChange={props.nameUser}
					/>
					<button
						id="user1"
						onClick={() => {
							props.changePage("cat");
							props.setFirst("X");
						}}>
						X
					</button>
				</div>
				<div className="form-group2">
					<label htmlFor="exampleInput" id="user">
						User 2
					</label>
					<input
						type="name"
						className="form-control"
						id="nombre"
						placeholder="Name"
						onChange={props.nameUser2}
					/>
					<button
						id="user2"
						onClick={() => {
							props.changePage("cat");
							props.setFirst("O");
						}}>
						O
					</button>
				</div>
			</div>
		</div>
	);
}

Weapon.propTypes = {
	changePage: PropTypes.func,
	nameUser: PropTypes.func,
	nameUser2: PropTypes.func,
	setFirst: PropTypes.func
};

import React, { useState } from "react";
import { Cat } from "./cat";
import { Weapon } from "./weapon";

export function Home() {
	const [page, setPage] = useState("weapon");
	const [user1, setUser1] = useState("");
	const [user2, setUser2] = useState("");
	const [first, setFirst] = useState("");
	function changePage(newPage) {
		setPage(newPage);
	}

	function nameUser(e) {
		setUser1(e.target.value);
	}

	function nameUser2(e) {
		setUser2(e.target.value);
	}

	return (
		<div>
			<h1>{user1}</h1>
			{page == "weapon" ? (
				<Weapon
					changePage={changePage}
					nameUser={nameUser}
					nameUser2={nameUser2}
					setFirst={setFirst}
				/>
			) : (
				<Cat first={first} />
			)}
		</div>
	);
}

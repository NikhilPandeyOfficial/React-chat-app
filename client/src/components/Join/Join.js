import React, { useState } from 'react'; // useState = this is a 'hook' for using state inside the fn based component (sfc)
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
	//use of hooks
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div>
					<input
						placeholder="Name"
						className="joinInput"
						type="text"
						onChange={(e) => setName(e.target.value)}
					/>{' '}
				</div>
				<div>
					<input
						placeholder="Room"
						className="joinInput mt-20"
						type="text"
						onChange={(e) => setRoom(e.target.value)}
					/>{' '}
				</div>
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className="button mt-20" type="submit">
						Sign IN
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;

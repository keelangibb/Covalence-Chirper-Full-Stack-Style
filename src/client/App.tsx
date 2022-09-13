import * as React from 'react';
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	const [chirps, setChirps] = useState([]);

	useEffect(() => {
		async function getChirps() {
			try {
				const res = await fetch('/api/chirps');
				const chirps = await res.json();
				setChirps(chirps);
			} catch (error) {
				console.log(error);
			}
		}
		getChirps();
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">My Chirps!</h1>
			<ul className="list-group">
				{chirps.map((chirp) => {
					return <li className='list-group-item' key={chirp.id}>{chirp.content}</li>
				})}
			</ul>
		</main>
	);
};

interface AppProps { }

interface Chirps {
	chirps: Array<{ content: string }>;
}


export default App;

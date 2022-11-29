import React from 'react';								// React se emplea en las líneas 7 y 8 por lo que se incluye
import Plato from './Plato';
import Cubierto from './Cubierto';

const Mantel = () => {									// Convertimos Mantel de class React.component a const
														// Las props del this.state las convertimos en const y las definimos con useState
	const [height, setHeight] = React.useState(120);
	const [backgroundColor, setBackgroundColor] = React.useState('darksalmon');

	return (											// Se omitió render que envolvía al return
		<div
			className="mantel spaceAround"
			style={{height, backgroundColor }} 			// height reemplaza a height: this.state.height y backgroundColor backgroundColor: this.state.backgroundColor
		>
			<Cubierto />
			<Plato />
			<Cubierto />
		</div>
	);
};

export default Mantel;

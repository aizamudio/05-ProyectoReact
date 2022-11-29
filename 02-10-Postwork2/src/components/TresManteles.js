import Mantel from "./Mantel";

function TresManteles() {
	return (
		<div 
			className="width100 spaceAround"						// Se le agregó backgroundColor y eight al mantel 1 y 3
		>
				<Mantel 											// Separamos por renglón las propiedades
					backgroundColor="green"
					height={90}
					colorCubierto="coral"							// Agregamos colorCubierto
				/>
				<Mantel />
            	<Mantel 											// Separamos por renglón las propiedades
					backgroundColor="purple"
					height={75}
					colorCubierto="black"							// Agregamos colorCubierto
				/>
		</div>
	);
};

export default TresManteles;

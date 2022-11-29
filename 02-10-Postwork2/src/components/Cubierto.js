import PropTypes from 'prop-types';							// Se agregó PropTypes

function Cubierto(props) {									// Agregamos props
	return (
		<div 
			className="cubierto"
			style={{backgroundColor: props.colorCubierto	//Definimos style
			}}
		/>
	);
};

Cubierto.propTypes = {										// Definimos cubierto
	colorCubierto: PropTypes.string
}

export default Cubierto;

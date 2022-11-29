import React from 'react';
import PropTypes from 'prop-types';				// Se agregó PropTypes
import Plato from './Plato';
import Cubierto from './Cubierto';

class Mantel extends React.Component {

	   /* Constructor */
	   constructor(props) {
		super(props);
		this.state = {
			backgroundColor: 'darksalmon',
			height: 120
		};
	 }

	render() {
		return (
			<div 
				className="mantel spaceAround"
				style={{
					height: this.props.height || this.state.height,								// Se agregó this.props.height ||
					backgroundColor: this.props.backgroundColor || this.state.backgroundColor	// Se agregó this.props.backgroundColor ||
				}}
			>
				<Cubierto 
					colorCubierto={this.props.colorCubierto} 				//Se le agregó colorCubierto
				/>
				<Plato />
				<Cubierto 
					colorCubierto={this.props.colorCubierto} 				//Se le agregó colorCubierto
				/>
			</div>
		);
	}
};

// Se agregó Mantel.propTypes. Posteriormente se le agregó colorCubierto

Mantel.propTypes = {
	height: PropTypes.number,
	colorCubierto: PropTypes.string,
	backgroundColor: PropTypes.string
}

export default Mantel;

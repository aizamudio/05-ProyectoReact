import Oro from './Oro';

function CentroDeMesa() {
	return (
		<div className="centroDeMesa">
			<div className="width100 spaceAround">
				<Oro />
			</div>
			<div className="width70 spaceAround paddingX">
				<Oro />
				<Oro />
			</div>
		</div>
	);
};

export default CentroDeMesa;

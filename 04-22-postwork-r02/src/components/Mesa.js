import CentroDeMesa from './CentroDeMesa';
import DosManteles from './DosManteles';
import TresManteles from './TresManteles';

function Mesa() {
	return (
		<div id="mesa" className="spaceAround">
			<TresManteles />
			<CentroDeMesa />
			<DosManteles />
		</div>
	);
};

export default Mesa;
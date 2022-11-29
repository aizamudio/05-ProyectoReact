import React from 'react';
import Boton from './Boton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};
	};

	sumar = () => {												// Se renombró handleClick por sumar
		this.setState({contador: this.state.contador + 1})
	};

	restar = () => {											// Se desarrolló la función restar
		this.setState({contador: this.state.contador - 1})
	};

   render() {
   	return (
   	   <div className="margen">
   	      <Boton
   	      	texto="Sumar"
   	      	handleClick={this.sumar}      // Se renombró handleClick por sumar y se sacó el contador del botón
   	      />
   	      {this.state.contador}
   	      <Boton                           // Se creó un botón
   	      	texto="Restar"
   	      	handleClick={this.restar}     // Se vinculó este botón a restar
   	      />
   	   </div>
   	);
   }
}

export default App;

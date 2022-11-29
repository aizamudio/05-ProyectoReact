import React from 'react';
import Tarea from './Tarea';

// Convertimos nuestra App.js en un componente stateful (clase) para usar el estado.

class App extends React.Component {         // Creamos los estados necesarios
	constructor(props) {
		super(props);
		this.state = {
			tarea: '',
			mensaje: '',
			listaTareas: ['Hacer reto 2']
		};
	};

	// Validación de tareas previamente existentes
	componentDidUpdate(prevProps, prevState) {								// Se ejecuta cada que algún estado cambia, va debajo del constructor
		if (this.state.listaTareas !== prevState.listaTareas) {
			this.setState({
				mensaje: `Por hacer: ${this.state.listaTareas.length}`
			})
		}
	};

	handleInputChange = (event) => {										// Cambio del estado cada que el usuario escriba algo
		this.setState({
			tarea: event.target.value
		});
	};

	handleClick = () => {
		const tareaEnEstado = this.state.tarea;
		if (!tareaEnEstado) return;												// Validar si el nombre existe

		const tareaYaExiste = this.state.listaTareas.find(
			(existente) => existente === tareaEnEstado
		);
		if (tareaYaExiste) return alert(`Tarea "${tareaEnEstado}" ya existe.`);

		const listaActualizada = [
			...this.state.listaTareas,
			tareaEnEstado
		];

		this.setState({																// Actualización del estado de la lista
			tarea: '',
			listaTareas: listaActualizada,
		});
	};

	borrarTarea = (key) => {														// Borrar una tarea
		const copiaDeLista = [...this.state.listaTareas];
		copiaDeLista.splice(key, 1);

		this.setState({
			listaTareas: copiaDeLista
		});
	};

	render() {
		return (
			<div className="margen">
				{this.state.mensaje}
				<br />
				<input
					value={this.state.tarea}										// Definición del input en donde introduciremos la información y registro del estado
					onChange={this.handleInputChange}
				/>
				<button onClick={this.handleClick}>
					+
				</button>

				<ul>
					{this.state.listaTareas.map((trea, key) => (					// Despliegue de los nombres que tenemos en nuestra lista
						<li key={key}												// Corrección del error Each child in a list should have a unique "key" prop
						>
							<Tarea
								tarea={trea}
								borrarTarea={() => this.borrarTarea(key)}			// Para borrar algun nombre de la lista
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;

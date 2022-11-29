import React from 'react';

function App() {

  const [state, setState] = React.useState({          // Estado a usar previamente definido
    nombre: '',
    apellidos: [
       '',   // Materno
       ''    // Paterno
    ]
  });

  const editarNombre = (event) => setState({          // Función que edita el estado del Nombre
    ...state,
    nombre: event.target.value
  });
  const editarApellido = (key) => (event) => {        // Función que edita el estado del Apellido
    const copiaApellidos = [...state.apellidos];
    copiaApellidos[key] = event.target.value;

    setState({                                        // Se crea el estado para el Nombre y Apellidos
      ...state,
      apellidos: copiaApellidos
    });
  }

  return (
    <div className="margen"                           /* div con los input del nombre y los apellidos */>
      <input onChange={editarNombre} />
      <input onChange={editarApellido(0)} />
      <input onChange={editarApellido(1)} />

      <br /><br />
      Mi nombre es:
      <br />
      <b  /* Impresión de nombres y apellidos */>
        {state.nombre} {state.apellidos[0]} {state.apellidos[1]}
      </b>
    </div>
  );
};

export default App;

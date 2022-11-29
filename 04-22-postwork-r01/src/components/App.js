import React from 'react';
import Boton from './Boton';

function App() {

  const [texto, setTexto] = React.useState('cero');
	const [numero, setNumero] = React.useState(0);

	const convertir = (num, txt) => () => {     // Definimos convertir
		setTexto(txt);
		setNumero(num);
	};

   return (                                   // Creación de un estado y se imprime para ver que funcione bien
    <div className="margen"                             // En este div pondremos los botones
      >

      {numero} - {texto}
			<br /><br />

      <Boton                                  //Botón 1
        texto="1"
        handleClick={convertir(1, 'uno')}
      />
      <Boton                                  //  Botón 2
			   texto="2"
			   handleClick={convertir(2, 'dos')}
			/>
			<Boton                                  //  Botón 3
			   texto="3"
			   handleClick={convertir(3, 'tres')}
			/>
    </div>
   );
};

export default App;

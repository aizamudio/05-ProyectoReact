import React from 'react';
import Foco from './Foco';
import FocoMercurial from './FocoMercurial';

// Coincide en varios temas con el proyecto 01-04-components ubicado en D:\Alex\OneDrive\FS-JS\05\clases\repaso

function App() {
   return (
      <div id="techo">
         <div className="filaFocos">
            <Foco />
         </div>
            <FocoMercurial />
         <div className="filaFocos">
            <Foco /> <Foco />
         </div>
            <FocoMercurial />
         <div className="filaFocos">
            <Foco /> <Foco /> <Foco />
         </div>
      </div>
   );
}

export default App;

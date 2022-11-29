import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Hojas from './pages/hojas';
import Cocos from './pages/cocos';
import Tronco from './pages/tronco';
import Palmera from './pages/palmera';

function App() {
	return (
		<div className="margen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/hojas" element={<Hojas />} />
					<Route path="/cocos" element={<Cocos />} />
					<Route path="/tronco" element={<Tronco />} />
					<Route path="/palmera" element={<Palmera />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./telaInicial";
import Acentos from "./telaSessão";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaInicial />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

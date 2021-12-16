import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./telaInicial";
import Filme from "./telaFilme";
import Acentos from "./telaSessão";
import Sucesso from "./telaSucesso";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaInicial />}></Route>
				<Route path="/filme/:id" element={<Filme />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

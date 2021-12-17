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
				<Route path="/sessoes/:idFilme" element={<Filme />}></Route>
				<Route path="/assentos/:idSessao" element={<Acentos />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

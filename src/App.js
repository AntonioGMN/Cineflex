import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./telaInicial";
import Filme from "./telaFilme";
import Acentos from "./telaSessão";
import TelaSucesso from "./telaSucesso";
import TelaAcentos from "./telaSessão";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaInicial />}></Route>
				<Route path="/sessoes/:idFilme" element={<Filme />}></Route>
				<Route path="/assentos/:idSessao" element={<TelaAcentos />}></Route>
				<Route path="/sucesso" element={<TelaSucesso />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

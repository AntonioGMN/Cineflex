import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TelaInicial from "./telaInicial";
import Filme from "./telaFilme";
import TelaSucesso from "./telaSucesso";
import TelaAcentos from "./telaSessão";

export default function App() {
	const [name, setName] = useState("");
	const [cpf, setCpf] = useState("");
	const [ids, setIds] = useState([]);
	const [assentos, setAssentos] = useState([]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TelaInicial />}></Route>
				<Route path="/sessoes/:idFilme" element={<Filme />}></Route>
				<Route
					path="/assentos/:idSessao"
					element={
						<TelaAcentos
							name={name}
							setName={setName}
							cpf={cpf}
							setCpf={setCpf}
							ids={ids}
							setIds={setIds}
							assentos={assentos}
							setAssentos={setAssentos}
						/>
					}
				></Route>
				<Route
					path="/sucesso/:idSucesso"
					element={
						<TelaSucesso name={name} cpf={cpf} ids={ids} assentos={assentos} />
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

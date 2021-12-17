import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../header";
import Recado from "../recado";
import "./style.css";

export default function Acentos() {
	const { idSessao } = useParams();
	const [dados, setDados] = useState([]);
	console.log("idSessao:" + idSessao);

	useEffect(() => {
		const promessa = axios.get(
			`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
		);
		promessa.then((resposta) => setDados(resposta.data));
	}, []);

	console.dir(dados);

	return (
		<>
			<Header />
			<Recado texto="Selecione o(s) assento(s)" />
			{/* <section className="acentos">Acentos</section>
			<section className="dadosComprador">
				<p>Nome do comprador:</p>
				<input className="input" type="text" value="Digite seu nome..." />
				<p>CPF do comprador:</p>
				<input type="text" name="input" value="Digite seu CPF..." />
			</section> */}
		</>
	);
}

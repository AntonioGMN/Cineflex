import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../header";
import Recado from "../recado";
import "./style.css";
//import Lista from "../filmes";

function Filmes() {
	const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const dados = axios.get(
			"https://mock-api.driven.com.br/api/v4/cineflex/movies"
		);

		dados.then((resposta) => {
			setFilmes(resposta.data);
		});
	}, []);

	if (filmes.length === 0) return "Carregando";

	return (
		<main className="filmes">
			{filmes.map((filme) => (
				<Link key={filme.id} to={`/sessoes/${filme.id}/`}>
					<article className="filme">
						<img src={filme.posterURL} />
					</article>
				</Link>
			))}
		</main>
	);
}

export default function TelaInicia() {
	return (
		<>
			<Header />
			<Recado texto="Selecione um filme" />
			<Filmes />
		</>
	);
}

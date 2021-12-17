import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import axios from "axios";

import "./style.css";

export default function Rodape() {
	const { idFilme } = useParams();
	const { idSessao } = useParams();
	const [dados, setDados] = useState([]);

	useEffect(() => {
		if (idSessao != undefined) {
			const promessa = axios.get(
				`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
			);
			promessa.then((resposta) => setDados(resposta.data));
		} else {
			const promessa = axios.get(
				`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`
			);
			promessa.then((resposta) => setDados(resposta.data));
		}
	}, []);

	if (idSessao === undefined) {
		return (
			<footer className="rodape">
				<img src={dados.posterURL} />
				<div>
					<p>{dados.title}</p>
				</div>
			</footer>
		);
	}

	return (
		<footer className="rodape">
			<img src={dados.movie.posterURL} />
			<div>
				<p>{dados.movie.title}</p>
				<p>
					{dados.day.date} - {dados.name}
				</p>
			</div>
		</footer>
	);
}

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../header";
import Recado from "../recado";
import axios from "axios";
import "./style.css";

// function Horas({ texto }) {
// 	//return `${texto}`;
// 	return { texto };
// }

function Sessoes() {
	const { id } = useParams();
	const [dados, setDados] = useState([]);

	useEffect(() => {
		const promessa = axios.get(
			`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`
		);
		promessa.then((resposta) => setDados(resposta.data.days));
	}, []);

	console.log(dados);

	//if (dados != undefined) {
	return (
		<section className="horarios">
			{dados.map((dia) => (
				<article className="dia">
					<p>
						{dia.weekday} - {dia.date}
					</p>
					{dia.showtimes.map((hora) => (
						<button>{hora.name}</button>
					))}
				</article>
			))}
		</section>
	);
	//}
}

export default function Filme() {
	return (
		<main className="Sessões">
			<Header />
			<Recado texto="Selecione o horário" />
			<Sessoes />

			<Link to="/">
				<button></button>
			</Link>
		</main>
	);
}

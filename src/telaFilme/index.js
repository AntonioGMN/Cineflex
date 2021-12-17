import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../header";
import Recado from "../recado";
import Rodape from "../rodape";
import axios from "axios";
import "./style.css";

function Sessoes() {
	const { idFilme } = useParams();
	const [dados, setDados] = useState([]);

	useEffect(() => {
		const promessa = axios.get(
			`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`
		);
		promessa.then((resposta) => setDados(resposta.data.days));
	}, []);

	return (
		<>
			<section className="horarios">
				{dados.map((dia) => (
					<article key={dia.id} className="dia">
						<p>
							{dia.weekday} - {dia.date}
						</p>
						{dia.showtimes.map((hora) => (
							<Link key={hora.id} to={`/assentos/${hora.id}`}>
								<button>{hora.name}</button>
							</Link>
						))}
					</article>
				))}
			</section>
		</>
	);
}

export default function Filme() {
	return (
		<main className="Sessões">
			<Header />
			<Recado texto="Selecione o horário" />
			<Sessoes />
			<Rodape />
		</main>
	);
}

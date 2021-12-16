import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import axios from "axios";

import "./style.css";

export default function Rodape() {
	const { id } = useParams();
	const [dados, setDados] = useState([]);

	useEffect(() => {
		const promessa = axios.get(
			`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`
		);
		promessa.then((resposta) => setDados(resposta.data));
	}, []);

	return (
		<footer className="rodape">
			<img src={dados.posterURL} />
			<div>
				<p>{dados.title}</p>
				{/* <span>{horario}</span> */}
			</div>
		</footer>
	);
}

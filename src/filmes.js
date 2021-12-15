import { useState, useEffect } from "react";
import axios from "axios";

export default function Lista() {
	const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const dados = axios.get(
			"https://mock-api.driven.com.br/api/v4/cineflex/movies"
		);

		dados.then((resposta) => {
			setFilmes(resposta.data);
			//console.log(filmes);
		});
	}, []);

	console.log("filmes");
	console.log(filmes);

	return (
		<section className="filmes">
			{filmes.map((imagem) => (
				<img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" />
			))}
		</section>
	);
}

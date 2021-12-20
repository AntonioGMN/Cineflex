import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../header";

export default function TelaSucesso({ name, cpf, ids, assentos }) {
	const [dados, setDados] = useState([]);
	const { idSucesso } = useParams();

	useEffect(() => {
		const promessa = axios.get(
			`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSucesso}/seats`
		);
		promessa.then((resposta) => setDados(resposta.data));
	}, []);

	if (dados.length === 0) {
		return "carregando";
	}

	return (
		<>
			<Header />
			<Recado>Pedido feito com sucesso!</Recado>
			<Sucesso>
				<div>
					<h1>Filme e sessão</h1>
					<p>{dados.movie.title}</p>
					<p>
						{dados.day.date} {dados.name}
					</p>
				</div>
				<div>
					<h1>Ingressos</h1>
					{assentos.map((l) => (
						<p key={l}>Assento {l}</p>
					))}
				</div>
				<div>
					<h1>Comprador</h1>
					<p>Nome: {name}</p>
					<p>CPF: {cpf}</p>
				</div>
				<Link to="/">
					<button>Voltar pra Home</button>
				</Link>
			</Sucesso>
		</>
	);
}

const Sucesso = styled.main`
	display: flex;
	flex-direction: column;
	padding: 29px;

	div {
		margin-top: 30px;
	}

	a {
		align-self: center;
	}

	h1 {
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 28px;
		letter-spacing: 0.04em;
		text-align: left;
		margin-bottom: 5px;
	}

	P {
		font-size: 22px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px;
		letter-spacing: 0.04em;
		text-align: left;
	}

	button {
		height: 42px;
		width: 225px;
		border: none;
		border-radius: 3px;
		background: #e8833a;
		margin-top: 82px;

		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 21px;
		letter-spacing: 0.04em;
		text-align: center;
		color: #ffffff;
	}
`;

const Recado = styled.section`
	height: 100px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 0.04em;
	color: #293845;
	color: #247a6b;
`;

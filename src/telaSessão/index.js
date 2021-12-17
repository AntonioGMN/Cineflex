import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../header";
import Recado from "../recado";
import styled from "styled-components";
import "./style.css";

function Lugares() {
	const { idSessao } = useParams();
	const [dados, setDados] = useState([]);

	const [teste, setTeste] = useState([]);

	useEffect(() => {
		const promessa = axios.get(
			`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
		);
		promessa.then((resposta) => {
			setDados(resposta.data);
			setTeste(resposta.data.seats);
		});
	}, []);

	console.dir(dados);
	console.log("teste");
	console.log(teste);

	if (dados.length === 0) {
		return <Acentos>Carregando</Acentos>;
	}

	//setSelecionado(...teste.map((x) => x.isAvailable));

	return (
		<Acentos>
			{dados.seats.map((dado) => (
				<Acento disponivel={dado.isAvailable} key={dado.name}>
					{dado.name}
				</Acento>
			))}
		</Acentos>
	);
}

export default function TelaAcentos() {
	return (
		<>
			<Header />
			<Recado texto="Selecione o(s) assento(s)" />
			<MainTela>
				<Lugares />
			</MainTela>
		</>
	);
}

function Acento({ children, disponivel }) {
	const [selecionado, setSelecionado] = useState(false);

	return (
		<AcentoConteudo
			selecionado={selecionado}
			disponivel={disponivel}
			onClick={() => {
				selecionado ? setSelecionado(false) : setSelecionado(true);
			}}
		>
			{children}
		</AcentoConteudo>
	);
}

const MainTela = styled.main`
	display: flex;
	flex-direction: column;
	padding: 0 24px;

	.selecionado {
		background: #8dd7cf;
	}
`;

const Acentos = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

const AcentoConteudo = styled.button`
	height: 26px;
	width: 26px;
	border: none;
	border-radius: 12px;
	background: ${(props) =>
		props.selecionado ? "#8DD7CF" : props.disponivel ? "#C3CFD9" : "#FBE192"};
	margin: 0 7px 18px 0;
`;

// const Legenda = styled.div``

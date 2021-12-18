import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../header";
import Recado from "../recado";
import Rodape from "../rodape";
import styled from "styled-components";
import "./style.css";

// function Salvando([nome, cpf, ids]) {
// 	const [salvo, setSalvo] = useState({
// 		ids: { ids },
// 		name: { nome },
// 		cpf: { cpf },
// 	});
// }

function Salvando() {
	const [salvo, setSalvo] = useState({
		ids: [2, 5, 17],
		name: "antonio",
		cpf: "1234567",
	});

	return salvo;
}

function Acento({ children, disponivel }) {
	const [selecionado, setSelecionado] = useState(false);

	return (
		<AcentoConteudo
			selecionado={selecionado}
			disponivel={disponivel}
			onClick={() => {
				if (disponivel) selecionado ? setSelecionado(false) : setSelecionado(true);
				else alert("Esse assento não está disponível");
			}}
		>
			{children}
		</AcentoConteudo>
	);
}

function Lugares() {
	const { idSessao } = useParams();
	const [dados, setDados] = useState([]);

	useEffect(() => {
		const promessa = axios.get(
			`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
		);
		promessa.then((resposta) => {
			setDados(resposta.data);
		});
	}, []);

	if (dados.length === 0) {
		return <Acentos>Carregando</Acentos>;
	}

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

function Legendas() {
	return (
		<Legenda>
			<div>
				<BuntonLegenda color="#8DD7CF" />
				Selecionado
			</div>
			<div>
				<BuntonLegenda color="#C3CFD9" />
				Disponivel
			</div>
			<div>
				<BuntonLegenda color="#FBE192" />
				Indisponível
			</div>
		</Legenda>
	);
}

function Comprador() {
	return (
		<DadosComprador>
			Nome do comprador:
			<input></input>
			CPF do comprador:
			<input></input>
		</DadosComprador>
	);
}

export default function TelaAcentos() {
	return (
		<>
			<Header />
			<MainTela>
				<Recado texto="Selecione o(s) assento(s)" />
				<Lugares />
				<Legendas />
				<Comprador />
				<Link to="/sucesso/">
					<Reservar>Reservar assento(s)</Reservar>
				</Link>
			</MainTela>
			<Rodape />
		</>
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

const Legenda = styled.section`
	display: flex;
	justify-content: space-around;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: 15px;
	letter-spacing: -0.013em;
	text-align: left;
	margin-bottom: 40px;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const BuntonLegenda = styled.button`
	height: 24px;
	width: 24px;
	border: none;
	border-radius: 17px;
	margin-bottom: 10px;
	background: ${(props) => props.color};
`;

const DadosComprador = styled.section`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;

	input {
		width: 100%;
		height: 51px;
		border: 1px solid #d4d4d4;
		margin-bottom: 7px;
	}
`;

const Reservar = styled.button`
	height: 42px;
	width: 225px;
	border: none;
	background: #e8833a;
	border-radius: 3px;
	align-self: center;
	margin: 57px 0 30px 0;
`;

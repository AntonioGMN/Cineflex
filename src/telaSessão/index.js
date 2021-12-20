import { Link, useParams } from "react-router-dom";

import Header from "../header";
import Recado from "../recado";
import Rodape from "../rodape";
import Lugares from "./Lugares";
import styled from "styled-components";
import "./style.css";
import { useEffect } from "react";
import axios from "axios";

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

function Comprador({ nome, mudaNome, cpf, mudaCpf }) {
	return (
		<DadosComprador>
			Nome do comprador:
			<input
				placeholder="Digite seu nome..."
				type="text"
				value={nome}
				onChange={(e) => mudaNome(e.target.value)}
			/>
			CPF do comprador:
			<input
				placeholder="Digite seu CPF..."
				type="text"
				value={cpf}
				onChange={(e) => mudaCpf(e.target.value)}
			/>
		</DadosComprador>
	);
}

export default function TelaAcentos({
	name,
	setName,
	cpf,
	setCpf,
	ids,
	setIds,
	assentos,
	setAssentos,
}) {
	const { idSessao } = useParams();

	function reserva(nome, cpf, ids) {
		const dados = {
			ids: [...ids],
			name: nome,
			cpf: cpf,
		};

		axios.post(
			"https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
			dados
		);
	}

	return (
		<>
			<Header />
			<MainTela>
				<Recado texto="Selecione o(s) assento(s)" />
				<Lugares
					ids={ids}
					setIds={setIds}
					assentos={assentos}
					setAssentos={setAssentos}
				/>
				<Legendas />
				<Comprador mudaNome={setName} nome={name} cpf={cpf} mudaCpf={setCpf} />
				<Link to={`/sucesso/${idSessao}`}>
					<Reservar onClick={() => reserva(name, cpf, ids)}>
						Reservar assento(s)
					</Reservar>
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
	margin: 57px auto 30px auto;
	color: #ffffff;
`;

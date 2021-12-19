import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Acento({ children, disponivel, ids, setIds, novoId }) {
	const [selecionado, setSelecionado] = useState(false);

	function addId(novo) {
		if (ids.length != 0) {
			if (!ids.includes(novo)) {
				const aux = [...ids, novo];
				setIds(aux);
			}
		} else {
			const aux = [...ids, novo];
			setIds(aux);
		}
	}

	function reomveId(novo) {
		setIds(ids.filter((x) => x != novo));
	}

	return (
		<AcentoConteudo
			selecionado={selecionado}
			disponivel={disponivel}
			onClick={() => {
				if (disponivel) {
					if (selecionado) {
						reomveId(novoId);
						setSelecionado(false);
					} else {
						addId(novoId);
						setSelecionado(true);
					}
				} else alert("Esse assento não está disponível");
			}}
		>
			{children}
		</AcentoConteudo>
	);
}

export default function Lugares({ ids, setIds }) {
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
				<Acento
					disponivel={dado.isAvailable}
					ids={ids}
					novoId={dado.id}
					setIds={setIds}
					key={dado.name}
				>
					{dado.name}
				</Acento>
			))}
		</Acentos>
	);
}

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

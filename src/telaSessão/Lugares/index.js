import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Acento({
	children,
	disponivel,
	ids,
	setIds,
	novoId,
	assentos,
	setAssentos,
	novoAssento,
}) {
	const [selecionado, setSelecionado] = useState(false);

	function addId(novoId, novoAssento) {
		if (ids.length != 0) {
			if (!ids.includes(novoId)) {
				const aux = [...ids, novoId];
				const auxSessao = [...assentos, novoAssento];
				setIds(aux);
				setAssentos(auxSessao);
			}
		} else {
			const aux = [...ids, novoId];
			const auxSessao = [...assentos, novoAssento];
			setIds(aux);
			setAssentos(auxSessao);
		}
	}

	function reomveId(novoId, novoAssento) {
		setIds(ids.filter((x) => x != novoId));
		setAssentos(assentos.filter((x) => x != novoAssento));
	}

	return (
		<AcentoConteudo
			selecionado={selecionado}
			disponivel={disponivel}
			onClick={() => {
				if (disponivel) {
					if (selecionado) {
						reomveId(novoId, novoAssento);
						setSelecionado(false);
					} else {
						addId(novoId, novoAssento);
						setSelecionado(true);
					}
				} else alert("Esse assento não está disponível");
			}}
		>
			{children}
		</AcentoConteudo>
	);
}

export default function Lugares({ ids, setIds, assentos, setAssentos }) {
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
					assentos={assentos}
					novoAssento={dado.name}
					setAssentos={setAssentos}
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

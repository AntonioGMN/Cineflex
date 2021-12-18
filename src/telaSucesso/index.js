import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../header";

export default function TelaSucesso() {
	return (
		<>
			<Header />
			<Recado>Pedido feito com sucesso!</Recado>
			<Sucesso>
				<div>
					<h1>Filme e sessão</h1>
					<p>nome do filme</p>
				</div>
				<div>
					<h1>Ingressos</h1>
					<p>lugares</p>
				</div>
				<div>
					<h1>Comprador</h1>
					<p>Infromaçoes comprador</p>
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

import Header from "../header";
import "./style.css";

export default function Acentos() {
	return (
		<>
			<Header />
			<section className="acentos">Acentos</section>
			<section className="dadosComprador">
				<p>Nome do comprador:</p>
				<input className="input" type="text" value="Digite seu nome..." />
				<p>CPF do comprador:</p>
				<input type="text" name="input" value="Digite seu CPF..." />
			</section>
		</>
	);
}

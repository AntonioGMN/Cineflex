import Header from "../header";
import Recado from "../recado";

export default function Sucesso() {
	return (
		<main class="telaSucesso">
			<Header />
			<Recado texto="Pedido feito com sucesso!" />
		</main>
	);
}

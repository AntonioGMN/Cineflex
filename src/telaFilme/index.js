import { Link, useParams } from "react-router-dom";

import Header from "../header";
import Recado from "../recado";

export default function Filme() {
	const { id } = useParams();
	console.log(id);

	return (
		<main className="Horários">
			<Header />
			<Recado texto="Selecione o horário" />

			<Link to="/">
				<button></button>
			</Link>
		</main>
	);
}

import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../header";
import Recado from "../recado";

export default function TelaInicia() {
	return (
		<>
			<Header />
			<Recado texto="Selecione um filme" />
		</>
	);
}

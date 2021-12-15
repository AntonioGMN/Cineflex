import reactDom from "react-dom";
import App from "./App";

import "./styles/reset.css";
import "./styles/index.css";

const root = document.querySelector(".root");
reactDom.render(<App />, root);

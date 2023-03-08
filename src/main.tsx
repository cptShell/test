import React from "react";
import ReactDOM from "react-dom/client";
import { SignUp } from "./pages/signup/signup";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SignUp />
	</React.StrictMode>
);

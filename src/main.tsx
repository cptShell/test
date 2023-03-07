import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { SignUp } from "./pages/signup/signup";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SignUp />
	</React.StrictMode>
);

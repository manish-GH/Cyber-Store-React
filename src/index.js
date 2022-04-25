import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<DataProvider>
				<App />
			</DataProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "rsuite/dist/rsuite.min.css";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HashRouter>
			<ToastProvider>
				<App />
			</ToastProvider>
		</HashRouter>
	</React.StrictMode>
);

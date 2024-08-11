import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import { BrowserRouter } from "react-router-dom";
import outputs from "../amplify_outputs.json";
import App from "./App.tsx";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

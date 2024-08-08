import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

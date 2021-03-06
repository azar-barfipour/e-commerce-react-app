import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import { clientInstance } from "./config/config";
import PageRouter from "./router/router";
import store from "./state/store/store";
function App() {
  return <PageRouter />;
}

export default App;

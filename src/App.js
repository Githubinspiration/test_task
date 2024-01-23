import React from "react";
import AppRoutes from "./routes";
import { ContextProvider } from "./contexts";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layouts/navbar";

//import scss file
// import "./dashbord.scss";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      {/* <Router>
        <AppRoutes />
      </Router> */}
    </ContextProvider>
  );
}

export default App;

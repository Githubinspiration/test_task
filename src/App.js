import React from 'react';
import AppRoutes from './routes';
import { ContextProvider } from './contexts';
import { BrowserRouter as Router } from 'react-router-dom';


//import scss file
// import "./dashbord.scss";

function App() {
  return (
    <ContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ContextProvider>
  );
}

export default App;

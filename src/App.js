import Routes from './routes';
import { ContextProvider } from './contexts';

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;

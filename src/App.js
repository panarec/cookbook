import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Routes } from './Routes';
import { AppProvider } from './AppContext';

export function App() {
  return (
    <Router>
      <AppProvider>
        <Layout>
          <Routes />
        </Layout>
      </AppProvider>
    </Router>
  );
}

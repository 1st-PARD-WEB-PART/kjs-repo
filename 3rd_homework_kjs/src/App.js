import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import GamePage from './pages/GamePage';




function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/GamePage" element={<GamePage />} />
          <Route path="/PeoplePage" element={<PeoplePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
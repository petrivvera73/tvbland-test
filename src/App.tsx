import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './const';
import { Details } from './pages/Details';
import { Shows } from './pages/Shows';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.shows} element={<Shows />} />
      <Route path={`${ROUTES.shows}/:showId`} element={<Details />} />
      <Route path="*" element={<Navigate to={ROUTES.shows} replace />} />
    </Routes>
  );
}

export default App;

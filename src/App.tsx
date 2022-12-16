import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './const';
import { Shows } from './pages/Shows';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.shows} element={<Shows />} />
      <Route path={`${ROUTES.shows}/:id`} element={<div>movie id</div>} />
      <Route path="*" element={<Navigate to={ROUTES.shows} replace />} />
    </Routes>
  );
}

export default App;

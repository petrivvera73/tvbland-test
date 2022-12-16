import { Route, Routes, Navigate } from 'react-router-dom';
import { Shows } from './pages/Shows';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shows />} />
      <Route path="/:id" element={<div>movie id</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

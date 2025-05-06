// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
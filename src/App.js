import { Routes, Route } from 'react-router-dom';

import MapPage from './pages/Map/MapPage';
import DataTablePage from './pages/DataTablePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MapPage />}></Route>
      <Route path="/data" element={<DataTablePage />}></Route>
    </Routes>
  );
}

export default App;

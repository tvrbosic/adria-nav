import { Routes, Route } from 'react-router-dom';

import MapPage from './pages/Map/MapPage';
import DataTablePage from './pages/DataTablePage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MapPage />}></Route>
      <Route exact path='/objects' element={<DataTablePage />}></Route>
    </Routes>
  );
}

export default App;

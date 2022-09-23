import { Routes, Route } from 'react-router-dom';

import WaterwaysMap from './pages/WaterwaysMap';
import WaterwaysData from './pages/WaterwaysData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WaterwaysMap />}></Route>
      <Route path="/data" element={<WaterwaysData />}></Route>
    </Routes>
  );
}

export default App;

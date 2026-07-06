import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/agendar" element={<Booking />} />
    </Routes>
  );
}

export default App;
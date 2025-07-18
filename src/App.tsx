import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VendorPage from './pages/VendorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vendor/:vendorId" element={<VendorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rates from './pages/Rates';
import Swap from './pages/Swap';
import Assets from './pages/Assets';
import Profile from './pages/Profile';

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rates" element={<Rates />} />
          <Route path="swap" element={<Swap />} />
          <Route path="assets" element={<Assets />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

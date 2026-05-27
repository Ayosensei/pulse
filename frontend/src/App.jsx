import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rates from './pages/Rates';
import Swap from './pages/Swap';
import Assets from './pages/Assets';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import Alerts from './pages/Alerts';
import Chat from './pages/Chat';

function App() {
  useEffect(() => {
    if (WebApp && typeof WebApp.ready === 'function') {
      try {
        WebApp.ready();
        WebApp.expand();
      } catch (error) {
        console.warn('WebApp initialization failed (likely running outside Telegram)', error);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="rates" element={<Rates />} />
          <Route path="swap" element={<Swap />} />
          <Route path="assets" element={<Assets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ExamRoom from './pages/ExamRoom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    const shouldBeDark = hour < 6 || hour >= 18;
    setIsDarkMode(shouldBeDark);
    document.body.className = shouldBeDark ? 'bg-dark text-light' : 'bg-light text-dark';
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className={isDarkMode ? 'theme-dark' : 'theme-light'}>
          <Navigation />
          <main className="container-fluid py-4 min-vh-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exam" element={<ExamRoom />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
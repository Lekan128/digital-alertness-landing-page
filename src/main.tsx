import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Research from './Research.tsx'

const ResearchWrapper = () => {
  const navigate = useNavigate();
  return <Research onBack={() => navigate(-1)} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/research" element={<ResearchWrapper />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

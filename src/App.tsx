import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/fit" element={<QuizPage />} />
    </Routes>
  );
}

export default App;

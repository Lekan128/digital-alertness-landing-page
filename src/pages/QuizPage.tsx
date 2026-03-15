import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 'q1',
    text: 'When you open social media, how often do you stay longer than you planned?',
    options: [
      { text: 'Almost every time', points: 3 },
      { text: 'Sometimes', points: 2 },
      { text: 'Rarely', points: 1 },
      { text: 'Never', points: 0 },
    ]
  },
  {
    id: 'q2',
    text: 'Have you ever picked up your phone for a quick check and realized 20–30 minutes passed?',
    options: [
      { text: 'Yes, many times', points: 3 },
      { text: 'A few times', points: 2 },
      { text: 'Rarely', points: 1 },
      { text: 'Never', points: 0 },
    ]
  },
  {
    id: 'q3',
    text: 'When this happens, how do you usually feel?',
    options: [
      { text: 'Frustrated that I lost time', points: 3 },
      { text: 'Slightly annoyed', points: 2 },
      { text: 'Neutral', points: 1 },
      { text: "I don't mind", points: 0 },
    ]
  },
  {
    id: 'q4',
    text: 'Would a gentle reminder help you stop scrolling without strictly blocking your apps?',
    options: [
      { text: 'Yes, definitely', points: 3 },
      { text: 'Maybe', points: 2 },
      { text: 'Probably not', points: 0 },
    ]
  }
];

const QuizPage = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (questionId: string, points: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: points
    }));
  };

  const calculateResults = () => {
    let total = 0;
    Object.values(answers).forEach(pts => {
      total += pts;
    });
    setScore(total);
    setShowModal(true);
  };

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-2xl mt-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            30-Second Phone Habit Check
          </h1>
          <p className="text-lg text-slate-500">
            Find out if your phone is stealing your time.
          </p>
        </div>

        <div className="space-y-10">
          {QUESTIONS.map((q, index) => (
            <div key={q.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-semibold mb-6 flex gap-3">
                <span className="text-pink-500 shrink-0">{index + 1}.</span> 
                <span>{q.text}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((option) => {
                  const isSelected = answers[q.id] === option.points;
                  return (
                    <button
                      key={option.text}
                      onClick={() => handleSelect(q.id, option.points)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                        isSelected 
                          ? 'border-[var(--color-primary)] bg-pink-50 text-[var(--color-primary)] font-medium' 
                          : 'border-slate-100 hover:border-pink-200 hover:bg-pink-50/50 text-slate-700'
                      }`}
                    >
                      {option.text}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={calculateResults}
            disabled={!allAnswered}
            className={`px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
              allAnswered 
                ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-[0_4px_14px_rgba(236,72,153,0.3)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.4)] active:scale-95 cursor-pointer flex' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed hidden'
            }`}
          >
            See my result
          </button>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-8 mt-4">
                <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {score}/12
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {score >= 8 ? 'Your phone is taking over.' : score >= 4 ? 'You are somewhat distracted.' : 'You are mostly mindful!'}
                </h3>
                <p className="text-slate-600">
                  {score >= 8 
                    ? "Based on your answers, you often lose track of time on your device. Digital Wellness is designed exactly for you to gently break the doom-scroll loop."
                    : score >= 4 
                    ? "You have moments where you fall down the rabbit hole. A gentle 20-minute nudge could help you stay perfectly balanced."
                    : "You have great control over your digital habits! Digital Wellness could still be a nice safety net to have just in case."}
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl font-semibold text-center transition-colors shadow-[0_4px_14px_rgba(236,72,153,0.3)]"
                >
                  Get the app
                </a>
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-4 text-slate-500 hover:text-slate-800 font-medium transition-colors"
                >
                  Return home
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizPage;

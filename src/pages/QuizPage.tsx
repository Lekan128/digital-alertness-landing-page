import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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


import QuizResultModal from '../components/QuizResultModal';
import QuizProgressBar from '../components/QuizProgressBar';

const QuizPage = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateResults = () => {
    let total = 0;
    Object.values(answers).forEach(pts => {
      total += pts;
    });
    setScore(total);
    setShowModal(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && allAnswered && !showModal) {
        calculateResults();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [allAnswered, showModal, answers]); // Depend on answers so calculateResults calculates with latest state

  const handleSelect = (questionId: string, points: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: points
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 pt-12 md:pt-20">
      <main className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            30-Second Phone Habit Check
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            Find out if your phone is stealing your time.
          </p>
        </div>

        <QuizProgressBar current={answeredCount} total={QUESTIONS.length} />

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
            className={`px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 items-center justify-center gap-2 ${
              allAnswered 
                ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-[0_4px_14px_rgba(236,72,153,0.3)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.4)] active:scale-95 cursor-pointer flex' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed hidden'
            }`}
          >
            See my result
            <span className="text-white/60 text-sm hidden sm:inline-block ml-1 bg-white/10 px-2 py-0.5 rounded font-normal">↵</span>
          </button>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <QuizResultModal 
          score={score}
          lastQuestionAnswer={answers['q4'] || 0}
          onClose={() => setShowModal(false)}
          onReturnHome={() => navigate('/')}
        />
      )}
    </div>
  );
};

export default QuizPage;

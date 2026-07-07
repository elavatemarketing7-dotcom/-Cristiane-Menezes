import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ClipboardList, ArrowRight, Smartphone, Compass, Sparkles, AlertCircle } from "lucide-react";
import { expertInfo, quizQuestions, QuizQuestion } from "../data";

interface QuizOverlayProps {
  onEnterSite: () => void;
}

export default function QuizOverlay({ onEnterSite }: QuizOverlayProps) {
  const [step, setStep] = useState<"intro" | "questions" | "loading" | "result">("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Iniciando diagnóstico personalizado...");

  // Handles loading bar simulation
  useEffect(() => {
    if (step === "loading") {
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setStep("result");
            }, 500);
            return 100;
          }
          const next = prev + Math.floor(Math.random() * 15) + 5;
          const current = next > 100 ? 100 : next;

          // Dynamic loading texts to create high-value expectation
          if (current < 30) {
            setLoadingText("Analisando seus objetivos de beleza natural...");
          } else if (current < 60) {
            setLoadingText("Avaliando compatibilidade com o Método Dra. Cristiane...");
          } else if (current < 90) {
            setLoadingText("Confirmando alinhamento com a nossa filosofia estética...");
          } else {
            setLoadingText("Perfil qualificado com sucesso! Gerando resultado...");
          }
          return current;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleAnswerSelect = (option: string) => {
    const questionId = quizQuestions[currentIndex].id;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStep("loading");
    }
  };

  const getWhatsAppQuizMessageUrl = () => {
    const responseDetails = quizQuestions
      .map((q) => `*${q.question}*\n👉 ${answers[q.id] || "Não respondido"}`)
      .join("\n\n");

    const text = `Olá Dra. Cristiane Menezes! Fiz o diagnóstico personalizado no seu site e meu perfil deu compatível como Paciente Ideal! 💚\n\nAqui estão as minhas respostas:\n\n${responseDetails}\n\nGostaria de agendar minha consulta exclusiva de Harmonização Facial em Belo Horizonte para conquistarmos essa naturalidade!`;
    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?phone=5531984643501&text=${encodedText}`; // Fallback to her business number or direct link
  };

  const getStandardWhatsAppUrl = () => {
    return expertInfo.whatsappUrl;
  };

  return (
    <div id="quiz-container" className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A]/98 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 font-sans selection:bg-gold-400 selection:text-black">
      {/* Background ambient gold glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Compact and Mobile-optimized */}
      <div className="relative w-full max-w-md bg-[#0A0A0A] border border-gold-400/20 rounded-2xl md:rounded-[32px] p-4 sm:p-6 md:p-8 premium-glow overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-600" />
        
        {/* HEADER CONSTANTE: Nome do Herói + Foto Flutuante Moldada */}
        <div className="flex flex-col items-center text-center mb-4 md:mb-6 relative">
          {/* Foto Flutuante em Moldura Oval Dourada */}
          <div className="relative w-14 h-14 md:w-24 md:h-24 mb-2 md:mb-3 rounded-full p-0.5 bg-gradient-to-tr from-gold-500 via-gold-300 to-gold-600 shadow-xl overflow-hidden flex items-center justify-center animate-pulse">
            <img 
              src={expertInfo.photos.primary} 
              alt={expertInfo.name} 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
            {/* Pulsating ring indicator */}
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 md:w-4 md:h-4 bg-emerald-500 border-2 border-neutral-950 rounded-full" />
          </div>

          {/* Nome da Expert Sempre Aparente */}
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold-400 font-bold mb-0.5">Diagnóstico Exclusivo</span>
          <h2 className="text-lg md:text-2xl font-serif italic text-white font-semibold leading-tight">
            {expertInfo.name}
          </h2>
          <p className="text-[10px] md:text-xs text-neutral-400 font-sans uppercase tracking-widest mt-0.5 md:mt-1">
            {expertInfo.role} • {expertInfo.location}
          </p>
        </div>

        {/* Dynamic Steps */}
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col text-center"
            >
              <h3 className="text-base md:text-xl font-serif italic text-white mb-2 md:mb-3">
                Descubra se o nosso método de <span className="text-gold-300">resultados naturais</span> é ideal para você.
              </h3>
              
              <p className="text-[11px] md:text-sm text-neutral-300 leading-relaxed mb-4 md:mb-6 font-sans">
                Antes de acessar nosso espaço principal, passe por este rápido diagnóstico interativo. Leva menos de 1 minuto e ajudará a traçar um planejamento verdadeiramente sob medida para as características do seu rosto.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 md:gap-3">
                <button
                  id="btn-start-quiz"
                  onClick={() => setStep("questions")}
                  className="w-full py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl bg-gold-400 text-neutral-950 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ClipboardList className="w-4 h-4" />
                  Iniciar Avaliação Personalizada
                </button>

                <button
                  id="btn-skip-to-site"
                  onClick={onEnterSite}
                  className="w-full py-2.5 md:py-3.5 px-4 md:px-6 rounded-lg md:rounded-xl bg-neutral-900 hover:bg-neutral-850 text-white font-medium text-[10px] md:text-xs border border-neutral-800 hover:border-gold-400/30 transition-all duration-300 cursor-pointer"
                >
                  Ir Direto para o Site Principal
                </button>
              </div>

              <div className="mt-3 md:mt-4 text-[9px] md:text-[10px] text-neutral-500 flex items-center justify-center gap-1">
                <Check className="w-3 h-3 text-emerald-500" /> Atendimento 100% individualizado e sigiloso.
              </div>
            </motion.div>
          )}

          {step === "questions" && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              {/* Progress Bar */}
              <div className="mb-4 md:mb-5">
                <div className="flex justify-between items-center text-[10px] md:text-xs text-neutral-450 mb-1.5 md:mb-2 font-mono">
                  <span>Pergunta {currentIndex + 1} de {quizQuestions.length}</span>
                  <span className="text-gold-400">{Math.round(((currentIndex + 1) / quizQuestions.length) * 100)}% concluído</span>
                </div>
                <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold-400 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h4 className="text-sm md:text-lg font-serif italic text-white mb-3 md:mb-5 min-h-[36px] md:min-h-[50px] leading-snug">
                {quizQuestions[currentIndex].question}
              </h4>

              {/* Options Stack */}
              <div className="flex flex-col gap-2 md:gap-2.5 mb-3 md:mb-4">
                {quizQuestions[currentIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    id={`quiz-option-${currentIndex}-${idx}`}
                    onClick={() => handleAnswerSelect(option)}
                    className="w-full p-3 md:p-4 text-left rounded-lg md:rounded-xl bg-[#151515] hover:bg-[#1a1a1a] text-[11px] md:text-sm text-neutral-200 hover:text-white border border-gold-400/10 hover:border-gold-400/60 transition-all duration-200 cursor-pointer flex items-center justify-between group active:scale-98"
                  >
                    <span>{option}</span>
                    <span className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-gold-400 text-[9px] md:text-[10px] text-transparent group-hover:text-gold-400 font-bold shrink-0 ml-2">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation help */}
              <div className="flex justify-between items-center mt-1.5 md:mt-2">
                {currentIndex > 0 ? (
                  <button
                    onClick={() => setCurrentIndex((prev) => prev - 1)}
                    className="text-[10px] md:text-xs text-neutral-500 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    ← Pergunta anterior
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={onEnterSite}
                  className="text-[10px] md:text-xs text-neutral-500 hover:text-gold-400 transition-colors duration-200 cursor-pointer"
                >
                  Pular para o site →
                </button>
              </div>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center py-4 md:py-6"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6">
                <div className="absolute inset-0 rounded-full border border-neutral-800" />
                <div className="absolute inset-0 rounded-full border border-t-gold-400 animate-spin" />
              </div>

              <h3 className="text-base md:text-lg font-serif italic text-white mb-1.5 md:mb-2">Analisando</h3>
              <p className="text-[11px] md:text-xs text-neutral-450 font-mono mb-4 md:mb-6 h-5">
                {loadingText}
              </p>

              {/* Progress Bar */}
              <div className="w-full max-w-xs bg-neutral-900 h-1 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gold-400 transition-all duration-150"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <span className="text-[11px] md:text-xs text-gold-400 font-mono font-bold">{loadingProgress}%</span>
            </motion.div>
          )}

          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 25 }}
              className="flex flex-col text-center"
            >
              {/* Badge */}
              <div className="inline-flex self-center items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-[10px] md:text-xs font-semibold mb-2 md:mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Perfil Compatível. Você é a Paciente ideal.
              </div>

              {/* Highly persuasive confirmation block */}
              <div className="bg-[#151515] p-3.5 md:p-5 rounded-xl md:rounded-2xl border border-gold-400/20 mb-3 md:mb-5 text-left">
                <p className="text-[11px] md:text-sm text-[#F9F7F2] leading-relaxed font-sans">
                  "Com base nas suas respostas, o Método da <span className="text-gold-300 font-semibold">{expertInfo.name}</span> consegue entregar exatamente a naturalidade e segurança que você procura."
                </p>
              </div>

              {/* Instructions and CTAs grouped together and fully optimized/compact for mobile */}
              <p className="text-[9px] md:text-[10px] text-neutral-500 mb-2 md:mb-4 uppercase tracking-wider">Escolha como deseja prosseguir abaixo:</p>

              <div className="flex flex-col gap-2 md:gap-2.5">
                {/* CTA 1: Enviar minha avaliação a DRA */}
                <a
                  id="btn-send-quiz-whatsapp"
                  href={getWhatsAppQuizMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onEnterSite}
                  className="w-full py-3 md:py-4 px-4 md:px-5 rounded-lg md:rounded-xl bg-gold-400 text-neutral-950 font-bold text-[10px] md:text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-950 opacity-75 animate-duration-1000"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-950"></span>
                  </span>
                  1- ENVIAR MINHA AVALIAÇÃO À DRA
                </a>

                {/* CTA 2: CHAMAR NO WHATSAPP SEM COMPROMISSO */}
                <a
                  id="btn-whatsapp-direct"
                  href={getStandardWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onEnterSite}
                  className="w-full py-2.5 md:py-3.5 px-4 md:px-5 rounded-lg md:rounded-xl bg-[#151515] hover:bg-[#1C1C1C] text-gold-300 hover:text-gold-200 font-semibold text-[10px] md:text-xs border border-gold-450/20 hover:border-gold-400/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  2- CHAMAR NO WHATSAPP SEM COMPROMISSO
                </a>

                {/* CTA 3: NÃO ENVIAR E CONTINUAR NO SITE */}
                <button
                  id="btn-continue-to-site"
                  onClick={onEnterSite}
                  className="w-full py-2 px-4 md:py-2.5 md:px-5 rounded-lg md:rounded-xl bg-transparent hover:bg-neutral-900/30 text-neutral-500 hover:text-white font-medium text-[10px] md:text-[11px] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Compass className="w-3 h-3" />
                  3- NÃO ENVIAR E CONTINUAR NO SITE
                </button>
              </div>

              <p className="mt-3 md:mt-4 text-[9px] md:text-[10px] text-neutral-500 flex items-center justify-center gap-1">
                <AlertCircle className="w-3 h-3" /> Agenda de avaliações exclusivas concorrida esta semana.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Heart, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  Award, 
  Users, 
  MessageCircle, 
  Video, 
  Play, 
  ArrowRight,
  Maximize2,
  Volume2,
  VolumeX
} from "lucide-react";
import { 
  expertInfo, 
  antesDepoisImages, 
  deCoracaoImages, 
  reviewsImages 
} from "../data";
import Lightbox from "./Lightbox";

export default function MainSite() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: -1,
  });

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openLightbox = (imagesArray: string[], index: number) => {
    setLightboxState({
      isOpen: true,
      images: imagesArray,
      currentIndex: index,
    });
  };

  const handleLightboxPrev = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const handleLightboxNext = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const handleLightboxClose = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  // Safe external URL triggers
  const handleCtaClick = (origin: string) => {
    console.log(`CTA clicked from: ${origin}`);
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F9F7F2] font-sans overflow-x-hidden selection:bg-gold-400 selection:text-black">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee var(--duration, 40s) linear infinite;
        }

        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse var(--duration, 40s) linear infinite;
        }

        .pause-on-hover:hover .animate-marquee,
        .pause-on-hover:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }

        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
      `}</style>
      {/* 1. HERO SECTION (Dobra Principal) */}
      <section className="relative min-h-[92vh] flex items-center pt-12 pb-20 px-4 md:px-8 bg-[#0A0A0A] border-b border-gold-400/10">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 self-center md:self-start px-4 py-1.5 rounded-full bg-gold-400/5 border border-gold-400/20 text-gold-400 text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Harmonização Facial Exclusiva
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F9F7F2] font-normal leading-tight mb-6">
              Eu sou a <br className="hidden md:inline" />
              <span className="font-serif italic text-gold-400 font-normal">{expertInfo.name}</span>
            </h1>

            <p className="text-base sm:text-lg text-gold-100 font-serif italic tracking-wide mb-4">
              Especialista em revelar a sua melhor versão sem alterar seus traços originais.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 font-sans">
              Através de um planejamento facial artístico e altamente personalizado, meu método restaura a firmeza, os contornos e o viço do seu rosto, entregando a naturalidade e a segurança que você procura — livre de exageros artificiais.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a
                id="hero-whatsapp-cta"
                href={expertInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("hero-primary")}
                className="w-full sm:w-auto py-4 px-8 rounded-full bg-gold-400 text-neutral-950 hover:bg-white font-bold text-xs uppercase tracking-[0.2em] text-center flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-98"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                Agendar Consulta de Avaliação
              </a>
            </div>
            
            <p className="mt-4 text-[10px] text-neutral-500 tracking-[0.1em] font-mono uppercase">
              *Primeira conversa sem compromisso inicial
            </p>
          </div>

          {/* Hero Photo Column */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Gold frame backing - clean editorial double border */}
              <div className="absolute inset-2 border border-gold-400/20 rounded-2xl -rotate-2 transition-transform duration-500 hover:rotate-0" />
              
              {/* Photo Frame */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-neutral-900 border border-gold-400/20 shadow-2xl">
                <img
                  src={expertInfo.photos.primary}
                  alt={expertInfo.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#0A0A0A] border border-gold-400/30 px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-[9px] font-mono tracking-[0.2em] text-gold-300 font-bold uppercase">Lourdes • BH</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VIDEO APRESENTAÇÃO DE PROCEDIMENTO (SE DESTACANDO NO INÍCIO) */}
      <section className="py-16 bg-[#0A0A0A] border-y border-gold-400/10 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Video Container Left */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] w-full max-w-[300px] bg-[#111111] border-[6px] border-gold-400/20 shadow-2xl shadow-gold-500/10 group">
              <video 
                ref={videoRef}
                src="https://i.imgur.com/rgUdDPK.mp4" 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
              {/* Subtle elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Active floating indicator */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/20 flex items-center gap-2 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-sans font-bold tracking-[0.2em] text-gold-400 uppercase">Em Ação</span>
              </div>

              {/* Sound controller */}
              <button
                onClick={toggleMute}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/80 hover:bg-gold-400 text-gold-400 hover:text-black border border-gold-400/30 hover:border-gold-400/80 transition-all duration-300 backdrop-blur-md z-10 cursor-pointer shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95"
                title={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 shrink-0" />
                    <span className="text-[9px] font-sans font-bold tracking-[0.1em] uppercase whitespace-nowrap">Ativar Som</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 shrink-0 text-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-sans font-bold tracking-[0.1em] uppercase whitespace-nowrap">Mudar Mudo</span>
                  </>
                )}
              </button>

              {/* Floating aesthetic touch */}
              <div className="absolute bottom-4 left-4 right-4 text-center z-10 pointer-events-none">
                <span className="text-[9px] font-sans font-medium tracking-[0.15em] uppercase text-white/90 drop-shadow-md">Procedimento Real</span>
              </div>
            </div>
          </div>

          {/* Text Description Right */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] text-gold-400 uppercase tracking-[0.25em] font-bold mb-2 block">Toque e sinta a diferença</span>
            <h3 className="text-xl md:text-2xl font-serif italic text-[#F9F7F2] font-normal mb-3">
              Harmonia em Movimento
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic font-serif">
              "Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Veja no vídeo ao lado o cuidado artístico e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial."
            </p>
          </div>

        </div>
      </section>

      {/* 2. QUEM SOU EU SECTION (Autoridade Pessoal) */}
      <section id="sobre-mim" className="py-24 px-4 md:px-8 bg-[#0A0A0A] relative border-b border-gold-400/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Grid on Left */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96">
              <div className="absolute -inset-1 rounded-3xl bg-gold-400/5 blur-md" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gold-400/20 shadow-2xl">
                <img
                  src={expertInfo.photos.secondary}
                  alt="Dra. Cristiane Menezes em consultório"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Copywrite Content on Right */}
          <div className="md:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">A Profissional</span>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#F9F7F2] font-normal mb-6">
              Cuidado personalizado desenhado por mãos artísticas
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed mb-4 font-sans">
              Sempre entendi que a Harmonização Facial não é sobre apagar a sua história ou padronizar rostos. Meu propósito de vida é devolver os contornos, o viço e as proporções naturais que o tempo suavizou, preservando o que há de mais bonito em sua expressão.
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
              Aqui, no meu consultório, você não encontrará fórmulas de prateleira. Cada paciente passa por uma profunda análise estética antes de iniciarmos qualquer aplicação, garantindo uma entrega segura, elegante e totalmente alinhada à sua personalidade.
            </p>

            {/* Differentiators list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                "Atendimento 100% individualizado",
                "Foco absoluto em resultados naturais",
                "Produtos mundiais de alta linha",
                "Segurança estética baseada em anatomia",
                "Acompanhamento atencioso pós-sessão"
              ].map((diff, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-200 font-sans">{diff}</span>
                </div>
              ))}
            </div>

            <a
              id="about-whatsapp-cta"
              href={expertInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("sobre-mim")}
              className="inline-flex py-3.5 px-6 rounded-full border border-gold-400/30 hover:border-gold-400 hover:bg-gold-400/5 text-gold-300 hover:text-[#F9F7F2] font-bold text-xs uppercase tracking-[0.15em] items-center gap-2 transition-all cursor-pointer"
            >
              Falar Diretamente Comigo no WhatsApp
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 3. RESULTADOS REAIS (Prova Visual Forte) */}
      <section id="prova-visual" className="py-24 px-4 md:px-8 bg-[#0A0A0A] border-b border-gold-400/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">Portfólio de Resultados</span>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#F9F7F2] font-normal mb-3">
              Evidências Visuais de Naturalidade
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-sans">
              Toque em qualquer imagem para abrir em alta resolução e analisar a suavidade, elegância e precisão dos nossos resultados.
            </p>
          </div>

          {/* Auto-sliding Marquee for Antes e Depois */}
          <div className="w-full overflow-hidden relative py-4 mask-fade-edges pause-on-hover">
            <div className="animate-marquee flex gap-4 md:gap-6" style={{ '--duration': '25s' } as React.CSSProperties}>
              {/* First Copy */}
              <div className="flex gap-4 md:gap-6 shrink-0">
                {antesDepoisImages.map((imgUrl, index) => (
                  <div 
                    key={`antes-depois-1-${index}`}
                    onClick={() => openLightbox(antesDepoisImages, index)}
                    className="relative rounded-xl overflow-hidden aspect-square w-[180px] sm:w-[240px] bg-[#151515] border border-gold-400/10 cursor-pointer group shadow-md shrink-0"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Caso Clínico ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-2 rounded-full bg-neutral-900/90 text-gold-400 border border-gold-400/30">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/75 px-2 py-0.5 rounded text-[9px] text-neutral-300 uppercase tracking-widest font-mono">Ver detalhes</span>
                  </div>
                ))}
              </div>
              {/* Second Copy */}
              <div className="flex gap-4 md:gap-6 shrink-0" aria-hidden="true">
                {antesDepoisImages.map((imgUrl, index) => (
                  <div 
                    key={`antes-depois-2-${index}`}
                    onClick={() => openLightbox(antesDepoisImages, index)}
                    className="relative rounded-xl overflow-hidden aspect-square w-[180px] sm:w-[240px] bg-[#151515] border border-gold-400/10 cursor-pointer group shadow-md shrink-0"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Caso Clínico ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-2 rounded-full bg-neutral-900/90 text-gold-400 border border-gold-400/30">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/75 px-2 py-0.5 rounded text-[9px] text-neutral-300 uppercase tracking-widest font-mono">Ver detalhes</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[10px] text-neutral-500 tracking-wide font-mono uppercase">
              *Nota legal: Os resultados mostrados são de caráter demonstrativo. Cada tratamento é exclusivo.
            </p>
          </div>

        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM (Diferenciais Premium) */}
      <section className="py-24 px-4 md:px-8 bg-[#0A0A0A] border-b border-gold-400/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">A Filosofia do Espaço</span>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#F9F7F2] font-normal mb-3">
              Pilares da Nossa Entrega de Valor
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto font-sans">
              Priorizamos a segurança médica, a transparência e a sutileza em cada centímetro da sua experiência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5 text-gold-400" />,
                title: "Avaliação Honesta",
                desc: "Se você não precisar de determinado procedimento, eu serei a primeira a te dizer. Alinhamos expectativas com total sinceridade acadêmica."
              },
              {
                icon: <Compass className="w-5 h-5 text-gold-400" />,
                title: "Atendimento Comigo",
                desc: "Sua queixa não passa por terceiros. Eu te atendo na avaliação, planejo, realizo a aplicação e te acompanho de perto no pós."
              },
              {
                icon: <Award className="w-5 h-5 text-gold-400" />,
                title: "Produtos Certificados",
                desc: "Trabalhamos exclusivamente com as marcas premium mais renomadas do mundo, garantindo biocompatibilidade, durabilidade e segurança."
              },
              {
                icon: <Heart className="w-5 h-5 text-gold-400" />,
                title: "Harmonização de 💚",
                desc: "Um conceito baseado na sensibilidade estética humana, buscando a cura da autoestima com cuidado caloroso e sem exageros artificiais."
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#151515] border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/5 flex items-center justify-center mb-4 border border-gold-400/10">
                  {card.icon}
                </div>
                <h3 className="text-base font-serif italic text-[#F9F7F2] font-normal mb-2">{card.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-[#0A0A0A] border-y border-gold-400/10 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#F9F7F2] font-normal mb-3">
            Deseja conversar de forma discreta sobre seu rosto?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-8 leading-relaxed max-w-md mx-auto font-sans">
            Entendo que tomar a decisão de fazer um procedimento requer confiança. Que tal tirarmos suas dúvidas pelo WhatsApp sem qualquer compromisso de agendamento?
          </p>

          <a
            id="intermediary-whatsapp-cta"
            href={expertInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCtaClick("intermediary")}
            className="inline-flex py-4 px-8 rounded-full bg-emerald-deep hover:bg-[#082420] text-white font-bold text-xs uppercase tracking-[0.2em] items-center gap-2.5 transition-all duration-300 cursor-pointer border border-gold-400/30 shadow-lg active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Tirar dúvidas sem compromisso
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <section className="py-24 px-4 md:px-8 bg-[#0A0A0A] border-b border-gold-400/10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">O Caminho</span>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#F9F7F2] font-normal mb-3">
              Como funciona o Método de Atendimento?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto font-sans">
              Simplicidade, acolhimento e profissionalismo em cada etapa da sua jornada estética.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-[#151515] border border-gold-400/10 text-center flex flex-col items-center">
              <span className="w-8 h-8 rounded-full bg-gold-400 text-[#0A0A0A] font-mono font-bold flex items-center justify-center text-xs mb-4">1</span>
              <h3 className="text-base font-serif italic text-[#F9F7F2] font-normal mb-2">Primeiro Contato</h3>
              <p className="text-xs text-neutral-450 leading-relaxed font-sans">
                Você clica em nossos CTAs, conta brevemente suas queixas de pele e agendamos uma avaliação exclusiva na nossa agenda.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-[#151515] border border-gold-400/10 text-center flex flex-col items-center">
              <span className="w-8 h-8 rounded-full bg-gold-400 text-[#0A0A0A] font-mono font-bold flex items-center justify-center text-xs mb-4">2</span>
              <h3 className="text-base font-serif italic text-[#F9F7F2] font-normal mb-2">Sua Consulta de Planejamento</h3>
              <p className="text-xs text-neutral-450 leading-relaxed font-sans">
                No consultório, fazemos fotos de alta definição e mapeamos sua musculatura e simetria facial para criar um plano artístico único.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl bg-[#151515] border border-gold-400/10 text-center flex flex-col items-center">
              <span className="w-8 h-8 rounded-full bg-gold-400 text-[#0A0A0A] font-mono font-bold flex items-center justify-center text-xs mb-4">3</span>
              <h3 className="text-base font-serif italic text-[#F9F7F2] font-normal mb-2">Procedimento de Resultados</h3>
              <p className="text-xs text-neutral-450 leading-relaxed font-sans">
                Aplicação precisa sob anestesia confortável, garantindo segurança clínica completa e naturalidade para você retomar sua rotina imediatamente.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. MAIS PROVAS - HARMONIZAÇÃO DE CORAÇÃO (de 💚) */}
      <section id="harmonizacao-coracao" className="py-24 px-4 md:px-8 bg-[#0A0A0A] border-b border-gold-400/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">Cuidado Humano</span>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#F9F7F2] font-normal mb-3">
              Bastidores de Harmonizações de 💚
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto font-sans">
              Nossos momentos favoritos: cuidado minucioso e o amor em cada detalhe que faz a experiência no consultório ser única.
            </p>
          </div>

          {/* Auto-sliding Reverse Marquee for De Coração */}
          <div className="w-full overflow-hidden relative py-4 mask-fade-edges pause-on-hover">
            <div className="animate-marquee-reverse flex gap-4 md:gap-6" style={{ '--duration': '25s' } as React.CSSProperties}>
              {/* First Copy */}
              <div className="flex gap-4 md:gap-6 shrink-0">
                {deCoracaoImages.map((imgUrl, index) => (
                  <div 
                    key={`de-coracao-1-${index}`}
                    onClick={() => openLightbox(deCoracaoImages, index)}
                    className="relative rounded-xl overflow-hidden aspect-[3/4] w-[140px] sm:w-[200px] bg-[#151515] border border-gold-400/10 cursor-pointer group shadow-sm shrink-0"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Sessão de Cuidado de Coração ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-neutral-950/80 backdrop-blur-xs py-1 px-2 rounded text-[10px] text-neutral-200 text-center border border-gold-400/10 font-sans">
                      {index === 0 && "Atendimento Personalizado"}
                      {index === 1 && "Amor em Cada Detalhe"}
                      {index === 2 && "Cuidado Premium"}
                      {index === 3 && "Sua Beleza em Boas Mãos"}
                      {index > 3 && "Harmonização Exclusiva"}
                    </div>
                  </div>
                ))}
              </div>
              {/* Second Copy */}
              <div className="flex gap-4 md:gap-6 shrink-0" aria-hidden="true">
                {deCoracaoImages.map((imgUrl, index) => (
                  <div 
                    key={`de-coracao-2-${index}`}
                    onClick={() => openLightbox(deCoracaoImages, index)}
                    className="relative rounded-xl overflow-hidden aspect-[3/4] w-[140px] sm:w-[200px] bg-[#151515] border border-gold-400/10 cursor-pointer group shadow-sm shrink-0"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Sessão de Cuidado de Coração ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-neutral-950/80 backdrop-blur-xs py-1 px-2 rounded text-[10px] text-neutral-200 text-center border border-gold-400/10 font-sans">
                      {index === 0 && "Atendimento Personalizado"}
                      {index === 1 && "Amor em Cada Detalhe"}
                      {index === 2 && "Cuidado Premium"}
                      {index === 3 && "Sua Beleza em Boas Mãos"}
                      {index > 3 && "Harmonização Exclusiva"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. COMENTÁRIOS DE PACIENTES (Reviews Reais) */}
      <section className="py-24 px-4 md:px-8 bg-[#0A0A0A] border-b border-gold-400/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">Opinião de Quem Importa</span>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#F9F7F2] font-normal mb-3">
              Depoimentos e Feedbacks de Pacientes
            </h2>
            <p className="text-xs sm:text-sm text-neutral-450 max-w-lg mx-auto font-sans">
              Mensagens espontâneas recebidas de nossas pacientes após realizarem seus procedimentos exclusivos.
            </p>
          </div>

          {/* Auto-sliding Marquee for Reviews */}
          <div className="w-full overflow-hidden relative py-6 mask-fade-edges pause-on-hover">
            <div className="animate-marquee flex gap-6 md:gap-8" style={{ '--duration': '30s' } as React.CSSProperties}>
              {/* First Copy */}
              <div className="flex gap-6 md:gap-8 shrink-0">
                {reviewsImages.map((imgUrl, index) => (
                  <div 
                    key={`review-1-${index}`}
                    onClick={() => openLightbox(reviewsImages, index)}
                    className="relative mx-auto rounded-[2.2rem] bg-[#121212] p-2 border-[6px] border-[#252525] shadow-[0_20px_45px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-gold-400/50 hover:-translate-y-2.5 cursor-pointer w-[170px] sm:w-[195px] md:w-[210px] shrink-0"
                  >
                    {/* Smartphone Pill Notch / Camera */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-[#1C1C1C] rounded-full z-20 flex items-center justify-end px-1 border border-white/5 shadow-inner">
                      <div className="w-1 h-1 rounded-full bg-neutral-900" />
                    </div>

                    {/* Inner Screen Container */}
                    <div className="relative rounded-[1.4rem] overflow-hidden aspect-[9/16] bg-[#0d0d0d] flex items-center justify-center border border-neutral-800">
                      <img 
                        src={imgUrl} 
                        alt={`Depoimento de Paciente ${index + 1}`} 
                        className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 z-10">
                        <Maximize2 className="w-5 h-5 text-gold-400 animate-pulse" />
                        <span className="text-[9px] uppercase tracking-[0.15em] text-[#F9F7F2] font-semibold">Ampliar Conversa</span>
                      </div>
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full z-10 pointer-events-none" />
                    </div>
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-neutral-950 border border-gold-400/30 px-3 py-1 rounded-full text-[8px] text-gold-300 font-bold font-sans tracking-[0.12em] uppercase whitespace-nowrap z-10 shadow-lg group-hover:border-gold-400/70 transition-colors duration-300">
                      Feedback 💚
                    </div>
                  </div>
                ))}
              </div>
              {/* Second Copy */}
              <div className="flex gap-6 md:gap-8 shrink-0" aria-hidden="true">
                {reviewsImages.map((imgUrl, index) => (
                  <div 
                    key={`review-2-${index}`}
                    onClick={() => openLightbox(reviewsImages, index)}
                    className="relative mx-auto rounded-[2.2rem] bg-[#121212] p-2 border-[6px] border-[#252525] shadow-[0_20px_45px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-gold-400/50 hover:-translate-y-2.5 cursor-pointer w-[170px] sm:w-[195px] md:w-[210px] shrink-0"
                  >
                    {/* Smartphone Pill Notch / Camera */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-[#1C1C1C] rounded-full z-20 flex items-center justify-end px-1 border border-white/5 shadow-inner">
                      <div className="w-1 h-1 rounded-full bg-neutral-900" />
                    </div>

                    {/* Inner Screen Container */}
                    <div className="relative rounded-[1.4rem] overflow-hidden aspect-[9/16] bg-[#0d0d0d] flex items-center justify-center border border-neutral-800">
                      <img 
                        src={imgUrl} 
                        alt={`Depoimento de Paciente ${index + 1}`} 
                        className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 z-10">
                        <Maximize2 className="w-5 h-5 text-gold-400 animate-pulse" />
                        <span className="text-[9px] uppercase tracking-[0.15em] text-[#F9F7F2] font-semibold">Ampliar Conversa</span>
                      </div>
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full z-10 pointer-events-none" />
                    </div>
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-neutral-950 border border-gold-400/30 px-3 py-1 rounded-full text-[8px] text-gold-300 font-bold font-sans tracking-[0.12em] uppercase whitespace-nowrap z-10 shadow-lg group-hover:border-gold-400/70 transition-colors duration-300">
                      Feedback 💚
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EXTRA: MAPA E LOCALIZAÇÃO DA CLÍNICA */}
      <section id="onde-encontrar" className="py-24 px-4 md:px-8 bg-[#0A0A0A] border-b border-gold-400/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Location info left */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">O Espaço</span>
            <h2 className="text-2xl font-serif italic text-[#F9F7F2] font-normal mb-4">
              Localização Privilegiada no Coração de BH
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
              Nosso consultório está localizado no elegante bairro <span className="text-gold-400 font-semibold">Lourdes em Belo Horizonte</span>, projetado para oferecer o máximo em privacidade, silêncio e acolhimento para sua transformação estética.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-sans font-bold tracking-[0.15em] text-gold-400 uppercase">Endereço do Espaço</h4>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-0.5 font-sans">Rua Bernardo Guimarães, 2450 - Lourdes, Belo Horizonte - MG</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-sans font-bold tracking-[0.15em] text-gold-400 uppercase">Horário de Atendimento</h4>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-0.5 font-sans">Segunda a Sexta, das 09h às 19h (Com hora marcada)</p>
                </div>
              </div>
            </div>

            <a
              id="google-maps-navigation"
              href="https://maps.google.com/?q=Rua+Bernardo+Guimarães+2450+Lourdes+Belo+Horizonte+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-transparent text-gold-300 hover:text-[#F9F7F2] font-bold text-xs uppercase tracking-[0.15em] text-center border border-gold-400/30 hover:border-gold-400/85 transition-all cursor-pointer flex items-center justify-center gap-2 font-sans"
            >
              <Compass className="w-4 h-4" />
              Traçar Rota no Google Maps
            </a>
          </div>

          {/* Interactive OSM/GMaps Iframe mockup on right */}
          <div className="md:col-span-7 h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-gold-400/20 bg-[#151515] shadow-xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.841530184451!2d-43.95116712398517!3d-19.931122681458852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9497500bc71261%3A0xc07a2167d4cb9bfb!2sR.%20Bernardo%20Guimar%C3%A3es%2C%202450%20-%20Lourdes%2C%20Belo%20Horizonte%20-%20MG%2C%2030140-082!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-0 filter grayscale invert contrast-110 opacity-75 group-hover:opacity-95 transition-opacity duration-300" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Belo Horizonte Lourdes"
            />
          </div>

        </div>
      </section>

      {/* 8. CTA FINAL (Decisão) */}
      <section id="contato" className="py-24 px-4 md:px-8 bg-[#0A0A0A] text-center relative overflow-hidden border-b border-gold-400/10">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-2 block font-sans">Sua Autoestima Renovada</span>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#F9F7F2] font-normal leading-tight mb-4">
            Chegou a hora de dar o primeiro passo em direção ao seu bem-estar
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mb-8 max-w-lg mx-auto leading-relaxed font-sans">
            Sua primeira consulta de planejamento é moldada com total respeito à sua beleza única. Experimente o conforto, o cuidado artístico e a segurança que você merece.
          </p>

          <a
            id="final-whatsapp-cta"
            href={expertInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCtaClick("final-cta")}
            className="inline-flex w-full sm:w-auto py-4.5 px-10 rounded-full bg-gold-400 hover:bg-[#F9F7F2] text-[#0A0A0A] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-xl cursor-pointer active:scale-98"
          >
            Quero Agendar Minha Avaliação pelo WhatsApp
          </a>

          <p className="mt-4 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
            Fale conosco diretamente • Sem custo de agendamento inicial
          </p>
        </div>
      </section>

      {/* 9. RODAPÉ SIMPLES */}
      <footer className="py-16 bg-[#0A0A0A] px-4 md:px-8 text-center text-xs text-neutral-400">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-6">
          
          {/* Handwritten Style signature name requested */}
          <div className="mb-2">
            <span className="font-signature text-3xl text-gold-400 block">
              {expertInfo.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mt-2 font-sans">
              {expertInfo.role} • {expertInfo.city}
            </span>
          </div>

          <div className="flex gap-6 font-sans">
            <a 
              href={expertInfo.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer text-xs"
            >
              <Instagram className="w-4 h-4" /> Instagram Reels
            </a>
            <a 
              href={expertInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer text-xs"
            >
              <MessageCircle className="w-4 h-4" /> Agendamento Direto
            </a>
          </div>

          <div className="border-t border-gold-400/10 w-full pt-6 text-[10px] text-neutral-600 flex flex-col sm:flex-row justify-between items-center gap-4 font-sans">
            <p>© {new Date().getFullYear()} {expertInfo.name}. Todos os direitos reservados.</p>
            <p>Espaço Estético Exclusivo • Belo Horizonte - MG</p>
          </div>

        </div>
      </footer>

      {/* Shared Lightbox instance for case studies & comments */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={handleLightboxClose}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
      />
    </div>
  );
}

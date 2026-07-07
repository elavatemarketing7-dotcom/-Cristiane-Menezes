import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Instagram, Heart } from "lucide-react";
import { expertInfo } from "../data";

export default function HeaderMarquee() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "Sobre Mim", target: "sobre-mim" },
    { label: "Prova Visual", target: "prova-visual" },
    { label: "Harmonização de 💚", target: "harmonizacao-coracao" },
    { label: "Onde nos Encontrar", target: "onde-encontrar" },
    { label: "Contato", target: "contato" },
  ];

  // Tripled items to make sure the marquee has seamless looping coverage
  const duplicatedItems = [...navItems, ...navItems, ...navItems, ...navItems];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 border-b border-gold-400/10 ${
      isScrolled ? "bg-neutral-950/95 backdrop-blur-md shadow-lg" : "bg-neutral-900/90 backdrop-blur-sm"
    }`}>
      {/* Brand Top Row */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-left cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full border border-gold-400/40 overflow-hidden flex items-center justify-center bg-neutral-800">
            <img 
              src={expertInfo.photos.primary} 
              alt={expertInfo.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-sm font-serif font-bold text-white tracking-wide group-hover:text-gold-300 transition-colors">
              {expertInfo.name}
            </h1>
            <p className="text-[9px] text-gold-400 tracking-widest uppercase">Estética de Resultados Naturais</p>
          </div>
        </button>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={expertInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 hover:border-gold-400/30 transition-all cursor-pointer"
            title="Instagram Reels"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={expertInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-neutral-950 font-bold text-[11px] uppercase tracking-wider shadow-sm transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Agendar
          </a>
        </div>
      </div>

      {/* Marquee Navigation Ticker */}
      <div className="bg-neutral-950 border-t border-gold-400/5 py-1.5 overflow-hidden flex select-none relative after:absolute after:right-0 after:top-0 after:h-full after:w-16 after:bg-gradient-to-l after:from-neutral-950 after:to-transparent after:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-16 before:bg-gradient-to-r before:from-neutral-950 before:to-transparent before:content-[''] before:z-10 after:z-10">
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-8 items-center shrink-0">
          {duplicatedItems.map((item, idx) => (
            <button
              key={`${item.target}-${idx}`}
              onClick={() => scrollToSection(item.target)}
              className="text-neutral-400 hover:text-gold-300 text-xs font-medium tracking-wide flex items-center gap-1.5 cursor-pointer whitespace-nowrap group transition-colors duration-250 py-1"
            >
              <Sparkles className="w-3 h-3 text-gold-400/50 group-hover:text-gold-400 group-hover:scale-110 transition-all" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

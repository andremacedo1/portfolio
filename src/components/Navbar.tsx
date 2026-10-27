import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, FileText, Menu, X, Download, Sun, Moon, ShieldAlert, Sparkles, Globe } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import { publicUrl } from '../utils/publicUrl';

interface NavbarProps {
  initials: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onOpenEditor: () => void;
  onTriggerBugBait?: (id: string) => void;
  bugBaitsFoundCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  initials,
  theme,
  onToggleTheme,
  onOpenResume,
  onTriggerBugBait,
  bugBaitsFoundCount = 0,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMusic = () => {
    const status = soundEngine.toggleMusic((playing) => {
      setIsMusicOn(playing);
    });
    setIsMusicOn(status);
  };

  const navLinks = [
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.arcade, href: '#arcade' },
    { label: t.nav.experience, href: '#experiencia' },
    { label: t.nav.stack, href: '#stack' },
    { label: t.nav.personal, href: '#pessoal' },
    { label: t.nav.contact, href: '#contato' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md py-3 shadow-md border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand + Bug Bait Tracker */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-1 group focus:outline-hidden"
            aria-label="Ir para o início"
          >
            <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white transition-transform group-hover:scale-105">
              {initials}
            </span>
            <span className="w-2.5 h-2.5 bg-[#8b5cf6] inline-block transition-transform group-hover:rotate-45" />
          </a>

          {/* Bug 1: Telemetria sutil de API Gateway */}
          <button
            onClick={() => onTriggerBugBait?.('navbar-error')}
            type="button"
            className="group hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700/60 transition-colors cursor-pointer"
            title={t.bugBait.bait1Tooltip}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>API Gateway</span>
            <span className="text-slate-400 dark:text-slate-500">·</span>
            <span className="text-[10px] text-slate-600 dark:text-slate-300 group-hover:text-amber-500 transition-colors">
              24ms
            </span>
            {bugBaitsFoundCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold text-[9px]">
                {bugBaitsFoundCount}/6
              </span>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
            >
              {item.label}
            </a>
          ))}

          {/* Language Switcher Pill */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 rounded-full p-0.5 border border-slate-200 dark:border-slate-700">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-mono transition-all cursor-pointer ${
                  language === l.code
                    ? 'bg-emerald-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title={`Mudar para ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            type="button"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Audio Lo-Fi Toggle */}
          <button
            onClick={handleToggleMusic}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              isMusicOn
                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/40 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
            title="Lo-Fi Sound"
          >
            {isMusicOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-[11px]">Lo-Fi ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="text-[11px]">Lo-Fi OFF</span>
              </>
            )}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors border border-slate-700 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.viewResume}</span>
          </button>

          {/* Download ZIP */}
          <a
            href={publicUrl('andre_macedo_portfolio.zip')}
            download="andre_macedo_portfolio.zip"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#8b5cf6] hover:bg-[#7c3aed] text-white transition-colors shadow-sm"
            title="Download ZIP"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.nav.downloadZip}</span>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 xl:hidden">
          {/* Language Mobile Pill */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-0.5 border border-slate-200 dark:border-slate-700">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                  language === l.code
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 px-6 py-5 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-semibold text-sm text-slate-700 dark:text-slate-200">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Telemetria sutil no mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onTriggerBugBait?.('navbar-error');
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-xs border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              API Gateway · 24ms (200 OK)
            </span>
            <span className="text-[10px] text-slate-400">Verificar</span>
          </button>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 font-semibold text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              {t.nav.viewResume}
            </button>

            <a
              href={publicUrl('andre_macedo_portfolio.zip')}
              download="andre_macedo_portfolio.zip"
              className="w-full py-2.5 rounded-xl bg-[#8b5cf6] text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t.nav.downloadZip}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

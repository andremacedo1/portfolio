import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Github, Linkedin, MessageCircle, FileText, Bug } from 'lucide-react';
import { PersonalInfo } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  info: PersonalInfo;
  onOpenResume: () => void;
  onTriggerBugBait?: (id: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  info,
  onOpenResume,
  onTriggerBugBait,
}) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contato" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800 relative bg-[#090d16] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Giant Headline */}
        <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
          {t.contact.sectionTag}
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight mb-4">
          {t.contact.title} <br className="hidden sm:inline" />
          <span className="text-emerald-400">{t.contact.highlight}</span>
          <span className="text-[#ff5733]">.</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-8">
          {t.contact.subtitle}
        </p>

        {/* Email Link with Copy Feedback */}
        <div className="mb-10 inline-flex flex-col items-center">
          <div className="flex items-center gap-3 group">
            <a
              href={`mailto:${info.email}`}
              className="font-display font-bold text-2xl sm:text-4xl text-white underline decoration-emerald-500 decoration-3 underline-offset-8 hover:text-emerald-300 transition-colors"
            >
              {info.email}
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              title={t.contact.copyEmail}
              aria-label="Copiar e-mail"
            >
              {copied ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>

          {copied && (
            <span className="mt-3 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/40 animate-fadeIn">
              ✓ {t.contact.copied}
            </span>
          )}
        </div>

        {/* Social & Contact Capsules */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-16">
          <a
            href={info.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm tracking-wide transition-all border border-slate-700 shadow-sm hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={info.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm tracking-wide transition-all border border-slate-700 shadow-sm hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {info.whatsappUrl && (
            <a
              href={info.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 font-semibold text-xs sm:text-sm tracking-wide transition-all border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{t.contact.chatWhatsapp}</span>
            </a>
          )}

          <button
            onClick={onOpenResume}
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-sm"
          >
            <FileText className="w-4 h-4 text-[#ff5733]" />
            <span>{t.contact.downloadCv}</span>
          </button>
        </div>

        {/* Footer info & Bug Bait #4 */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {info.name}. Quality Engineer & Especialista em Marketplaces.
          </div>

          <div className="flex items-center gap-4">
            {/* Bug Bait #6: Organic build revision tag / Secrets Leak Mock */}
            <button
              type="button"
              onClick={() => onTriggerBugBait?.('version-overflow')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 hover:border-amber-500/40 transition-colors cursor-pointer"
              title="Release Audit: rev: 868ef7c · [TOKEN_DEBUG?]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 hover:bg-amber-400" />
              <span>rev: 868ef7c · [TOKEN_DEBUG?]</span>
            </button>

            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">
                {language === 'en'
                  ? 'Open to Opportunities'
                  : language === 'es'
                  ? 'Disponible para Oportunidades'
                  : 'Disponível para novos desafios'}
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

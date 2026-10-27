import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, User, Briefcase, Mail, Sparkles } from 'lucide-react';
import { PersonalInfo, WorkExperience } from '../types/portfolio';
import { DEFAULT_PERSONAL_INFO, DEFAULT_EXPERIENCES } from '../data/defaultProfile';
import { saveProfile, saveExperiences } from '../utils/storage';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentInfo: PersonalInfo;
  currentExperiences: WorkExperience[];
  onUpdate: (info: PersonalInfo, experiences: WorkExperience[]) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  currentInfo,
  currentExperiences,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<PersonalInfo>(currentInfo);
  const [experiences, setExperiences] = useState<WorkExperience[]>(currentExperiences);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveProfile(formData);
    saveExperiences(experiences);
    onUpdate(formData, experiences);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Deseja restaurar todas as informações para o modelo padrão?')) {
      setFormData(DEFAULT_PERSONAL_INFO);
      setExperiences(DEFAULT_EXPERIENCES);
      saveProfile(DEFAULT_PERSONAL_INFO);
      saveExperiences(DEFAULT_EXPERIENCES);
      onUpdate(DEFAULT_PERSONAL_INFO, DEFAULT_EXPERIENCES);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#1e293b] border-2 border-[#334155] text-[#f1f5f9] rounded-2xl max-w-2xl w-full my-8 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0f172a] border-b border-[#334155] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#06b6d4]" />
            <h2 className="font-heading font-bold text-xl text-[#f8fafc]">
              Personalizar Meu Currículo & Portfólio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-[#334155] text-[#2c3d34] cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-5 flex-1">
          <p className="text-xs text-[#596b61]">
            Edite seus dados profissionais para que o site reflita exatamente seu perfil, experiências e canais de contato.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                Nome Completo:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                Iniciais (Monograma):
              </label>
              <input
                type="text"
                name="initials"
                value={formData.initials}
                onChange={handleChange}
                maxLength={4}
                required
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
              Cargo Principal (Badge Superior):
            </label>
            <input
              type="text"
              name="roleBadge"
              value={formData.roleBadge}
              onChange={handleChange}
              required
              className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                Título Hero:
              </label>
              <input
                type="text"
                name="heroHeadline"
                value={formData.heroHeadline}
                onChange={handleChange}
                required
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                Destaque Hero:
              </label>
              <input
                type="text"
                name="heroHighlight"
                value={formData.heroHighlight}
                onChange={handleChange}
                required
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
              Bio / Proposta de Valor:
            </label>
            <textarea
              name="heroBio"
              rows={3}
              value={formData.heroBio}
              onChange={handleChange}
              required
              className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                E-mail para Contato:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                Localização:
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                URL do LinkedIn:
              </label>
              <input
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#94a3b8] uppercase mb-1">
                URL do GitHub:
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full bg-[#0b1320] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]"
              />
            </div>
          </div>

          {savedSuccess && (
            <div className="p-3 bg-[#14532d]/50 text-[#4ade80] rounded-lg text-xs font-semibold flex items-center gap-2 border border-[#22c55e]/40">
              <Check className="w-4 h-4 text-[#22c55e]" />
              <span>Dados atualizados com sucesso e salvos!</span>
            </div>
          )}

          <div className="pt-4 border-t border-[#334155] flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#f87171] hover:bg-[#ef4444]/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-[#94a3b8] hover:bg-[#334155] cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Salvar Alterações</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

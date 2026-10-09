import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  Globe, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Calculator, 
  MessageSquare, 
  FileText, 
  Menu, 
  X,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    language, 
    toggleLanguage, 
    theme, 
    toggleTheme, 
    soundEnabled, 
    toggleSound, 
    setIsAdminOpen, 
    setIsCVOpen, 
    setIsEstimatorOpen,
    recordAnalyticsEvent
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = language === 'ar';

  const navLinks = [
    { href: '#projects', label: isAr ? 'المشاريع' : 'Projects' },
    { href: '#services', label: isAr ? 'الخدمات والمهارات' : 'Services & Skills' },
    { href: '#reviews', label: isAr ? 'آراء العملاء' : 'Reviews' },
    { href: '#blog', label: isAr ? 'المدونة' : 'Blog' },
    { href: '#contact', label: isAr ? 'تواصل معي' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#080c18]/90 dark:bg-[#080c18]/90 border-b border-indigo-950/60 transition-colors shadow-sm shadow-indigo-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo with Mohamed Tamer's Photo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden shrink-0">
              <img
                src={PROFILE_INFO.avatarUrl}
                alt="Mohamed Tamer (محمد تامر)"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  {isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1 rtl:mr-0 rtl:ml-1" />
                  {isAr ? 'متاح للعمل' : 'Available'}
                </span>
              </div>
              <span className="text-xs text-slate-400 block truncate max-w-[200px] sm:max-w-none">
                {isAr ? 'تطوير وتصميم المواقع وتطبيقات الجوال' : 'Mobile & Web App Architect'}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors relative py-1 hover:underline underline-offset-8"
            >
              {link.label}
            </a>
          ))}

          {/* Project Cost Estimator trigger */}
          <button
            onClick={() => setIsEstimatorOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isAr ? 'احسب تكلفة مشروعك' : 'Cost Estimator'}</span>
          </button>
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* CV Opener */}
          <button
            onClick={() => {
              recordAnalyticsEvent('cv_download');
              setIsCVOpen(true);
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
            title={isAr ? 'عرض وتحميل السيرة الذاتية' : 'View & Download CV'}
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'السيرة الذاتية CV' : 'Resume CV'}</span>
          </button>

          {/* WhatsApp Direct Fast CTA */}
          <a
            href={PROFILE_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => recordAnalyticsEvent('whatsapp_click')}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
            <span className="font-mono text-[11px] opacity-90">01149556339</span>
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors flex items-center gap-1 text-xs font-bold"
            title={isAr ? 'Switch to English' : 'التحويل للعربية'}
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="uppercase">{isAr ? 'EN' : 'عربي'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
            title={soundEnabled ? (isAr ? 'كتم المؤثرات الصوتية' : 'Mute Sound') : (isAr ? 'تفعيل المؤثرات' : 'Unmute')}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Admin CMS Trigger */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
            title={isAr ? 'لوحة التحكم وإدارة المحتوى' : 'Admin CMS Portal'}
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-5 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsEstimatorOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
            >
              <Calculator className="w-4 h-4" />
              <span>{isAr ? 'احسب تكلفة ووقت مشروعك' : 'App Cost & Time Estimator'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCVOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-100 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? 'عرض وتحميل السيرة الذاتية (CV)' : 'View & Download CV'}</span>
            </button>

            <a
              href={PROFILE_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                recordAnalyticsEvent('whatsapp_click');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'محادثة فورية على واتساب (01149556339)' : 'Instant WhatsApp (01149556339)'}</span>
            </a>

            <a
              href={PROFILE_INFO.mostaqlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{isAr ? 'بروفايل مستقل الرسمي (Mostaql)' : 'Official Mostaql Profile'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  ShieldCheck, 
  ExternalLink, 
  MessageSquare, 
  Mail, 
  Phone, 
  ArrowUp, 
  Heart,
  Lock,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setIsAdminOpen, setIsCVOpen, setIsEstimatorOpen } = useApp();
  const isAr = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060913] border-t border-indigo-950/80 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-indigo-950/60">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[1.5px] overflow-hidden shadow-lg shadow-indigo-500/20 shrink-0">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt="Mohamed Tamer (محمد تامر)"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">
                  {isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}
                </h3>
                <p className="text-xs text-indigo-400">
                  {isAr ? 'مهندس ومصمم مواقع وتطبيقات أول' : 'Senior Web & App Architect'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isAr 
                ? 'متخصص في تصميم وبرمجة وتطوير تطبيقات الجوال والويب المتكاملة بمعايير هندسية متقدمة وجودة عالمية تلبي تطلعات الشركات ورواد الأعمال.'
                : 'Engineering robust mobile apps (Flutter, React Native) and high-throughput cloud architectures with clean code, sub-second latency, and unmatched UX.'}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-indigo-950 text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>WhatsApp: 01149556339</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-indigo-950 text-indigo-300">
                bedobebo920@gmail.com
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">
              {isAr ? 'أقسام الموقع' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  {isAr ? 'معرض المشاريع والأعمال' : 'Featured Projects'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  {isAr ? 'الخدمات والمهارات البرمجية' : 'Engineering Capabilities'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-indigo-400 transition-colors">
                  {isAr ? 'آراء العملاء والتقييمات' : 'Client Testimonials'}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-indigo-400 transition-colors">
                  {isAr ? 'المدونة البرمجية' : 'Technical Blog'}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsEstimatorOpen(true)}
                  className="hover:text-indigo-400 transition-colors text-left rtl:text-right cursor-pointer"
                >
                  {isAr ? 'حاسبة تقدير تكلفة المشروع' : 'Cost & Time Estimator'}
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & External Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">
              {isAr ? 'التوثيق والاعتماد' : 'Verification & Escrow'}
            </h4>
            
            <a
              href={PROFILE_INFO.mostaqlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 flex items-center justify-between text-slate-300 hover:text-white transition-all group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span className="font-semibold">{isAr ? 'بروفايل مستقل الرسمي (Mostaql)' : 'Official Mostaql Profile'}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
            </a>

            <a
              href={PROFILE_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/40 hover:border-emerald-500/50 flex items-center justify-between text-emerald-300 hover:text-emerald-200 transition-all group"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">{isAr ? 'محادثة مباشرة على واتساب' : 'Direct WhatsApp'}</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-400">01149556339</span>
            </a>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>{isAr ? 'اتصال مشفر وآمن بنسبة 100% لنقل البيانات' : 'SSL Encrypted & Certified Confidential'}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-slate-500 hover:text-amber-400 transition-colors cursor-pointer"
            >
              {isAr ? 'دخول لوحة التحكم (CMS)' : 'Admin Portal'}
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>{isAr ? 'للأعلى' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

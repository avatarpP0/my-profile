import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { generatePrintableCvHtml, downloadJsonFile } from '../utils/export';
import { 
  X, 
  Download, 
  Printer, 
  FileCode, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink 
} from 'lucide-react';

export const CvModal: React.FC = () => {
  const { isCVOpen, setIsCVOpen, language, triggerNotification } = useApp();
  const isAr = language === 'ar';

  const [activeCvTab, setActiveCvTab] = useState<'summary' | 'experience' | 'skills' | 'projects'>('summary');

  if (!isCVOpen) return null;

  const handleDownloadHtml = () => {
    const htmlContent = generatePrintableCvHtml(isAr);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Mohamed_Tamer_CV_${isAr ? 'AR' : 'EN'}.html`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    triggerNotification(
      isAr ? 'تم تحميل السيرة الذاتية' : 'CV Downloaded',
      isAr ? 'تم تنزيل ملف السيرة الذاتية بنجاح' : 'CV file downloaded successfully',
      'success'
    );
  };

  const handleDownloadJson = () => {
    const cvData = {
      name: isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn,
      title: isAr ? PROFILE_INFO.titleAr : PROFILE_INFO.titleEn,
      whatsapp: PROFILE_INFO.whatsappFull,
      email: PROFILE_INFO.email,
      mostaql: PROFILE_INFO.mostaqlUrl,
      location: isAr ? PROFILE_INFO.locationAr : PROFILE_INFO.locationEn,
      skills: PROFILE_INFO.skills,
      stats: PROFILE_INFO.stats
    };
    downloadJsonFile(`Mohamed_Tamer_Resume_Data.json`, cvData);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(generatePrintableCvHtml(isAr));
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 300);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c18] border-b border-indigo-950/80">
          <div>
            <h3 className="font-bold text-base sm:text-lg text-white">
              {isAr ? 'السيرة الذاتية الاحترافية (Curriculum Vitae)' : 'Professional Resume & CV'}
            </h3>
            <p className="text-xs text-slate-400">
              {isAr ? 'مطور ومصمم تطبيقات أول | 45+ مشروعاً ناجحاً' : 'Senior Mobile & Full-Stack Architect | 45+ Shipped Apps'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title={isAr ? 'طباعة مباشرة' : 'Print CV'}
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadHtml}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}</span>
            </button>
            <button
              onClick={() => setIsCVOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 py-2 bg-slate-950/60 border-b border-indigo-950/80 overflow-x-auto text-xs font-semibold scrollbar-none">
          <button
            onClick={() => setActiveCvTab('summary')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeCvTab === 'summary' ? 'bg-indigo-500/20 text-indigo-300 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'الملخص والبيانات' : 'Summary & Profile'}
          </button>
          <button
            onClick={() => setActiveCvTab('experience')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeCvTab === 'experience' ? 'bg-indigo-500/20 text-indigo-300 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'الخبرة المهنية' : 'Work Experience'}
          </button>
          <button
            onClick={() => setActiveCvTab('skills')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeCvTab === 'skills' ? 'bg-indigo-500/20 text-indigo-300 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'المهارات والتقنيات' : 'Technical Skills'}
          </button>
          <button
            onClick={() => setActiveCvTab('projects')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeCvTab === 'projects' ? 'bg-indigo-500/20 text-indigo-300 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'الإنجازات والشهادات' : 'Achievements & Certs'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          
          {activeCvTab === 'summary' && (
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left rtl:sm:text-right">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400 via-blue-500 to-indigo-600 p-[2px] overflow-hidden shrink-0 shadow-lg shadow-amber-500/10">
                  <img
                    src="/mohamed_tamer_profile.jpg"
                    alt="Mohamed Tamer (محمد تامر)"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">
                    {isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                    {isAr ? PROFILE_INFO.titleAr : PROFILE_INFO.titleEn}
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 pt-2 font-mono">
                    <span>📱 {PROFILE_INFO.whatsappFull}</span>
                    <span>✉️ {PROFILE_INFO.email}</span>
                    <span>📍 Egypt & Remote Global</span>
                  </div>
                </div>
              </div>

              {/* Bio summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {isAr ? 'نبذة تعريفية' : 'Executive Bio'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isAr 
                    ? 'مهندس برمجيات ومصمم تطبيقات متمرس في بناء الحلول الرقمية الشاملة. متخصص في تطوير تطبيقات الجوال عالية الأداء لنظامي Android و iOS باستخدام Flutter و React Native، وتصميم البنى السحابية الموثوقة باستخدام Next.js و Node.js و PostgreSQL. أتممت أكثر من 45 مشروعاً برمجياً متنوعاً بتقييم 5 نجوم على منصة مستقل.'
                    : 'Senior Software Engineer and Mobile Application Architect with extensive track record shipping mission-critical cross-platform mobile apps (Flutter, React Native) and resilient cloud architectures. Delivered 45+ client projects with 100% on-time delivery rate and 5.0 rating on Mostaql.'}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xl font-bold font-mono text-cyan-400">45+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{isAr ? 'مشاريع منفذة' : 'Shipped Projects'}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xl font-bold font-mono text-amber-400">5.0 ★</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{isAr ? 'تقييم مستقل' : 'Mostaql Rating'}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xl font-bold font-mono text-emerald-400">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{isAr ? 'التزام بالمواعيد' : 'On-Time Rate'}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                  <div className="text-xl font-bold font-mono text-purple-400">5+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{isAr ? 'سنوات خبرة' : 'Years Experience'}</div>
                </div>
              </div>
            </div>
          )}

          {activeCvTab === 'experience' && (
            <div className="space-y-6">
              <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-l-2 rtl:border-l-0 rtl:border-r-2 border-cyan-500/40 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                    <span className="font-bold">{isAr ? 'مطور ومصمم تطبيقات مستقل أول' : 'Senior Freelance Application Engineer'}</span>
                    <span>2021 - {isAr ? 'الآن' : 'Present'}</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">Mostaql & Global Clients (Saudi Arabia, UAE, Egypt, Kuwait)</div>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>{isAr ? 'بناء وتطوير أكثر من 45 تطبيقاً للجوال والويب بنظام Clean Architecture.' : 'Engineered 45+ mobile and web applications utilizing Clean Architecture paradigms.'}</li>
                    <li>{isAr ? 'تكامل بوابات الدفع الإلكترونية: Apple Pay، مدى، فيزا، Stripe، وبوابات الدفع الخليجية.' : 'Integrated regional and international payment gateways (Apple Pay, Mada, Stripe).'}</li>
                    <li>{isAr ? 'نشر التطبيقات بنجاح تام على متاجر Apple App Store و Google Play Store دون رفض.' : 'Zero-rejection track record on App Store and Google Play Console reviews.'}</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                    <span className="font-bold">{isAr ? 'مهندس برمجيات Full-Stack' : 'Full-Stack Software Engineer'}</span>
                    <span>2019 - 2021</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">Technology Solutions Agency</div>
                  <ul className="text-xs sm:text-sm text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>{isAr ? 'تطوير لوحات تحكم ويب متقدمة بالـ React و Node.js لإدارة العمليات والمخزون.' : 'Designed real-time admin portals and inventory management systems in React & Node.js.'}</li>
                    <li>{isAr ? 'تحسين زمن استجابة استعلامات قواعد البيانات بنسبة 40% عبر الفهرسة الذكية و Redis.' : 'Optimized PostgreSQL queries and database caching reducing latency by 40%.'}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeCvTab === 'skills' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h5 className="font-bold text-xs text-cyan-400 uppercase tracking-wider">{isAr ? 'تطوير الجوال' : 'Mobile Dev'}</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Flutter, Dart, React Native, Swift, Kotlin, BLoC, Riverpod, Redux Toolkit, Offline SQLite
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h5 className="font-bold text-xs text-emerald-400 uppercase tracking-wider">{isAr ? 'تطوير الويب والسيرفر' : 'Web & Backend'}</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Next.js, React 19, Node.js, Express, TypeScript, RESTful APIs, GraphQL, WebSockets
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h5 className="font-bold text-xs text-purple-400 uppercase tracking-wider">{isAr ? 'قواعد البيانات والسحابة' : 'Cloud & Databases'}</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  PostgreSQL, Supabase, Firebase Firestore, MongoDB, Redis, Docker, Google Cloud Run
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h5 className="font-bold text-xs text-amber-400 uppercase tracking-wider">{isAr ? 'التصميم والأمان' : 'UI/UX & Security'}</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Figma, Tailwind CSS, AES-256 Encryption, SSL Pinning, Biometric Auth, OWASP Security
                </p>
              </div>
            </div>
          )}

          {activeCvTab === 'projects' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">بكالوريوس هندسة الحاسبات ونظم المعلومات</span>
                  <span className="text-slate-500 font-mono">Computer Engineering B.Sc.</span>
                </div>
                <p className="text-xs text-slate-400">
                  {isAr ? 'تخرج بتقدير امتياز مع مرتبة الشرف ومشروع تخرج في الذكاء الاصطناعي وتطبيقات الجوال.' : 'Graduated with Honors, specializing in Distributed Systems & Mobile Computing.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">شهادات مهنية معتمدة (Certifications)</span>
                  <span className="text-emerald-400 font-mono">Verified</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>• Meta Certified Mobile Developer (React Native Specialist)</div>
                  <div>• Google Associate Android Developer & Flutter Architect</div>
                  <div>• Mostaql Top Rated Freelance Badge 2024 - 2026</div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isAr ? 'تحميل HTML / PDF' : 'Download Printable HTML'}</span>
            </button>

            <button
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{isAr ? 'تصدير JSON' : 'Export JSON'}</span>
            </button>
          </div>

          <a
            href={PROFILE_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isAr ? 'تواصل معي مباشرة لطلب مقابلة' : 'Schedule Interview via WhatsApp'}</span>
          </a>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Star, 
  ExternalLink, 
  FileText, 
  MessageSquare, 
  Smartphone, 
  Code2, 
  Layers, 
  ShieldCheck,
  Zap,
  Clock,
  Download
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, setIsCVOpen, setIsEstimatorOpen, recordAnalyticsEvent } = useApp();
  const isAr = language === 'ar';

  const [activeCodeTab, setActiveCodeTab] = useState<'stack' | 'architecture' | 'stats'>('stack');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b border-indigo-950/60 bg-[#080c18]">
      {/* Background ambient glowing gradients in Royal Indigo and Electric Violet */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main text column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Verification / Status Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PROFILE_INFO.mostaqlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>{isAr ? 'مستقل موثق VIP (Mostaql Pro)' : 'Verified Mostaql Pro Freelancer'}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{isAr ? 'متاح لاستقبال مشاريع جديدة 2026' : 'Open for New Projects 2026'}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {isAr ? (
                <>
                  أصمم وأطور <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300">تطبيقات ومواقع ذكية</span> متقدمة تصنع الفارق
                </>
              ) : (
                <>
                  Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300">High-Impact Digital Platforms</span> That Scale
                </>
              )}
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {isAr ? (
                <>
                  أنا <strong className="text-indigo-300 font-bold">{PROFILE_INFO.nameAr}</strong>، مهندس ومصمم برمجيات متخصص في بناء وتطوير منصات الويب السحابية، وتطبيقات الجوال، وحلول الشحن والأنظمة اللوجستية، وتصميم الهويات البصرية الفاخرة مع معايير أمان عالية وكود نظيف.
                </>
              ) : (
                <>
                  I'm <strong className="text-indigo-300 font-bold">{PROFILE_INFO.nameEn}</strong>, Senior Software Engineer and Application Architect specializing in high-performance web platforms, logistics engines, and luxury brand identities with clean architecture.
                </>
              )}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* WhatsApp direct */}
              <a
                href={PROFILE_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => recordAnalyticsEvent('whatsapp_click')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? 'تواصل معي واتساب' : 'Chat on WhatsApp'}</span>
                <span className="font-mono text-xs bg-black/25 px-2 py-0.5 rounded">01149556339</span>
              </a>

              {/* Cost Estimator */}
              <button
                onClick={() => setIsEstimatorOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>{isAr ? 'احسب تكلفة ووقت مشروعك' : 'Estimate App Budget'}</span>
              </button>

              {/* View/Download CV */}
              <button
                onClick={() => {
                  recordAnalyticsEvent('cv_download');
                  setIsCVOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>{isAr ? 'السيرة الذاتية (CV)' : 'Resume (CV)'}</span>
              </button>

              {/* Mostaql profile */}
              <a
                href={PROFILE_INFO.mostaqlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-500/40 transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{isAr ? 'بروفايلي على مستقل' : 'Mostaql Portfolio'}</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center">
                  <span>{PROFILE_INFO.stats.projectsCompleted}</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {isAr ? 'مشروع مكتمل بنجاح' : 'Completed Projects'}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono flex items-center gap-1">
                  <span>{PROFILE_INFO.stats.rating}</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {isAr ? 'تقييم 5 نجوم على مستقل' : '5-Star Mostaql Rating'}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono flex items-center">
                  <span>{PROFILE_INFO.stats.onTimeDelivery}</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {isAr ? 'التزام بالمواعيد' : 'On-Time Delivery'}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono flex items-center">
                  <span>24/7</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {isAr ? 'دعم فني واستجابة فورية' : 'Instant 24/7 Support'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Developer Portrait Card + Interactive Terminal */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Developer Face & Identity Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#080c18] border border-indigo-900/40 p-5 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col sm:flex-row items-center gap-5 group hover:border-indigo-500/50 transition-all duration-300">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[2px] shadow-xl shadow-indigo-500/20">
                  <img
                    src={PROFILE_INFO.avatarUrl}
                    alt="Mohamed Tamer (محمد تامر)"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 rtl:-right-auto rtl:-left-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#080c18] flex items-center justify-center text-white" title="متصل الآن ومتاح">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              <div className="space-y-1.5 text-center sm:text-left rtl:sm:text-right min-w-0 flex-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  <span>★ مستقل موثق | Mostaql Top Rated</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {isAr ? 'تصميم وتطوير المواقع والبرامج وتطبيقات الجوال' : 'App Designer & Full-Stack Web Architect'}
                </p>
                <div className="pt-1 flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-emerald-400">
                  <span>📱 01149556339</span>
                  <span>·</span>
                  <span className="text-indigo-400">Egypt / Global</span>
                </div>
              </div>
            </div>

            {/* Terminal Window Header */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-indigo-950/60 shadow-xl backdrop-blur-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-indigo-950/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2 rtl:ml-0 rtl:mr-2">
                    mohamed-tamer.config.ts
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveCodeTab('stack')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeCodeTab === 'stack' ? 'bg-indigo-500/20 text-indigo-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    stack
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('architecture')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeCodeTab === 'architecture' ? 'bg-indigo-500/20 text-indigo-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    arch
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('stats')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeCodeTab === 'stats' ? 'bg-indigo-500/20 text-indigo-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    specs
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-xs text-slate-300 space-y-2.5 leading-relaxed overflow-x-auto text-left" dir="ltr">
                {activeCodeTab === 'stack' && (
                  <>
                    <div className="text-slate-500">// Production Verified Stack</div>
                    <div>
                      <span className="text-pink-400">const</span>{' '}
                      <span className="text-amber-300">architectStack</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">frontendAndWeb:</span> [
                      <span className="text-emerald-300">'Next.js'</span>,{' '}
                      <span className="text-emerald-300">'React'</span>,{' '}
                      <span className="text-emerald-300">'TypeScript'</span>,{' '}
                      <span className="text-emerald-300">'Tailwind CSS'</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">mobileAndApps:</span> [
                      <span className="text-emerald-300">'Flutter'</span>,{' '}
                      <span className="text-emerald-300">'React Native'</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">designAndMotion:</span> [
                      <span className="text-emerald-300">'Figma'</span>,{' '}
                      <span className="text-emerald-300">'After Effects'</span>,{' '}
                      <span className="text-emerald-300">'Lottie'</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">directWhatsApp:</span>{' '}
                      <span className="text-amber-300">'+201149556339'</span>
                    </div>
                    <div>&#125;;</div>
                  </>
                )}

                {activeCodeTab === 'architecture' && (
                  <>
                    <div className="text-slate-500">// Clean Architectural Standards</div>
                    <div>
                      <span className="text-pink-400">interface</span>{' '}
                      <span className="text-amber-300">DeliveryQuality</span> &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">cleanCode:</span> <span className="text-emerald-400">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">seoAuditScore:</span> <span className="text-emerald-400">'99/100 Core Web Vitals'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-300">securityEncryption:</span> <span className="text-amber-300">'PCI-DSS & 256-Bit SSL'</span>
                    </div>
                    <div>&#125;</div>
                  </>
                )}

                {activeCodeTab === 'stats' && (
                  <>
                    <div className="text-slate-500">// Mostaql Track Record</div>
                    <div>
                      <span className="text-pink-400">export const</span>{' '}
                      <span className="text-amber-300">profileMetrics</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">rating:</span> <span className="text-amber-400">5.0</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">onTimeDelivery:</span> <span className="text-emerald-400">'100%'</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">clientRetention:</span> <span className="text-blue-400">'100%'</span>
                    </div>
                    <div>&#125;;</div>
                  </>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400" dir="ltr">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">❯</span>
                  <span className="text-slate-300">mohamed-tamer --available</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

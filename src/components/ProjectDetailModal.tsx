import React from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  X, 
  ExternalLink, 
  Star, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  MessageSquare, 
  ShieldCheck,
  Code
} from 'lucide-react';

export const ProjectDetailModal: React.FC = () => {
  const { selectedProject, setSelectedProject, language, recordAnalyticsEvent } = useApp();
  const isAr = language === 'ar';

  if (!selectedProject) return null;

  const p = selectedProject;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
              {p.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {p.year} · {p.client}
            </span>
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 space-y-6">
          
          {/* Hero Banner / Mockup */}
          <div className="relative rounded-xl overflow-hidden aspect-video max-h-80 w-full border border-slate-800 bg-slate-950">
            <img
              src={p.image}
              alt={isAr ? p.titleAr : p.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {isAr ? p.titleAr : p.titleEn}
                </h2>
                <p className="text-xs sm:text-sm text-indigo-300 mt-1">
                  {isAr ? p.taglineAr : p.taglineEn}
                </p>
              </div>

              {p.downloadsOrUsers && (
                <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>{p.downloadsOrUsers}</span>
                </div>
              )}
            </div>
          </div>

          {/* Lead Engineer Attribution Card with Photo */}
          <div className="p-3.5 rounded-xl bg-slate-950/90 border border-indigo-900/50 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[1.5px] overflow-hidden shrink-0 shadow-md shadow-indigo-500/10">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt="Mohamed Tamer"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">
                    {isAr ? 'المهندس المنفذ: محمد تامر' : 'Architect & Lead Developer: Mohamed Tamer'}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                    VIP Mostaql
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {isAr ? 'برمجة وتصميم واختبارات الأمان بإشرافي المباشر' : 'Full-stack engineering & security tested'}
                </p>
              </div>
            </div>

            <a
              href={PROFILE_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-600/30 transition-colors"
            >
              <span>{isAr ? 'تواصل معي' : 'Contact'}</span>
            </a>
          </div>

          {/* Metric Callout */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">
                {isAr ? 'النتيجة والأثر المحقق للعميل:' : 'Delivered Impact & Result:'}
              </div>
              <div className="text-base sm:text-lg font-bold text-cyan-300 mt-0.5">
                {isAr ? p.metrics.statAr : p.metrics.statEn}
              </div>
            </div>

            <div className="flex items-center gap-1 text-amber-400 font-mono font-bold text-sm bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{p.rating || 5.0} / 5.0</span>
            </div>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                <span>{isAr ? 'التحدي والمشكلة' : 'The Challenge'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr ? p.problemAr : p.problemEn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <span>{isAr ? 'الحل البرمجي المنفذ' : 'The Engineering Solution'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isAr ? p.solutionAr : p.solutionEn}
              </p>
            </div>
          </div>

          {/* Interactive Live Demo Simulator Section */}
          {p.id === 'proj-shipexpress' && (
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {isAr ? 'تجربة حية لمحرك تتبع الشحنات (ShipExpress Live Demo)' : 'Live Parcel Tracking Simulator'}
                </span>
                <span className="text-[10px] font-mono text-slate-400">Simulation Mode</span>
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value="SE-984271-SA"
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white font-mono"
                />
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors cursor-default"
                >
                  {isAr ? 'تتبع فوري' : 'Track Parcel'}
                </button>
              </div>

              {/* Progress Milestones */}
              <div className="pt-2 grid grid-cols-4 gap-2 text-center text-[10px]">
                <div className="p-2 rounded bg-slate-900 border border-emerald-500/40 text-emerald-300">
                  <div className="font-bold">1. تم الاستلام</div>
                  <div className="text-slate-500 text-[9px]">جدة · 08:30 ص</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-emerald-500/40 text-emerald-300">
                  <div className="font-bold">2. الفحص الأمني</div>
                  <div className="text-slate-500 text-[9px]">مركز الفرز</div>
                </div>
                <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500 text-cyan-300 animate-pulse">
                  <div className="font-bold">3. في الطريق</div>
                  <div className="text-slate-400 text-[9px]">شاحنة الشحن</div>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-500">
                  <div className="font-bold">4. تسليم للعميل</div>
                  <div className="text-[9px]">الرياض · المتوقع اليوم</div>
                </div>
              </div>
            </div>
          )}

          {p.id === 'proj-water-wells' && (
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {isAr ? 'حاسبة عمق الآبار والمضخات التفاعلية (Live Engine Demo)' : 'Well Depth & Pump Simulator'}
                </span>
                <span className="text-[10px] font-mono text-slate-400">Simulation Engine</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <div className="text-slate-400 text-[10px] mb-0.5">{isAr ? 'العمق المقترح' : 'Target Depth'}</div>
                  <div className="font-mono font-bold text-white text-sm">180 متر</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <div className="text-slate-400 text-[10px] mb-0.5">{isAr ? 'قوة المضخة' : 'Pump Power'}</div>
                  <div className="font-mono font-bold text-emerald-400 text-sm">15.5 حصان</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <div className="text-slate-400 text-[10px] mb-0.5">{isAr ? 'مدة الحفر' : 'Rig Duration'}</div>
                  <div className="font-mono font-bold text-cyan-400 text-sm">5 - 7 أيام</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                {isAr ? '✓ تدعم المنصة ربط الدفع الفوري لعربون الحفر عبر Mada و Apple Pay مع إشعار فوري للفريق الميداني.' : '✓ Integrated instant deposit checkout via Apple Pay & local gateways.'}
              </p>
            </div>
          )}

          {p.id === 'proj-sahbaa-cafe' && (
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  {isAr ? 'لوحة ألوان الهوية البصرية وشاشات العرض' : 'Brand Identity Color Harmony'}
                </span>
                <span className="text-[10px] font-mono text-slate-400">4K Vector Ready</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-lg bg-[#D4AF37] text-slate-950 font-bold">
                  <div className="text-[10px] opacity-80">Imperial Gold</div>
                  <div className="text-[11px]">#D4AF37</div>
                </div>
                <div className="p-2 rounded-lg bg-[#3D2314] text-amber-100 font-bold">
                  <div className="text-[10px] opacity-80">Dark Roast</div>
                  <div className="text-[11px]">#3D2314</div>
                </div>
                <div className="p-2 rounded-lg bg-[#121212] border border-slate-800 text-slate-200 font-bold">
                  <div className="text-[10px] opacity-80">Espresso Obsidian</div>
                  <div className="text-[11px]">#121212</div>
                </div>
                <div className="p-2 rounded-lg bg-[#F5E6CA] text-slate-900 font-bold">
                  <div className="text-[10px] opacity-80">Desert Sand</div>
                  <div className="text-[11px]">#F5E6CA</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                {isAr ? '✓ جرى تسليم ملفات تحريك الشعار بصيغ Lottie للويب و MP4 بدقة 4K لشاشات الكافيه والسيارات.' : '✓ Shipped lightweight Lottie JSON for web & 4K 60fps video for outdoor screens.'}
              </p>
            </div>
          )}

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              {isAr ? 'أهم الميزات التقنية المنفذة' : 'Core Features & Architecture'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(isAr ? p.featuresAr : p.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              {isAr ? 'حزمة التقنيات المستخدمة' : 'Technologies & Libraries'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {p.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {p.mostaqlUrl && (
                <a
                  href={p.mostaqlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isAr ? 'مشاهدة في مستقل' : 'View on Mostaql'}</span>
                </a>
              )}

              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold hover:bg-slate-700 transition-colors"
                >
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isAr ? 'رابط المعاينة' : 'Live Preview'}</span>
                </a>
              )}
            </div>

            {/* Direct WhatsApp discuss this project */}
            <a
              href={`https://wa.me/201149556339?text=${encodeURIComponent(
                isAr
                  ? `مرحباً مهندس محمد، اطلعت على مشروعك "${p.titleAr}" وأود تنفيذ مشروع مشابه لتطبيقي.`
                  : `Hello Mohamed, I saw your project "${p.titleEn}" and would like to build something similar.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => recordAnalyticsEvent('whatsapp_click', p.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isAr ? 'اطلب تطبيقاً مماثلاً عبر واتساب' : 'Request Similar App via WhatsApp'}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

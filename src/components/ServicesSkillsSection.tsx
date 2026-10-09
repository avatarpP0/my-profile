import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  Smartphone, 
  Globe, 
  Layers, 
  ShieldCheck, 
  Database, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  ArrowRight,
  GitBranch,
  Rocket
} from 'lucide-react';

export const ServicesSkillsSection: React.FC = () => {
  const { language } = useApp();
  const isAr = language === 'ar';

  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all');

  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      titleAr: 'تطوير تطبيقات الجوال (iOS & Android)',
      titleEn: 'Cross-Platform & Native Mobile Apps',
      descAr: 'برمجة تطبيقات متقدمة بـ Flutter و React Native مع معدل 60 إطاراً في الثانية، ودعم كامل للشاشات المختلفة والعمل دون إنترنت.',
      descEn: 'Engineering 60fps mobile applications with Flutter and React Native, deep hardware integrations, and offline-first capabilities.',
      highlights: ['Flutter & Dart', 'React Native', 'Swift & Kotlin', 'Store Publishing']
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      titleAr: 'تطوير منصات الويب السحابية (Web SaaS)',
      titleEn: 'Full-Stack Web & Cloud Platforms',
      descAr: 'بناء منصات ويب فائقة السرعة بـ Next.js و React 19 مع بنية خوادم مرنة ومعالجة لحظية للبيانات بتقنيات WebSockets.',
      descEn: 'Building sub-second web applications with Next.js, TypeScript, and reactive microservices ready for thousands of concurrent users.',
      highlights: ['Next.js 14/15', 'Node.js & Express', 'TypeScript', 'WebSockets']
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      titleAr: 'تصميم تجربة وواجهة المستخدم (UI/UX Design)',
      titleEn: 'UI/UX Design & Interactive Prototypes',
      descAr: 'تحويل الأفكار ونماذج الأعمال إلى واجهات استخدام عصرية في Figma مع دراسة سلوك المستخدم وتطبيق معايير سهولة الاستخدام.',
      descEn: 'Pixel-perfect wireframing and interactive prototypes on Figma designed for maximum user retention and effortless journeys.',
      highlights: ['Figma Prototyping', 'Design Systems', 'Micro-interactions', 'RTL/LTR Layouts']
    },
    {
      icon: <Database className="w-6 h-6 text-sky-400" />,
      titleAr: 'قواعد البيانات والخوادم السحابية',
      titleEn: 'Databases & Cloud Architecture',
      descAr: 'تصميم قواعد بيانات علائقية وغير علائقية محكمة مع استعلامات مفهرسة لضمان أداء مستقر حتى مع ملايين السجلات.',
      descEn: 'Architecting high-concurrency database schemas on PostgreSQL, Firebase, Supabase, and Redis with automated backups.',
      highlights: ['PostgreSQL & SQL', 'Firebase / Supabase', 'Redis Caching', 'Docker & CI/CD']
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      titleAr: 'بوابات الدفع والأمان والتشفير',
      titleEn: 'FinTech Gateways & Cyber Security',
      descAr: 'تكامل آمن مع بوابات الدفع (Apple Pay, مدى, Stripe) وتشفير البيانات الحساسة وفق أعلى المعايير البنكية و OWASP.',
      descEn: 'Frictionless checkout integration with Apple Pay, Mada, and Stripe along with rigorous data encryption and SSL pinning.',
      highlights: ['Apple Pay & Mada', 'AES-256 Encryption', 'Biometric Auth', 'PCI-DSS Compliance']
    },
    {
      icon: <Rocket className="w-6 h-6 text-rose-400" />,
      titleAr: 'إطلاق المتاجر والدعم الفني 24/7',
      titleEn: 'App Store Launch & Ongoing Support',
      descAr: 'مرافقة المشروع حتى اعتماده على Google Play و Apple App Store مع ضمان صيانة ومتابعة مجانية بعد التسليم.',
      descEn: 'End-to-end guidance through Apple Developer and Google Play Console approvals, with post-launch SLA warranty.',
      highlights: ['Google Play Console', 'Apple App Store', 'Crashlytics Monitoring', 'Free Post-launch Care']
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      titleAr: 'تحليل المتطلبات وهندسة النظام',
      titleEn: 'Requirements & Blueprint',
      descAr: 'دراسة فكرة المشروع، تحديد معمارية الكود، وتفصيل رحلة المستخدم وقواعد البيانات بدقة.',
      descEn: 'In-depth specification analysis, database normalization, and technical system blueprint.'
    },
    {
      num: '02',
      titleAr: 'تصميم النماذج التفاعلية UI/UX',
      titleEn: 'Interactive Prototyping',
      descAr: 'إنشاء واجهات فخمة على Figma ومشاركتها معك للموافقة عليها قبل البدء بالبرمجة.',
      descEn: 'High-fidelity Figma prototypes and design system shared for sign-off prior to code sprints.'
    },
    {
      num: '03',
      titleAr: 'البرمجة بالمعمارية النظيفة (Clean Code)',
      titleEn: 'Clean Code Sprints',
      descAr: 'تطوير التطبيق بأعلى معايير البرمجة النظيفة وسرعة الاستجابة وربط الـ APIs بسلاسة.',
      descEn: 'Agile sprints following Clean Architecture, modular state management, and robust API contracts.'
    },
    {
      num: '04',
      titleAr: 'اختبار الأمان واعتماد المتاجر',
      titleEn: 'QA, Security & Store Launch',
      descAr: 'فحص التطبيق على مختلف أجهزة الجوال ونشره رسمياً على المتاجر مع تسليم الكود المصدري كاملاً.',
      descEn: 'Automated test suites, OWASP security auditing, App Store submission, and full IP handover.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#080c18] border-b border-indigo-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest">
            <Cpu className="w-4 h-4" />
            <span>{isAr ? 'الخدمات والقدرات الهندسية' : 'Engineering Capabilities'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'حلول برمجية متكاملة من الفكرة حتى إطلاق المتاجر' : 'From Conceptual Architecture to App Store Domination'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr 
              ? 'أقدم خدمات برمجية احترافية تضمن لك الحصول على تطبيق عالي الجودة ينافس في السوق ويجذب الاستثمارات والمستخدمين.'
              : 'Every project is engineered with enterprise reliability, high test coverage, and human-centric design interfaces.'}
          </p>
        </div>

        {/* Lead Engineer Spotlight Card with Photo */}
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950/70 via-slate-900/90 to-[#080c18] border border-indigo-900/50 p-6 sm:p-8 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[2.5px] shadow-2xl shadow-indigo-500/25">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt="Mohamed Tamer (محمد تامر)"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 rtl:-right-auto rtl:-left-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#080c18] flex items-center justify-center text-white">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="flex-1 text-center md:text-left rtl:md:text-right space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>{isAr ? 'إشراف وتنفيذ مباشر: م. محمد تامر' : 'Direct Engineering: Eng. Mohamed Tamer'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {isAr ? 'التزام مهني شخصي بأعلى معايير الجودة ورضا العميل' : 'Personal Engineering Pledge for Highest Quality'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {isAr
                  ? 'كل مشروع يُسلَّم يخضع لفحص أمني دقيق، واختبارات ضغط، وتهيئة متوافقة 100% مع متطلبات المتاجر ومحركات البحث. أتولى البرمجة والتواصل بنفسي لضمان دقة التنفيذ والسرعة.'
                  : 'Every solution is architected with rigorous security protocols, automated testing, and store-ready polish. I personally oversee and code your solution.'}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href={PROFILE_INFO.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <span>{isAr ? 'تواصل معي مباشرة: 01149556339' : 'Direct WhatsApp: 01149556339'}</span>
                </a>
                <a
                  href={PROFILE_INFO.mostaqlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-900/60 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{isAr ? 'بروفايل مستقل الموثق' : 'Verified Mostaql Profile'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((serv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {serv.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {isAr ? serv.titleAr : serv.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {isAr ? serv.descAr : serv.descEn}
                  </p>
                </div>
              </div>

              {/* Highlights tags */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {serv.highlights.map(h => (
                  <span
                    key={h}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency Bars */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {isAr ? 'مصفوفة إتقان المهارات والتقنيات' : 'Technical Proficiency Matrix'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isAr ? 'خبرة عملية مبنية على أكثر من 45 مشروعاً حقيقياً في السوق' : 'Practical depth backed by real production deployments'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Production Tested</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {PROFILE_INFO.skills.map(skill => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                  <span className="font-mono text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Workflow Steps */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              {isAr ? 'منهجية العمل المتبعة لضمان النجاح' : 'The 4-Step Engineering Protocol'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {isAr ? 'خطوات واضحة وشفافة تضمن تسليم التطبيق بأعلى جودة وضمن الموعد المحدد' : 'Transparent milestone delivery model keeping you in control at every stage'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.num}
                className="relative p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-black text-cyan-500/40 mb-3">
                    {step.num}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {isAr ? step.titleAr : step.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isAr ? step.descAr : step.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isAr ? 'مرحلة مضمونة' : 'Milestone Verified'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

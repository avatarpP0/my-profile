import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  X, 
  Calculator, 
  Check, 
  Clock, 
  DollarSign, 
  Smartphone, 
  Globe, 
  Layers, 
  ShieldCheck, 
  MessageSquare, 
  Send,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProjectEstimatorModal: React.FC = () => {
  const { isEstimatorOpen, setIsEstimatorOpen, language, addInquiry, recordAnalyticsEvent } = useApp();
  const isAr = language === 'ar';

  const [appType, setAppType] = useState<'mobile' | 'web' | 'fullstack' | 'uiux'>('mobile');
  const [platforms, setPlatforms] = useState<string[]>(['ios', 'android']);
  const [features, setFeatures] = useState<string[]>([
    'auth',
    'payment',
    'notifications',
    'multilingual'
  ]);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'fast' | 'urgent'>('standard');

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isEstimatorOpen) return null;

  const appTypes = [
    { id: 'web', labelAr: 'موقع تعريفي واستثماري ثنائي اللغة مع SEO ودفع آمن', labelEn: 'Bilingual Corporate Website (SEO & Secure Checkout)', basePrice: 1200, baseWeeks: 3 },
    { id: 'enterprise', labelAr: 'منظومة شحن وتتبع شحنات لوجستية (Logistics Portal)', labelEn: 'Logistics Portal & Live Cargo Tracking', basePrice: 2200, baseWeeks: 5 },
    { id: 'uiux', labelAr: 'تصميم هوية بصرية فاخرة وشعار بالخط العربي وتحريكه', labelEn: 'Luxury Branding, Arabic Calligraphy & Motion Logo', basePrice: 800, baseWeeks: 2 },
    { id: 'fullstack', labelAr: 'تطبيق جوال ونظام ويب متكامل (Full-Stack System)', labelEn: 'Full-Stack Mobile App & Cloud Web Admin', basePrice: 2800, baseWeeks: 6 },
  ];

  const availableFeatures = [
    { id: 'auth', labelAr: 'تسجيل دخول وبصمة وتوثيق ثنائي', labelEn: 'Biometric Auth & 2FA', price: 200, days: 3 },
    { id: 'payment', labelAr: 'بوابات دفع (Apple Pay, مدى, Stripe)', labelEn: 'Payment Gateway (Apple Pay, Mada)', price: 350, days: 4 },
    { id: 'maps', labelAr: 'خرائط وتتبع حي بنظام GPS', labelEn: 'Live GPS Maps & Tracking', price: 400, days: 5 },
    { id: 'chat', labelAr: 'محادثة فورية مباشرة (Live Chat)', labelEn: 'Real-time In-app Chat', price: 350, days: 4 },
    { id: 'notifications', labelAr: 'إشعارات سحابية فورية (Push Notifications)', labelEn: 'Cloud Push Notifications', price: 150, days: 2 },
    { id: 'admin', labelAr: 'لوحة تحكم إدارية متطورة (Admin CMS)', labelEn: 'Advanced Admin CMS', price: 450, days: 6 },
    { id: 'multilingual', labelAr: 'تعدد اللغات عربي وإنجليزي مع RTL/LTR', labelEn: 'Bilingual Support (AR/EN)', price: 150, days: 2 },
    { id: 'offline', labelAr: 'العمل بدون إنترنت مع مزامنة ذكية (Offline)', labelEn: 'Offline-First SQLite Sync', price: 300, days: 4 },
  ];

  const toggleFeature = (id: string) => {
    setFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const selectedTypeObj = appTypes.find(t => t.id === appType) || appTypes[0];

  const featuresPrice = features.reduce((sum, fId) => {
    const f = availableFeatures.find(item => item.id === fId);
    return sum + (f ? f.price : 0);
  }, 0);

  const featuresDays = features.reduce((sum, fId) => {
    const f = availableFeatures.find(item => item.id === fId);
    return sum + (f ? f.days : 0);
  }, 0);

  const multiplier = timelineSpeed === 'urgent' ? 1.3 : timelineSpeed === 'fast' ? 1.15 : 1.0;
  const estimatedTotal = Math.round((selectedTypeObj.basePrice + featuresPrice) * multiplier);
  const estimatedDays = Math.max(10, Math.round((selectedTypeObj.baseWeeks * 6 + featuresDays) * (timelineSpeed === 'urgent' ? 0.7 : timelineSpeed === 'fast' ? 0.85 : 1.0)));
  const estimatedWeeks = Math.max(2, Math.round(estimatedDays / 6));

  const handleWhatsAppSend = () => {
    recordAnalyticsEvent('whatsapp_click', 'estimator');
    const selectedFeatureNames = features
      .map(fId => availableFeatures.find(f => f.id === fId)?.[isAr ? 'labelAr' : 'labelEn'])
      .filter(Boolean)
      .join(', ');

    const message = isAr
      ? `السلام عليكم مهندس محمد تامر،\nاستخدمت حاسبة تقدير المشروع في موقعك وأود مناقشة مشروعي معك:\n\n` +
        `• نوع المشروع: ${selectedTypeObj.labelAr}\n` +
        `• الميزات المطلوبة: ${selectedFeatureNames}\n` +
        `• السرعة المطلوبة: ${timelineSpeed === 'urgent' ? 'عاجل جداً' : timelineSpeed === 'fast' ? 'سريع' : 'عادي'}\n` +
        `• التكلفة التقديرية: $${estimatedTotal.toLocaleString()}\n` +
        `• المدة التقديرية: حوالي ${estimatedWeeks} أسابيع (${estimatedDays} يوم عمل)\n\n` +
        `أرجو إفادتي بإمكانية البدء والموعد المتاح.`
      : `Hello Mohamed Tamer,\nI used your portfolio cost estimator and would like to discuss my project with you:\n\n` +
        `• Project Type: ${selectedTypeObj.labelEn}\n` +
        `• Required Features: ${selectedFeatureNames}\n` +
        `• Speed: ${timelineSpeed}\n` +
        `• Estimated Budget: $${estimatedTotal.toLocaleString()}\n` +
        `• Estimated Duration: ~${estimatedWeeks} weeks (${estimatedDays} working days)\n\n` +
        `Please let me know your availability to discuss.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/201149556339?text=${encoded}`, '_blank');
  };

  const handleDirectFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    const selectedFeatureNames = features
      .map(fId => availableFeatures.find(f => f.id === fId)?.[isAr ? 'labelAr' : 'labelEn'])
      .join(', ');

    addInquiry({
      name: clientName,
      email: clientEmail || 'via-estimator@client.com',
      phone: clientPhone,
      projectType: `${selectedTypeObj.labelAr} (Estimator)`,
      budget: `$${estimatedTotal.toLocaleString()}`,
      message: `الميزات المختارة: ${selectedFeatureNames} | المدة التقديرية: ${estimatedWeeks} أسابيع | سرعة التنفيذ: ${timelineSpeed}`
    });

    setIsSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c18] border-b border-indigo-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">
                {isAr ? 'حاسبة تقدير تكلفة ووقت المشروع' : 'Interactive App Cost & Timeline Estimator'}
              </h3>
              <p className="text-xs text-slate-400">
                {isAr ? 'حدد متطلبات تطبيقك واحصل على تقييم فوري وتواصل مباشرة' : 'Customize your app requirements for an instant calculation'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEstimatorOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
              1. {isAr ? 'نوع المشروع الرئيسي' : 'Primary Project Type'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {appTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setAppType(type.id as typeof appType)}
                  className={`flex items-start justify-between p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer ${
                    appType === type.id
                      ? 'bg-indigo-500/15 border-indigo-500/60 text-white shadow-sm'
                      : 'bg-slate-950/60 border-indigo-950/70 text-slate-300 hover:border-indigo-800'
                  }`}
                >
                  <span className="text-xs font-semibold">{isAr ? type.labelAr : type.labelEn}</span>
                  {appType === type.id && <Check className="w-4 h-4 text-indigo-400 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Features */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                2. {isAr ? 'الميزات والوظائف المطلوبة' : 'Features & Modules Required'}
              </label>
              <span className="text-[11px] text-indigo-400 font-mono">
                {features.length} {isAr ? 'ميزات مختارة' : 'selected'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableFeatures.map(feat => {
                const isChecked = features.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-left rtl:text-right transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-slate-800/90 border-indigo-500/40 text-slate-100'
                        : 'bg-slate-950/40 border-indigo-950/70 text-slate-400 hover:border-indigo-800'
                    }`}
                  >
                    <span className="text-xs">{isAr ? feat.labelAr : feat.labelEn}</span>
                    <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                      isChecked ? 'bg-indigo-600 border-indigo-500 text-white font-bold' : 'border-slate-700'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Timeline Speed */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
              3. {isAr ? 'سرعة وموعد التسليم المستهدف' : 'Target Timeline / Urgency'}
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                onClick={() => setTimelineSpeed('standard')}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  timelineSpeed === 'standard' ? 'bg-indigo-500/15 border-indigo-500 text-indigo-300' : 'bg-slate-950/60 border-indigo-950/70 text-slate-400'
                }`}
              >
                <div className="text-xs font-bold">{isAr ? 'جدول عادي' : 'Standard'}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{isAr ? 'وتيرة طبيعية' : 'Best budget'}</div>
              </button>

              <button
                onClick={() => setTimelineSpeed('fast')}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  timelineSpeed === 'fast' ? 'bg-indigo-500/15 border-indigo-500 text-indigo-300' : 'bg-slate-950/60 border-indigo-950/70 text-slate-400'
                }`}
              >
                <div className="text-xs font-bold">{isAr ? 'سريع' : 'Fast-Track'}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{isAr ? 'أولوية متقدمة' : 'High priority'}</div>
              </button>

              <button
                onClick={() => setTimelineSpeed('urgent')}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  timelineSpeed === 'urgent' ? 'bg-indigo-500/15 border-indigo-500 text-indigo-300' : 'bg-slate-950/60 border-indigo-950/70 text-slate-400'
                }`}
              >
                <div className="text-xs font-bold">{isAr ? 'عاجل جداً (Sprint)' : 'Urgent Sprint'}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{isAr ? 'تسليم قياسي' : 'Express delivery'}</div>
              </button>
            </div>
          </div>

          {/* Result Calculation Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left sm:rtl:text-right">
              <div className="text-xs text-slate-400 font-medium">
                {isAr ? 'التقدير الأولي المتوقع' : 'Estimated Investment & Delivery'}
              </div>
              <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
                  ${estimatedTotal.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-mono">USD</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>
                  {isAr ? `حوالي ${estimatedWeeks} أسابيع (${estimatedDays} يوم)` : `~${estimatedWeeks} Weeks (${estimatedDays} Days)`}
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>{isAr ? 'شامل الدعم وضمان المتاجر' : 'Store approval warranty'}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          {isSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
              <div className="text-emerald-400 font-bold text-sm">
                {isAr ? 'تم استلام تفاصيل تقديرك بنجاح!' : 'Your estimate was submitted!'}
              </div>
              <p className="text-xs text-slate-300">
                {isAr 
                  ? 'سيتواصل معك مهندس محمد تامر مباشرة لمناقشة التفاصيل وتثبيت العقد.' 
                  : 'Mohamed Tamer will reach out shortly to finalize the technical scope.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {/* Instant WhatsApp Send with Pre-populated text */}
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isAr ? 'إرسال التقدير لمحمد عبر واتساب فوراً' : 'Send Estimate to Mohamed on WhatsApp'}</span>
                </button>
              </div>

              {/* Or quick lead capture form */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-400 mb-2">
                  {isAr ? 'أو اترك بياناتك ليتواصل معك محمد:' : 'Or leave your contact info for a call-back:'}
                </div>
                <form onSubmit={handleDirectFormSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    required
                    placeholder={isAr ? 'الاسم الكريم' : 'Your Name'}
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    className="px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-cyan-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder={isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                    value={clientPhone}
                    onChange={e => setClientPhone(e.target.value)}
                    className="px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-cyan-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors cursor-pointer"
                  >
                    {isAr ? 'إرسال الطلب' : 'Submit Request'}
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

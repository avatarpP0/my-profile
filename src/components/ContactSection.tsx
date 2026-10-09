import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Send, 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { language, addInquiry, recordAnalyticsEvent, triggerNotification } = useApp();
  const isAr = language === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(isAr ? 'تطبيق جوال (iOS & Android)' : 'Mobile App (iOS & Android)');
  const [budget, setBudget] = useState('$2,000 - $5,000');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    addInquiry({
      name: name.trim(),
      email: email.trim() || 'unspecified@client.com',
      phone: phone.trim(),
      projectType,
      budget,
      message: message.trim()
    });

    setIsSent(true);
    confetti({ particleCount: 75, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#080c18] border-b border-indigo-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest">
            <span>{isAr ? 'تواصل وبدء المشروع' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'جاهز لتحويل فكرتك إلى تطبيق حقيقي ناجح؟' : "Let's Engineer Your Vision Into Reality"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr 
              ? 'تواصل معي مباشرة عبر واتساب للرد السريع في أقل من 15 دقيقة، أو أرسل تفاصيل مشروعك عبر النموذج أدناه.'
              : 'Direct messaging on WhatsApp for immediate response under 15 minutes, or submit your RFQ proposal below.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Developer Face & Direct Assurance Card */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-indigo-900/50 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[1.5px] overflow-hidden shrink-0 shadow-md shadow-indigo-500/20">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt="Mohamed Tamer (محمد تامر)"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                  <span>{isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}</span>
                  <span className="text-[10px] text-indigo-300 font-mono bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/30">
                    مستقل موثق
                  </span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isAr ? 'الرد والمتابعة تتم مباشرة معي شخصياً دون وسطاء' : 'Direct direct communication without middleman'}
                </p>
              </div>
            </div>

            {/* WhatsApp Direct Highlight Card */}
            <a
              href={PROFILE_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => recordAnalyticsEvent('whatsapp_click', 'contact_card')}
              className="block p-6 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-500/40 hover:border-emerald-400 transition-all group shadow-xl shadow-emerald-950/30"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {isAr ? 'استجابة فورية 24/7' : 'Active Online'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                {isAr ? 'محادثة واتساب الفورية (WhatsApp)' : 'Instant WhatsApp Chat'}
              </h3>
              <p className="text-xs text-slate-300 mt-1 mb-3">
                {isAr ? 'أسرع وسيلة للتواصل ومناقشة متطلبات التطبيق وحجز موعد العمل' : 'Fastest response channel for project kickoff and consultation'}
              </p>
              <div className="font-mono text-base font-bold text-emerald-400 flex items-center justify-between">
                <span>01149556339</span>
                <span className="text-xs bg-emerald-500/20 px-2.5 py-1 rounded text-emerald-300">
                  {isAr ? 'ابدأ المحادثة الآن ←' : 'Chat Now →'}
                </span>
              </div>
            </a>

            {/* Mostaql Official Profile Card */}
            <a
              href={PROFILE_INFO.mostaqlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                {isAr ? 'حسابي الموثق على منصة مستقل (Mostaql)' : 'Verified Mostaql Profile'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {isAr ? 'ضمان مالي رسمي وعقود محمية بنظام الدفع الآمن (Escrow)' : 'Financial escrow protection & formal verified milestones'}
              </p>
              <div className="font-mono text-xs text-blue-400 mt-2 truncate">
                mostaql.com/u/mohamedtamerp/portfolio
              </div>
            </a>

            {/* Direct Email Card */}
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="block p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                {isAr ? 'البريد الإلكتروني المهني' : 'Direct Email'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {isAr ? 'لإرسال كراسات الشروط والعروض الفنية (RFP)' : 'For enterprise technical proposals and RFPs'}
              </p>
              <div className="font-mono text-xs text-cyan-400 mt-2">
                {PROFILE_INFO.email}
              </div>
            </a>

            {/* Encrypted Security Badge */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {isAr 
                  ? 'حماية مشفرة 256-bit لكافة البيانات المتبادلة والاتفاقيات البرمجية.'
                  : '256-bit encrypted communication and strict non-disclosure agreement compliance.'}
              </span>
            </div>

          </div>

          {/* Quick Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white">
                  {isAr ? 'نموذج طلب مشروع جديد' : 'Fast Project Request Form'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {isAr ? 'املأ الحقول التالية وسأقوم بدراسة الفكرة وإعداد جدول زمني مقترح' : 'Provide your project specs for a detailed timeline and architectural proposal'}
                </p>
              </div>

              {isSent ? (
                <div className="py-12 px-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">
                    {isAr ? 'تم استلام طلبك بنجاح!' : 'Proposal Submitted Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    {isAr 
                      ? 'شكراً لتواصلك، مهندس محمد تامر يقوم بمراجعة المتطلبات وسيقوم بالرد عليك هاتفياً أو عبر واتساب قريباً.'
                      : 'Mohamed Tamer is reviewing your project requirements and will respond via phone or WhatsApp shortly.'}
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 cursor-pointer"
                  >
                    {isAr ? 'إرسال طلب آخر' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        {isAr ? 'الاسم الكريم' : 'Your Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isAr ? 'مثال: فيصل العتيبي' : 'e.g. Faisal'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        {isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={isAr ? 'مثال: +96650... أو 011...' : '+1 (555) 000-0000'}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        placeholder="client@company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        {isAr ? 'نوع المشروع' : 'Project Category'}
                      </label>
                      <select
                        value={projectType}
                        onChange={e => setProjectType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                      >
                        <option value="تطبيق جوال (iOS & Android)">{isAr ? 'تطبيق جوال (iOS & Android)' : 'Mobile App'}</option>
                        <option value="منظومة كاملة (تطبيق + لوحة ويب + خوادم)">{isAr ? 'منظومة كاملة (Full-Stack System)' : 'Full-Stack System'}</option>
                        <option value="منصة ويب وسحابية (SaaS)">{isAr ? 'منصة ويب وسحابية (SaaS Web)' : 'Web Platform'}</option>
                        <option value="تصميم واجهات وتجربة مستخدم (Figma UI/UX)">{isAr ? 'تصميم واجهات UI/UX فيجما' : 'UI/UX Design'}</option>
                        <option value="صيانة وتطوير تطبيق قائم">{isAr ? 'صيانة وتطوير تطبيق قائم' : 'Maintenance / Optimization'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? 'الميزانية التقريبية المرصودة' : 'Budget Range'}
                    </label>
                    <select
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    >
                      <option value="$1,000 - $2,500">$1,000 - $2,500 USD</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000 USD</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000 USD</option>
                      <option value="$10,000+">$10,000+ USD (Enterprise)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {isAr ? 'تفاصيل الفكرة والمتطلبات' : 'Project Details & Specifications'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={isAr ? 'اشرح باختصار فكرة التطبيق، الفئة المستهدفة، وأهم الميزات المطلوبة...' : 'Briefly describe your app idea, key features, target audience...'}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 rtl:rotate-180" />
                    <span>{isAr ? 'إرسال طلب المشروع الآن' : 'Submit Project Inquiry'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

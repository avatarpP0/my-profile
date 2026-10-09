import React from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { 
  Star, 
  ShieldCheck, 
  ExternalLink, 
  PlusCircle, 
  Quote, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { reviews, language, setIsAddReviewOpen } = useApp();
  const isAr = language === 'ar';

  const approvedReviews = reviews.filter(r => r.approved !== false);

  const averageRating = (
    approvedReviews.reduce((sum, r) => sum + r.rating, 0) / (approvedReviews.length || 1)
  ).toFixed(1);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400 uppercase tracking-widest">
              <span>{isAr ? 'الثقة والمصداقية' : 'Client Testimonials'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isAr ? 'آراء العملاء وتقييمات المشاريع السابقة' : 'Trusted by Founders & Enterprise Clients'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              {isAr 
                ? 'شهادات حقيقية من عملاء وثقوا بي لتنفيذ مشاريعهم البرمجية في السعودية والإمارات والكويت ومصر ومختلف دول العالم.'
                : 'Real feedback from founders and tech leads who trusted me to deliver production-grade applications.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsAddReviewOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{isAr ? 'أضف تقييمك' : 'Add Testimonial'}</span>
            </button>

            <a
              href={PROFILE_INFO.mostaqlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
            >
              <span>{isAr ? 'توثيق مستقل الرسمي' : 'Mostaql Verified'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>
        </div>

        {/* Rating Overview Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left rtl:sm:text-right">
            <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono">
              {averageRating}
            </div>
            <div>
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {isAr 
                  ? `بناءً على ${approvedReviews.length} تقييم مكتمل بنسبة رضا 100%` 
                  : `Based on ${approvedReviews.length} client evaluations with 100% satisfaction`}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'تسليم بدون تأخير' : '100% On-time delivery'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAr ? 'تقييمات موثقة من مستقل' : 'Verified Mostaql badge'}</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header with stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {rev.verifiedMostaql && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{isAr ? 'مستقل موثق' : 'Mostaql Verified'}</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <div className="text-xs font-semibold text-cyan-400 line-clamp-1">
                  {rev.projectTitle}
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{isAr ? rev.commentAr : rev.commentEn}"
                </p>
              </div>

              {/* Client Info footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-slate-200 uppercase">
                  {rev.avatarText}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-white truncate">{rev.name}</h4>
                  <p className="text-[11px] text-slate-400 truncate">
                    {rev.company ? `${rev.company} · ` : ''}{rev.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Client Guarantee Banner with Mohamed Tamer's Photo */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900/90 to-[#080c18] border border-indigo-900/40 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20">
              <img
                src={PROFILE_INFO.avatarUrl}
                alt="Mohamed Tamer (محمد تامر)"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 rtl:-right-auto rtl:-left-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#080c18] flex items-center justify-center text-white">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="flex-1 text-center sm:text-left rtl:sm:text-right space-y-1.5">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h4 className="font-bold text-white text-base">
                {isAr ? 'ضمان الرضا والجودة الكاملة بإشراف م. محمد تامر' : '100% Client Satisfaction Promise by Mohamed Tamer'}
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ★ 5.0 Rating
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isAr
                ? 'أنا حريص على أن يخرج كل مشروع بأعلى درجات الإتقان والجمال. لا ينتهي دوري عند تسليم الكود، بل أضمن لك فترة دعم مجانية وتوجيهاً تقنياً مستمراً حتى نجاح مشروعك.'
                : 'I take personal pride in every single release. Beyond delivering clean code, I provide complimentary warranty support and guidance for your project success.'}
            </p>
          </div>

          <a
            href={PROFILE_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs whitespace-nowrap shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
          >
            {isAr ? 'تواصل معي مباشرة' : 'Contact Directly'}
          </a>
        </div>

      </div>
    </section>
  );
};

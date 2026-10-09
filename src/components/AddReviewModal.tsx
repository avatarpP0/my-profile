import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AddReviewModal: React.FC = () => {
  const { isAddReviewOpen, setIsAddReviewOpen, language, addReview } = useApp();
  const isAr = language === 'ar';

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('المملكة العربية السعودية');
  const [projectTitle, setProjectTitle] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  if (!isAddReviewOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    addReview({
      id: 'rev-' + Date.now(),
      name: name.trim(),
      company: company.trim() || undefined,
      country: country.trim() || (isAr ? 'عميل دولي' : 'International Client'),
      avatarText: name.trim().slice(0, 2),
      rating,
      projectTitle: projectTitle.trim() || (isAr ? 'مشروع برمجة وتطوير تطبيق' : 'Application Development Project'),
      commentAr: comment.trim(),
      commentEn: comment.trim(),
      date: new Date().toISOString().split('T')[0],
      verifiedMostaql: false,
      approved: true
    });

    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    setIsAddReviewOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-indigo-950/80 shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c18] border-b border-indigo-950/80">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h3 className="font-bold text-base text-white">
              {isAr ? 'أضف تقييمك ورأيك في الخدمة' : 'Leave a Client Testimonial'}
            </h3>
          </div>
          <button
            onClick={() => setIsAddReviewOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Star Rating Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              {isAr ? 'التقييم العام للخدمة' : 'Your Overall Rating'}
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 text-slate-600 transition-transform hover:scale-110 cursor-pointer"
                >
                  <Star
                    className={`w-7 h-7 ${
                      (hoverRating || rating) >= star
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-700'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-mono font-bold text-amber-400 ml-2 rtl:ml-0 rtl:mr-2">
                {rating} / 5
              </span>
            </div>
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              {isAr ? 'الاسم الكريم' : 'Your Full Name'} *
            </label>
            <input
              type="text"
              required
              placeholder={isAr ? 'مثال: عبدالله الراجحي' : 'e.g. John Doe'}
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Company / Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                {isAr ? 'الشركة / المؤسسة (اختياري)' : 'Company / Organization'}
              </label>
              <input
                type="text"
                placeholder={isAr ? 'مثال: شركة الحلول الذكية' : 'e.g. Acme Tech'}
                value={company}
                onChange={e => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                {isAr ? 'الدولة / المدينة' : 'Country / City'}
              </label>
              <input
                type="text"
                placeholder={isAr ? 'مثال: السعودية، الرياض' : 'e.g. Saudi Arabia, Riyadh'}
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Project Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              {isAr ? 'عنوان المشروع المنفذ' : 'Project Title or Type'}
            </label>
            <input
              type="text"
              placeholder={isAr ? 'مثال: تطوير تطبيق متجر إلكتروني' : 'e.g. Food Delivery Mobile App'}
              value={projectTitle}
              onChange={e => setProjectTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Comment */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              {isAr ? 'رأيك وتجربتك في العمل مع محمد تامر' : 'Your Feedback & Experience'} *
            </label>
            <textarea
              required
              rows={4}
              placeholder={isAr ? 'اكتب رأيك بالتفصيل بخصوص سرعة الإنجاز، جودة الكود، وتجربة التعاون...' : 'Share your honest feedback regarding delivery speed, code quality, and collaboration...'}
              value={comment}
              onChange={e => setComment(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 resize-none leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              {isAr ? 'نشر التقييم فوراً' : 'Publish Review'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

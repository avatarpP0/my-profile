import React from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { X, Calendar, Clock, User, Share2, Tag, BookOpen } from 'lucide-react';

export const BlogDetailModal: React.FC = () => {
  const { selectedBlog, setSelectedBlog, language, triggerNotification } = useApp();
  const isAr = language === 'ar';

  if (!selectedBlog) return null;

  const post = selectedBlog;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      triggerNotification(
        isAr ? 'تم نسخ الرابط' : 'Link Copied',
        isAr ? 'تم نسخ رابط المقال إلى الحافظة' : 'Article link copied to clipboard',
        'success'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-indigo-950/80 shadow-2xl overflow-hidden my-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c18] border-b border-indigo-950/80">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
            <BookOpen className="w-4 h-4" />
            <span>{isAr ? post.categoryAr : post.categoryEn}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title={isAr ? 'مشاركة المقال' : 'Share article'}
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedBlog(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-2">
              <img
                src={PROFILE_INFO.avatarUrl}
                alt={isAr ? post.authorAr : post.authorEn}
                className="w-5 h-5 rounded-full object-cover border border-indigo-500/40"
              />
              <span className="text-slate-200 font-semibold">{isAr ? post.authorAr : post.authorEn}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{isAr ? post.readTimeAr : post.readTimeEn}</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
            {isAr ? post.titleAr : post.titleEn}
          </h2>

          {/* Excerpt callout */}
          <div className="p-4 rounded-xl bg-slate-950 border-r-4 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-r-0 border-indigo-500 text-sm text-indigo-200/90 leading-relaxed italic">
            {isAr ? post.excerptAr : post.excerptEn}
          </div>

          {/* Main Article Text */}
          <div className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
            {isAr ? post.contentAr : post.contentEn}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-500" />
            {post.tags.map(t => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800"
              >
                #{t}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};


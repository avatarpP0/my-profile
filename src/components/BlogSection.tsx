import React from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { blogPosts, language, setSelectedBlog } = useApp();
  const isAr = language === 'ar';

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#080c18] border-b border-indigo-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            <span>{isAr ? 'المدونة البرمجية' : 'Engineering Insights'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'أفكار ومقالات في تطوير وهندسة التطبيقات' : 'Articles, Clean Architecture & Performance'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr 
              ? 'أشارك خلاصة تجاربي العملية في تحسين أداء التطبيقات، أمان البيانات، وبناء بنيات برمجية قابلة للتوسع.'
              : 'Technical deep-dives on 60fps rendering, state management paradigms, and real-world system architecture.'}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedBlog(post)}
              className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-950/70 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
            >
              <div className="space-y-3">
                {/* Meta row */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="text-indigo-400 font-semibold">
                    {isAr ? post.categoryAr : post.categoryEn}
                  </span>
                  <span>{isAr ? post.readTimeAr : post.readTimeEn}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                  {isAr ? post.titleAr : post.titleEn}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {isAr ? post.excerptAr : post.excerptEn}
                </p>
              </div>

              {/* Author and Footer with Mohamed Tamer's Avatar */}
              <div className="pt-4 mt-4 border-t border-indigo-950/60 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <img
                    src={PROFILE_INFO.avatarUrl}
                    alt={isAr ? post.authorAr : post.authorEn}
                    className="w-6 h-6 rounded-full object-cover border border-indigo-500/40"
                  />
                  <span className="text-slate-300 text-xs font-medium">
                    {isAr ? post.authorAr : post.authorEn}
                  </span>
                </div>
                <span className="font-semibold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  <span>{isAr ? 'اقرأ' : 'Read'}</span>
                  {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};


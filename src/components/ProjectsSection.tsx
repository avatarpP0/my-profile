import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PROFILE_INFO } from '../data/initialData';
import { Project } from '../types';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Star, 
  Smartphone, 
  Globe, 
  Layers, 
  Building2, 
  ArrowUpRight,
  Sparkles,
  Users
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects, language, setSelectedProject, recordAnalyticsEvent } = useApp();
  const isAr = language === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'rating'>('latest');

  const categories = [
    { id: 'all', labelAr: 'جميع المشاريع', labelEn: 'All Projects' },
    { id: 'web', labelAr: 'مواقع ومنصات الويب (Web Platforms)', labelEn: 'Web Platforms' },
    { id: 'enterprise', labelAr: 'حلول الشركات والشحن (Logistics & Enterprise)', labelEn: 'Logistics & Enterprise' },
    { id: 'uiux', labelAr: 'تصميم الهوية والواجهات (Branding & Motion)', labelEn: 'Branding & Motion' },
  ];

  const techFilters = [
    'all',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Figma',
    'After Effects',
    'SEO'
  ];

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        // Category filter
        if (selectedCategory !== 'all' && project.category !== selectedCategory) {
          return false;
        }

        // Tech filter
        if (
          selectedTech !== 'all' &&
          !project.technologies.some(t => t.toLowerCase().includes(selectedTech.toLowerCase()))
        ) {
          return false;
        }

        // Search text
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = (project.titleAr + ' ' + project.titleEn).toLowerCase().includes(q);
          const matchDesc = (project.descriptionAr + ' ' + project.descriptionEn).toLowerCase().includes(q);
          const matchTech = project.technologies.some(t => t.toLowerCase().includes(q));
          const matchClient = project.client.toLowerCase().includes(q);
          if (!matchTitle && !matchDesc && !matchTech && !matchClient) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') {
          return (b.rating || 5) - (a.rating || 5);
        }
        return b.year.localeCompare(a.year);
      });
  }, [projects, selectedCategory, selectedTech, searchQuery, sortBy]);

  const handleOpenDetail = (project: Project) => {
    recordAnalyticsEvent('project_click', project.id);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#080c18] border-b border-indigo-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-widest">
              <Layers className="w-4 h-4" />
              <span>{isAr ? 'معرض الأعمال والإنجازات' : 'Selected Showcase'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isAr ? 'مشاريع واقعية ذات أداء استثنائي' : 'Engineered for Performance & Scale'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              {isAr 
                ? 'استعرض نماذج من التطبيقات التي قمت ببرمجتها وتصميمها، مع تفاصيل معمارية الكود وحلول التحديات البرمجية ونتائج الأعمال المحققة.'
                : 'A curated selection of shipped mobile apps and web architectures with clean code, real metrics, and zero compromise on reliability.'}
            </p>
          </div>

          <a
            href={PROFILE_INFO.mostaqlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end px-4 py-2.5 rounded-xl bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-900/60 transition-colors"
          >
            <span>{isAr ? 'شاهد كافة الأعمال على مستقل' : 'View Full Mostaql Portfolio'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Bar & Controls */}
        <div className="space-y-4 mb-10">
          
          {/* Top Row: Search input & Sorting */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder={isAr ? 'ابحث باسم التطبيق، التقنية (Flutter, React...)، أو العميل...' : 'Search by app name, tech, or client...'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2.5 rounded-xl bg-slate-900/90 border border-indigo-950 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2 text-xs text-slate-400">
              <span className="shrink-0">{isAr ? 'الترتيب:' : 'Sort:'}</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as typeof sortBy)}
                className="bg-slate-900 border border-indigo-950 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                <option value="latest">{isAr ? 'الأحدث أولاً' : 'Latest Shipped'}</option>
                <option value="rating">{isAr ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>

          {/* Category Tabs (Clean Segmented Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-md shadow-indigo-600/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Tech stack filter chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-500 text-[11px] shrink-0 font-mono">
              {isAr ? 'التقنية:' : 'Stack:'}
            </span>
            {techFilters.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                  selectedTech === tech
                    ? 'bg-slate-800 text-indigo-400 border border-indigo-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {tech === 'all' ? (isAr ? 'الكل' : 'All') : tech}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-900/50 rounded-2xl border border-slate-800/80">
            <p className="text-slate-400 text-sm">
              {isAr ? 'لم يتم العثور على مشاريع تطابق بحثك الحالي.' : 'No projects found matching your search criteria.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTech('all');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              {isAr ? 'إعادة ضبط عوامل التصفية' : 'Reset all filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-slate-900/80 border border-indigo-950/70 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Image Frame */}
                  <div
                    onClick={() => handleOpenDetail(project)}
                    className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={isAr ? project.titleAr : project.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                    {/* Metadata Overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-indigo-400 border border-indigo-500/30 uppercase backdrop-blur-sm">
                        {project.category}
                      </span>

                      {project.downloadsOrUsers && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{project.downloadsOrUsers}</span>
                        </span>
                      )}
                    </div>

                    {/* Metrics Banner */}
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <div className="text-[11px] font-medium text-indigo-300 truncate drop-shadow-md">
                        {isAr ? project.metrics.statAr : project.metrics.statEn}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Quiet Client / Year text */}
                      <div className="text-xs text-slate-500 mb-1 flex items-center justify-between">
                        <span className="truncate">{project.client}</span>
                        <span className="font-mono text-[11px]">{project.year}</span>
                      </div>

                      <h3
                        onClick={() => handleOpenDetail(project)}
                        className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors cursor-pointer leading-snug"
                      >
                        {isAr ? project.titleAr : project.titleEn}
                      </h3>

                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {isAr ? project.taglineAr : project.taglineEn}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[10px] font-mono border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[10px] font-mono text-slate-500 self-center">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          onClick={() => handleOpenDetail(project)}
                          className="flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                        >
                          <span>{isAr ? 'دراسة الحالة والتفاصيل' : 'View Deep Dive'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-90" />
                        </button>

                        {project.mostaqlUrl && (
                          <a
                            href={project.mostaqlUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                            title={isAr ? 'مشاهدة في مستقل' : 'View on Mostaql'}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

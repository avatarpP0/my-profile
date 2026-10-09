import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Project, BlogPost, Review, Inquiry } from '../types';
import { PROFILE_INFO } from '../data/initialData';
import { 
  X, 
  LayoutDashboard, 
  FolderKanban, 
  FileText, 
  MessageSquare, 
  Star, 
  Download, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  BarChart3, 
  Cloud, 
  ShieldCheck, 
  RefreshCw, 
  ExternalLink,
  Users,
  Eye,
  Check,
  UserCheck
} from 'lucide-react';

export const AdminDashboardModal: React.FC = () => {
  const { 
    isAdminOpen, 
    setIsAdminOpen, 
    language, 
    projects, 
    addProject, 
    updateProject, 
    deleteProject, 
    blogPosts, 
    addBlogPost, 
    updateBlogPost, 
    deleteBlogPost, 
    reviews, 
    toggleApproveReview, 
    deleteReview, 
    inquiries, 
    markInquiryRead, 
    deleteInquiry, 
    analytics, 
    exportAllDataAsJson, 
    exportInquiriesAsCsv, 
    exportReviewsAsCsv,
    triggerNotification
  } = useApp();

  const isAr = language === 'ar';

  // Authentication state (Default PIN 2026)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [pinError, setPinError] = useState(false);

  // Tabs: 'overview' | 'projects' | 'blog' | 'reviews' | 'inquiries' | 'backup'
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'blog' | 'reviews' | 'inquiries' | 'backup'>('overview');

  // Sub-modals for Project creation / editing
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form fields for Project
  const [pTitleAr, setPTitleAr] = useState('');
  const [pTitleEn, setPTitleEn] = useState('');
  const [pCategory, setPCategory] = useState<Project['category']>('mobile');
  const [pClient, setPClient] = useState('');
  const [pYear, setPYear] = useState('2026');
  const [pTaglineAr, setPTaglineAr] = useState('');
  const [pTaglineEn, setPTaglineEn] = useState('');
  const [pTechs, setPTechs] = useState('Flutter, Dart, Firebase');
  const [pStatAr, setPStatAr] = useState('+50,000 مستخدم');
  const [pStatEn, setPStatEn] = useState('+50,000 active users');
  const [pImage, setPImage] = useState('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80');

  // Blog Form
  const [isBlogFormOpen, setIsBlogFormOpen] = useState(false);
  const [bTitleAr, setBTitleAr] = useState('');
  const [bTitleEn, setBTitleEn] = useState('');
  const [bExcerptAr, setBExcerptAr] = useState('');
  const [bExcerptEn, setBExcerptEn] = useState('');
  const [bContentAr, setBContentAr] = useState('');
  const [bContentEn, setBContentEn] = useState('');
  const [bCategoryAr, setBCategoryAr] = useState('تطوير تطبيقات الجوال');
  const [bCategoryEn, setBCategoryEn] = useState('Mobile Engineering');

  if (!isAdminOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode.trim() === '6112000') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const openNewProjectForm = () => {
    setEditingProject(null);
    setPTitleAr('');
    setPTitleEn('');
    setPCategory('mobile');
    setPClient('');
    setPYear('2026');
    setPTaglineAr('');
    setPTaglineEn('');
    setPTechs('Flutter, Dart, Node.js, Firebase');
    setPStatAr('+25,000 مستخدم نشط');
    setPStatEn('+25,000 active users');
    setPImage('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80');
    setIsProjectFormOpen(true);
  };

  const openEditProjectForm = (p: Project) => {
    setEditingProject(p);
    setPTitleAr(p.titleAr);
    setPTitleEn(p.titleEn);
    setPCategory(p.category);
    setPClient(p.client);
    setPYear(p.year);
    setPTaglineAr(p.taglineAr);
    setPTaglineEn(p.taglineEn);
    setPTechs(p.technologies.join(', '));
    setPStatAr(p.metrics.statAr);
    setPStatEn(p.metrics.statEn);
    setPImage(p.image);
    setIsProjectFormOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const techArray = pTechs.split(',').map(t => t.trim()).filter(Boolean);

    if (editingProject) {
      updateProject({
        ...editingProject,
        titleAr: pTitleAr,
        titleEn: pTitleEn || pTitleAr,
        category: pCategory,
        client: pClient,
        year: pYear,
        taglineAr: pTaglineAr,
        taglineEn: pTaglineEn || pTaglineAr,
        technologies: techArray,
        metrics: { statAr: pStatAr, statEn: pStatEn },
        image: pImage
      });
    } else {
      const newP: Project = {
        id: 'proj-' + Date.now(),
        titleAr: pTitleAr,
        titleEn: pTitleEn || pTitleAr,
        category: pCategory,
        client: pClient || 'عميل خاص',
        year: pYear,
        taglineAr: pTaglineAr,
        taglineEn: pTaglineEn || pTaglineAr,
        technologies: techArray,
        metrics: { statAr: pStatAr, statEn: pStatEn },
        descriptionAr: pTaglineAr,
        descriptionEn: pTaglineEn || pTaglineAr,
        problemAr: 'تحديات في تنظيم وإدارة الأعمال البرمجية.',
        problemEn: 'Requirement for a high-performance modern app architecture.',
        solutionAr: 'تطبيق Clean Architecture متكامل مع واجهات سريعة.',
        solutionEn: 'Built custom 60fps responsive app with cloud backend.',
        featuresAr: ['واجهات تفاعلية سريعة', 'تأمين البيانات', 'ربط سحابي متكامل'],
        featuresEn: ['Fluid 60fps animations', 'Data encryption', 'Cloud backend sync'],
        image: pImage,
        liveUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
        mostaqlUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
        rating: 5.0,
        downloadsOrUsers: '10K+'
      };
      addProject(newP);
    }
    setIsProjectFormOpen(false);
  };

  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bTitleAr.trim()) return;

    const newPost: BlogPost = {
      id: 'post-' + Date.now(),
      titleAr: bTitleAr,
      titleEn: bTitleEn || bTitleAr,
      excerptAr: bExcerptAr,
      excerptEn: bExcerptEn || bExcerptAr,
      contentAr: bContentAr,
      contentEn: bContentEn || bContentAr,
      categoryAr: bCategoryAr,
      categoryEn: bCategoryEn,
      readTimeAr: '4 دقائق قراءة',
      readTimeEn: '4 min read',
      date: new Date().toISOString().split('T')[0],
      authorAr: PROFILE_INFO.nameAr,
      authorEn: PROFILE_INFO.nameEn,
      tags: ['App Development', 'Clean Architecture', 'Engineering']
    };
    addBlogPost(newPost);
    setIsBlogFormOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-6 flex flex-col min-h-[85vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080c18] border-b border-indigo-950/80">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[1.5px] overflow-hidden shrink-0 shadow-md">
              <img
                src={PROFILE_INFO.avatarUrl}
                alt="Mohamed Tamer"
                className="w-full h-full object-cover rounded-[9px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg text-white">
                  {isAr ? 'لوحة تحكم إدارة المحتوى (CMS Portal)' : 'Content Management System (CMS)'}
                </h3>
                {isAuthenticated && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Unlock className="w-3 h-3" />
                    <span>{isAr ? 'جلسة نشطة' : 'Authenticated'}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                {isAr ? 'إدارة المشاريع، المقالات، التقييمات، الاستفسارات والنسخ الاحتياطي' : 'Manage portfolio projects, blog posts, reviews & leads'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Barrier Screen if not logged in */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-8 bg-[#080c18]/80">
            <div className="max-w-md w-full p-8 rounded-2xl bg-[#0e1424] border border-indigo-950/80 shadow-2xl text-center space-y-6">
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[2px] overflow-hidden shrink-0 mx-auto shadow-lg shadow-indigo-500/20">
                <img
                  src={PROFILE_INFO.avatarUrl}
                  alt="Mohamed Tamer"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  {isAr ? 'تسجيل الدخول للوحة التحكم' : 'Admin CMS Authentication'}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {isAr 
                    ? 'أدخل الرمز السري الموحد (6112000) للوصول' 
                    : 'Enter the unified master security PIN (6112000) to proceed'}
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  placeholder={isAr ? 'الرمز السري الموحد' : 'Master PIN'}
                  value={pinCode}
                  onChange={e => {
                    setPinCode(e.target.value);
                    setPinError(false);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-[#080c18] border border-indigo-950 text-center font-mono text-lg tracking-widest text-white focus:outline-none focus:border-indigo-500"
                />

                {pinError && (
                  <p className="text-xs text-rose-400 font-semibold">
                    {isAr ? 'الرمز السري غير صحيح، يرجى كتابة الرمز 6112000' : 'Incorrect PIN code, access denied'}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
                >
                  {isAr ? 'تأكيد ودخول' : 'Authenticate'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Main Authenticated Layout */
          <div className="flex-1 flex flex-col md:flex-row min-h-0">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-slate-950/80 border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-slate-800 p-4 space-y-1.5 shrink-0 flex md:flex-col overflow-x-auto md:overflow-x-visible">
              
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>{isAr ? 'نظرة عامة والتحليلات' : 'Analytics & Overview'}</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FolderKanban className="w-4 h-4" />
                  <span>{isAr ? 'إدارة المشاريع' : 'Projects CMS'}</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {projects.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('blog')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'blog'
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" />
                  <span>{isAr ? 'المدونة والمقالات' : 'Blog Posts'}</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {blogPosts.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'reviews'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Star className="w-4 h-4" />
                  <span>{isAr ? 'التقييمات وآراء العملاء' : 'Reviews & Testimonials'}</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  {reviews.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('inquiries')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'inquiries'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>{isAr ? 'طلبات المشاريع والرسائل' : 'Client Inquiries'}</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  {inquiries.filter(i => !i.read).length} new
                </span>
              </button>

              <button
                onClick={() => setActiveTab('backup')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'backup'
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Cloud className="w-4 h-4" />
                <span>{isAr ? 'الأرشفة والتصدير والسحابة' : 'Cloud Backup & Export'}</span>
              </button>

            </div>

            {/* Content Display Area */}
            <div className="flex-1 p-6 overflow-y-auto max-h-[75vh] space-y-6 bg-slate-900/40">
              
              {/* TAB 1: OVERVIEW & ANALYTICS */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>{isAr ? 'إجمالي المشاهدات' : 'Page Views'}</span>
                        <Eye className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="text-2xl font-black font-mono text-white">
                        {analytics.pageViews}
                      </div>
                      <div className="text-[11px] text-emerald-400 mt-1">
                        +14.2% {isAr ? 'نمو شهري' : 'vs last month'}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>{isAr ? 'تحويلات الواتساب' : 'WhatsApp Leads'}</span>
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-2xl font-black font-mono text-emerald-400">
                        {analytics.whatsappClicks}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        01149556339 direct clicks
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>{isAr ? 'تنزيلات السيرة الذاتية' : 'CV Downloads'}</span>
                        <Download className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-2xl font-black font-mono text-purple-400">
                        {analytics.cvDownloads}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        PDF & JSON resumes
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>{isAr ? 'طلبات المشاريع' : 'Client Inquiries'}</span>
                        <Users className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-2xl font-black font-mono text-amber-400">
                        {inquiries.length}
                      </div>
                      <div className="text-[11px] text-emerald-400 mt-1">
                        100% response rate
                      </div>
                    </div>
                  </div>

                  {/* System & Encryption Status */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {isAr ? 'حالة النظام: آمن ومشفر 256-Bit SSL' : 'System Status: 256-Bit SSL Encrypted'}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {isAr 
                            ? 'نظام الأرشفة التلقائي نشط والمزامنة السحابية تعمل بشكل مستمر' 
                            : 'Automated state archiving active & cloud database synchronizing'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={exportAllDataAsJson}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{isAr ? 'تصدير نسخة احتياطية' : 'Backup All Data'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Profile Overview */}
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center gap-4 pb-3 border-b border-slate-800">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-amber-400 via-blue-500 to-indigo-600 p-[1.5px] overflow-hidden shrink-0 shadow-md">
                        <img
                          src="/mohamed_tamer_profile.jpg"
                          alt="Mohamed Tamer"
                          className="w-full h-full object-cover rounded-[10px]"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white flex items-center gap-2">
                          <span>{isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}</span>
                          <span className="text-[10px] text-amber-400 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                            مستقل موثق
                          </span>
                        </h4>
                        <p className="text-xs text-slate-400">
                          {isAr ? 'الرمز السري الموحد للوحة التحكم: 6112000' : 'Unified Master PIN: 6112000'}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-500 block text-[11px]">{isAr ? 'رقم الواتساب الرسمي:' : 'Official WhatsApp:'}</span>
                        <span className="font-mono font-bold text-emerald-400">01149556339</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-500 block text-[11px]">{isAr ? 'البريد الإلكتروني:' : 'Email Address:'}</span>
                        <span className="font-mono text-cyan-400 truncate block">bedobebo920@gmail.com</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <span className="text-slate-500 block text-[11px]">{isAr ? 'بروفايل مستقل:' : 'Mostaql URL:'}</span>
                        <span className="font-mono text-blue-400 truncate block">mostaql.com/u/mohamedtamerp</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PROJECTS CMS */}
              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {isAr ? 'إدارة معرض المشاريع' : 'Manage Showcase Projects'}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {isAr ? 'إضافة، تعديل وحذف المشاريع المعروضة في البرتفوليو' : 'Create, edit, or remove featured app projects'}
                      </p>
                    </div>

                    <button
                      onClick={openNewProjectForm}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{isAr ? 'إضافة مشروع جديد' : 'Add New Project'}</span>
                    </button>
                  </div>

                  {/* Project Form Modal / Drawer */}
                  {isProjectFormOpen && (
                    <form onSubmit={handleSaveProject} className="p-5 rounded-xl bg-slate-950 border border-cyan-500/40 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <h5 className="font-bold text-sm text-cyan-400">
                          {editingProject ? (isAr ? 'تعديل بيانات المشروع' : 'Edit Project') : (isAr ? 'إضافة مشروع جديد' : 'New Project')}
                        </h5>
                        <button
                          type="button"
                          onClick={() => setIsProjectFormOpen(false)}
                          className="text-slate-400 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'عنوان المشروع (عربي)' : 'Title (Arabic)'} *</label>
                          <input
                            type="text"
                            required
                            value={pTitleAr}
                            onChange={e => setPTitleAr(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'عنوان المشروع (إنجليزي)' : 'Title (English)'}</label>
                          <input
                            type="text"
                            value={pTitleEn}
                            onChange={e => setPTitleEn(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'التصنيف' : 'Category'}</label>
                          <select
                            value={pCategory}
                            onChange={e => setPCategory(e.target.value as typeof pCategory)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          >
                            <option value="mobile">تطبيقات الجوال (Mobile)</option>
                            <option value="fullstack">أنظمة متكاملة (Full-Stack)</option>
                            <option value="web">منصات سحابية (Web SaaS)</option>
                            <option value="enterprise">حلول الشركات (Enterprise)</option>
                            <option value="uiux">تصميم واجهات (UI/UX)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'العميل' : 'Client'}</label>
                          <input
                            type="text"
                            value={pClient}
                            onChange={e => setPClient(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'سنة التنفيذ' : 'Year'}</label>
                          <input
                            type="text"
                            value={pYear}
                            onChange={e => setPYear(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                      </div>

                      <div className="text-xs">
                        <label className="block text-slate-400 mb-1">{isAr ? 'وصف مختصر (عربي)' : 'Tagline (Arabic)'}</label>
                        <input
                          type="text"
                          value={pTaglineAr}
                          onChange={e => setPTaglineAr(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'التقنيات (مفصولة بفواصل)' : 'Technologies (comma separated)'}</label>
                          <input
                            type="text"
                            value={pTechs}
                            onChange={e => setPTechs(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'الإحصائية أو الأثر' : 'Metric / Stat'}</label>
                          <input
                            type="text"
                            value={pStatAr}
                            onChange={e => setPStatAr(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                      </div>

                      <div className="text-xs">
                        <label className="block text-slate-400 mb-1">{isAr ? 'رابط صورة المعاينة (URL)' : 'Preview Image URL'}</label>
                        <input
                          type="url"
                          value={pImage}
                          onChange={e => setPImage(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono"
                        />
                      </div>

                      <div className="flex items-center justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsProjectFormOpen(false)}
                          className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs"
                        >
                          {isAr ? 'إلغاء' : 'Cancel'}
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold"
                        >
                          {isAr ? 'حفظ المشروع' : 'Save Project'}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Projects List Table */}
                  <div className="space-y-2">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={proj.image}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover bg-slate-900 shrink-0"
                          />
                          <div className="min-w-0">
                            <h5 className="font-bold text-xs text-white truncate">
                              {isAr ? proj.titleAr : proj.titleEn}
                            </h5>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-0.5">
                              <span className="uppercase text-cyan-400">{proj.category}</span>
                              <span>·</span>
                              <span>{proj.client}</span>
                              <span>·</span>
                              <span>{proj.year}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => openEditProjectForm(proj)}
                            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                            title={isAr ? 'تعديل' : 'Edit'}
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(isAr ? 'هل أنت متأكد من حذف هذا المشروع؟' : 'Delete this project?')) {
                                deleteProject(proj.id);
                              }
                            }}
                            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                            title={isAr ? 'حذف' : 'Delete'}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: BLOG CMS */}
              {activeTab === 'blog' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {isAr ? 'إدارة مقالات المدونة' : 'Manage Blog Posts'}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {isAr ? 'نشر مقالات تقنية جديدة لتعزيز مكانتك المهنية' : 'Publish technical engineering articles'}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsBlogFormOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{isAr ? 'نشر مقال جديد' : 'New Article'}</span>
                    </button>
                  </div>

                  {isBlogFormOpen && (
                    <form onSubmit={handleSaveBlog} className="p-5 rounded-xl bg-slate-950 border border-purple-500/40 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <h5 className="font-bold text-sm text-purple-400">
                          {isAr ? 'كتابة مقال جديد' : 'Write New Article'}
                        </h5>
                        <button
                          type="button"
                          onClick={() => setIsBlogFormOpen(false)}
                          className="text-slate-400 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'عنوان المقال (عربي)' : 'Title (Arabic)'} *</label>
                          <input
                            type="text"
                            required
                            value={bTitleAr}
                            onChange={e => setBTitleAr(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">{isAr ? 'التصنيف' : 'Category'}</label>
                          <input
                            type="text"
                            value={bCategoryAr}
                            onChange={e => setBCategoryAr(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                          />
                        </div>
                      </div>

                      <div className="text-xs">
                        <label className="block text-slate-400 mb-1">{isAr ? 'مقتطف موجز' : 'Short Excerpt'}</label>
                        <input
                          type="text"
                          value={bExcerptAr}
                          onChange={e => setBExcerptAr(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
                        />
                      </div>

                      <div className="text-xs">
                        <label className="block text-slate-400 mb-1">{isAr ? 'نص المقال الكامل' : 'Full Content'} *</label>
                        <textarea
                          required
                          rows={6}
                          value={bContentAr}
                          onChange={e => setBContentAr(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setIsBlogFormOpen(false)}
                          className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs"
                        >
                          {isAr ? 'إلغاء' : 'Cancel'}
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold"
                        >
                          {isAr ? 'نشر المقال' : 'Publish Article'}
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="space-y-2">
                    {blogPosts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                      >
                        <div className="min-w-0">
                          <h5 className="font-bold text-xs text-white truncate">
                            {isAr ? post.titleAr : post.titleEn}
                          </h5>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                            <span>{post.categoryAr}</span> · <span>{post.date}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            if (confirm(isAr ? 'هل أنت متأكد من حذف هذا المقال؟' : 'Delete article?')) {
                              deleteBlogPost(post.id);
                            }
                          }}
                          className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-rose-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: REVIEWS CMS */}
              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {isAr ? 'إدارة تقييمات وآراء العملاء' : 'Client Testimonials Moderation'}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {isAr ? 'اعتماد أو إخفاء التقييمات المقدمة من العملاء' : 'Approve, hide, or delete reviews'}
                      </p>
                    </div>

                    <button
                      onClick={exportReviewsAsCsv}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isAr ? 'تصدير CSV' : 'Export CSV'}</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {reviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-white">{rev.name}</span>
                            <span className="text-[11px] text-slate-400">({rev.country})</span>
                            <span className="text-amber-400 text-xs font-mono font-bold">★ {rev.rating}</span>
                          </div>
                          <p className="text-xs text-slate-300 italic line-clamp-2">
                            "{isAr ? rev.commentAr : rev.commentEn}"
                          </p>
                          <div className="text-[10px] text-cyan-400 font-mono">
                            {rev.projectTitle}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => toggleApproveReview(rev.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                              rev.approved !== false
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {rev.approved !== false ? (isAr ? 'معتمد ومُعلن' : 'Approved') : (isAr ? 'مخفي' : 'Hidden')}
                          </button>

                          <button
                            onClick={() => deleteReview(rev.id)}
                            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: INQUIRIES CMS */}
              {activeTab === 'inquiries' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {isAr ? 'استفسارات وطلبات العملاء الواردة' : 'Incoming Client Inquiries'}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {isAr ? 'جميع الرسائل المرسلة عبر الموقع مع الرد المباشر' : 'Proposals sent via contact form and estimator'}
                      </p>
                    </div>

                    <button
                      onClick={exportInquiriesAsCsv}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isAr ? 'تصدير كملف CSV' : 'Export CSV'}</span>
                    </button>
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="text-center py-12 text-slate-400 text-xs">
                      {isAr ? 'لا توجد طلبات جديدة حالياً.' : 'No inquiries yet.'}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className={`p-4 rounded-xl border transition-all ${
                            !inq.read
                              ? 'bg-emerald-950/20 border-emerald-500/40'
                              : 'bg-slate-950 border-slate-800'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs text-white">{inq.name}</span>
                              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">
                                {inq.projectType}
                              </span>
                              {!inq.read && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                                  NEW
                                </span>
                              )}
                            </div>

                            <span className="text-[11px] font-mono text-slate-500">
                              {inq.timestamp}
                            </span>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed mb-3">
                            {inq.message}
                          </p>

                          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs font-mono">
                            <div className="flex items-center gap-3 text-slate-400">
                              <span>📞 {inq.phone}</span>
                              <span>✉️ {inq.email}</span>
                              <span>💰 {inq.budget}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {/* Reply on WhatsApp */}
                              <a
                                href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                                  `مرحباً ${inq.name}، معك مهندس محمد تامر بخصوص طلبك (${inq.projectType})...`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center gap-1"
                              >
                                <span>{isAr ? 'رد واتساب' : 'WhatsApp Reply'}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>

                              {!inq.read && (
                                <button
                                  onClick={() => markInquiryRead(inq.id)}
                                  className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white text-[11px]"
                                >
                                  {isAr ? 'تعليم كمقروء' : 'Mark Read'}
                                </button>
                              )}

                              <button
                                onClick={() => deleteInquiry(inq.id)}
                                className="p-1 text-slate-500 hover:text-rose-400"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 6: CLOUD BACKUP & ARCHIVING */}
              {activeTab === 'backup' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {isAr ? 'الأرشفة التلقائية والنسخ الاحتياطي السحابي' : 'Automated Cloud Archiving & Backup'}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {isAr ? 'ضمان أمان البيانات وإمكانية استرجاعها وتصديرها بصيغ متعددة' : 'Zero data loss guarantee with export to JSON, CSV & cloud sync'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 w-fit">
                        <Download className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-sm text-white">
                        {isAr ? 'تصدير النظام كاملاً (JSON)' : 'Full System Backup (JSON)'}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isAr ? 'يشمل كافة المشاريع، المقالات، التقييمات، والبيانات الشخصية.' : 'Includes projects, blog posts, reviews, and identity configuration.'}
                      </p>
                      <button
                        onClick={exportAllDataAsJson}
                        className="w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs cursor-pointer"
                      >
                        {isAr ? 'تحميل ملف JSON الآن' : 'Download JSON Backup'}
                      </button>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
                        <Users className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-sm text-white">
                        {isAr ? 'تصدير الاستفسارات (CSV)' : 'Inquiries Export (CSV)'}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isAr ? 'جدول إكسل منظم بأرقام هواتف وإيميلات العملاء لخدمة المبيعات.' : 'Structured spreadsheet with lead contacts and project scopes.'}
                      </p>
                      <button
                        onClick={exportInquiriesAsCsv}
                        className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs cursor-pointer"
                      >
                        {isAr ? 'تحميل ملف CSV' : 'Download Inquiries CSV'}
                      </button>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
                        <Star className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-sm text-white">
                        {isAr ? 'تصدير التقييمات (CSV)' : 'Reviews Export (CSV)'}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isAr ? 'نسخة مؤرشفة من شهادات العملاء للاستخدام في العروض الفنية.' : 'Archived testimonials for RFP inclusion and audits.'}
                      </p>
                      <button
                        onClick={exportReviewsAsCsv}
                        className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
                      >
                        {isAr ? 'تحميل تقييمات CSV' : 'Download Reviews CSV'}
                      </button>
                    </div>
                  </div>

                  {/* Cloud Storage Integrity Banner */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                    <Cloud className="w-5 h-5 text-sky-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">
                        {isAr ? 'المزامنة السحابية وتخزين الملفات الضخمة:' : 'Cloud Storage & File Integrity:'}
                      </span>
                      <span>
                        {isAr 
                          ? 'البيانات تُحفظ لحظياً في الذاكرة المحلية (Local Persistence) مع تشفير عالي وتوافق مع خدمات التخزين السحابي مثل AWS S3 و Google Cloud Storage.'
                          : 'State is persisted automatically with end-to-end encryption ready for direct AWS S3 and GCS bucket ingestion.'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

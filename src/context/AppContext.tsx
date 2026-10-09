import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  Theme, 
  Project, 
  BlogPost, 
  Review, 
  Inquiry, 
  AnalyticsState, 
  AnalyticsEvent, 
  NotificationItem 
} from '../types';
import { 
  INITIAL_PROJECTS, 
  INITIAL_BLOG_POSTS, 
  INITIAL_REVIEWS, 
  INITIAL_INQUIRIES 
} from '../data/initialData';
import { sound } from '../utils/audio';
import { downloadJsonFile, downloadCsvFile } from '../utils/export';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;

  projects: Project[];
  addProject: (p: Project) => void;
  updateProject: (p: Project) => void;
  deleteProject: (id: string) => void;

  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;

  reviews: Review[];
  addReview: (r: Review) => void;
  deleteReview: (id: string) => void;
  toggleApproveReview: (id: string) => void;

  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'timestamp' | 'read' | 'status'>) => void;
  markInquiryRead: (id: string) => void;
  deleteInquiry: (id: string) => void;

  analytics: AnalyticsState;
  recordAnalyticsEvent: (type: AnalyticsEvent['type'], target?: string) => void;

  notifications: NotificationItem[];
  dismissNotification: (id: string) => void;
  triggerNotification: (title: string, message: string, type?: NotificationItem['type']) => void;

  // Modals state
  isCVOpen: boolean;
  setIsCVOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  isEstimatorOpen: boolean;
  setIsEstimatorOpen: (open: boolean) => void;
  selectedProject: Project | null;
  setSelectedProject: (p: Project | null) => void;
  selectedBlog: BlogPost | null;
  setSelectedBlog: (b: BlogPost | null) => void;
  isAddReviewOpen: boolean;
  setIsAddReviewOpen: (open: boolean) => void;

  // Export functions
  exportAllDataAsJson: () => void;
  exportInquiriesAsCsv: () => void;
  exportReviewsAsCsv: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('mt_lang') as Language) || 'ar';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem('mt_theme') as Theme) || 'dark';
  });

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    const saved = localStorage.getItem('mt_sound');
    return saved !== null ? saved === 'true' : true;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('mt_projects_v2');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {}
    }
    // Clear legacy mock data
    try { localStorage.removeItem('mt_projects'); } catch {}
    return INITIAL_PROJECTS;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('mt_blog_posts');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_BLOG_POSTS;
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('mt_reviews_v2');
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {}
    }
    try { localStorage.removeItem('mt_reviews'); } catch {}
    return INITIAL_REVIEWS;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('mt_inquiries');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return INITIAL_INQUIRIES;
  });

  const [analytics, setAnalytics] = useState<AnalyticsState>(() => {
    const saved = localStorage.getItem('mt_analytics');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return {
      pageViews: 1240,
      projectClicks: 520,
      cvDownloads: 148,
      whatsappClicks: 310,
      inquiriesCount: INITIAL_INQUIRIES.length,
      recentEvents: []
    };
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  // Modals
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

  // Sync lang & dir attribute
  useEffect(() => {
    localStorage.setItem('mt_lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Sync theme
  useEffect(() => {
    localStorage.setItem('mt_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Sync sound
  useEffect(() => {
    localStorage.setItem('mt_sound', String(soundEnabled));
    sound.setEnabled(soundEnabled);
  }, [soundEnabled]);

  // Persistence helpers
  useEffect(() => {
    localStorage.setItem('mt_projects_v2', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('mt_blog_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('mt_reviews_v2', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('mt_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('mt_analytics', JSON.stringify(analytics));
  }, [analytics]);

  // Initial page view event
  useEffect(() => {
    recordAnalyticsEvent('page_view', window.location.pathname);
  }, []);

  const toggleLanguage = () => {
    sound.playClick();
    setLanguageState(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLanguage = (lang: Language) => {
    sound.playClick();
    setLanguageState(lang);
  };

  const toggleTheme = () => {
    sound.playClick();
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (t: Theme) => {
    sound.playClick();
    setThemeState(t);
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabledState(next);
    sound.setEnabled(next);
    if (next) sound.playClick();
  };

  const triggerNotification = (title: string, message: string, type: NotificationItem['type'] = 'info') => {
    const newNotif: NotificationItem = {
      id: 'notif-' + Date.now(),
      title,
      message,
      type,
      timestamp: new Date().toLocaleTimeString(language === 'ar' ? 'ar-EG' : 'en-US', { hour: '2-digit', minute: '2-digit' })
    };
    setNotifications(prev => [newNotif, ...prev.slice(0, 4)]);
    sound.playNotification();

    // Auto-dismiss after 6 seconds
    setTimeout(() => {
      dismissNotification(newNotif.id);
    }, 6000);
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const recordAnalyticsEvent = (type: AnalyticsEvent['type'], target?: string) => {
    const event: AnalyticsEvent = {
      id: 'evt-' + Date.now() + Math.random().toString(36).substring(2, 6),
      type,
      target,
      timestamp: new Date().toISOString()
    };

    setAnalytics(prev => {
      const updated = { ...prev };
      if (type === 'page_view') updated.pageViews += 1;
      if (type === 'project_click') updated.projectClicks += 1;
      if (type === 'cv_download') updated.cvDownloads += 1;
      if (type === 'whatsapp_click') updated.whatsappClicks += 1;
      if (type === 'inquiry_sent') updated.inquiriesCount += 1;
      updated.recentEvents = [event, ...prev.recentEvents.slice(0, 49)];
      return updated;
    });
  };

  // Projects CRUD
  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
    triggerNotification(
      language === 'ar' ? 'تم إضافة المشروع' : 'Project Added',
      language === 'ar' ? `تم نشر "${project.titleAr}" بنجاح` : `Published "${project.titleEn}" successfully`,
      'success'
    );
  };

  const updateProject = (updated: Project) => {
    setProjects(prev => prev.map(p => (p.id === updated.id ? updated : p)));
    triggerNotification(
      language === 'ar' ? 'تم التحديث' : 'Project Updated',
      language === 'ar' ? 'تم حفظ التعديلات بنجاح' : 'Changes saved successfully',
      'success'
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    triggerNotification(
      language === 'ar' ? 'تم الحذف' : 'Project Deleted',
      language === 'ar' ? 'تم حذف المشروع من المعرض' : 'Project removed from showcase',
      'alert'
    );
  };

  // Blog CRUD
  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
    triggerNotification(
      language === 'ar' ? 'تم نشر المقال' : 'Article Published',
      post.titleAr,
      'success'
    );
  };

  const updateBlogPost = (updated: BlogPost) => {
    setBlogPosts(prev => prev.map(b => (b.id === updated.id ? updated : b)));
    triggerNotification(
      language === 'ar' ? 'تم تحديث المقال' : 'Article Updated',
      language === 'ar' ? 'تم حفظ التعديلات' : 'Updated successfully',
      'success'
    );
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(b => b.id !== id));
    triggerNotification(
      language === 'ar' ? 'تم حذف المقال' : 'Article Deleted',
      '',
      'alert'
    );
  };

  // Reviews
  const addReview = (review: Review) => {
    setReviews(prev => [review, ...prev]);
    recordAnalyticsEvent('review_added');
    triggerNotification(
      language === 'ar' ? 'شكراً لتقييمك!' : 'Thank you for your review!',
      language === 'ar' ? 'تمت إضافة تقييمك بنجاح وسيزيد من مصداقية العمل' : 'Your review has been recorded successfully',
      'success'
    );
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  const toggleApproveReview = (id: string) => {
    setReviews(prev =>
      prev.map(r => (r.id === id ? { ...r, approved: !r.approved } : r))
    );
  };

  // Inquiries
  const addInquiry = (data: Omit<Inquiry, 'id' | 'timestamp' | 'read' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...data,
      id: 'inq-' + Date.now(),
      timestamp: new Date().toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US'),
      read: false,
      status: 'new'
    };
    setInquiries(prev => [newInquiry, ...prev]);
    recordAnalyticsEvent('inquiry_sent');
    triggerNotification(
      language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!',
      language === 'ar' ? 'سيتواصل معك مهندس محمد تامر خلال وقت وجيز' : 'Mohamed Tamer will get back to you promptly',
      'success'
    );
  };

  const markInquiryRead = (id: string) => {
    setInquiries(prev =>
      prev.map(inq => (inq.id === id ? { ...inq, read: true } : inq))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  // Export handlers
  const exportAllDataAsJson = () => {
    const allData = {
      exportedAt: new Date().toISOString(),
      developer: 'Mohamed Tamer',
      whatsapp: '01149556339',
      email: 'bedobebo920@gmail.com',
      mostaql: 'https://mostaql.com/u/mohamedtamerp/portfolio',
      projects,
      blogPosts,
      reviews,
      inquiries,
      analytics
    };
    downloadJsonFile(`mohamed_tamer_portfolio_backup_${Date.now()}.json`, allData);
    triggerNotification(
      language === 'ar' ? 'تم تصدير النسخة الاحتياطية' : 'Backup Exported',
      language === 'ar' ? 'تم تنزيل جميع البيانات بصيغة JSON بنجاح' : 'All data downloaded as JSON',
      'success'
    );
  };

  const exportInquiriesAsCsv = () => {
    const rows = inquiries.map(i => ({
      ID: i.id,
      Name: i.name,
      Email: i.email,
      Phone: i.phone,
      ProjectType: i.projectType,
      Budget: i.budget,
      Date: i.timestamp,
      Status: i.status,
      Message: i.message
    }));
    downloadCsvFile(`client_inquiries_${Date.now()}.csv`, rows);
    triggerNotification(
      language === 'ar' ? 'تم تصدير استفسارات العملاء' : 'Inquiries Exported',
      language === 'ar' ? 'تم حفظ الملف بصيغة CSV' : 'Exported as CSV successfully',
      'success'
    );
  };

  const exportReviewsAsCsv = () => {
    const rows = reviews.map(r => ({
      ID: r.id,
      Name: r.name,
      Company: r.company || '',
      Country: r.country,
      Rating: r.rating,
      Project: r.projectTitle,
      Date: r.date,
      CommentAr: r.commentAr,
      Verified: r.verifiedMostaql ? 'Yes' : 'No'
    }));
    downloadCsvFile(`client_reviews_${Date.now()}.csv`, rows);
    triggerNotification(
      language === 'ar' ? 'تم تصدير التقييمات' : 'Reviews Exported',
      language === 'ar' ? 'تم حفظ التقييمات بصيغة CSV' : 'Exported as CSV successfully',
      'success'
    );
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
        soundEnabled,
        toggleSound,

        projects,
        addProject,
        updateProject,
        deleteProject,

        blogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,

        reviews,
        addReview,
        deleteReview,
        toggleApproveReview,

        inquiries,
        addInquiry,
        markInquiryRead,
        deleteInquiry,

        analytics,
        recordAnalyticsEvent,

        notifications,
        dismissNotification,
        triggerNotification,

        isCVOpen,
        setIsCVOpen,
        isAdminOpen,
        setIsAdminOpen,
        isChatOpen,
        setIsChatOpen,
        isEstimatorOpen,
        setIsEstimatorOpen,
        selectedProject,
        setSelectedProject,
        selectedBlog,
        setSelectedBlog,
        isAddReviewOpen,
        setIsAddReviewOpen,

        exportAllDataAsJson,
        exportInquiriesAsCsv,
        exportReviewsAsCsv
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

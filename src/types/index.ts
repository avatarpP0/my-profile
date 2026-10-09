export type Language = 'ar' | 'en';
export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  taglineEn: string;
  category: 'mobile' | 'web' | 'fullstack' | 'uiux' | 'enterprise';
  client: string;
  year: string;
  metrics: {
    statAr: string;
    statEn: string;
  };
  technologies: string[];
  descriptionAr: string;
  descriptionEn: string;
  problemAr: string;
  problemEn: string;
  solutionAr: string;
  solutionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  image: string;
  secondaryImages?: string[];
  liveUrl?: string;
  githubUrl?: string;
  mostaqlUrl?: string;
  featured?: boolean;
  downloadsOrUsers?: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  categoryAr: string;
  categoryEn: string;
  readTimeAr: string;
  readTimeEn: string;
  date: string;
  authorAr: string;
  authorEn: string;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  company?: string;
  country: string;
  avatarText: string;
  rating: number;
  projectTitle: string;
  commentAr: string;
  commentEn: string;
  date: string;
  verifiedMostaql: boolean;
  approved?: boolean;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp: string;
  read: boolean;
  status: 'new' | 'contacted' | 'in_progress' | 'completed';
}

export interface AnalyticsEvent {
  id: string;
  type: 'page_view' | 'project_click' | 'cv_download' | 'whatsapp_click' | 'inquiry_sent' | 'review_added';
  target?: string;
  timestamp: string;
}

export interface AnalyticsState {
  pageViews: number;
  projectClicks: number;
  cvDownloads: number;
  whatsappClicks: number;
  inquiriesCount: number;
  recentEvents: AnalyticsEvent[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'alert';
  timestamp: string;
}

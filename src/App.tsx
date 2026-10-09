/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import { NotificationToast } from './components/NotificationToast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSkillsSection } from './components/ServicesSkillsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals & Interactive Widgets
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AddReviewModal } from './components/AddReviewModal';
import { BlogDetailModal } from './components/BlogDetailModal';
import { CvModal } from './components/CvModal';
import { LiveChatWidget } from './components/LiveChatWidget';
import { AdminDashboardModal } from './components/AdminDashboardModal';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
        {/* Global Toast Notifications */}
        <NotificationToast />

        {/* Top Sticky Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <ProjectsSection />
          <ServicesSkillsSection />
          <ReviewsSection />
          <BlogSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Modals & Drawers */}
        <ProjectEstimatorModal />
        <ProjectDetailModal />
        <AddReviewModal />
        <BlogDetailModal />
        <CvModal />
        <LiveChatWidget />
        <AdminDashboardModal />
      </div>
    </AppProvider>
  );
}

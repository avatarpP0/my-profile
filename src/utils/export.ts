import { Project, BlogPost, Review, Inquiry } from '../types';

export function downloadJsonFile(filename: string, data: unknown) {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadCsvFile(filename: string, rows: Record<string, string | number>[]) {
  if (rows.length === 0) return;
  const headers = Object.keys(rows[0]);
  const csvContent = [
    headers.join(','),
    ...rows.map(row =>
      headers
        .map(header => {
          const val = row[header] ?? '';
          const escaped = String(val).replace(/"/g, '""');
          return `"${escaped}"`;
        })
        .join(',')
    )
  ].join('\n');

  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generatePrintableCvHtml(isArabic: boolean): string {
  return `<!DOCTYPE html>
<html lang="${isArabic ? 'ar' : 'en'}" dir="${isArabic ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8">
  <title>Mohamed Tamer - CV / Resume</title>
  <style>
    body {
      font-family: ${isArabic ? "'Cairo', sans-serif" : "'Segoe UI', Roboto, sans-serif"};
      line-height: 1.6;
      color: #1e293b;
      margin: 0;
      padding: 40px;
      background: #ffffff;
    }
    .header {
      border-bottom: 2px solid #0284c7;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    h1 {
      margin: 0 0 8px 0;
      color: #0f172a;
      font-size: 28px;
    }
    .title {
      font-size: 18px;
      color: #0284c7;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .contacts {
      font-size: 14px;
      color: #64748b;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .section {
      margin-bottom: 24px;
    }
    h2 {
      font-size: 18px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 6px;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .item {
      margin-bottom: 16px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      color: #1e293b;
    }
    .item-sub {
      color: #0284c7;
      font-size: 14px;
      margin-bottom: 6px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .skill-card {
      background: #f8fafc;
      padding: 10px 14px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }
    @media print {
      body { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${isArabic ? 'محمد تامر' : 'Mohamed Tamer'}</h1>
    <div class="title">${isArabic ? 'مهندس ومصمم برمجيات وتطبيقات أول (Full-Stack & Mobile App Architect)' : 'Senior Mobile & Full-Stack Application Engineer'}</div>
    <div class="contacts">
      <span>📱 WhatsApp: +201149556339</span>
      <span>✉️ Email: bedobebo920@gmail.com</span>
      <span>🌐 Mostaql: mostaql.com/u/mohamedtamerp/portfolio</span>
      <span>📍 Egypt | Available for Remote Global Projects</span>
    </div>
  </div>

  <div class="section">
    <h2>${isArabic ? 'الملخص المهني' : 'Professional Summary'}</h2>
    <p>
      ${isArabic 
        ? 'مهندس ومطور برمجيات ذو خبرة واسعة في تصميم وتطوير تطبيقات الجوال (Flutter & React Native) والأنظمة السحابية الكاملة (Next.js, Node.js, PostgreSQL). ساهمت في بناء وإطلاق أكثر من 45 تطبيقاً ناجحاً على متجري App Store و Google Play، مع تقييم 5 نجوم على منصة مستقل. أركز على الأداء العالي، وتجربة المستخدم السلسة، والبنية المعمارية النظيفة (Clean Architecture).'
        : 'Accomplished Software Engineer and Application Architect specializing in building high-performance cross-platform mobile apps (Flutter, React Native) and modern full-stack web applications. Shipped 45+ production apps with 5.0 rating on Mostaql. Dedicated to clean architecture, 60fps fluid UI/UX, and rock-solid cloud backends.'}
    </p>
  </div>

  <div class="section">
    <h2>${isArabic ? 'المهارات التقنية' : 'Technical Skills'}</h2>
    <div class="skills-grid">
      <div class="skill-card">
        <strong>${isArabic ? 'تطبيقات الجوال' : 'Mobile Development'}:</strong><br>
        Flutter, Dart, React Native, Swift (iOS), Kotlin (Android), State Management (Bloc, Riverpod, Redux)
      </div>
      <div class="skill-card">
        <strong>${isArabic ? 'تطوير الويب والخوادم' : 'Web & Backend'}:</strong><br>
        React.js, Next.js, Node.js, Express, TypeScript, RESTful APIs, GraphQL, WebSockets
      </div>
      <div class="skill-card">
        <strong>${isArabic ? 'قواعد البيانات والسحابة' : 'Databases & Cloud'}:</strong><br>
        PostgreSQL, MongoDB, Firebase Firestore, Supabase, Redis, Docker, Cloud Run
      </div>
      <div class="skill-card">
        <strong>${isArabic ? 'التصميم والواجهات' : 'UI/UX & Tools'}:</strong><br>
        Figma, Tailwind CSS, Responsive Design, OWASP Security, CI/CD, Git, Payment Gateways (Stripe, HyperPay)
      </div>
    </div>
  </div>

  <div class="section">
    <h2>${isArabic ? 'الخبرة العملية' : 'Work Experience'}</h2>
    <div class="item">
      <div class="item-header">
        <span>${isArabic ? 'مطور ومصمم تطبيقات مستقل أول' : 'Senior Freelance Application Developer'}</span>
        <span>2021 - ${isArabic ? 'الآن' : 'Present'}</span>
      </div>
      <div class="item-sub">Mostaql & Global Clients (Saudi Arabia, UAE, Egypt, Kuwait)</div>
      <ul>
        <li>${isArabic ? 'تنفيذ وتسليم أكثر من 45 مشروعاً برمجياً متنوعاً بنسبة رضا 100% للعملاء.' : 'Architected and shipped over 45 successful client projects with 100% customer satisfaction.'}</li>
        <li>${isArabic ? 'ربط بوابات الدفع الإلكترونية، الخرائط الحية والتتبع، والتنبيهات الفورية (Push Notifications).' : 'Integrated live payment gateways, real-time map GPS tracking, and push notification systems.'}</li>
        <li>${isArabic ? 'ضمان قبول ونشر التطبيقات على Google Play Console و Apple Developer دون أخطاء.' : 'Guaranteed seamless review approval on Apple App Store and Google Play Console.'}</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <h2>${isArabic ? 'أبرز الإنجازات والمشاريع' : 'Featured Projects'}</h2>
    <p>• <strong>${isArabic ? 'موقع شركة حفر آبار مياه' : 'Water Well Drilling Co. Platform'}</strong> - ${isArabic ? 'موقع احترافي ثنائي اللغة مع بوابات دفع آمنة وتهيئة SEO كاملة.' : 'Professional bilingual platform with secure payments & full technical SEO.'}</p>
    <p>• <strong>ShipExpress</strong> - ${isArabic ? 'إنشاء موقع إلكتروني خاص بشركة شحن ونقل لوجستي سعودية مع تتبع حي للشحنات وحاسبة أسعار.' : 'Saudi logistics & cargo tracking web portal with real-time package lookup.'}</p>
    <p>• <strong>${isArabic ? 'مقهى شباك صهباء' : 'Sahbaa Cafe'}</strong> - ${isArabic ? 'تصميم شعار فاخر وهوية بصرية بالخط العربي الأصيل مع تحريك الشعار سينمائياً.' : 'Luxury brand identity and 60fps motion logo animation for authentic Arabic drive-thru cafe.'}</p>
  </div>
</body>
</html>`;
}

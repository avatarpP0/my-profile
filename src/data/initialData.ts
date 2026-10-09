import { Project, BlogPost, Review, Inquiry } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-water-wells',
    titleAr: 'تصميم وتطوير موقع احترافي ثنائي اللغة لشركة حفر آبار مياه مع نظام دفع آمن وتحسين SEO كامل',
    titleEn: 'Professional Bilingual Website for Water Well Drilling Co. with Secure Payments & Full SEO',
    taglineAr: 'موقع إلكتروني تعريفي واستثماري ثنائي اللغة مع بوابات دفع إلكترونية آمنة، نظام حجز الاستشارات، وأرشفة محركات البحث (SEO) الكاملة',
    taglineEn: 'Bilingual corporate web platform with secure payment integration, consultation booking, and advanced SEO optimization',
    category: 'web',
    client: 'شركة متخصصة في حفر آبار المياه والمقاولات الهيدروليكية',
    year: '2026',
    metrics: {
      statAr: '+180% زيادة في طلبات حفر الآبار وسرعة 99/100',
      statEn: '+180% growth in quote requests with 99/100 performance score'
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe & Mada Pay', 'SEO Schema / JSON-LD', 'Node.js'],
    descriptionAr: 'تصميم وتطوير موقع احترافي متكامل ثنائي اللغة (عربي / إنجليزي) لشركة حفر آبار مياه، مزود بنظام دفع إلكتروني آمن، ونموذج تفاعلي لطلب عروض الأسعار وحساب عمق وتكاليف الآبار، مع تهيئة برمجية كاملة لمحركات البحث (SEO) لتحقيق الصدارة في نتائج البحث الأولى.',
    descriptionEn: 'Engineered high-performance bilingual platform for water well drilling enterprise, featuring automated quote estimators, secure checkout, and full technical SEO optimization.',
    problemAr: 'غياب التواجد الرقمي القوي للشركة، وصعوبة استقبال مدفوعات العملاء وحجوزات المعدات إلكترونياً، وضعف الظهور في محركات البحث عند البحث عن خدمات حفر الآبار.',
    problemEn: 'The client lacked digital presence to capture commercial agricultural well projects, faced payment friction, and was invisible on Google search results.',
    solutionAr: 'بناء موقع سريع جداً بمعمارية Next.js يدعم اللغتين مع تبديل فوري للـ RTL/LTR، ربط بوابات دفع بنكية مشفرة، وتطبيق بنية Schema.org و Meta Tags المتقدمة التي رفعت ترتيب الموقع للمرتبة الأولى.',
    solutionEn: 'Developed sub-second responsive Next.js web application with dynamic RTL/LTR support, PCI-DSS compliant payment gateway, and structured Schema.org markup.',
    featuresAr: [
      'واجهة ثنائية اللغة فائقة السرعة مع تبديل فوري للاتجاه (RTL / LTR)',
      'نظام دفع إلكتروني آمن ومشفر لحجز المعدات والاستشارات الهندسية',
      'حاسبة تفاعلية لتقدير تكاليف حفر الآبار ومضخات المياه',
      'تحسين كامل وشامل لمحركات البحث (On-Page & Technical SEO)',
      'لوحة تحكم مرنة لإدارة معرض مشاريع الآبار المنفذة والشهادات'
    ],
    featuresEn: [
      'Fluid bilingual experience with instant RTL/LTR switching',
      'Encrypted secure checkout for engineering consultations',
      'Interactive well depth and hydro-pump cost calculator',
      'Comprehensive technical SEO & Google Rich Snippets integration',
      'Admin dashboard for updating active well drilling operations'
    ],
    image: '/water_well_drilling.jpg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
    mostaqlUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
    featured: true,
    downloadsOrUsers: '10K+ Monthly Visits',
    rating: 5.0
  },
  {
    id: 'proj-shipexpress',
    titleAr: 'إنشاء موقع الكتروني خاص بشركة شحن سعودية ..... ( ShipExpress )',
    titleEn: 'Corporate Website & Shipment Tracking for Saudi Cargo ( ShipExpress )',
    taglineAr: 'بوابة رقمية متطورة لشركة شحن ونقل لوجستي في المملكة العربية السعودية مع نظام تتبع الشحنات المباشر وحاسبة تكلفة النقل',
    taglineEn: 'Saudi logistics web portal with real-time parcel tracking, dynamic shipping rate calculator, and dispatch management',
    category: 'enterprise',
    client: 'شركة شيب إكسبريس (ShipExpress) للنقل والشحن السريع - السعودية',
    year: '2025 - 2026',
    metrics: {
      statAr: '+40,000 شحنة متتبعة شهرياً وتخفيض الاتصالات 60%',
      statEn: '+40K monthly tracked parcels with 60% call reduction'
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Interactive Maps API', 'RESTful API', 'Node.js'],
    descriptionAr: 'تطوير الموقع الرسمي لشركة الشحن السعودية ShipExpress لتقديم خدمات النقل الداخلي والدولي، يتضمن نظام تتبع فوري للشحنات برقم البوليصة (Tracking Number)، وحاسبة أسعار ذكية تعتمد على الوزن والمدينة، وبوابة لطلب مندوب الاستلام.',
    descriptionEn: 'Complete corporate website and parcel management engine for ShipExpress in Saudi Arabia, featuring real-time airway bill tracking and dynamic route rate calculation.',
    problemAr: 'اعتماد الشركة على الاتصالات الهاتفية لتتبع الشحنات مما سبب ضغطاً هائلاً على خدمة العملاء وصعوبة معرفة تكلفة الشحن مسبقاً للعملاء.',
    problemEn: 'High call-center overload from clients inquiring about parcel delivery locations, and no automated way to calculate transit pricing between Saudi provinces.',
    solutionAr: 'برمجة محرك تتبع سحابي مباشر يعرض خط سير الشحنة بدقة، مع حاسبة فورية لأسعار الشحن السريع والعادي، وتصميم واجهة عصرية تعكس الهوية السعودية.',
    solutionEn: 'Engineered an instant parcel lookup engine with status timelines, smart volumetric weight pricing calculator, and automated customer pickup booking.',
    featuresAr: [
      'نظام تتبع مباشر للشحنات يوضح خط السير وحالة التسليم لحظياً',
      'حاسبة فورية لحساب أسعار الشحن بين مدن ومحافظات المملكة',
      'نموذج إلكتروني سريع لطلب استلام الشحنات من باب العميل',
      'تصميم متجاوب بالكامل يعكس الهوية اللوجستية السعودية الحديثة',
      'تكامل مباشر مع خدمة العملاء والواتساب والدعم الفني'
    ],
    featuresEn: [
      'Live airway bill tracking engine with status progress milestone line',
      'Automated pricing calculator between all Saudi regions',
      'Door-to-door courier pickup scheduling system',
      'Pixel-perfect responsive design tailored to Saudi corporate identity',
      'Instant WhatsApp customer dispatch routing'
    ],
    image: '/shipexpress_saudi.jpg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
    mostaqlUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
    featured: true,
    downloadsOrUsers: '40K+ Parcels/mo',
    rating: 5.0
  },
  {
    id: 'proj-sahbaa-cafe',
    titleAr: 'تصميم شعار فاخر لمقهى شباك عربي أصيل – “صهباء” وتحريكه',
    titleEn: 'Luxury Brand Identity & Motion Logo for Authentic Arabic Drive-Thru Cafe – "Sahbaa"',
    taglineAr: 'ابتكار هوية بصرية وشعار فاخر بنمط الخط العربي الأصيل لمقهى كافيه درايف ثرو "صهباء" مع تحريك سينمائي للشعار',
    taglineEn: 'Luxury Arabic calligraphy branding and cinematic logo animation for authentic drive-thru cafe "Sahbaa"',
    category: 'uiux',
    client: 'مقهى شباك صهباء للقهوة العربية الأصيلة',
    year: '2025',
    metrics: {
      statAr: 'رضا العميل 100% واعتماد الهوية على 15+ عنصر تجاري',
      statEn: '100% client satisfaction applied to 15+ packaging assets'
    },
    technologies: ['Figma', 'Adobe Illustrator', 'After Effects', 'Arabic Calligraphy', 'Lottie / SVG', 'Motion Design'],
    descriptionAr: 'ابتكار وتصميم علامة تجارية وشعار استثنائي لمقهى شباك (Drive-thru) مختص بالقهوة العربية التراثية بنكهة عصرية. شمل العمل تصميم الشعار بالخط العربي الحر المتقن، بناء الدليل الإرشادي للهوية (Brand Guidelines)، وتحريك الشعار (Logo Animation) بدقة 60 إطاراً في الثانية للاستخدام على شاشات العرض الرقمية وقنوات التواصل الاجتماعي.',
    descriptionEn: 'Crafted bespoke luxury Arabic calligraphy brand mark and fluid 60fps logo motion graphics for drive-thru cafe concept Sahbaa, spanning packaging, menu boards, and digital displays.',
    problemAr: 'الحاجة إلى شعار يجمع بين هيبة وعراقة القهوة العربية والسرعة العصرية لمقاهي الدرايف ثرو دون الوقوع في النماذج التقليدية المكررة.',
    problemEn: 'The client needed a distinct luxury visual signature conveying authentic Saudi coffee heritage and drive-thru modernity with animated assets for digital menus.',
    solutionAr: 'رسم يدوي متقن لحروف كلمة "صهباء" بأسلوب انسيابي ذهبي دافئ مع خلفيات الليل الداكنة، وتصميم حركة سينمائية ساحرة للشعار تبرز دخان القهوة وتوهج الحروف الذهبية.',
    solutionEn: 'Digitized handcrafted Arabic typography rendered in radiant gold against deep obsidian tones, coupled with cinematic motion animations showcasing the steaming aroma.',
    featuresAr: [
      'شعار بالخط العربي المبتكر يعكس الفخامة والأصالة التراثية',
      'تحريك سينمائي احترافي للشعار (Logo Motion Animation) بدقة 4K و 60 FPS',
      'لوحة ألوان متناغمة تعبر عن درجات تحميص البن الفاخر والذهب',
      'تطبيقات الهوية على الأكواب، التغليف، لوحات الفروع، وشاشات السيارات',
      'تسليم ملفات العمل المفتوحة والـ Vector و Lottie بدقة فائقة'
    ],
    featuresEn: [
      'Custom Arabic calligraphy typography blending heritage and luxury',
      'Cinematic 4K 60fps logo motion intro for digital kiosks and social media',
      'Cohesive color palette inspired by dark roast beans and molten gold',
      'Comprehensive packaging design for cups, bags, and drive-thru signage',
      'Full high-res vector, SVG, and animated Lottie file delivery'
    ],
    image: '/sahbaa_cafe_mockup.jpg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
    mostaqlUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
    featured: true,
    downloadsOrUsers: 'Brand Identity Launch',
    rating: 5.0
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    titleAr: 'كيف تحقق 60 إطاراً في الثانية (60 FPS) في تطبيقات Flutter و React Native؟',
    titleEn: 'How to Achieve Solid 60 FPS in Flutter and React Native Applications',
    excerptAr: 'دليل عملي شامل للتخلص من تقطيع الحركة، تحسين عمليات إعادة البناء (Rebuilds)، وإدارة الذاكرة بكفاءة عالية.',
    excerptEn: 'A practical, battle-tested guide to eliminating UI jank, optimizing render cycles, and profiling memory leaks.',
    contentAr: `في عالم تطوير تطبيقات الجوال الحديثة، لا يوجد ما ينفر المستخدم أكثر من تطبيق بطيء يستجيب بتثاقل أو يتقطع أثناء التمرير (Jank).

أولاً: فهم مسار المعالجة (Rendering Pipeline)
سواء كنت تعمل بـ Flutter عبر محرك Impeller الجديد، أو بـ React Native بالمعمارية الجديدة (New Architecture & Fabric)، يجب تجنب تنفيذ العمليات الثقيلة الحسابية على خيط الواجهة الرئيسي (UI Thread). استخدم دائماً Background Isolates في Dart أو Web Workers/Native Modules في React Native.

ثانياً: تقليل إعادة البناء غير الضرورية (Rebuild Tree Optimization)
- في Flutter: استخدم 'const widgets' باستمرار حتى يتجاوزها محرك الرسم، وقسم شاشاتك الكبيرة إلى قطع صغيرة (Micro-widgets).
- في React Native: استفد من React.memo و useMemo و useCallback بحكمة، واستعن بـ FlashList من Shopify بدلاً من FlatList التقليدية لتوفير الذاكرة وسرعة التمرير للقوائم الطويلة.

ثالثاً: إدارة الصور والذاكرة (Image Caching)
تأكد دائماً من ضغط الصور بحسب أبعاد الشاشة الحقيقية (resize in memory)، ولا تقم أبداً بتحميل صور بدقة 4K داخل قائمة مصغرات صغيرة.`,
    contentEn: `In modern mobile development, nothing drives users away faster than a sluggish, dropping-frame UI experience.

1. Master the Threading Model
Never block the main UI thread with heavy JSON deserialization, crypto encryption, or sorting operations. Always delegate heavy computation to Dart Isolates or native background worker threads.

2. Optimize Component Re-rendering
- In Flutter: Use 'const' constructors aggressively to let Flutter reuse element nodes. Split complex builds into smaller stateful boundaries.
- In React Native: Leverage Shopify FlashList for super-fast recycle rendering, and wrap costly child trees with React.memo.

3. Strict Image Asset Management
Resize bitmaps to the exact physical pixel density required on screen before caching in RAM to avoid out-of-memory crashes.`,
    categoryAr: 'أداء وتطوير الجوال',
    categoryEn: 'Mobile Performance',
    readTimeAr: '5 دقائق قراءة',
    readTimeEn: '5 min read',
    date: '2026-03-28',
    authorAr: 'محمد تامر',
    authorEn: 'Mohamed Tamer',
    tags: ['Flutter', 'React Native', 'Performance', 'Mobile Apps']
  },
  {
    id: 'post-2',
    titleAr: 'المعمارية النظيفة (Clean Architecture): لماذا يجب تطبيقها من أول سطر كود؟',
    titleEn: 'Clean Architecture in Mobile & Web: Why It Saves Months of Rework',
    excerptAr: 'كيف تفصل طبقة واجهة المستخدم عن منطق الأعمال وقواعد البيانات لبناء تطبيق سهل التوسع والصيانة.',
    excerptEn: 'How decoupling UI from business logic and data providers guarantees long-term scalability and effortless testing.',
    contentAr: `كثيراً ما يبدأ المطورون المشاريع بحماس ويكتبون استدعاءات الـ API مباشرة داخل الشاشة (Screen Component). بعد شهرين، عندما يطلب العميل تغيير مكتبة إدارة الحالة أو استبدال قاعدة البيانات، يتحول الكود إلى كابوس صيانة!

أعمدة المعمارية النظيفة الثلاثة:
1. طبقة النطاق (Domain Layer): وهي قلب التطبيق المستقل تماماً، تحتوي على الكيانات (Entities) وحالات الاستخدام (Use Cases). لا تعتمد على أي مكتبة خارجية.
2. طبقة البيانات (Data Layer): مسؤولة عن جلب البيانات سواء من السيرفر (Remote Data Source) أو التخزين المحلي (Local Cache) وتنفيذ نماذج البيانات (Models).
3. طبقة العرض (Presentation Layer): واجهة المستخدم فقط (Widgets / Components) ومتحكمات الحالة (Bloc, Cubit, Zustand, ViewModel).

هذا الفصل يتيح لك اختبار كل جزء بمعزل عن البقية، وتغيير أي تقنية بدون لمس باقي النظام.`,
    contentEn: `Many developers start projects in a rush by calling API endpoints directly inside button click handlers. Months later, when requirements shift, maintaining that spaghetti codebase becomes impossible.

The Three Core Pillars of Clean Architecture:
1. Domain Layer: Pure business logic, independent of any UI or database frameworks. Contains Entities and Use Cases.
2. Data Layer: Handles remote API repositories and local SQLite/Hive caching.
3. Presentation Layer: Pure UI widgets and state management reactive controllers (Bloc, Zustand, Riverpod).

This separation makes unit testing trivial and keeps your application agile for years to come.`,
    categoryAr: 'هندسة البرمجيات',
    categoryEn: 'Software Architecture',
    readTimeAr: '7 دقائق قراءة',
    readTimeEn: '7 min read',
    date: '2026-03-15',
    authorAr: 'محمد تامر',
    authorEn: 'Mohamed Tamer',
    tags: ['Clean Architecture', 'Best Practices', 'TypeScript', 'Flutter']
  },
  {
    id: 'post-3',
    titleAr: 'أمان التطبيقات وحماية بيانات المستخدمين: دليل المطور المستقل المحترف',
    titleEn: 'App Security & Data Encryption: The Freelance Developer Guide',
    excerptAr: 'أهم التدابير الأمنية لتشفير البيانات، حماية مفاتيح الـ API، ومنع الهندسة العكسية للتطبيقات.',
    excerptEn: 'Essential security checklist: API key protection, token encryption, and anti-tamper mechanisms.',
    contentAr: `حماية بيانات العملاء ليست ميزة إضافية، بل هي الأساس الذي يبنى عليه نجاح أي تطبيق وسمعة المطور البرمجية.

خطوات عملية لتأمين تطبيقك:
1. لا تضع المفاتيح السرية الحساسة (Private Keys) داخل كود التطبيق المكتبي أو الجوال أبداً؛ استخدم خوادم وسيطة (Backend Proxy).
2. تشفير التخزين المحلي: استخدم Flutter Secure Storage أو EncryptedSharedPreferences على أندرويد و Keychain على نظام iOS.
3. تفعيل تثبيت الشهادة (SSL Pinning) لحماية حركة البيانات من هجمات الرجل في المنتصف (Man-in-the-Middle).
4. التحقق الصارم في جانب الخادم (Server-side validation) وعدم الاعتماد فقط على فحص الواجهة الأمامية.`,
    contentEn: `Security is never an afterthought; it is the fundamental cornerstone of software reliability and client trust.

Key Checklist for App Security:
1. Never hardcode backend private secrets inside client binaries; always route requests via secure server proxies.
2. Encrypted Local Storage: Utilize platform hardware keychains (iOS Keychain and Android Keystore).
3. Implement SSL/TLS Pinning to prevent MITM interception on public networks.
4. Always enforce server-side role validation regardless of client checks.`,
    categoryAr: 'الأمان والحماية',
    categoryEn: 'Cybersecurity',
    readTimeAr: '6 دقائق قراءة',
    readTimeEn: '6 min read',
    date: '2026-02-20',
    authorAr: 'محمد تامر',
    authorEn: 'Mohamed Tamer',
    tags: ['Security', 'Encryption', 'APIs', 'OWASP']
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'م. إبراهيم السعدون',
    company: 'شركة هيدرو للحفر والآبار',
    country: 'المملكة العربية السعودية',
    avatarText: 'إس',
    rating: 5,
    projectTitle: 'تصميم وتطوير موقع احترافي ثنائي اللغة لشركة حفر آبار مياه مع نظام دفع آمن وتحسين SEO كامل',
    commentAr: 'مهندس محمد تامر قدّم عملاً هندسياً متكاملاً فاق التوقعات! سرعة الموقع استثنائية، نظام الدفع الإلكتروني وحاسبة التكلفة تعمل بسلاسة، والموقع تصدر نتائج بحث جوجل في وقت قياسي بفضل تهيئة الـ SEO المتقنة.',
    commentEn: 'Engineer Mohamed Tamer delivered an outstanding web platform! Incredible loading speed, secure payment integrations, and top-tier SEO results on Google.',
    date: '2026-03-24',
    verifiedMostaql: true,
    approved: true
  },
  {
    id: 'rev-2',
    name: 'م. سلطان الشمري',
    company: 'شركة شيب إكسبريس للخدمات اللوجستية',
    country: 'المملكة العربية السعودية (الرياض)',
    avatarText: 'سش',
    rating: 5,
    projectTitle: 'إنشاء موقع الكتروني خاص بشركة شحن سعودية ..... ( ShipExpress )',
    commentAr: 'أفضل مطور تعاملت معه في المشاريع اللوجستية. برمج نظام تتبع الشحنات وحاسبة الأسعار باحترافية عالية جداً، وربط خدمة العملاء والواتساب بسلاسة. ملتزم بالوقت وخلوق وناصح لأبعد حد.',
    commentEn: 'Top-tier software engineer. Built our parcel tracking engine and dynamic shipping rate calculator with immense precision and zero bugs. Highly recommended!',
    date: '2026-03-10',
    verifiedMostaql: true,
    approved: true
  },
  {
    id: 'rev-3',
    name: 'أحمد التميمي',
    company: 'مقهى شباك صهباء',
    country: 'المملكة العربية السعودية',
    avatarText: 'أت',
    rating: 5,
    projectTitle: 'تصميم شعار فاخر لمقهى شباك عربي أصيل – “صهباء” وتحريكه',
    commentAr: 'ذوق فني رفيع وفهم عميق للثقافة والخط العربي الأصيل! الشعار خرج بفخامة تليق بعلامتنا التجارية، وتحريك الشعار كان مبهراً على شاشات الفروع ومنصات التواصل. شكراً جزيلاً مهندس محمد.',
    commentEn: 'Impeccable creative taste and deep understanding of Arabic typography! The logo animation looks cinematic on our digital drive-thru screens.',
    date: '2026-02-18',
    verifiedMostaql: true,
    approved: true
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'سلطان المطيري',
    email: 'sultan.m@gmail.com',
    phone: '+966501234567',
    projectType: 'تطبيق جوال (iOS & Android)',
    budget: '$3,000 - $5,000',
    message: 'السلام عليكم مهندس محمد، نود بناء تطبيق لتوصيل المنتجات الغذائية العضوية داخل الرياض مع ربط بوابات مدى وأبل باي والتتبع الحي.',
    timestamp: '2026-04-01 14:30',
    read: false,
    status: 'new'
  },
  {
    id: 'inq-2',
    name: 'م. طارق العوضي',
    email: 'tareq.eng@outlook.com',
    phone: '+971509876543',
    projectType: 'منصة سحابية ولوحة تحكم ويب',
    budget: '$5,000 - $10,000',
    message: 'مرحباً محمد، نود تطوير نظام ERP سحابي مبسط لإدارة عقود الإيجار والصيانة لشركتنا في دبي مع إمكانية التصدير المحاسبي.',
    timestamp: '2026-03-30 11:15',
    read: true,
    status: 'contacted'
  }
];

export const PROFILE_INFO = {
  nameAr: 'محمد تامر',
  nameEn: 'Mohamed Tamer',
  avatarUrl: '/mohamed_tamer_profile.jpg',
  titleAr: 'مهندس ومصمم برمجيات وتطبيقات أول (Senior App Architect & Full-Stack Engineer)',
  titleEn: 'Senior Application Architect & Full-Stack Mobile Engineer',
  whatsappNumber: '01149556339',
  whatsappFull: '+201149556339',
  whatsappDirectUrl: 'https://wa.me/201149556339?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D9%87%D9%86%D8%AF%D8%B3%20%D9%85%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF%20%D9%85%D8%B9%D9%83',
  mostaqlUrl: 'https://mostaql.com/u/mohamedtamerp/portfolio',
  email: 'bedobebo920@gmail.com',
  githubUrl: 'https://github.com',
  locationAr: 'متاح للعمل عن بُعد مع كافة دول الخليج ومصر والعالم',
  locationEn: 'Available for Remote Worldwide & Gulf Region Projects',
  stats: {
    projectsCompleted: '45+',
    rating: '5.0',
    satisfactionRate: '100%',
    yearsExperience: '5+',
    onTimeDelivery: '100%',
    codeCleanliness: '99.8%'
  },
  skills: [
    { name: 'Flutter & Dart', level: 98, category: 'mobile' },
    { name: 'React Native', level: 95, category: 'mobile' },
    { name: 'Swift (iOS) & Kotlin (Android)', level: 88, category: 'mobile' },
    { name: 'Next.js & React 19', level: 96, category: 'web' },
    { name: 'Node.js & Express / NestJS', level: 94, category: 'backend' },
    { name: 'PostgreSQL & Supabase', level: 92, category: 'database' },
    { name: 'Firebase & Firestore', level: 96, category: 'cloud' },
    { name: 'UI/UX & Figma Prototyping', level: 93, category: 'design' },
    { name: 'Tailwind CSS & Animations', level: 97, category: 'frontend' },
    { name: 'WebSockets & Real-time GPS', level: 94, category: 'realtime' },
    { name: 'Payment Gateways & Security (Apple Pay/Mada/Stripe)', level: 95, category: 'fintech' },
    { name: 'App Store & Google Play Deployment', level: 99, category: 'devops' }
  ]
};

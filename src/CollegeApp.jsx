import { useState } from 'react';

// Color scheme: Slate Blue (#5d7ca3), Warm Gold (#d4a24e), Light Gray (#8b9eb3)

// Translations
const translations = {
  en: {
    nav: { services: 'Services', journey: 'Journey', results: 'Results', team: 'Team', contact: 'Contact' },
    journey: {
      title: 'The 17-Step Journey',
      subtitle: 'Your complete roadmap from freshman year to college admission',
      phases: ['Explore', 'Prepare', 'Apply', 'Decide'],
    },
    hero: {
      tagline: 'Premium College Consulting',
      title: 'Your Path to Top Universities',
      subtitle: 'We guide students through the complex college admissions process with personalized strategies and expert support.',
      cta: 'Book Consultation',
      ctaSecondary: 'Learn More',
      stats: [
        { value: '98%', label: 'Admission Rate' },
        { value: '500+', label: 'Students Helped' },
        { value: '50+', label: 'Top 30 Admits' },
      ]
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive support for every step of your application journey',
      items: [
        {
          title: 'Application Consulting',
          desc: 'Personalized 1-on-1 guidance through the entire application process, from strategy to submission.',
          features: ['Timeline planning', 'Activity optimization', 'Application review']
        },
        {
          title: 'Essay Editing',
          desc: 'Expert feedback on your personal statements and supplemental essays to make your voice shine.',
          features: ['Brainstorming sessions', 'Multiple revisions', 'Native editor review']
        },
        {
          title: 'School Selection',
          desc: 'Data-driven approach to build a balanced school list that matches your profile and goals.',
          features: ['Profile assessment', 'Fit analysis', 'Strategic positioning']
        },
        {
          title: 'Interview Prep',
          desc: 'Mock interviews and coaching to help you present your best self to admissions officers.',
          features: ['Mock sessions', 'Feedback & tips', 'Confidence building']
        },
      ]
    },
    results: {
      title: 'Our Results',
      subtitle: 'Students we have helped have been admitted to top universities worldwide',
      acceptances: 'Recent Acceptances',
      testimonials: 'What Students Say',
    },
    team: {
      title: 'Our Team',
      subtitle: 'Experienced counselors dedicated to your success',
    },
    contact: {
      title: 'Get Started',
      subtitle: 'Book a free consultation to discuss your goals',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        grade: 'Current Grade',
        message: 'Tell us about your goals',
        submit: 'Request Consultation',
        gradeOptions: ['9th Grade', '10th Grade', '11th Grade', '12th Grade', 'Gap Year'],
      },
      info: {
        title: 'Contact Information',
        email: 'contact@edupath.com',
        phone: '+1 (888) 888-8888',
        wechat: 'EduPathConsulting',
        hours: 'Mon-Fri: 9AM - 6PM',
      }
    },
    footer: {
      copyright: '© 2025 EduPath Education. All rights reserved.',
      links: ['Privacy Policy', 'Terms of Service'],
    }
  },
  zh: {
    nav: { services: '服务项目', journey: '申请之路', results: '录取成果', team: '顾问团队', contact: '联系我们' },
    journey: {
      title: '17步申请之路',
      subtitle: '从高一到大学录取的完整规划路线图',
      phases: ['探索', '准备', '申请', '决定'],
    },
    hero: {
      tagline: '高端留学咨询',
      title: '通往顶尖名校之路',
      subtitle: '我们以个性化策略和专业支持，帮助学生顺利完成复杂的大学申请流程。',
      cta: '预约咨询',
      ctaSecondary: '了解更多',
      stats: [
        { value: '98%', label: '录取成功率' },
        { value: '500+', label: '服务学生' },
        { value: '50+', label: 'Top 30录取' },
      ]
    },
    services: {
      title: '服务项目',
      subtitle: '为您的申请之旅提供全方位支持',
      items: [
        {
          title: '申请规划咨询',
          desc: '从策略制定到申请提交，提供个性化一对一全程指导服务。',
          features: ['时间线规划', '活动优化', '申请审核']
        },
        {
          title: '文书润色修改',
          desc: '资深编辑对个人陈述和补充文书进行专业指导，让您的声音脱颖而出。',
          features: ['头脑风暴', '多轮修改', '母语编辑审核']
        },
        {
          title: '选校定位',
          desc: '基于数据的分析方法，建立与您背景和目标匹配的合理选校清单。',
          features: ['背景评估', '匹配度分析', '战略定位']
        },
        {
          title: '面试辅导',
          desc: '模拟面试和专业指导，帮助您在招生官面前展现最好的自己。',
          features: ['模拟面试', '反馈与技巧', '自信心培养']
        },
      ]
    },
    results: {
      title: '录取成果',
      subtitle: '我们辅导的学生已被全球顶尖大学录取',
      acceptances: '最新录取',
      testimonials: '学生评价',
    },
    team: {
      title: '顾问团队',
      subtitle: '经验丰富的顾问致力于您的成功',
    },
    contact: {
      title: '立即开始',
      subtitle: '预约免费咨询，讨论您的目标',
      form: {
        name: '您的姓名',
        email: '电子邮箱',
        phone: '电话号码',
        grade: '当前年级',
        message: '告诉我们您的目标',
        submit: '预约咨询',
        gradeOptions: ['初三', '高一', '高二', '高三', 'Gap Year'],
      },
      info: {
        title: '联系方式',
        email: 'contact@edupath.com',
        phone: '+86 400-888-8888',
        wechat: 'EduPathConsulting',
        hours: '周一至周五: 9:00 - 18:00',
      }
    },
    footer: {
      copyright: '© 2025 EduPath教育咨询 版权所有',
      links: ['隐私政策', '服务条款'],
    }
  }
};

// Data
const SCHOOL_LOGOS = [
  { name: 'Harvard', logo: '/logos/harvard.png' },
  { name: 'Stanford', logo: '/logos/stanford.png' },
  { name: 'MIT', logo: '/logos/mit.png' },
  { name: 'Yale', logo: '/logos/yale.png' },
  { name: 'Princeton', logo: '/logos/princeton.png' },
  { name: 'Columbia', logo: '/logos/columbia.svg' },
  { name: 'Penn', logo: '/logos/penn.png' },
  { name: 'Duke', logo: '/logos/duke.png' },
  { name: 'Northwestern', logo: '/logos/northwestern.svg' },
  { name: 'Berkeley', logo: '/logos/berkeley.png' },
];

const TESTIMONIALS = [
  {
    name: { en: 'Emily Z.', zh: 'Emily Z.' },
    school: { en: 'Harvard University', zh: '哈佛大学' },
    year: '2024',
    quote: {
      en: 'The team helped me discover my unique story and present it authentically. I could not have done it without them.',
      zh: '团队帮助我发现了自己独特的故事并真实地呈现出来。没有他们我做不到。'
    },
    avatar: 'E'
  },
  {
    name: { en: 'Kevin L.', zh: 'Kevin L.' },
    school: { en: 'Stanford University', zh: '斯坦福大学' },
    year: '2024',
    quote: {
      en: 'Their strategic approach to school selection was game-changing. They knew exactly how to position my application.',
      zh: '他们在选校方面的策略性方法改变了一切。他们清楚地知道如何定位我的申请。'
    },
    avatar: 'K'
  },
  {
    name: { en: 'Sarah W.', zh: 'Sarah W.' },
    school: { en: 'MIT', zh: '麻省理工学院' },
    year: '2024',
    quote: {
      en: 'The essay editing process was incredibly thorough. My counselor pushed me to dig deeper and find my authentic voice.',
      zh: '文书修改过程非常细致。我的顾问督促我深入挖掘，找到真实的声音。'
    },
    avatar: 'S'
  },
];

const TEAM_MEMBERS = [
  {
    name: { en: 'Dr. Jennifer Chen', zh: '陈博士' },
    title: { en: 'Founder & Lead Counselor', zh: '创始人 & 首席顾问' },
    bio: { en: 'Harvard MBA, 15+ years in admissions consulting', zh: '哈佛MBA，15年以上招生咨询经验' },
    avatar: 'JC'
  },
  {
    name: { en: 'Michael Thompson', zh: 'Michael Thompson' },
    title: { en: 'Senior Essay Specialist', zh: '资深文书专家' },
    bio: { en: 'Former Princeton admissions reader', zh: '前普林斯顿招生审阅官' },
    avatar: 'MT'
  },
  {
    name: { en: 'Lisa Wang', zh: '王老师' },
    title: { en: 'College Counselor', zh: '升学顾问' },
    bio: { en: 'Yale graduate, specialized in STEM applications', zh: '耶鲁毕业，专注理工科申请' },
    avatar: 'LW'
  },
];

const JOURNEY_STEPS = [
  { phase: 0, title: { en: 'Self-Discovery', zh: '自我探索' }, desc: { en: 'Identify your interests, strengths, and passions', zh: '发现你的兴趣、优势和热情所在' } },
  { phase: 0, title: { en: 'Academic Foundation', zh: '学术基础' }, desc: { en: 'Build strong study habits and maintain good grades', zh: '养成良好学习习惯，保持优异成绩' } },
  { phase: 0, title: { en: 'Activity Exploration', zh: '活动探索' }, desc: { en: 'Try different clubs, sports, and extracurriculars', zh: '尝试不同社团、运动和课外活动' } },
  { phase: 0, title: { en: 'Initial Research', zh: '初步调研' }, desc: { en: 'Start learning about different colleges and programs', zh: '开始了解不同大学和专业项目' } },
  { phase: 1, title: { en: 'Standardized Testing', zh: '标化考试' }, desc: { en: 'Plan and prepare for SAT/ACT and subject tests', zh: '规划和准备SAT/ACT及科目考试' } },
  { phase: 1, title: { en: 'Deepen Activities', zh: '深化活动' }, desc: { en: 'Take leadership roles and show commitment', zh: '担任领导角色，展现持续投入' } },
  { phase: 1, title: { en: 'Summer Programs', zh: '暑期项目' }, desc: { en: 'Pursue meaningful summer experiences', zh: '参与有意义的暑期体验项目' } },
  { phase: 1, title: { en: 'College Visits', zh: '大学参访' }, desc: { en: 'Visit campuses to find the right fit', zh: '参观校园，寻找最适合的学校' } },
  { phase: 1, title: { en: 'Build Relationships', zh: '建立关系' }, desc: { en: 'Connect with teachers for future recommendations', zh: '与老师建立关系，为推荐信做准备' } },
  { phase: 2, title: { en: 'Create School List', zh: '选校定位' }, desc: { en: 'Finalize your balanced college list', zh: '确定合理的选校清单' } },
  { phase: 2, title: { en: 'Essay Brainstorm', zh: '文书构思' }, desc: { en: 'Discover your unique story and voice', zh: '发掘你独特的故事和声音' } },
  { phase: 2, title: { en: 'Draft Essays', zh: '撰写文书' }, desc: { en: 'Write and refine your personal statement', zh: '撰写并打磨个人陈述' } },
  { phase: 2, title: { en: 'Request Recommendations', zh: '申请推荐信' }, desc: { en: 'Ask teachers and counselors for letters', zh: '向老师和顾问索取推荐信' } },
  { phase: 2, title: { en: 'Submit Applications', zh: '提交申请' }, desc: { en: 'Complete and submit all applications on time', zh: '按时完成并提交所有申请' } },
  { phase: 3, title: { en: 'Interview Prep', zh: '面试准备' }, desc: { en: 'Practice for alumni and admissions interviews', zh: '为校友和招生面试做准备' } },
  { phase: 3, title: { en: 'Compare Offers', zh: '比较录取' }, desc: { en: 'Evaluate acceptances and financial aid', zh: '评估录取通知和财务援助' } },
  { phase: 3, title: { en: 'Make Your Choice', zh: '做出选择' }, desc: { en: 'Commit to your dream school', zh: '承诺你的梦想学校' } },
];

// Icons
const Icons = {
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  ),
  Arrow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
    </svg>
  ),
  Email: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  WeChat: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
    </svg>
  ),
};

export default function CollegeApp() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', grade: '', message: '' });

  const t = translations[lang];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Colors: Slate Blue, Warm Gold, Light Gray
  const navy = '#5d7ca3';
  const gold = '#d4a24e';
  const gray = '#8b9eb3';

  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="text-xl font-bold" style={{ color: navy }}>EduPath</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="font-medium transition-colors"
                style={{ color: gray }}
                onMouseEnter={(e) => e.target.style.color = navy}
                onMouseLeave={(e) => e.target.style.color = gray}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded border border-gray-200 hover:border-gray-400 transition-colors"
              style={{ color: gray }}
            >
              <Icons.Globe />
              <span className="text-sm font-medium">{lang === 'en' ? '中文' : 'EN'}</span>
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: navy }}
            >
              {menuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-5 md:hidden">
          <div className="flex flex-col gap-4">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="text-lg font-medium text-left py-3 border-b border-gray-100"
                style={{ color: navy }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-5" style={{ backgroundColor: navy }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span
              className="inline-block px-4 py-1 rounded text-sm font-medium mb-6"
              style={{ backgroundColor: gold, color: navy }}
            >
              {t.hero.tagline}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                className="px-8 py-3 rounded font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: gold, color: navy }}
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.cta}
              </button>
              <button
                className="px-8 py-3 rounded font-semibold border-2 border-white text-white hover:bg-white transition-all"
                style={{ '--hover-color': navy }}
                onMouseEnter={(e) => e.target.style.color = navy}
                onMouseLeave={(e) => e.target.style.color = 'white'}
                onClick={() => scrollToSection('services')}
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {t.hero.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold" style={{ color: gold }}>{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* School logos */}
          <div className="mt-12">
            <p className="text-center text-sm text-gray-400 mb-4">
              {lang === 'en' ? 'Our students have been admitted to' : '我们的学生已被录取'}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {SCHOOL_LOGOS.slice(0, 6).map((school, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-lg flex items-center justify-center p-2"
                  style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
                  title={school.name}
                >
                  <img src={school.logo} alt={school.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: navy }}>{t.services.title}</h2>
            <p style={{ color: gray }}>{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.services.items.map((service, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4 font-bold text-white"
                  style={{ backgroundColor: navy }}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: navy }}>{service.title}</h3>
                <p className="text-sm mb-4" style={{ color: gray }}>{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: gray }}>
                      <span style={{ color: gold }}><Icons.Check /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: navy }}>{t.journey.title}</h2>
            <p style={{ color: gray }}>{t.journey.subtitle}</p>
          </div>

          {/* Phase Labels */}
          <div className="grid grid-cols-4 gap-2 mb-8 max-w-2xl mx-auto">
            {t.journey.phases.map((phase, i) => (
              <div key={i} className="text-center">
                <div
                  className="h-1 rounded mb-2"
                  style={{ backgroundColor: i === 0 ? navy : i === 3 ? gold : '#e2e8f0' }}
                />
                <span className="text-xs font-semibold" style={{ color: navy }}>{phase}</span>
                <p className="text-[10px]" style={{ color: gray }}>
                  {lang === 'en'
                    ? ['Grade 9-10', 'Grade 10-11', 'Grade 11-12', 'Grade 12'][i]
                    : ['9-10年级', '10-11年级', '11-12年级', '12年级'][i]
                  }
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOURNEY_STEPS.map((step, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                style={{ backgroundColor: step.phase === 3 ? '#fffbeb' : 'white' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: step.phase === 3 ? gold : navy }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium" style={{ color: gray }}>
                    {t.journey.phases[step.phase]}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-1" style={{ color: navy }}>{step.title[lang]}</h4>
                <p className="text-xs" style={{ color: gray }}>{step.desc[lang]}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              className="px-8 py-3 rounded font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: navy, color: 'white' }}
              onClick={() => scrollToSection('contact')}
            >
              {lang === 'en' ? 'Start Your Journey' : '开始你的旅程'}
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: navy }}>{t.results.title}</h2>
            <p style={{ color: gray }}>{t.results.subtitle}</p>
          </div>

          {/* Acceptances logos */}
          <div className="mb-12">
            <p className="text-center text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: gray }}>
              {t.results.acceptances}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {SCHOOL_LOGOS.map((school, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-lg flex items-center justify-center p-2 bg-white border border-gray-200"
                  title={school.name}
                >
                  <img src={school.logo} alt={school.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <p className="text-center text-xs font-semibold uppercase tracking-wider mb-6" style={{ color: gray }}>
            {t.results.testimonials}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border-l-4"
                style={{ borderColor: i === 1 ? gold : navy }}
              >
                <p className="text-sm mb-4" style={{ color: gray }}>
                  "{testimonial.quote[lang]}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: i === 1 ? gold : navy }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: navy }}>{testimonial.name[lang]}</p>
                    <p className="text-xs" style={{ color: gray }}>{testimonial.school[lang]} · {testimonial.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: navy }}>{t.team.title}</h2>
            <p style={{ color: gray }}>{t.team.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="text-center p-6 border border-gray-200 rounded-lg">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white text-xl font-bold mb-4"
                  style={{ backgroundColor: i === 0 ? navy : i === 1 ? gold : gray }}
                >
                  {member.avatar}
                </div>
                <h3 className="font-semibold" style={{ color: navy }}>{member.name[lang]}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: gold }}>{member.title[lang]}</p>
                <p className="text-sm mt-2" style={{ color: gray }}>{member.bio[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-5" style={{ backgroundColor: navy }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t.contact.title}</h2>
            <p className="text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Form */}
            <div className="bg-white rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: navy }}>{t.contact.form.name}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: navy }}>{t.contact.form.email}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: navy }}>{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: navy }}>{t.contact.form.grade}</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  >
                    <option value=""></option>
                    {t.contact.form.gradeOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: navy }}>{t.contact.form.message}</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gray-400 h-24 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  className="w-full py-3 rounded font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: gold, color: navy }}
                >
                  {t.contact.form.submit}
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-6">{t.contact.info.title}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: gold }}>
                    <span style={{ color: navy }}><Icons.Email /></span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">{t.contact.info.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: gold }}>
                    <span style={{ color: navy }}><Icons.Phone /></span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{lang === 'en' ? 'Phone' : '电话'}</p>
                    <p className="font-medium">{t.contact.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center" style={{ backgroundColor: gold }}>
                    <span style={{ color: navy }}><Icons.WeChat /></span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WeChat</p>
                    <p className="font-medium">{t.contact.info.wechat}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <p className="text-sm">
                  <span style={{ color: gold }}>{lang === 'en' ? 'Office Hours' : '办公时间'}:</span><br />
                  {t.contact.info.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-5 bg-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">{t.footer.copyright}</p>
          <div className="flex gap-6">
            {t.footer.links.map((link, i) => (
              <a key={i} href="#" className="text-sm text-gray-300 hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

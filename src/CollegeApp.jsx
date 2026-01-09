import { useState } from 'react';

// Stoooges-inspired design: Clean white, bright blue accents, card-based layout

const translations = {
  en: {
    nav: { services: 'Services', journey: 'Journey', team: 'Team', results: 'Results', contact: 'Contact' },
    hero: {
      tagline: 'EDUPATH EDUCATION',
      title: 'Your Path to',
      titleHighlight: 'Top Universities',
      subtitle: 'Expert college consulting with personalized strategies to help you reach your dream school.',
      cta: 'Start Your Journey',
    },
    process: {
      title: 'Our',
      titleHighlight: 'Process',
      phases: ['Planning', 'Application', 'Post-Application'],
      phaseLabels: ['「 Planning Phase 」', '「 Application Season 」', '「 Post-Application 」'],
    },
    journey: {
      title: 'The 17-Step',
      titleHighlight: 'Journey',
      subtitle: 'Your complete roadmap from freshman year to college admission',
      phases: ['Explore', 'Prepare', 'Apply', 'Decide'],
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
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
    team: {
      title: 'Our',
      titleHighlight: 'Team',
      subtitle: 'Experienced counselors from top universities dedicated to your success',
      roles: {
        lead: 'Lead Counselor',
        essay: 'Essay Specialist',
        strategy: 'Strategy Advisor',
      }
    },
    results: {
      title: 'Our',
      titleHighlight: 'Results',
      subtitle: 'Students we\'ve guided have been admitted to the world\'s top universities',
      stats: [
        { value: '98%', label: 'Success Rate' },
        { value: '500+', label: 'Students Helped' },
        { value: '50+', label: 'Top 30 Admits' },
      ]
    },
    contact: {
      title: 'Get',
      titleHighlight: 'Started',
      subtitle: 'Book a free consultation to discuss your goals',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        grade: 'Current Grade',
        message: 'Tell us about your goals',
        submit: 'Book Consultation',
        gradeOptions: ['9th Grade', '10th Grade', '11th Grade', '12th Grade'],
      }
    },
    footer: '© 2025 EduPath Education. All rights reserved.',
  },
  zh: {
    nav: { services: '服务项目', journey: '申请之路', team: '顾问团队', results: '录取成果', contact: '联系我们' },
    hero: {
      tagline: 'EDUPATH 教育',
      title: '通往',
      titleHighlight: '顶尖名校',
      subtitle: '专业的留学咨询服务，为您提供个性化策略，助您圆梦理想学校。',
      cta: '开启申请之旅',
    },
    process: {
      title: '我们的',
      titleHighlight: '流程',
      phases: ['规划期', '申请季', '后申请季'],
      phaseLabels: ['「 规划期 」', '「 申请季 」', '「 后申请季 」'],
    },
    journey: {
      title: '17步',
      titleHighlight: '申请之路',
      subtitle: '从高一到大学录取的完整规划路线图',
      phases: ['探索', '准备', '申请', '决定'],
    },
    services: {
      title: '我们的',
      titleHighlight: '服务',
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
    team: {
      title: '顾问',
      titleHighlight: '团队',
      subtitle: '来自顶尖大学的资深顾问，致力于您的成功',
      roles: {
        lead: '首席顾问',
        essay: '文书专家',
        strategy: '策略顾问',
      }
    },
    results: {
      title: '录取',
      titleHighlight: '成果',
      subtitle: '我们辅导的学生已被全球顶尖大学录取',
      stats: [
        { value: '98%', label: '录取成功率' },
        { value: '500+', label: '服务学生' },
        { value: '50+', label: 'Top 30录取' },
      ]
    },
    contact: {
      title: '立即',
      titleHighlight: '开始',
      subtitle: '预约免费咨询，讨论您的目标',
      form: {
        name: '您的姓名',
        email: '电子邮箱',
        phone: '电话号码',
        grade: '当前年级',
        message: '告诉我们您的目标',
        submit: '预约咨询',
        gradeOptions: ['初三', '高一', '高二', '高三'],
      }
    },
    footer: '© 2025 EduPath教育咨询 版权所有',
  }
};

const TEAM_MEMBERS = [
  {
    name: { en: 'Dr. Jennifer Chen', zh: '陈博士' },
    role: 'lead',
    desc: { en: 'Harvard MBA, 15+ years experience', zh: '哈佛MBA，15年以上经验' },
    color: '#3B82F6'
  },
  {
    name: { en: 'Michael Thompson', zh: 'Michael' },
    role: 'essay',
    desc: { en: 'Former Princeton admissions reader', zh: '前招生官' },
    color: '#60A5FA'
  },
  {
    name: { en: 'Lisa Wang', zh: '王老师' },
    role: 'strategy',
    desc: { en: 'Yale graduate, STEM specialist', zh: '耶鲁毕业，理工科专家' },
    color: '#93C5FD'
  },
];

const SCHOOL_LOGOS = [
  { name: 'Harvard', logo: '/logos/harvard.png' },
  { name: 'Stanford', logo: '/logos/stanford.png' },
  { name: 'MIT', logo: '/logos/mit.png' },
  { name: 'Yale', logo: '/logos/yale.png' },
  { name: 'Princeton', logo: '/logos/princeton.png' },
  { name: 'Columbia', logo: '/logos/columbia.svg' },
  { name: 'Penn', logo: '/logos/penn.png' },
  { name: 'Duke', logo: '/logos/duke.png' },
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

export default function CollegeApp() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', grade: '', message: '' });

  const t = translations[lang];
  const blue = '#3B82F6';

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert(lang === 'en' ? 'Please fill in your name and email.' : '请填写您的姓名和邮箱。');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/liping232@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          grade: formData.grade || 'Not provided',
          message: formData.message || 'No message',
          _subject: `New Consultation Request from ${formData.name}`,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', grade: '', message: '' });
          setSubmitted(false);
        }, 3000);
      } else {
        alert(lang === 'en' ? 'Failed to send. Please try again.' : '发送失败，请重试。');
      }
    } catch (error) {
      alert(lang === 'en' ? 'Failed to send. Please try again.' : '发送失败，请重试。');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', 'Noto Sans SC', -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        .card-shadow { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); }
        .card-shadow-hover:hover { box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15); }
        .blue-underline {
          background: linear-gradient(to top, #3B82F6 30%, transparent 30%);
          padding: 0 4px;
        }
        .outline-number {
          font-size: 72px;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 2px #E5E7EB;
          line-height: 1;
        }
        .dotted-line {
          border-left: 2px dashed #D1D5DB;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: blue }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-gray-800">EduPath</span>
              <span className="text-xs text-gray-400 block -mt-1">EDUCATION</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden">
          {Object.entries(t.nav).map(([key, label]) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="block w-full text-left text-lg font-medium text-gray-800 py-4 border-b border-gray-100"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-5 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: blue }}>
              {t.hero.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}<span className="blue-underline">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: blue }}
            >
              {t.hero.cta}
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg">
            {t.results.stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 card-shadow text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: blue }}>{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-6xl md:text-7xl font-bold text-gray-100 mb-[-40px]">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
              {t.services.title}<span className="blue-underline">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mt-4">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.services.items.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-shadow card-shadow-hover transition-all">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-white"
                  style={{ backgroundColor: blue }}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke={blue} strokeWidth="2" className="w-4 h-4">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section - 17 Steps */}
      <section id="journey" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="text-6xl md:text-7xl font-bold text-gray-100 mb-[-40px]">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
              {t.journey.title}<span className="blue-underline">{t.journey.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mt-4">{t.journey.subtitle}</p>
          </div>

          {/* Phase Tabs */}
          <div className="flex justify-center gap-2 mb-10">
            {t.journey.phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activePhase === i
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
                style={activePhase === i ? { backgroundColor: blue } : {}}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JOURNEY_STEPS.filter(step => step.phase === activePhase).map((step, i) => {
              const globalIndex = JOURNEY_STEPS.findIndex(s => s === step);
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 card-shadow card-shadow-hover transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: blue }}
                    >
                      {globalIndex + 1}
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      {t.journey.phases[step.phase]}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title[lang]}</h4>
                  <p className="text-sm text-gray-500">{step.desc[lang]}</p>
                </div>
              );
            })}
          </div>

          {/* All Steps Overview - Roadmap Style */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

            <div className="relative">
              <h3 className="text-center text-2xl font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'Your College Journey Roadmap' : '你的大学申请路线图'}
              </h3>
              <p className="text-center text-gray-500 mb-8">
                {lang === 'en' ? 'Click any phase to explore the steps' : '点击任意阶段探索详细步骤'}
              </p>

              {/* Phase Headers with Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: '🔍', color: '#10B981', label: lang === 'en' ? 'Explore' : '探索' },
                  { icon: '📚', color: '#F59E0B', label: lang === 'en' ? 'Prepare' : '准备' },
                  { icon: '✍️', color: '#3B82F6', label: lang === 'en' ? 'Apply' : '申请' },
                  { icon: '🎯', color: '#8B5CF6', label: lang === 'en' ? 'Decide' : '决定' },
                ].map((phase, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhase(i)}
                    className={`p-4 rounded-2xl transition-all transform hover:scale-105 ${
                      activePhase === i
                        ? 'bg-white shadow-lg ring-2'
                        : 'bg-white/50 hover:bg-white hover:shadow-md'
                    }`}
                    style={{ ringColor: activePhase === i ? phase.color : 'transparent' }}
                  >
                    <div className="text-3xl mb-2">{phase.icon}</div>
                    <div className="font-bold text-gray-800">{phase.label}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {JOURNEY_STEPS.filter(s => s.phase === i).length} {lang === 'en' ? 'steps' : '步'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-200 rounded-full mb-8 overflow-hidden">
                <div
                  className="absolute h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${((activePhase + 1) / 4) * 100}%`,
                    background: 'linear-gradient(90deg, #10B981, #F59E0B, #3B82F6, #8B5CF6)'
                  }}
                ></div>
                {/* Milestone dots */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-3 border-white transition-all cursor-pointer ${
                      i <= activePhase ? 'bg-blue-500 scale-110' : 'bg-gray-300'
                    }`}
                    style={{ left: `${(i / 3) * 100}%`, transform: 'translate(-50%, -50%)' }}
                    onClick={() => setActivePhase(i)}
                  ></div>
                ))}
              </div>

              {/* Steps Timeline */}
              <div className="space-y-3">
                {[0, 1, 2, 3].map((phaseNum) => {
                  const phaseSteps = JOURNEY_STEPS.filter(s => s.phase === phaseNum);
                  const phaseColors = ['#10B981', '#F59E0B', '#3B82F6', '#8B5CF6'];
                  const phaseIcons = ['🔍', '📚', '✍️', '🎯'];
                  const isActive = activePhase === phaseNum;

                  return (
                    <div
                      key={phaseNum}
                      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                        isActive ? 'bg-white shadow-lg' : 'bg-white/30'
                      }`}
                    >
                      <button
                        onClick={() => setActivePhase(phaseNum)}
                        className="w-full p-4 flex items-center gap-3 text-left"
                      >
                        <span className="text-2xl">{phaseIcons[phaseNum]}</span>
                        <span className="font-bold text-gray-800">{t.journey.phases[phaseNum]}</span>
                        <span className="ml-auto text-gray-400 text-sm">
                          {phaseSteps.length} {lang === 'en' ? 'steps' : '步'}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${isActive ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isActive && (
                        <div className="px-4 pb-4">
                          <div className="flex flex-wrap gap-2">
                            {phaseSteps.map((step, i) => {
                              const globalIndex = JOURNEY_STEPS.findIndex(s => s === step);
                              return (
                                <div
                                  key={i}
                                  className="group flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all cursor-default"
                                >
                                  <span
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                    style={{ backgroundColor: phaseColors[phaseNum] }}
                                  >
                                    {globalIndex + 1}
                                  </span>
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                    {step.title[lang]}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Fun fact footer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">
                  {lang === 'en'
                    ? '✨ Every successful admit started with Step 1!'
                    : '✨ 每一个成功的录取都从第一步开始！'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-6xl md:text-7xl font-bold text-gray-100 mb-[-40px]">Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
              {t.team.title}<span className="blue-underline">{t.team.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mt-4">{t.team.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-shadow card-shadow-hover transition-all">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: member.color }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: blue }}></span>
                      <span className="text-sm font-medium" style={{ color: blue }}>
                        {t.team.roles[member.role]}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900">{member.name[lang]}</h3>
                    <p className="text-sm text-gray-500 mt-1">{member.desc[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-6xl md:text-7xl font-bold text-gray-100 mb-[-40px]">Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
              {t.results.title}<span className="blue-underline">{t.results.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mt-4">{t.results.subtitle}</p>
          </div>

          {/* School Logos */}
          <div className="flex justify-center gap-4 flex-wrap">
            {SCHOOL_LOGOS.map((school, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-2xl bg-white card-shadow flex items-center justify-center p-3 hover:scale-110 transition-transform"
                title={school.name}
              >
                <img src={school.logo} alt={school.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-6xl md:text-7xl font-bold text-gray-100 mb-[-40px]">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
              {t.contact.title}<span className="blue-underline">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 mt-4">{t.contact.subtitle}</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.grade}</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all h-24 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={submitted || submitting}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.02] ${
                    (submitted || submitting) ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  style={{ backgroundColor: submitted ? '#10B981' : blue }}
                >
                  {submitting
                    ? (lang === 'en' ? 'Sending...' : '发送中...')
                    : submitted
                      ? (lang === 'en' ? '✓ Request Sent!' : '✓ 已提交！')
                      : t.contact.form.submit}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-400">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}

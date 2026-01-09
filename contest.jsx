import { useState } from 'react';

export default function ContestWebsite() {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', team: '' });
  const [registered, setRegistered] = useState(false);
  const [registrations, setRegistrations] = useState([
    { id: 1, name: 'Alex Chen', team: 'Phoenix Rising', registeredAt: '2025-01-10' },
    { id: 2, name: 'Maya Rodriguez', team: 'Code Warriors', registeredAt: '2025-01-11' },
    { id: 3, name: 'Jordan Kim', team: 'Byte Force', registeredAt: '2025-01-12' },
  ]);

  const results = [
    { rank: 1, name: 'Sarah Mitchell', team: 'Nova Squad', score: 9850, badge: '🥇' },
    { rank: 2, name: 'David Park', team: 'Quantum Leap', score: 9420, badge: '🥈' },
    { rank: 3, name: 'Emma Thompson', team: 'Digital Storm', score: 9180, badge: '🥉' },
    { rank: 4, name: 'Lucas Silva', team: 'CollegeApp Coders', score: 8760, badge: '' },
    { rank: 5, name: 'Aisha Patel', team: 'Binary Blitz', score: 8520, badge: '' },
    { rank: 6, name: 'Marcus Johnson', team: 'Tech Titans', score: 8340, badge: '' },
    { rank: 7, name: 'Nina Volkov', team: 'Cyber Surge', score: 8100, badge: '' },
    { rank: 8, name: "Ryan O'Brien", team: 'Data Dragons', score: 7890, badge: '' },
  ];

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.team) {
      setRegistrations([...registrations, {
        id: registrations.length + 1,
        name: formData.name,
        team: formData.team,
        registeredAt: new Date().toISOString().split('T')[0]
      }]);
      setRegistered(true);
      setFormData({ name: '', email: '', team: '' });
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .font-display { font-family: 'Bebas Neue', Impact, sans-serif; }
        .font-body { font-family: 'Outfit', system-ui, sans-serif; }
        
        .nav-btn {
          background: transparent;
          border: 2px solid rgba(255, 107, 53, 0.3);
          color: #fff;
          padding: 8px 16px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
        }
        
        .nav-btn:hover, .nav-btn.active {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          border-color: #ff6b35;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
        }
        
        .hero-title {
          font-family: 'Bebas Neue', Impact, sans-serif;
          font-size: 56px;
          font-weight: 400;
          letter-spacing: 6px;
          line-height: 0.9;
          background: linear-gradient(135deg, #fff 0%, #ff6b35 50%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: titleGlow 3s ease-in-out infinite alternate;
        }
        
        @keyframes titleGlow {
          0% { filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.5)); }
          100% { filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.5)); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        
        .input-field {
          width: 100%;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 107, 53, 0.2);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          transition: all 0.3s ease;
          clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        }
        
        .input-field:focus {
          outline: none;
          border-color: #ff6b35;
          background: rgba(255, 107, 53, 0.1);
        }
        
        .input-field::placeholder { color: rgba(255, 255, 255, 0.4); }
        
        .submit-btn {
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          border: none;
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 3px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }
        
        .submit-btn:hover {
          transform: scale(1.02) translateY(-2px);
          box-shadow: 0 12px 35px rgba(255, 107, 53, 0.5);
        }
        
        .card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 107, 53, 0.2);
          backdrop-filter: blur(10px);
          clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
        }
        
        .result-row {
          display: grid;
          grid-template-columns: 50px 1fr 1fr 80px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid transparent;
          transition: all 0.3s ease;
          align-items: center;
        }
        
        .result-row:hover {
          background: rgba(255, 107, 53, 0.1);
          border-left-color: #ff6b35;
          transform: translateX(5px);
        }
        
        .rank-badge {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .rank-1 { background: linear-gradient(135deg, #ffd700, #ffaa00); color: #000; }
        .rank-2 { background: linear-gradient(135deg, #c0c0c0, #a0a0a0); color: #000; }
        .rank-3 { background: linear-gradient(135deg, #cd7f32, #a0522d); color: #fff; }
        .rank-other { background: rgba(255, 255, 255, 0.1); color: #fff; }
        
        .score { 
          font-family: 'Bebas Neue', sans-serif; 
          font-size: 18px; 
          color: #00d4ff; 
          text-shadow: 0 0 15px rgba(0, 212, 255, 0.5); 
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating absolute opacity-10" style={{
          top: '10%', left: '5%', width: '150px', height: '150px',
          background: 'linear-gradient(135deg, #ff6b35, transparent)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          transform: 'rotate(15deg)'
        }} />
        <div className="absolute opacity-10" style={{
          top: '60%', right: '10%', width: '100px', height: '100px',
          border: '2px solid rgba(0, 212, 255, 0.5)',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-4 py-3 flex justify-between items-center" style={{
        background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.98) 0%, rgba(10, 10, 15, 0.9) 100%)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="font-display text-lg tracking-widest" style={{
          background: 'linear-gradient(90deg, #ff6b35, #00d4ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          COLLEGEAPP CHALLENGE
        </div>
        <div className="flex gap-2">
          {['home', 'register', 'results'].map(tab => (
            <button 
              key={tab}
              className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 py-6">
        
        {/* Home */}
        {activeTab === 'home' && (
          <section className="flex flex-col items-center text-center min-h-[60vh] justify-center">
            <div className="font-body text-xs tracking-widest mb-3" style={{ color: '#ff6b35' }}>
              ANNUAL COMPETITION 2025
            </div>
            <h1 className="hero-title">COLLEGEAPP</h1>
            <h1 className="hero-title" style={{ marginTop: '-8px' }}>CHALLENGE</h1>
            <p className="font-body text-sm font-light max-w-sm mt-4 mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Push your limits. Compete with the best. Rise to the top.
            </p>
            
            <div className="flex gap-3">
              <button className="nav-btn active" onClick={() => setActiveTab('register')}>Register Now</button>
              <button className="nav-btn" onClick={() => setActiveTab('results')}>Leaderboard</button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 w-full max-w-md">
              {[
                { value: '500+', label: 'Participants' },
                { value: '$50K', label: 'Prize Pool' },
                { value: '72H', label: 'Duration' }
              ].map((stat, i) => (
                <div key={i} className="card p-4 text-center">
                  <div className="font-display text-2xl" style={{
                    background: 'linear-gradient(135deg, #ff6b35, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.value}
                  </div>
                  <div className="font-body text-xs tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Register */}
        {activeTab === 'register' && (
          <section className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl tracking-widest mb-6 relative inline-block">
              REGISTER
              <span className="absolute bottom-[-6px] left-0 w-1/2 h-1" style={{ background: 'linear-gradient(90deg, #ff6b35, transparent)' }} />
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                {registered ? (
                  <div className="text-center p-4" style={{ 
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 212, 255, 0.05))',
                    border: '2px solid #00d4ff',
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
                  }}>
                    <div className="text-3xl mb-3">✓</div>
                    <h3 className="font-display text-xl tracking-wider mb-2">REGISTERED!</h3>
                    <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Check your email for confirmation.
                    </p>
                    <button className="nav-btn mt-4" onClick={() => setRegistered(false)}>
                      Add Another
                    </button>
                  </div>
                ) : (
                  <>
                    {['name', 'email', 'team'].map(field => (
                      <div key={field} className="mb-4">
                        <label className="font-body text-xs tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                          {field === 'team' ? 'TEAM NAME' : field.toUpperCase()}
                        </label>
                        <input 
                          type={field === 'email' ? 'email' : 'text'}
                          className="input-field"
                          placeholder={`Enter ${field}`}
                          value={formData[field]}
                          onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                        />
                      </div>
                    ))}
                    <button onClick={handleSubmit} className="submit-btn mt-2">REGISTER</button>
                  </>
                )}
              </div>
              
              <div>
                <h3 className="font-display text-lg tracking-wider mb-3" style={{ color: '#ff6b35' }}>
                  PARTICIPANTS ({registrations.length})
                </h3>
                <div className="space-y-2 max-h-64 overflow-auto">
                  {registrations.map((reg) => (
                    <div key={reg.id} className="p-3 transition-all hover:translate-x-1" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderLeft: '3px solid #ff6b35'
                    }}>
                      <div className="font-body font-semibold text-sm">{reg.name}</div>
                      <div className="font-body text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {reg.team}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        {activeTab === 'results' && (
          <section className="max-w-xl mx-auto">
            <h2 className="font-display text-3xl tracking-widest mb-6 relative inline-block">
              LEADERBOARD
              <span className="absolute bottom-[-6px] left-0 w-1/2 h-1" style={{ background: 'linear-gradient(90deg, #ff6b35, transparent)' }} />
            </h2>
            
            {/* Podium */}
            <div className="grid grid-cols-3 gap-3 mb-8 items-end">
              {/* 2nd */}
              <div className="card p-4 text-center" style={{ height: '130px' }}>
                <div className="text-2xl mb-1">🥈</div>
                <div className="font-display text-sm tracking-wide">{results[1].name}</div>
                <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{results[1].team}</div>
                <div className="score mt-1 text-base">{results[1].score.toLocaleString()}</div>
              </div>
              
              {/* 1st */}
              <div className="card p-4 text-center" style={{ 
                height: '160px',
                background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.1), rgba(255,255,255,0.02))',
                borderColor: 'rgba(255, 215, 0, 0.3)'
              }}>
                <div className="text-3xl mb-1">🏆</div>
                <div className="font-display text-base tracking-wider">{results[0].name}</div>
                <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{results[0].team}</div>
                <div className="score text-xl mt-1">{results[0].score.toLocaleString()}</div>
                <div className="font-body text-xs tracking-wider mt-1" style={{ color: '#ffd700' }}>CHAMPION</div>
              </div>
              
              {/* 3rd */}
              <div className="card p-4 text-center" style={{ height: '110px' }}>
                <div className="text-xl mb-1">🥉</div>
                <div className="font-display text-sm tracking-wide">{results[2].name}</div>
                <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{results[2].team}</div>
                <div className="score mt-1 text-base">{results[2].score.toLocaleString()}</div>
              </div>
            </div>

            {/* Full List */}
            <div className="card overflow-hidden">
              <div className="grid font-body text-xs tracking-wider p-3" style={{
                gridTemplateColumns: '50px 1fr 1fr 80px',
                background: 'rgba(255, 107, 53, 0.1)',
                color: 'rgba(255,255,255,0.5)'
              }}>
                <span>RANK</span>
                <span>NAME</span>
                <span>TEAM</span>
                <span className="text-right">SCORE</span>
              </div>
              
              {results.map((r) => (
                <div key={r.rank} className="result-row">
                  <div className={`rank-badge rank-${r.rank <= 3 ? r.rank : 'other'}`}>{r.rank}</div>
                  <div className="font-body font-semibold text-xs">{r.name}</div>
                  <div className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{r.team}</div>
                  <div className="score text-right text-sm">{r.score.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="px-4 py-4 mt-6 flex justify-between items-center font-body text-xs" style={{
        borderTop: '1px solid rgba(255, 107, 53, 0.2)',
        color: 'rgba(255,255,255,0.4)'
      }}>
        <div>© 2025 CollegeApp Challenge</div>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-white transition-colors">Rules</span>
          <span className="cursor-pointer hover:text-white transition-colors">Contact</span>
        </div>
      </footer>
    </div>
  );
}

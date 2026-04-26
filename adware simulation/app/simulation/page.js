'use client';

import { useState, useEffect, useRef } from 'react';

const popupTemplates = [
  {
    title: 'Windows Security Alert',
    icon: '&#128721;',
    text: 'Your PC is infected with 5 dangerous trojans. Call 1-800-FAKE-HELP immediately to prevent data loss.',
    ok: 'Call Now',
    cancel: 'Ignore (Unsafe)'
  },
  {
    title: 'Software Update Required',
    icon: '&#128196;',
    text: 'A critical update for Flash Player is available. Your version is dangerously outdated. Install now to continue browsing.',
    ok: 'Install Update',
    cancel: 'Skip'
  },
  {
    title: 'Congratulations!',
    icon: '&#127881;',
    text: 'You are today\'s lucky visitor! You have won a $1,000 Amazon gift card. Click OK to claim your prize.',
    ok: 'Claim Prize!',
    cancel: 'No Thanks'
  },
  {
    title: 'Privacy Warning',
    icon: '&#128274;',
    text: 'Your browsing data is being exposed to 37 trackers right now. Download PrivacyShield Pro to protect yourself.',
    ok: 'Protect Me',
    cancel: 'Stay Exposed'
  },
  {
    title: 'Virus Removal Tool',
    icon: '&#128027;',
    text: 'WinDefender Pro has detected TROJAN.SPYWARE.KEYLOGGER on your system. Remove it now before your passwords are stolen.',
    ok: 'Remove Now',
    cancel: 'Ignore Risk'
  }
];

export default function Home() {
  const [popups, setPopups] = useState([]);
  const [isAdwareInfoOpen, setIsAdwareInfoOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isUrgentBannerOpen, setIsUrgentBannerOpen] = useState(true);
  
  const popupCountRef = useRef(0);
  const activeIntervals = useRef([]);
  const activeTimeouts = useRef([]);

  const showAdwareInfo = (e) => {
    if (e) e.stopPropagation();
    setIsAdwareInfoOpen(true);
  };

  const closeAdwareInfo = () => {
    setIsAdwareInfoOpen(false);
  };

  const showSignupPage = (e) => {
    if (e) e.stopPropagation();
    setIsSignupOpen(true);
  };

  const closeSignupPage = () => {
    setIsSignupOpen(false);
  };

  const spawnPopup = () => {
    const template = popupTemplates[popupCountRef.current % popupTemplates.length];
    
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    const popupW = 270;
    const popupH = 220;
    const margin = 60;

    const positions = [
      { x: margin, y: margin }, // Top-Left
      { x: viewportW - popupW - margin, y: margin }, // Top-Right
      { x: margin, y: viewportH - popupH - margin }, // Bottom-Left
      { x: viewportW - popupW - margin, y: viewportH - popupH - margin }, // Bottom-Right
      { x: (viewportW - popupW) / 2, y: (viewportH - popupH) / 2 }, // Center
      { x: margin, y: (viewportH - popupH) / 2 }, // Center-Left
      { x: viewportW - popupW - margin, y: (viewportH - popupH) / 2 }, // Center-Right
      { x: (viewportW - popupW) / 2, y: margin }, // Top-Center
      { x: (viewportW - popupW) / 2, y: viewportH - popupH - margin } // Bottom-Center
    ];

    const pos = positions[(popupCountRef.current) % positions.length];
    popupCountRef.current++;

    const left = Math.max(0, pos.x);
    const top  = Math.max(0, pos.y);

    setPopups(prev => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        template,
        left,
        top,
        closing: false
      }
    ]);
  };

  const removePopup = (id) => {
    setPopups(prev => prev.map(p => p.id === id ? { ...p, closing: true } : p));
    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== id));
    }, 420);
  };

  const startAdware = () => {
    // Initial burst of popups
    spawnPopup();
    activeTimeouts.current.push(setTimeout(() => spawnPopup(), 1400));
    activeTimeouts.current.push(setTimeout(() => spawnPopup(), 3200));

    // Ongoing popup spawner every 8 seconds
    activeIntervals.current.push(setInterval(() => {
      spawnPopup();
    }, 8000));
  };

  useEffect(() => {
    startAdware();

    return () => {
      // Cleanup intervals and timeouts to prevent double firing in React Strict Mode
      activeTimeouts.current.forEach(clearTimeout);
      activeIntervals.current.forEach(clearInterval);
    };
  }, []);

  return (
    <>
      {/* Training Badge */}
      <div id="training-badge">CYBERSECURITY TRAINING — SIMULATION ONLY</div>

      {/* Browser Chrome */}
      <div id="browser-chrome">
        <div className="browser-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div id="url-bar" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg style={{ width: '12px', height: '12px', fill: '#94a3b8' }} viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          https://adware-simulation/Overview
        </div>
      </div>

      {/* Urgent System Banner (adware) */}
      {isUrgentBannerOpen && (
        <div id="urgent-banner" className="adware-el">
          <div className="ub-left">
            <span className="ub-icon" dangerouslySetInnerHTML={{ __html: '&#9888;' }}></span>
            <span>URGENT: Your system is infected with 3 viruses! Immediate action required.</span>
          </div>
          <div className="ub-right">
            <button className="ub-btn" onClick={showAdwareInfo}>Fix Now</button>
            <button className="ub-close" onClick={() => setIsUrgentBannerOpen(false)}>&#215;</button>
          </div>
        </div>
      )}

      {/* Infection Tag */}
      <div id="infection-label" className="adware-el" dangerouslySetInnerHTML={{ __html: '&#9888; INFECTED' }}></div>

      {/* Page Content */}
      <div id="page-content">
        {/* Mock Navigation */}
        <nav id="mock-nav">
          <div id="mock-logo">
            <span>🦠</span>
            Adware<span>Simulation</span>
          </div>
          <div className="mock-nav-links">
            <a href="#">Tech</a>
            <a href="#">Science</a>
            <a href="#">Business</a>
            <a href="#">Health</a>
          </div>
        </nav>

        {/* Article Layout */}
        <div id="article-layout">
          {/* Main Article */}
          <div id="article-main">
            <h1 className="article-title">Adware Simulation</h1>
            <div className="article-meta">By jeffery</div>
            <div className="article-body" id="article-body">
              <p>An adware attack occurs when unwanted software is stealthily installed on your system, often bundled with free applications or fake browser extensions. Its primary goal is to aggressively display intrusive advertisements, hijacked banners, and fake system alerts to generate revenue for its creators without your consent.</p>
              <p>Unlike standard website ads, adware embeds itself deep within your computer. It hijacks your search engine results, injects fake sponsored links into legitimate websites you trust, and launches urgent "system alert" pop-ups designed to paralyze your screen and scare you into downloading further malware.</p>
              <p>Modern adware is notoriously difficult to remove manually. It continuously tracks your browsing behavior across the internet, heavily degrades your system's performance, and often opens dangerous privacy backdoors allowing untrusted third-party trackers to harvest your personal data without you knowing.</p>
              <p>The most effective defense against an adware attack is practicing safe downloading habits. Avoid third-party software bundles, never click on unsolicited web alerts claiming your system is infected, read all installation prompts carefully, and utilize robust ad-blocking solutions to intercept malicious scripts early.</p>
            </div>
          </div>

          {/* Sidebar with Fake Ads */}
          <div id="article-sidebar">
            <div className="sidebar-ad-block adware-el" onClick={showSignupPage}>
              <div className="sad-label">ADVERTISEMENT</div>
              <div className="sad-title">PC Running Slow?</div>
              <div className="sad-desc">Download SpeedBoosterPro and fix 847 errors NOW!</div>
              <div className="sad-btn">Download Free</div>
            </div>
            <div className="sidebar-ad-block adware-el" onClick={showSignupPage}>
              <div className="sad-label">SPONSORED</div>
              <div className="sad-title">You've Been Selected!</div>
              <div className="sad-desc">Claim your $500 gift card today. Limited time!</div>
              <div className="sad-btn">Claim Now</div>
            </div>
            <div className="sidebar-ad-block adware-el" onClick={showSignupPage}>
              <div className="sad-label">ADVERTISEMENT</div>
              <div className="sad-title">System Update Needed</div>
              <div className="sad-desc">Install critical driver update v14.2.1 immediately.</div>
              <div className="sad-btn">Update Now</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popups Rendering */}
      {popups.map(popup => (
        <div 
          key={popup.id}
          className="fake-popup adware-el"
          style={{
            left: `${popup.left}px`,
            top: `${popup.top}px`,
            opacity: popup.closing ? 0 : 1,
            pointerEvents: popup.closing ? 'none' : 'auto'
          }}
        >
          <div className="fp-titlebar">
            <span>{popup.template.title}</span>
            <button className="fp-close" title="Close" onClick={() => removePopup(popup.id)}>&#215;</button>
          </div>
          <div className="fp-body" onClick={(e) => {
             // Clicking anywhere in the body that isn't cancel/close triggers signup
             if (!e.target.classList.contains('fp-cancel') && !e.target.classList.contains('fp-close')) {
               showSignupPage(e);
             }
          }}>
            <div className="fp-icon" dangerouslySetInnerHTML={{ __html: popup.template.icon }}></div>
            <div className="fp-title">{popup.template.title}</div>
            <div className="fp-text">{popup.template.text}</div>
            <div className="fp-actions">
              <button className="fp-ok" onClick={showSignupPage}>{popup.template.ok}</button>
              <button className="fp-cancel" onClick={() => removePopup(popup.id)}>{popup.template.cancel}</button>
            </div>
          </div>
        </div>
      ))}

      {/* Fake Signup Page Overlay */}
      <div id="signup-overlay" className={`adware-el ${isSignupOpen ? 'active' : ''}`}>
        <div className="signup-container">
          <button className="signup-close" onClick={closeSignupPage}>&#215;</button>
          <h2>Exclusive Offer Sign Up</h2>
          <p>Please enter your details to claim your reward.</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            showAdwareInfo(e);
            closeSignupPage();
          }}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="signup-submit">Sign Up Now</button>
          </form>
        </div>
      </div>

      {/* Adware Info Modal */}
      <div id="adware-info-overlay" className={isAdwareInfoOpen ? 'active' : ''} onClick={closeAdwareInfo} style={{ display: isAdwareInfoOpen ? 'flex' : 'none' }}>
        <div id="adware-info-modal" onClick={(e) => e.stopPropagation()}>
          <div className="aim-header">
            <span className="aim-icon" dangerouslySetInnerHTML={{ __html: '&#127916;' }}></span>
            <h2>This is Adware!</h2>
            <button className="aim-close" onClick={closeAdwareInfo}>&#215;</button>
          </div>
          <div className="aim-body">
            <div className="aim-badge">TRAINING — SIMULATION ONLY</div>
            <p className="aim-lead">In a real infection, clicking this element could be dangerous.</p>
            <div className="aim-section">
              <h3 dangerouslySetInnerHTML={{ __html: '&#128270; What is Adware?' }}></h3>
              <p>Adware is unwanted software that automatically displays or downloads advertisements when you're online. It often disguises itself as legitimate alerts, prize notifications, or system updates.</p>
            </div>
            <div className="aim-section">
              <h3 dangerouslySetInnerHTML={{ __html: '&#9888; Common Adware Tricks' }}></h3>
              <ul>
                <li>Fake virus alerts to scare you into downloading malicious tools</li>
                <li>Fake prize or gift card pop-ups to steal personal information</li>
                <li>"Critical update" banners that install malware instead of updates</li>
                <li>Injected ads into legitimate websites you trust</li>
              </ul>
            </div>
            <div className="aim-section aim-tip">
              <h3 dangerouslySetInnerHTML={{ __html: '&#128736; What to do instead' }}></h3>
              <p>Never click suspicious pop-ups or banners. Close them using the system task manager if needed. Run a trusted, pre-installed antivirus tool to clean your system.</p>
            </div>
          </div>
          <div className="aim-footer">
            <button className="aim-close-btn" onClick={closeAdwareInfo}>Got it — close this</button>
          </div>
        </div>
      </div>
    </>
  );
}

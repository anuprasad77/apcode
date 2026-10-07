const fs = require('fs');

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>apcode.py — Premium Software Development</title>
  <meta name="description" content="apcode.py builds Android applications, websites, automation solutions, custom software and college projects.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
  
  <!-- AOS Animation CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  
  <link rel="stylesheet" href="style.css">
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>

  <!-- Premium Animated Background -->
  <div class="premium-bg">
    <div class="mesh-glow mesh-1"></div>
    <div class="mesh-glow mesh-2"></div>
    <div class="mesh-glow mesh-3"></div>
    <div class="dots-grid"></div>
  </div>

  <!-- Navbar -->
  <header class="header" id="header" data-aos="fade-down" data-aos-duration="1000">
    <div class="container nav-container">
      <a href="#" class="logo-link"><img src="assets/logo.png" alt="apcode.py logo" class="logo-img"></a>
      <nav class="nav-links">
        <a href="#services" class="hover-underline">Services</a>
        <a href="#process" class="hover-underline">Process</a>
        <a href="#projects" class="hover-underline">Projects</a>
        <a href="#contact" class="btn-neon">Let's Talk</a>
      </nav>
      <button class="mobile-menu-btn" onclick="toggleMenu()">
        <i data-lucide="menu"></i>
      </button>
    </div>
    <div class="mobile-nav" id="mobileNav">
      <a href="#services" onclick="toggleMenu()">Services</a>
      <a href="#process" onclick="toggleMenu()">Process</a>
      <a href="#projects" onclick="toggleMenu()">Projects</a>
      <a href="#contact" onclick="toggleMenu()" class="text-primary">Contact Us</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero relative">
    <div class="container hero-grid">
      <div class="hero-content" data-aos="fade-right" data-aos-duration="1200">
        <div class="badge-premium" data-aos="zoom-in" data-aos-delay="200">
          <span class="pulse-dot"></span> BUILDING THE FUTURE
        </div>
        <h1 class="hero-title">
          Your Idea.<br>
          <span class="text-gradient-animated">Our Code.</span><br>
          Real Solutions.
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
          An elite software studio crafting high-performance Android applications, web platforms, and intelligent automation systems.
        </p>
        <div class="hero-buttons" data-aos="fade-up" data-aos-delay="600">
          <a href="#contact" class="btn-glow">Start a Project <i data-lucide="arrow-right"></i></a>
          <a href="#projects" class="btn-outline-glow">View Work</a>
        </div>
      </div>
      
      <!-- Premium 3D Floating Mockup -->
      <div class="hero-visual" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
        <div class="mockup-3d" data-tilt data-tilt-max="10" data-tilt-speed="400" data-tilt-glare data-tilt-max-glare="0.2">
          <div class="mockup-header">
            <div class="mac-btns"><span></span><span></span><span></span></div>
            <div class="mockup-title">apcode_terminal</div>
          </div>
          <div class="mockup-body font-mono">
            <p class="text-primary">> initializing apcode.py...</p>
            <p class="text-gray delay-1">> loading modules [android, web, AI]</p>
            <p class="text-secondary delay-2">> systems optimal.</p>
            <p class="text-accent delay-3">> ready to build.</p>
            <div class="cursor pulse"></div>
          </div>
          
          <!-- Floating UI Elements -->
          <div class="float-ui ui-1"><i data-lucide="smartphone" class="text-primary"></i> Apps</div>
          <div class="float-ui ui-2"><i data-lucide="code-2" class="text-secondary"></i> Web</div>
          <div class="float-ui ui-3"><i data-lucide="bot" class="text-accent"></i> AI</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Infinite Marquee / Trust Bar -->
  <div class="marquee-container" data-aos="fade-up">
    <div class="marquee-content">
      <span>FAST DEVELOPMENT <i data-lucide="zap" class="inline-icon text-primary"></i></span>
      <span>CUSTOM SOLUTIONS <i data-lucide="settings" class="inline-icon text-secondary"></i></span>
      <span>PREMIUM DESIGN <i data-lucide="palette" class="inline-icon text-accent"></i></span>
      <span>DEDICATED SUPPORT <i data-lucide="headset" class="inline-icon text-primary"></i></span>
      <!-- Duplicate for infinite scroll -->
      <span>FAST DEVELOPMENT <i data-lucide="zap" class="inline-icon text-primary"></i></span>
      <span>CUSTOM SOLUTIONS <i data-lucide="settings" class="inline-icon text-secondary"></i></span>
      <span>PREMIUM DESIGN <i data-lucide="palette" class="inline-icon text-accent"></i></span>
      <span>DEDICATED SUPPORT <i data-lucide="headset" class="inline-icon text-primary"></i></span>
    </div>
  </div>

  <!-- Services Section -->
  <section id="services" class="section">
    <div class="container">
      <div class="section-header text-center" data-aos="fade-up">
        <h2 class="section-title">Digital <span class="text-gradient-animated">Capabilities</span></h2>
        <p class="section-subtitle">We engineer scalable, high-end digital products tailored to your exact needs.</p>
      </div>
      
      <div class="services-grid">
        <div class="premium-card" data-aos="fade-up" data-aos-delay="100" data-tilt data-tilt-max="5" data-tilt-glare data-tilt-max-glare="0.1">
          <div class="card-glow primary"></div>
          <div class="card-icon"><i data-lucide="smartphone"></i></div>
          <h3>Android Apps</h3>
          <p>Native-feeling, highly optimized mobile applications for modern business needs.</p>
        </div>
        <div class="premium-card" data-aos="fade-up" data-aos-delay="200" data-tilt data-tilt-max="5" data-tilt-glare data-tilt-max-glare="0.1">
          <div class="card-glow secondary"></div>
          <div class="card-icon"><i data-lucide="monitor"></i></div>
          <h3>Web Platforms</h3>
          <p>Responsive, lightning-fast web applications built with modern frontend frameworks.</p>
        </div>
        <div class="premium-card" data-aos="fade-up" data-aos-delay="300" data-tilt data-tilt-max="5" data-tilt-glare data-tilt-max-glare="0.1">
          <div class="card-glow accent"></div>
          <div class="card-icon"><i data-lucide="cpu"></i></div>
          <h3>Automation & AI</h3>
          <p>Custom Python scripts, machine learning integrations, and workflow automations.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section id="process" class="section relative">
    <div class="container">
      <div class="grid-2-col align-center">
        <div data-aos="fade-right">
          <h2 class="section-title">Our <span class="text-secondary">Process</span></h2>
          <p class="section-subtitle">A transparent, agile pipeline ensuring your product is delivered on time, exceeding expectations.</p>
          
          <div class="process-list mt-10">
            <div class="process-item" data-aos="fade-up" data-aos-delay="100">
              <div class="process-icon">01</div>
              <div>
                <h4>Discovery & Architecture</h4>
                <p>We map out your idea, choose the best tech stack, and design the database architecture.</p>
              </div>
            </div>
            <div class="process-item" data-aos="fade-up" data-aos-delay="200">
              <div class="process-icon">02</div>
              <div>
                <h4>UI/UX & Prototyping</h4>
                <p>Crafting premium, user-centric interfaces before writing a single line of code.</p>
              </div>
            </div>
            <div class="process-item" data-aos="fade-up" data-aos-delay="300">
              <div class="process-icon">03</div>
              <div>
                <h4>Agile Development</h4>
                <p>Building your product with clean, scalable code and regular progress updates.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="process-visual" data-aos="zoom-in" data-aos-delay="200">
          <div class="hologram-circle">
            <div class="circle-inner"></div>
            <div class="circle-core"><i data-lucide="code-2" size="48" class="text-secondary"></i></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- College Projects (Special Section) -->
  <section class="section">
    <div class="container" data-aos="fade-up">
      <div class="glass-banner">
        <div class="banner-content">
          <h2>Academic & College Projects 🎓</h2>
          <p>We provide exclusive support for IT/CS students. Get custom-built final year projects complete with source code, documentation, and technical explanation.</p>
          <div class="tags mt-6">
            <span class="premium-tag">Machine Learning</span>
            <span class="premium-tag">Full-Stack Web</span>
            <span class="premium-tag">Data Science</span>
            <span class="premium-tag">Android</span>
          </div>
        </div>
        <div class="banner-action">
          <a href="#contact" class="btn-glow">Get Project Help</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Recent Projects -->
  <section id="projects" class="section bg-darker">
    <div class="container">
      <div class="section-header text-center" data-aos="fade-up">
        <h2 class="section-title">Featured <span class="text-gradient-animated">Work</span></h2>
      </div>
      
      <div class="projects-showcase">
        <!-- Project 1 -->
        <div class="project-row" data-aos="fade-up">
          <div class="project-image-wrapper" data-tilt data-tilt-max="3" data-tilt-glare data-tilt-max-glare="0.2">
            <div class="project-overlay">
              <i data-lucide="arrow-up-right" class="project-icon"></i>
            </div>
            <div class="project-placeholder bg-gradient-1"></div>
          </div>
          <div class="project-info">
            <div class="project-type text-primary">Web Platform</div>
            <h3>Enterprise Analytics Dashboard</h3>
            <p>A high-performance data visualization platform handling real-time metrics for business intelligence.</p>
            <div class="tech-stack">
              <span>React</span><span>Node.js</span><span>PostgreSQL</span>
            </div>
          </div>
        </div>
        
        <!-- Project 2 -->
        <div class="project-row reverse" data-aos="fade-up">
          <div class="project-image-wrapper" data-tilt data-tilt-max="3" data-tilt-glare data-tilt-max-glare="0.2">
            <div class="project-overlay">
              <i data-lucide="arrow-up-right" class="project-icon"></i>
            </div>
            <div class="project-placeholder bg-gradient-2"></div>
          </div>
          <div class="project-info">
            <div class="project-type text-secondary">AI / Machine Learning</div>
            <h3>Computer Vision Automator</h3>
            <p>Custom Python software utilizing TensorFlow to automate quality assurance via live camera feeds.</p>
            <div class="tech-stack">
              <span>Python</span><span>TensorFlow</span><span>OpenCV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section relative">
    <div class="contact-bg-glow"></div>
    <div class="container relative z-10">
      <div class="contact-wrapper" data-aos="zoom-in-up" data-aos-duration="1000">
        <div class="contact-info">
          <h2>Ready to <br><span class="text-gradient-animated">Innovate?</span></h2>
          <p>Drop us a message. We usually respond within a few hours.</p>
          
          <div class="contact-methods mt-10">
            <a href="mailto:apcode77.py@gmail.com" class="method-card">
              <div class="method-icon"><i data-lucide="mail"></i></div>
              <div>
                <h4>Email</h4>
                <p>apcode77.py@gmail.com</p>
              </div>
            </a>
            <a href="https://instagram.com/apcode.py" target="_blank" class="method-card">
              <div class="method-icon"><i data-lucide="instagram"></i></div>
              <div>
                <h4>Instagram</h4>
                <p>@apcode.py</p>
              </div>
            </a>
          </div>
        </div>
        
        <div class="contact-form-container">
          <form class="premium-form" onsubmit="event.preventDefault();">
            <div class="form-grid">
              <div class="input-group">
                <input type="text" required placeholder=" ">
                <label>Your Name</label>
              </div>
              <div class="input-group">
                <input type="email" required placeholder=" ">
                <label>Email Address</label>
              </div>
            </div>
            <div class="input-group">
              <select required>
                <option value="" disabled selected>Select Project Type</option>
                <option>Android App Development</option>
                <option>Web Platform</option>
                <option>Automation / AI</option>
                <option>College / Academic Project</option>
                <option>Other Custom Software</option>
              </select>
            </div>
            <div class="input-group">
              <textarea required rows="4" placeholder=" "></textarea>
              <label>Tell us about your project requirements...</label>
            </div>
            <button class="btn-glow w-full">Send Request <i data-lucide="send" size="18"></i></button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/logo.png" alt="apcode.py logo" class="logo-img-footer mb-4">
          <p class="footer-tagline">Elite software development studio crafting digital experiences that perform.</p>
        </div>
        <div class="footer-links">
          <h4>Navigation</h4>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="footer-social">
          <h4>Connect</h4>
          <div class="social-icons">
            <a href="https://instagram.com/apcode.py" target="_blank"><i data-lucide="instagram"></i></a>
            <a href="mailto:apcode77.py@gmail.com"><i data-lucide="mail"></i></a>
            <a href="https://github.com" target="_blank"><i data-lucide="github"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span id="year"></span> apcode.py. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"></script>
  <script>
    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize Animate On Scroll
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-out-cubic',
    });

    // Current Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile Menu
    const mobileNav = document.getElementById('mobileNav');
    function toggleMenu() {
      mobileNav.classList.toggle('active');
    }
  </script>
</body>
</html>`;

const styleCss = `
:root {
  --bg-main: #030305;
  --bg-card: rgba(10, 10, 15, 0.6);
  --bg-card-hover: rgba(15, 15, 25, 0.8);
  
  --text-main: #ffffff;
  --text-muted: #8b8b99;
  
  --primary: #00E5FF;
  --secondary: #8A2BE2;
  --accent: #FF007F;
  
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-glow: rgba(255, 255, 255, 0.15);
  
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Outfit', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
a { text-decoration: none; color: inherit; }
button { background: none; border: none; font-family: inherit; cursor: pointer; }

/* Utilities */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.text-accent { color: var(--accent); }
.text-gray { color: var(--text-muted); }
.mt-6 { margin-top: 24px; }
.mt-10 { margin-top: 40px; }
.mb-4 { margin-bottom: 16px; }
.w-full { width: 100%; }
.font-mono { font-family: 'Courier New', Courier, monospace; }

/* Typography Gradients */
.text-gradient-animated {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 5s linear infinite;
}

@keyframes shine {
  to { background-position: 200% center; }
}

/* Background */
.premium-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: var(--bg-main);
  overflow: hidden;
}

.mesh-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  mix-blend-mode: screen;
  animation: float-slow 20s infinite ease-in-out alternate;
}

.mesh-1 { width: 600px; height: 600px; background: var(--primary); top: -200px; left: -200px; }
.mesh-2 { width: 500px; height: 500px; background: var(--secondary); bottom: -100px; right: -100px; animation-delay: -5s; }
.mesh-3 { width: 400px; height: 400px; background: var(--accent); top: 40%; left: 40%; animation-delay: -10s; }

@keyframes float-slow {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(50px, 50px) scale(1.1); }
}

.dots-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);
}

/* Navbar */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 24px 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.header.scrolled {
  padding: 16px 0;
  background: rgba(3, 3, 5, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img { max-height: 36px; max-width: 150px; display: block; }
.logo-img-footer { max-height: 48px; max-width: 200px; display: block; }

.nav-links {
  display: none;
  align-items: center;
  gap: 40px;
}
@media (min-width: 768px) { .nav-links { display: flex; } }

.hover-underline {
  position: relative;
  font-weight: 500;
  color: #ccc;
  transition: color 0.3s;
}
.hover-underline:hover { color: #fff; }
.hover-underline::after {
  content: '';
  position: absolute;
  width: 0; height: 2px;
  bottom: -4px; left: 0;
  background: var(--primary);
  transition: width 0.3s ease;
}
.hover-underline:hover::after { width: 100%; }

/* Buttons */
.btn-neon {
  padding: 10px 24px;
  border-radius: 99px;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.3);
  color: var(--primary);
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 0 15px transparent;
}
.btn-neon:hover {
  background: rgba(0, 229, 255, 0.2);
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  transform: translateY(-2px);
}

.btn-glow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 36px;
  border-radius: 99px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 700;
  font-size: 16px;
  border: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px -10px var(--primary);
}
.btn-glow:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 15px 40px -10px var(--secondary);
}

.btn-outline-glow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 36px;
  border-radius: 99px;
  background: transparent;
  border: 1px solid var(--border-glow);
  color: white;
  font-weight: 600;
  transition: all 0.3s;
}
.btn-outline-glow:hover {
  border-color: var(--primary);
  background: rgba(0, 229, 255, 0.05);
}

/* Mobile Menu */
.mobile-menu-btn { display: block; color: white; }
@media (min-width: 768px) { .mobile-menu-btn { display: none; } }
.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 24px;
  background: rgba(3, 3, 5, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
  gap: 20px;
  position: absolute;
  top: 100%; left: 0; width: 100%;
}
.mobile-nav.active { display: flex; }

/* Sections */
.section { padding: 120px 0; }
.section-title { font-size: 40px; font-weight: 700; margin-bottom: 16px; letter-spacing: -1px; }
@media (min-width: 768px) { .section-title { font-size: 56px; } }
.section-subtitle { color: var(--text-muted); font-size: 18px; max-width: 600px; line-height: 1.8; }
.text-center .section-subtitle { margin: 0 auto; }

/* Hero */
.hero { padding: 200px 0 100px; min-height: 100vh; display: flex; align-items: center; }
.hero-grid { display: grid; gap: 64px; align-items: center; }
@media (min-width: 1024px) { .hero-grid { grid-template-columns: 1fr 1fr; } }

.badge-premium {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  border-radius: 99px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
}
.pulse-dot {
  width: 8px; height: 8px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--primary);
  animation: blink 2s infinite;
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

.hero-title { font-size: 56px; line-height: 1.1; margin-bottom: 24px; letter-spacing: -1.5px; }
@media (min-width: 1024px) { .hero-title { font-size: 80px; } }
.hero-subtitle { font-size: 20px; margin-bottom: 40px; }
.hero-buttons { display: flex; gap: 20px; flex-wrap: wrap; }

/* 3D Mockup */
.mockup-3d {
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  aspect-ratio: 1;
  background: rgba(10, 10, 15, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.1);
  backdrop-filter: blur(20px);
  transform-style: preserve-3d;
}
.mockup-header {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 16px;
  margin-bottom: 24px;
}
.mac-btns { display: flex; gap: 8px; }
.mac-btns span { width: 12px; height: 12px; border-radius: 50%; background: #333; }
.mac-btns span:nth-child(1) { background: #ff5f56; }
.mac-btns span:nth-child(2) { background: #ffbd2e; }
.mac-btns span:nth-child(3) { background: #27c93f; }
.mockup-title { font-family: var(--font-body); font-size: 14px; color: #888; font-weight: 500; }
.mockup-body p { margin-bottom: 12px; font-size: 15px; letter-spacing: 0.5px; opacity: 0; animation: typeIn 0.5s forwards; }
.mockup-body .delay-1 { animation-delay: 0.8s; }
.mockup-body .delay-2 { animation-delay: 1.6s; }
.mockup-body .delay-3 { animation-delay: 2.4s; }
.cursor { display: inline-block; width: 10px; height: 18px; background: var(--primary); vertical-align: middle; margin-left: 8px; }

@keyframes typeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

.float-ui {
  position: absolute;
  background: rgba(15, 15, 20, 0.9);
  border: 1px solid var(--border-glow);
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
  transform: translateZ(50px);
  animation: float-ui 6s ease-in-out infinite;
}
.ui-1 { top: -20px; right: -20px; animation-delay: 0s; }
.ui-2 { bottom: 40px; left: -30px; animation-delay: 1.5s; }
.ui-3 { bottom: -20px; right: 40px; animation-delay: 3s; }
@keyframes float-ui { 0%, 100% { transform: translateZ(50px) translateY(0); } 50% { transform: translateZ(50px) translateY(-15px); } }

/* Marquee */
.marquee-container {
  overflow: hidden;
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  white-space: nowrap;
  display: flex;
}
.marquee-content {
  display: flex;
  animation: marquee 20s linear infinite;
}
.marquee-content span {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  padding: 0 40px;
  letter-spacing: 2px;
}
.inline-icon { opacity: 0.8; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* Services */
.services-grid { display: grid; gap: 32px; margin-top: 64px; }
@media (min-width: 768px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }

.premium-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 40px;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s;
  transform-style: preserve-3d;
}
.premium-card:hover { border-color: var(--border-glow); background: var(--bg-card-hover); }
.card-glow {
  position: absolute;
  top: 0; right: 0;
  width: 150px; height: 150px;
  filter: blur(50px);
  opacity: 0.1;
  border-radius: 50%;
  transition: opacity 0.4s;
}
.premium-card:hover .card-glow { opacity: 0.3; }
.card-glow.primary { background: var(--primary); }
.card-glow.secondary { background: var(--secondary); }
.card-glow.accent { background: var(--accent); }

.card-icon {
  width: 64px; height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border: 1px solid var(--border-subtle);
  transform: translateZ(30px);
}
.premium-card h3 { font-size: 24px; margin-bottom: 16px; transform: translateZ(20px); }
.premium-card p { color: var(--text-muted); transform: translateZ(10px); }

/* Process */
.grid-2-col { display: grid; gap: 64px; }
@media (min-width: 1024px) { .grid-2-col { grid-template-columns: 1fr 1fr; } }
.align-center { align-items: center; }

.process-list { display: flex; flex-direction: column; gap: 32px; }
.process-item { display: flex; gap: 24px; }
.process-icon {
  width: 48px; height: 48px;
  border-radius: 50%;
  background: rgba(138, 43, 226, 0.1);
  color: var(--secondary);
  border: 1px solid rgba(138, 43, 226, 0.3);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-family: var(--font-heading);
  flex-shrink: 0;
}
.process-item h4 { font-size: 20px; margin-bottom: 8px; }
.process-item p { color: var(--text-muted); }

.process-visual { display: flex; justify-content: center; }
.hologram-circle {
  width: 300px; height: 300px;
  border-radius: 50%;
  border: 1px dashed rgba(138, 43, 226, 0.4);
  position: relative;
  display: flex; align-items: center; justify-content: center;
  animation: spin 20s linear infinite;
}
.circle-inner {
  width: 200px; height: 200px;
  border-radius: 50%;
  border: 2px solid rgba(0, 229, 255, 0.2);
  animation: spin-reverse 15s linear infinite;
}
.circle-core {
  position: absolute;
  width: 100px; height: 100px;
  border-radius: 50%;
  background: rgba(138, 43, 226, 0.1);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 50px rgba(138, 43, 226, 0.4);
  animation: none;
}
@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes spin-reverse { 100% { transform: rotate(-360deg); } }

/* College Banner */
.glass-banner {
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
  border: 1px solid var(--border-glow);
  border-radius: 32px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  overflow: hidden;
}
@media (min-width: 1024px) {
  .glass-banner { flex-direction: row; justify-content: space-between; align-items: center; }
}
.glass-banner::before {
  content: '';
  position: absolute; top: -50%; right: -20%;
  width: 100%; height: 200%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 60%);
}
.banner-content { flex: 1; max-width: 600px; position: relative; z-index: 10; }
.banner-content h2 { font-size: 32px; margin-bottom: 16px; }
.banner-content p { color: var(--text-muted); font-size: 18px; }
.premium-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  font-size: 14px;
  margin-right: 8px; margin-bottom: 8px;
}
.banner-action { position: relative; z-index: 10; }

/* Projects */
.bg-darker { background: #010102; border-top: 1px solid var(--border-subtle); }
.projects-showcase { display: flex; flex-direction: column; gap: 120px; margin-top: 64px; }
.project-row {
  display: grid; gap: 48px; align-items: center;
}
@media (min-width: 1024px) {
  .project-row { grid-template-columns: 1.2fr 1fr; }
  .project-row.reverse { grid-template-columns: 1fr 1.2fr; }
  .project-row.reverse .project-image-wrapper { order: 2; }
  .project-row.reverse .project-info { order: 1; }
}

.project-image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 16/9;
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  transform-style: preserve-3d;
}
.project-placeholder { width: 100%; height: 100%; }
.bg-gradient-1 { background: linear-gradient(45deg, #1a1a2e, #16213e); }
.bg-gradient-2 { background: linear-gradient(45deg, #0f2027, #203a43); }

.project-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.4s;
  backdrop-filter: blur(5px);
}
.project-image-wrapper:hover .project-overlay { opacity: 1; }
.project-icon { width: 64px; height: 64px; background: white; color: black; border-radius: 50%; padding: 16px; transform: scale(0.5) translateZ(40px); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.project-image-wrapper:hover .project-icon { transform: scale(1) translateZ(40px); }

.project-info { padding: 24px 0; }
.project-type { font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-size: 12px; margin-bottom: 16px; font-family: var(--font-heading); }
.project-info h3 { font-size: 32px; margin-bottom: 24px; }
.project-info p { color: var(--text-muted); font-size: 18px; margin-bottom: 32px; }
.tech-stack { display: flex; gap: 12px; flex-wrap: wrap; }
.tech-stack span { padding: 6px 16px; background: rgba(255, 255, 255, 0.05); border-radius: 99px; font-size: 14px; border: 1px solid var(--border-subtle); }

/* Contact Form */
.contact-bg-glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 100%, rgba(0, 229, 255, 0.1), transparent 60%); z-index: 1; }
.contact-wrapper {
  display: grid; gap: 64px;
  background: var(--bg-card);
  border: 1px solid var(--border-glow);
  border-radius: 32px;
  padding: 40px;
  backdrop-filter: blur(20px);
}
@media (min-width: 1024px) { .contact-wrapper { grid-template-columns: 1fr 1fr; padding: 80px; } }

.contact-info h2 { font-size: 48px; margin-bottom: 16px; }
.contact-info p { font-size: 18px; color: var(--text-muted); }

.method-card {
  display: flex; align-items: center; gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  margin-bottom: 16px;
  transition: all 0.3s;
}
.method-card:hover { background: rgba(255, 255, 255, 0.06); border-color: var(--border-glow); transform: translateX(10px); }
.method-icon { width: 50px; height: 50px; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary); }

.premium-form { display: flex; flex-direction: column; gap: 24px; }
.form-grid { display: grid; gap: 24px; }
@media (min-width: 768px) { .form-grid { grid-template-columns: 1fr 1fr; } }

.input-group { position: relative; }
.input-group input, .input-group textarea, .input-group select {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 16px 20px;
  color: white;
  font-family: inherit;
  font-size: 16px;
  transition: border-color 0.3s;
}
.input-group select { appearance: none; color: #8b8b99; }
.input-group input:focus, .input-group textarea:focus, .input-group select:focus {
  outline: none; border-color: var(--primary);
}
.input-group label {
  position: absolute;
  top: 16px; left: 20px;
  color: var(--text-muted);
  transition: all 0.3s;
  pointer-events: none;
}
.input-group input:focus ~ label, .input-group input:not(:placeholder-shown) ~ label,
.input-group textarea:focus ~ label, .input-group textarea:not(:placeholder-shown) ~ label {
  top: -10px; left: 16px;
  font-size: 12px;
  padding: 0 8px;
  background: var(--bg-main);
  color: var(--primary);
  border-radius: 4px;
}

/* Footer */
.footer { border-top: 1px solid var(--border-subtle); padding-top: 80px; padding-bottom: 40px; background: #010101; }
.footer-grid { display: grid; gap: 48px; margin-bottom: 64px; }
@media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; } }

.footer-tagline { color: var(--text-muted); max-width: 300px; }
.footer-links h4, .footer-social h4 { font-family: var(--font-heading); margin-bottom: 24px; font-size: 18px; }
.footer-links a { display: block; color: var(--text-muted); margin-bottom: 12px; transition: color 0.3s; }
.footer-links a:hover { color: var(--primary); }

.social-icons { display: flex; gap: 16px; }
.social-icons a { width: 48px; height: 48px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.social-icons a:hover { background: var(--primary); color: #000; transform: translateY(-4px); }

.footer-bottom { text-align: center; color: var(--text-muted); font-size: 14px; border-top: 1px solid var(--border-subtle); padding-top: 32px; }
`;

fs.writeFileSync('c:/Users/anoop/OneDrive/Desktop/apcode/index.html', indexHtml.trim() + '\n');
fs.writeFileSync('c:/Users/anoop/OneDrive/Desktop/apcode/style.css', styleCss.trim() + '\n');
console.log('Premium build generated successfully.');

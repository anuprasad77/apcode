const fs = require('fs');

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>apcode.py — Software Development & Digital Solutions</title>
  <meta name="description" content="apcode.py builds Android applications, websites, automation solutions, custom software and college projects.">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="style.css">
  
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>

  <!-- Background Gradients -->
  <div class="fixed-bg">
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>
    <div class="bg-glow bg-glow-3"></div>
    <div class="bg-grid"></div>
  </div>

  <!-- Navbar -->
  <header class="header" id="header">
    <div class="container nav-container">
      <a href="#"><img src="assets/logo.png" alt="apcode.py logo" class="logo-img"></a>
      <nav class="nav-links">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#projects">Projects</a>
        <a href="#contact" class="btn-outline">Contact Us</a>
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
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <div class="badge">🚀 BUILD • AUTOMATE • INNOVATE</div>
        <h1 class="hero-title">
          Your Idea.<br>
          Our <span class="text-gradient">Code.</span><br>
          Real <span class="text-gradient">Solutions.</span>
        </h1>
        <p class="hero-subtitle">
          We build modern apps, websites, automation systems and custom software that turn ideas into real-world solutions.
        </p>
        <div class="hero-buttons">
          <a href="#contact" class="btn-primary">Start Your Project <i data-lucide="arrow-right"></i></a>
          <a href="#services" class="btn-secondary">Explore Services</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="mockup-container">
          <div class="mockup-glow"></div>
          <div class="glass-card mockup-card">
            <div class="mockup-header">
              <i data-lucide="terminal" class="text-primary"></i>
              <span class="font-mono">~/apcode.py/dashboard</span>
            </div>
            <div class="mockup-body">
              <div class="mockup-line w-75 pulse"></div>
              <div class="mockup-line w-50 pulse delay-1"></div>
              <div class="mockup-line w-85 pulse delay-2"></div>
              <div class="mockup-grid">
                <div class="mockup-box box-1"></div>
                <div class="mockup-box box-2"></div>
              </div>
            </div>
          </div>
          <div class="floating-label label-1">Android Apps</div>
          <div class="floating-label label-2">Web Apps</div>
          <div class="floating-label label-3">Automation</div>
          <div class="floating-label label-4">AI & Data</div>
          <div class="floating-label label-5">College Projects</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Bar -->
  <div class="trust-bar">
    <div class="container">
      <div class="trust-title">Built for Ideas. Designed for Impact.</div>
      <div class="trust-grid">
        <div class="trust-item">
          <i data-lucide="zap" class="text-primary"></i>
          <span>Fast Development</span>
        </div>
        <div class="trust-item">
          <i data-lucide="settings" class="text-secondary"></i>
          <span>Custom Solutions</span>
        </div>
        <div class="trust-item">
          <i data-lucide="graduation-cap" class="text-accent"></i>
          <span>Student Friendly</span>
        </div>
        <div class="trust-item">
          <i data-lucide="headset" class="text-primary"></i>
          <span>Dedicated Support</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Services Section -->
  <section id="services" class="section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">What We <span class="text-gradient">Build</span></h2>
        <p class="section-subtitle">From student projects to business software, we turn requirements into working products.</p>
      </div>
      <div class="services-grid">
        <div class="glass-card service-card">
          <div class="service-icon text-primary bg-primary-light"><i data-lucide="smartphone"></i></div>
          <h3>Android Applications</h3>
          <p>Modern Android applications designed around your users and business requirements.</p>
          <a href="#contact" class="service-link">Build an App <i data-lucide="arrow-right"></i></a>
        </div>
        <div class="glass-card service-card">
          <div class="service-icon text-secondary bg-secondary-light"><i data-lucide="globe"></i></div>
          <h3>Websites & Web Apps</h3>
          <p>Fast, responsive and modern websites and web applications.</p>
          <a href="#contact" class="service-link">Build a Website <i data-lucide="arrow-right"></i></a>
        </div>
        <div class="glass-card service-card">
          <div class="service-icon text-accent bg-accent-light"><i data-lucide="cpu"></i></div>
          <h3>Automation Solutions</h3>
          <p>Eliminate repetitive work with intelligent automation and custom tools.</p>
          <a href="#contact" class="service-link">Automate Work <i data-lucide="arrow-right"></i></a>
        </div>
        <div class="glass-card service-card">
          <div class="service-icon text-primary bg-primary-light"><i data-lucide="graduation-cap"></i></div>
          <h3>College Projects</h3>
          <p>Final-year, mini and major projects with development guidance and technical support.</p>
          <a href="#contact" class="service-link">Start Project <i data-lucide="arrow-right"></i></a>
        </div>
        <div class="glass-card service-card">
          <div class="service-icon text-secondary bg-secondary-light"><i data-lucide="code-2"></i></div>
          <h3>Custom Software</h3>
          <p>Dashboards, APIs, databases and software built around your exact requirements.</p>
          <a href="#contact" class="service-link">Discuss Your Idea <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section id="process" class="section border-y bg-subtle">
    <div class="container relative">
      <div class="section-header">
        <h2 class="section-title">From Idea <span class="text-primary">→</span> Reality</h2>
        <p class="section-subtitle">Our streamlined process ensures transparency and quality.</p>
      </div>
      <div class="process-wrapper">
        <div class="process-line"></div>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number text-gradient border-secondary">01</div>
            <h3>Your Idea</h3>
            <p>Tell us what you want to build.</p>
          </div>
          <div class="process-step">
            <div class="step-number text-gradient border-secondary">02</div>
            <h3>Planning</h3>
            <p>We understand requirements and create the solution structure.</p>
          </div>
          <div class="process-step">
            <div class="step-number text-gradient border-secondary">03</div>
            <h3>Design</h3>
            <p>We create the UI/UX and product experience.</p>
          </div>
          <div class="process-step">
            <div class="step-number text-gradient border-secondary">04</div>
            <h3>Development</h3>
            <p>We build, integrate APIs and connect databases.</p>
          </div>
          <div class="process-step">
            <div class="step-number text-gradient border-secondary">05</div>
            <h3>Launch</h3>
            <p>Test, deploy and help you get your product live.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- College Projects Section -->
  <section class="section">
    <div class="container">
      <div class="glass-card college-projects-card relative border-primary">
        <div class="bg-glow college-glow"></div>
        <div class="college-grid relative z-10">
          <div>
            <h2 class="section-title">Have a College Project Idea? 🎓</h2>
            <p class="section-subtitle">Don't know where to start? We help students transform project ideas into working applications.</p>
            
            <div class="mt-8">
              <h4 class="text-white font-bold mb-4">What's Included:</h4>
              <ul class="includes-list">
                <li><i data-lucide="check-circle-2" class="text-primary"></i> Project Development</li>
                <li><i data-lucide="check-circle-2" class="text-primary"></i> Source Code</li>
                <li><i data-lucide="check-circle-2" class="text-primary"></i> Documentation</li>
                <li><i data-lucide="check-circle-2" class="text-primary"></i> Presentation Support</li>
                <li><i data-lucide="check-circle-2" class="text-primary"></i> Demo Preparation</li>
              </ul>
            </div>
            
            <a href="#contact" class="btn-solid mt-8">Discuss My Project <i data-lucide="arrow-right"></i></a>
            <p class="disclaimer">Built for learning, demonstration and academic submission. (No unrealistic guarantees)</p>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Popular Categories:</h4>
            <div class="tags-container">
              <span class="tag">Python</span>
              <span class="tag">Data Science</span>
              <span class="tag">Machine Learning</span>
              <span class="tag">AI</span>
              <span class="tag">Android</span>
              <span class="tag">Web Development</span>
              <span class="tag">IoT</span>
              <span class="tag">Database Projects</span>
              <span class="tag">Blockchain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Technologies -->
  <section class="section-small border-y bg-subtle">
    <div class="container text-center">
      <h2 class="text-lg font-bold text-gray-300 mb-8">Technology We Work With</h2>
      <div class="tech-grid">
        <div class="tech-badge">Python</div>
        <div class="tech-badge">JavaScript</div>
        <div class="tech-badge">React</div>
        <div class="tech-badge">React Native</div>
        <div class="tech-badge">Node.js</div>
        <div class="tech-badge">Express</div>
        <div class="tech-badge">Flask</div>
        <div class="tech-badge">FastAPI</div>
        <div class="tech-badge">SQL</div>
        <div class="tech-badge">MongoDB</div>
        <div class="tech-badge">Firebase</div>
        <div class="tech-badge">TensorFlow</div>
        <div class="tech-badge">OpenCV</div>
        <div class="tech-badge">Git</div>
        <div class="tech-badge">REST APIs</div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Ideas We've <span class="text-gradient">Built</span></h2>
        <p class="section-subtitle">A glimpse into some of our recent work and technical implementations.</p>
      </div>
      <div class="projects-grid">
        <div class="glass-card project-card">
          <div class="project-img"><i data-lucide="layers"></i></div>
          <div class="project-content">
            <h3>Patient Management System</h3>
            <p>Comprehensive dashboard for clinics to manage appointments and records.</p>
            <div class="project-tags">
              <span>React</span><span>Node.js</span><span>MongoDB</span>
            </div>
            <a href="#contact" class="project-link">View Project <i data-lucide="external-link"></i></a>
          </div>
        </div>
        <div class="glass-card project-card">
          <div class="project-img"><i data-lucide="layers"></i></div>
          <div class="project-content">
            <h3>AI Sign Language Classifier</h3>
            <p>Real-time computer vision application to translate sign language to text.</p>
            <div class="project-tags">
              <span>Python</span><span>TensorFlow</span><span>OpenCV</span>
            </div>
            <a href="#contact" class="project-link">View Project <i data-lucide="external-link"></i></a>
          </div>
        </div>
        <div class="glass-card project-card">
          <div class="project-img"><i data-lucide="layers"></i></div>
          <div class="project-content">
            <h3>Business Dashboard</h3>
            <p>Analytics platform with real-time charts and data visualization.</p>
            <div class="project-tags">
              <span>Next.js</span><span>Tailwind</span><span>SQL</span>
            </div>
            <a href="#contact" class="project-link">View Project <i data-lucide="external-link"></i></a>
          </div>
        </div>
        <div class="glass-card project-card">
          <div class="project-img"><i data-lucide="layers"></i></div>
          <div class="project-content">
            <h3>E-Commerce Website</h3>
            <p>Modern storefront with cart, payment integration and admin panel.</p>
            <div class="project-tags">
              <span>React</span><span>Express</span><span>Stripe</span>
            </div>
            <a href="#contact" class="project-link">View Project <i data-lucide="external-link"></i></a>
          </div>
        </div>
        <div class="glass-card project-card">
          <div class="project-img"><i data-lucide="layers"></i></div>
          <div class="project-content">
            <h3>Automation Platform</h3>
            <p>Custom workflow automation connecting multiple third-party APIs.</p>
            <div class="project-tags">
              <span>Python</span><span>FastAPI</span><span>REST</span>
            </div>
            <a href="#contact" class="project-link">View Project <i data-lucide="external-link"></i></a>
          </div>
        </div>
        <div class="glass-card project-card">
          <div class="project-img"><i data-lucide="layers"></i></div>
          <div class="project-content">
            <h3>Student Project Management</h3>
            <p>Platform for colleges to track and grade final year projects.</p>
            <div class="project-tags">
              <span>React</span><span>Firebase</span>
            </div>
            <a href="#contact" class="project-link">View Project <i data-lucide="external-link"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Us Section -->
  <section class="section border-y bg-subtle">
    <div class="container">
      <div class="why-grid">
        <div>
          <h2 class="section-title mb-8">Why Build With <br><span class="text-primary">apcode.py?</span></h2>
          <div class="why-list">
            <div class="why-item">
              <div class="why-num">1</div>
              <div>
                <h4>Custom Development</h4>
                <p>No unnecessary templates. We build around your requirements.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-num">2</div>
              <div>
                <h4>Modern Technology</h4>
                <p>Use current development tools and scalable architecture.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-num">3</div>
              <div>
                <h4>Transparent Process</h4>
                <p>Keep clients updated throughout development.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-num">4</div>
              <div>
                <h4>Student-Friendly</h4>
                <p>Practical support for college and academic projects.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-num">5</div>
              <div>
                <h4>Post-Development Support</h4>
                <p>Help with deployment, fixes and improvements.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="why-visual">
          <div class="bg-glow why-glow"></div>
          <div class="glass-card why-badge">
            <img src="assets/logo.png" alt="apcode.py logo" class="logo-img-footer mb-4">
            <div class="text-lg text-gray-300">Modern + Technical + Reliable + Student-Friendly</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section-cta text-center relative overflow-hidden">
    <div class="bg-glow cta-glow"></div>
    <div class="container relative z-10">
      <h2 class="cta-title">Have an Idea? <br>Let's Build It.</h2>
      <p class="cta-subtitle">Whether it's an app, website, automation system or college project, tell us what you're thinking.</p>
      <div class="cta-buttons">
        <a href="#contact" class="btn-primary">Start a Project <i data-lucide="arrow-right"></i></a>
        <a href="https://instagram.com/apcode.py" target="_blank" class="btn-solid"><i data-lucide="camera"></i> Instagram</a>
      </div>
      <div class="cta-contact">
        <a href="https://instagram.com/apcode.py" target="_blank"><i data-lucide="camera"></i> @apcode.py</a>
        <span class="divider">|</span>
        <a href="mailto:apcode77.py@gmail.com"><i data-lucide="mail"></i> apcode77.py@gmail.com</a>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section border-t bg-dark relative z-10">
    <div class="container">
      <div class="contact-grid">
        <div>
          <h2 class="section-title">Let's Talk <span class="text-gradient">Code</span></h2>
          <p class="section-subtitle">Ready to turn your idea into a working product? Fill out the form or reach out directly.</p>
          
          <div class="contact-methods">
            <a href="mailto:apcode77.py@gmail.com" class="glass-card contact-method">
              <div class="contact-icon text-primary"><i data-lucide="mail"></i></div>
              <div>
                <div class="contact-label">Email Us</div>
                <div class="contact-value">apcode77.py@gmail.com</div>
              </div>
            </a>
            <a href="https://instagram.com/apcode.py" target="_blank" class="glass-card contact-method">
              <div class="contact-icon text-accent"><i data-lucide="camera"></i></div>
              <div>
                <div class="contact-label">DM on Instagram</div>
                <div class="contact-value">@apcode.py</div>
              </div>
            </a>
          </div>
        </div>
        
        <div class="glass-card form-card">
          <form onsubmit="event.preventDefault();">
            <div class="form-row">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="John Doe">
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="+91 XXXXX XXXXX">
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" placeholder="john@example.com">
            </div>
            <div class="form-group">
              <label>Project Type</label>
              <select class="form-control">
                <option>Android App</option>
                <option>Website</option>
                <option>Web App</option>
                <option>Automation</option>
                <option>College Project</option>
                <option>AI / ML</option>
                <option>Custom Software</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tell us about your idea</label>
              <textarea class="form-control" rows="4" placeholder="Requirements, features, timeline..."></textarea>
            </div>
            <button class="btn-solid btn-full mt-4">Send Project Enquiry <i data-lucide="send"></i></button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="assets/logo.png" alt="apcode.py logo" class="logo-img-footer mb-2">
          <div class="tagline">IDEAS • CODE • SOLUTIONS</div>
        </div>
        <div class="footer-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="footer-social">
          <a href="https://instagram.com/apcode.py" target="_blank" class="glass-card"><i data-lucide="camera"></i></a>
          <a href="mailto:apcode77.py@gmail.com" class="glass-card"><i data-lucide="mail"></i></a>
          <a href="https://github.com" target="_blank" class="glass-card"><i data-lucide="code"></i></a>
        </div>
      </div>
      <div class="footer-bottom">
        © <span id="year"></span> apcode.py. All rights reserved.
      </div>
    </div>
  </footer>

  <script>
    // Initialize Lucide Icons
    lucide.createIcons();

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
  --bg-color: #04050A;
  --bg-subtle: rgba(255, 255, 255, 0.02);
  --border-color: rgba(255, 255, 255, 0.1);
  --text-main: #ffffff;
  --text-muted: #9ca3af;
  
  --primary: #00C6FF;
  --secondary: #7C3AED;
  --accent: #D946EF;
  
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6, .font-heading {
  font-family: 'Outfit', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
}

/* Utilities */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.text-accent { color: var(--accent); }

.bg-primary-light { background: rgba(0, 198, 255, 0.1); }
.bg-secondary-light { background: rgba(124, 58, 237, 0.1); }
.bg-accent-light { background: rgba(217, 70, 239, 0.1); }

.text-gradient {
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

.bg-gradient {
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent));
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
}

.border-y {
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.border-t {
  border-top: 1px solid var(--border-color);
}

.bg-subtle {
  background-color: var(--bg-subtle);
}

.bg-dark {
  background-color: var(--bg-color);
}

.font-mono {
  font-family: monospace;
}

/* Sections */
.section {
  padding: 96px 0;
}

.section-small {
  padding: 64px 0;
}

.section-header {
  margin-bottom: 64px;
}

.section-header.text-center {
  text-center;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .section-title { font-size: 48px; }
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 18px;
  max-width: 600px;
}

.section-header.text-center .section-subtitle {
  margin-left: auto;
  margin-right: auto;
}

/* Background Gradients */
.fixed-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: var(--bg-color);
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
}

.bg-glow-1 {
  top: -10%; left: -10%; width: 40%; height: 40%; background: var(--primary);
}
.bg-glow-2 {
  bottom: -10%; right: -10%; width: 40%; height: 40%; background: var(--accent);
}
.bg-glow-3 {
  top: 40%; left: 60%; width: 20%; height: 20%; background: var(--secondary);
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 4rem 4rem;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);
}

/* Navbar */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  padding: 24px 0;
  transition: all 0.3s ease;
}

.header.scrolled {
  padding: 16px 0;
  background: rgba(4, 5, 10, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.nav-links {
  display: none;
  gap: 32px;
  align-items: center;
}

@media (min-width: 768px) {
  .nav-links { display: flex; }
}

.nav-links a {
  color: #d1d5db;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #fff;
}

.btn-outline {
  padding: 8px 20px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.2);
}

.mobile-menu-btn {
  display: block;
}

@media (min-width: 768px) {
  .mobile-menu-btn { display: none; }
}

.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 24px;
  background: rgba(4, 5, 10, 0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--border-color);
  gap: 16px;
  position: absolute;
  top: 100%; left: 0; width: 100%;
}

.mobile-nav.active {
  display: flex;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent));
  color: white;
  padding: 14px 32px;
  border-radius: 99px;
  font-weight: 600;
  transition: all 0.3s;
  background-size: 200% 200%;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px -5px rgba(124, 58, 237, 0.5);
  background-position: right center;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--glass-bg);
  border: 1px solid var(--border-color);
  color: white;
  padding: 14px 32px;
  border-radius: 99px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-solid {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  color: var(--bg-color);
  padding: 14px 32px;
  border-radius: 99px;
  font-weight: 700;
  transition: all 0.3s;
}

.btn-solid:hover {
  background: #e5e7eb;
  transform: scale(1.05);
}

.btn-full {
  width: 100%;
  justify-content: center;
}

/* Hero Section */
.hero {
  padding-top: 160px;
  padding-bottom: 80px;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  gap: 48px;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr 1fr; }
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 99px;
  background: var(--glass-bg);
  border: 1px solid rgba(0, 198, 255, 0.2);
  color: var(--primary);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

@media (min-width: 1024px) {
  .hero-title { font-size: 72px; }
}

.hero-subtitle {
  font-size: 18px;
  color: var(--text-muted);
  margin-bottom: 32px;
  max-width: 500px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* Mockup */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mockup-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1/1;
}

.mockup-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top right, rgba(124,58,237,0.4), rgba(0,198,255,0.4));
  border-radius: 50%;
  filter: blur(60px);
  animation: pulseGlow 4s infinite alternate;
}

@keyframes pulseGlow {
  0% { opacity: 0.4; }
  100% { opacity: 0.8; }
}

.mockup-card {
  position: absolute;
  inset: 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background: rgba(4, 5, 10, 0.8);
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

.mockup-header {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 16px;
  margin-bottom: 16px;
  color: #d1d5db;
  font-size: 14px;
}

.mockup-body {
  flex: 1;
}

.mockup-line {
  height: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 16px;
}

.w-75 { width: 75%; }
.w-50 { width: 50%; }
.w-85 { width: 85%; }

.pulse {
  animation: pulseBg 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.delay-1 { animation-delay: 150ms; }
.delay-2 { animation-delay: 300ms; }

@keyframes pulseBg {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

.mockup-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 24px;
}

.mockup-box {
  height: 80px;
  border-radius: 12px;
}

.box-1 {
  background: rgba(0, 198, 255, 0.2);
  border: 1px solid rgba(0, 198, 255, 0.3);
}

.box-2 {
  background: rgba(124, 58, 237, 0.2);
  border: 1px solid rgba(124, 58, 237, 0.3);
}

.floating-label {
  position: absolute;
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  border: 1px solid;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.label-1 { top: -16px; left: -16px; color: var(--primary); border-color: rgba(0, 198, 255, 0.3); animation-duration: 4s; }
.label-2 { top: 25%; right: -32px; color: var(--secondary); border-color: rgba(124, 58, 237, 0.3); animation-duration: 3s; animation-delay: 1s; }
.label-3 { bottom: 25%; left: -32px; color: var(--accent); border-color: rgba(217, 70, 239, 0.3); animation-duration: 5s; animation-delay: 0.5s; }
.label-4 { bottom: -16px; right: 0; color: white; border-color: rgba(0, 198, 255, 0.3); animation-duration: 4.5s; animation-delay: 2s; }
.label-5 { bottom: -64px; left: 25%; color: var(--secondary); border-color: rgba(124, 58, 237, 0.3); animation-duration: 3.5s; animation-delay: 1.5s; }

/* Trust Bar */
.trust-bar {
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-subtle);
  padding: 32px 0;
}

.trust-title {
  text-align: center;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
}

.trust-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}

@media (min-width: 768px) {
  .trust-grid { gap: 64px; }
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: #e5e7eb;
}

/* Services */
.services-grid {
  display: grid;
  gap: 24px;
}

@media (min-width: 768px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1024px) {
  .services-grid { grid-template-columns: 1fr 1fr 1fr; }
}

.service-card {
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 0 30px -5px rgba(124, 58, 237, 0.3);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: transform 0.3s;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
}

.service-card p {
  color: var(--text-muted);
  margin-bottom: 32px;
  flex: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: color 0.2s;
}

.service-card:hover .service-link {
  color: var(--primary);
}

/* Process */
.process-wrapper {
  position: relative;
}

.process-line {
  display: none;
  position: absolute;
  top: 32px;
  left: 0; right: 0;
  height: 2px;
  background: var(--border-color);
}

.process-line::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 33%;
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent));
  animation: pulseWidth 3s ease-in-out infinite alternate;
}

@keyframes pulseWidth {
  0% { width: 20%; opacity: 0.5; }
  100% { width: 50%; opacity: 1; }
}

@media (min-width: 768px) {
  .process-line { display: block; }
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  z-index: 10;
}

@media (min-width: 768px) {
  .process-steps {
    flex-direction: row;
    justify-content: space-between;
  }
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

@media (min-width: 768px) {
  .process-step { align-items: flex-start; text-align: left; }
}

.step-number {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--bg-color);
  border: 1px solid rgba(124, 58, 237, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
  transition: transform 0.3s;
}

.process-step:hover .step-number {
  transform: scale(1.1);
}

.process-step h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.process-step p {
  color: var(--text-muted);
  font-size: 14px;
}

/* College Projects */
.college-projects-card {
  padding: 32px;
  border-color: rgba(0, 198, 255, 0.2);
  overflow: hidden;
}

@media (min-width: 768px) {
  .college-projects-card { padding: 48px; }
}

.college-glow {
  top: 0; right: 0;
  width: 500px; height: 500px;
  background: var(--primary);
}

.college-grid {
  display: grid;
  gap: 48px;
}

@media (min-width: 1024px) {
  .college-grid { grid-template-columns: 1fr 1fr; }
}

.includes-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.includes-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #d1d5db;
}

.disclaimer {
  margin-top: 16px;
  font-size: 12px;
  color: #6b7280;
  font-style: italic;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tag {
  padding: 8px 16px;
  border-radius: 99px;
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.05);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.tag:hover {
  background: rgba(0, 198, 255, 0.2);
  border-color: rgba(0, 198, 255, 0.5);
}

/* Tech */
.tech-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.tech-badge {
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
  color: #d1d5db;
  font-weight: 500;
  transition: all 0.2s;
}

.tech-badge:hover {
  color: white;
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.3);
  transform: translateY(-4px);
}

/* Projects */
.projects-grid {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1024px) {
  .projects-grid { grid-template-columns: 1fr 1fr 1fr; }
}

.project-card {
  overflow: hidden;
  transition: border-color 0.3s;
}

.project-card:hover {
  border-color: rgba(124, 58, 237, 0.5);
}

.project-img {
  height: 192px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  position: relative;
}

.project-card:hover .project-img {
  background: rgba(255, 255, 255, 0.1);
}

.project-img i {
  width: 64px;
  height: 64px;
  color: #4b5563;
  opacity: 0.5;
  transition: transform 0.3s;
}

.project-card:hover .project-img i {
  transform: scale(1.1);
}

.project-content {
  padding: 24px;
}

.project-content h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  transition: color 0.2s;
}

.project-card:hover .project-content h3 {
  color: var(--primary);
}

.project-content p {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.project-tags span {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  color: #d1d5db;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s;
}

.project-link:hover {
  color: var(--primary);
}

/* Why Apcode */
.why-grid {
  display: grid;
  gap: 64px;
  align-items: center;
}

@media (min-width: 1024px) {
  .why-grid { grid-template-columns: 1fr 1fr; }
}

.why-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.why-item {
  display: flex;
  gap: 16px;
}

.why-num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 198, 255, 0.2);
  color: var(--primary);
  border: 1px solid rgba(0, 198, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  transition: all 0.3s;
}

.why-item:hover .why-num {
  transform: scale(1.1);
  background: var(--primary);
  color: white;
}

.why-item h4 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.why-item p {
  color: var(--text-muted);
}

.why-visual {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  aspect-ratio: 1/1;
}

.why-glow {
  inset: 0;
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent));
  animation: pulseGlow 4s infinite alternate;
}

.why-badge {
  position: absolute;
  inset: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

/* CTA */
.section-cta {
  padding: 128px 0;
}

.cta-glow {
  inset: 0;
  background: linear-gradient(to right, var(--primary), var(--secondary), var(--accent));
  filter: blur(100px);
  opacity: 0.1;
}

.cta-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 24px;
}

@media (min-width: 768px) {
  .cta-title { font-size: 60px; }
}

.cta-subtitle {
  font-size: 20px;
  color: #d1d5db;
  max-width: 600px;
  margin: 0 auto 40px;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
}

.cta-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: var(--text-muted);
  font-weight: 500;
}

.cta-contact a {
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s;
}

.cta-contact a:hover {
  color: white;
}

.divider {
  display: none;
}
@media (min-width: 640px) {
  .divider { display: block; }
}

/* Contact */
.contact-grid {
  display: grid;
  gap: 64px;
}

@media (min-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr 1fr; }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  max-width: 400px;
  transition: all 0.3s;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 198, 255, 0.5);
}

.contact-method:last-child:hover {
  border-color: rgba(217, 70, 239, 0.5);
}

.contact-icon {
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.contact-label {
  font-size: 14px;
  color: var(--text-muted);
}

.contact-value {
  font-weight: 600;
}

.form-card {
  padding: 32px;
}

.form-row {
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .form-row { grid-template-columns: 1fr 1fr; }
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.form-control {
  width: 100%;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
}

select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
}

textarea.form-control {
  resize: vertical;
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  background: #020204;
  padding-top: 64px;
  padding-bottom: 32px;
}

.footer-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.tagline {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  letter-spacing: 2px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
}

.footer-links a:hover {
  color: white;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.footer-social a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--primary);
}

.footer-bottom {
  text-align: center;
  font-size: 14px;
  color: #4b5563;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
}

.logo-img { max-height: 36px; max-width: 150px; width: auto; object-fit: contain; display: block; }
.logo-img-footer { max-height: 48px; max-width: 200px; width: auto; object-fit: contain; display: block; }
.mb-2 { margin-bottom: 8px; }
.mb-4 { margin-bottom: 16px; }
`;

fs.writeFileSync('c:/Users/anoop/OneDrive/Desktop/apcode/index.html', indexHtml.trim() + '\n');
fs.writeFileSync('c:/Users/anoop/OneDrive/Desktop/apcode/style.css', styleCss.trim() + '\n');
console.log('Reverted to the clean standard design.');

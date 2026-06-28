import { useState, useEffect, useRef } from "react";
import "./App.css";

function useInView(threshold = 0.1) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Section({ children, className = "", id }) {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id={id} className={`section ${className} ${visible ? "visible" : ""}`}>
      {children}
    </section>
  );
}

const skills = [
  { category: "Backend", icon: "🔧", items: ["PHP", "Laravel", "CakePHP", "Node.js", "Python", "GraphQL", "REST APIs"] },
  { category: "Frontend", icon: "🎨", items: ["JavaScript", "Vue.js", "Nuxt.js", "React", "jQuery", "HTML/CSS"] },
  { category: "Cloud & DevOps", icon: "☁️", items: ["AWS ECS/Fargate", "AWS RDS", "AWS S3", "AWS VPC", "AWS Route53", "AWS CloudFront", "AWS EC2", "AWS IAM", "AWS CodePipeline", "AWS Bedrock", "VPC Peering", "VPC Transit Gateway", "Terraform", "Docker", "CI/CD", "Jenkins"] },
  { category: "Databases", icon: "🗄️", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "AI & Automation", icon: "🤖", items: ["OpenAI", "AWS Bedrock", "n8n"] },
  { category: "Testing", icon: "🧪", items: ["Selenium", "Unit Testing", "Jmeter", "Postman"] },
];

const experience = [
  {
    company: "Bizmates Philippines Inc.",
    role: "Senior SRE / Cloud Engineer",
    period: "June 2022 – Present",
    type: "Full-time",
    summary: "Leading cloud infrastructure and DevOps initiatives while contributing to full-stack development.",
    highlights: [
      "Led migration of 7 systems from legacy AWS to new Terraform-managed IaC environment",
      "Designed AWS Cloud Architecture for infrastructure planning and managed cost optimization proposals",
      "Architect and manage AWS ECS/Fargate infrastructure serving production workloads",
      "Design and implement CI/CD pipelines and automated deployments",
      "Provided DevOps operational and technical support for development teams",
      "Integrated OpenAI and AWS Bedrock for AI-powered internal systems",
      "Full-stack development with Laravel, VueJS, and Docker",
    ],
    tech: ["AWS", "Terraform", "Docker", "Laravel", "VueJS", "MySQL", "Redis", "MongoDB", "Jenkins", "OpenAI", "AWS Bedrock"],
    projects: {
      "☁️ Cloud Engineering": [
        { name: "Zipan Admin Portal", scope: "Migrated infrastructure, domain (zero downtime), and database from legacy account to new IaC AWS environment" },
        { name: "Zipan Trainer Portal", scope: "Migrated infrastructure, domain (zero downtime), and database from legacy account to new IaC AWS environment" },
        { name: "Bizmates Trainer Portal", scope: "Migrated infrastructure, domain (zero downtime), and database to new IaC AWS account" },
        { name: "Bizmates Admin Portal", scope: "Migrated infrastructure, domain (zero downtime), and database to new IaC AWS account" },
        { name: "FMS Portal", scope: "Migrated infrastructure, domain (zero downtime), and database to new IaC AWS account" },
        { name: "Bizmates Applicant Storage Migration", scope: "Migrated infrastructure, S3 storage, domain (zero downtime), and database to new IaC AWS environment" },
        { name: "Bizmates Bizmates", scope: "Migrated infrastructure, domain (zero downtime), and database to new IaC AWS account" },
      ],
      "💻 Software Development": [
        "Finance Management System",
        "Trainer Portal",
        "Applicant Portal",
        "Admin Portal",
        "IT Recruitment System",
        "OTRS BAK System",
        "Koseijyou",
        "Zipan",
        "Lesson CMS Material",
      ],
    },
  },
  {
    company: "YNS Philippines Inc.",
    role: "Full Stack Software Engineer II / Technical Lead",
    period: "September 2019 – May 2022",
    type: "Full-time",
    summary: "Led multiple project teams, designed AWS infrastructure, and delivered 10+ production applications for Japanese clients.",
    highlights: [
      "Promoted to Technical Lead — mentored developers and led project delivery",
      "Designed AWS infrastructure for production, staging, and test environments",
      "Delivered 10+ production applications for Japanese enterprise clients",
      "Managed full project lifecycle from analysis to deployment and operations",
    ],
    tech: ["CakePHP", "Laravel", "NuxtJS", "VueJS", "MySQL", "Docker", "Vagrant", "AWS"],
    projects: {
      "💻 Software Development": [
        "Riraku — 10 APIs & systems for Japan's relaxation service chain (Attendance, Reward, Reservation, Print, Auth, Message, Master, DWB, POS, Self CheckIn)",
        "SVC Golden — Horse racing prediction app (Laravel 8, NuxtJS, AWS)",
        "Skyarch — Amazon Marketplace Time Sale System (Laravel 8, VueJS, AWS)",
        "Rekaken — Research reagents trading platform (CakePHP 3.9, VueJs)",
        "Nikkatsu — Entertainment application (CakePHP, MySQL, AWS)",
        "Hinoki Cram School (NuxtJS, Monaca)",
        "Publishing Pocket (Laravel 5.3, MySQL, AWS)",
        "CPA — Amazon EC sale price management automation",
      ],
      "☁️ Cloud Engineering": [
        "RRK POS SSLization",
        "DWB Product Code Auth Feature",
        "Participatory Campaign Project",
        "RRK Maintenance",
        "Database Integration Step 2 — CakePHP 2 to CakePHP 4 Migration",
        "Database Integration Step 3 — APIs Migration",
      ],
    },
  },
  {
    company: "Anderson Group BP0, Inc.",
    role: "Web Development Intern",
    period: "February – May 2018",
    type: "Internship",
    summary: "Web development internship building foundational skills in PHP and front-end technologies.",
    highlights: [],
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    projects: {},
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portfolio">
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <span className="nav-logo">JM</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero - Recruiter sees name, title, and value prop immediately */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-badge"><span className="pulse-dot" /> Open to Work</div>
          <div className="hero-avatar">
            <img src="/my_pic.jpg" alt="Joselin T. Macayanan" />
          </div>
          <h1>Joselin T. Macayanan</h1>
          <div className="hero-roles-main">
            <span className="role-chip role-primary">Site Reliability Engineer</span>
            <span className="role-chip">Cloud Engineer</span>
            <span className="role-chip">DevOps Engineer</span>
            <span className="role-chip">Software Engineer</span>
            <span className="role-chip">Technical Lead</span>
          </div>
          <p className="hero-desc">
            I build and manage cloud infrastructure on AWS while delivering full-stack web applications.
            6+ years shipping production systems across cloud, backend, and frontend.
          </p>
          <div className="hero-actions">
            <a href="mailto:macayananjoselin@gmail.com" className="btn btn-primary">📧 Contact Me</a>
            <a href="#experience" className="btn btn-outline">View Experience ↓</a>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/joselin-macayanan-638b061a1" target="_blank" rel="noopener noreferrer" className="social-link">💼 LinkedIn</a>
            <a href="https://www.facebook.com/jonh.macayanan/" target="_blank" rel="noopener noreferrer" className="social-link">👤 Facebook</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">6+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">30+</span><span className="stat-label">Projects Delivered</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">3</span><span className="stat-label">Companies</span></div>
          </div>
        </div>
      </header>

      {/* About - Quick scan of who this person is */}
      <Section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Senior SRE and Cloud Engineer based in Metro Manila, Philippines. I specialize in
              designing AWS infrastructure, building CI/CD pipelines, and developing full-stack
              web applications using Laravel, Vue.js, and React.
            </p>
            <p>
              I bridge the gap between development and operations — equally comfortable writing
              application code as I am managing Terraform infrastructure and Docker deployments.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item"><span className="detail-label">📍 Location</span><span>Muntinlupa, Metro Manila, Philippines</span></div>
            <div className="detail-item"><span className="detail-label">📧 Email</span><a href="mailto:macayananjoselin@gmail.com">macayananjoselin@gmail.com</a></div>
            <div className="detail-item"><span className="detail-label">📱 Phone</span><span>0906-927-9485</span></div>
          </div>
        </div>
      </Section>

      {/* Skills - Grouped for quick scanning */}
      <Section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3><span className="skill-icon">{group.icon}</span>{group.category}</h3>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience - The most important section for recruiters */}
      <Section id="experience" className="experience">
        <h2>Work Experience</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="timeline-role">{job.role}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-type">{job.type}</span>
                  </div>
                </div>
                <p className="timeline-summary">{job.summary}</p>

                {job.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                )}

                {job.tech.length > 0 && (
                  <div className="timeline-tech">
                    {job.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                  </div>
                )}

                {job.projects && Object.keys(job.projects).length > 0 && (
                  <div className="projects-details">
                    {Object.entries(job.projects).map(([category, items]) => (
                      <details key={category} className="projects-category" open>
                        <summary>{category} <span className="project-count">{items.length}</span></summary>
                        <ul className="projects-list">
                          {items.map((p, k) => (
                            <li key={k}>
                              {typeof p === "string" ? p : (
                                <div className="project-card-item">
                                  <span className="project-card-name">{p.name}</span>
                                  <span className="project-card-scope">{p.scope}</span>
                                  {p.tech && <div className="project-card-tech">
                                    {p.tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                                  </div>}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" className="education">
        <h2>Education</h2>
        <div className="edu-list">
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div>
              <h3>Central Luzon State University</h3>
              <p>Bachelor of Science in Information Technology — Major in System Development</p>
              <p className="edu-sub">Associate in Computer Technology (June 2018)</p>
              <span className="timeline-period">2015 – 2019</span>
            </div>
          </div>
          <div className="edu-card">
            <div className="edu-icon">🏫</div>
            <div>
              <h3>Maria Aurora National High School</h3>
              <p>San Joaquin Maria Aurora, Aurora</p>
              <span className="timeline-period">2011 – 2015</span>
            </div>
          </div>
          <div className="edu-card">
            <div className="edu-icon">📚</div>
            <div>
              <h3>Maria Aurora Central School</h3>
              <p>Brgy. 03 Maria Aurora, Aurora</p>
              <span className="timeline-period">2005 – 2011</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="contact">
        <div className="contact-hero">
          <h2>Let's Work Together</h2>
          <p className="contact-desc">Have a project in mind or want to discuss an opportunity? I'm always open to connecting.</p>
          <a href="mailto:macayananjoselin@gmail.com" className="btn btn-primary contact-cta">📧 macayananjoselin@gmail.com</a>
        </div>
        <div className="contact-grid">
          <a href="tel:09069279485" className="contact-card">
            <span className="contact-icon">📱</span>
            <span className="contact-value">0906-927-9485</span>
          </a>
          <a href="https://www.linkedin.com/in/joselin-macayanan-638b061a1" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">💼</span>
            <span className="contact-value">LinkedIn</span>
          </a>
          <a href="https://www.facebook.com/jonh.macayanan/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">👤</span>
            <span className="contact-value">Facebook</span>
          </a>
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <span className="contact-value">Muntinlupa, Metro Manila</span>
          </div>
        </div>
      </Section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Joselin T. Macayanan</p>
      </footer>
    </div>
  );
}

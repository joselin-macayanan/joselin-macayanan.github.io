import { useState, useEffect, useRef } from "react";
import "./App.css";

const skills = [
  { category: "Cloud & Infrastructure", icon: "☁️", items: ["Amazon Web Services (AWS)", "Terraform", "Infrastructure as code (IaC)", "Docker", "Container Orchestration", "Kubernetes Administration", "Linux System Administration", "Cost Optimisation"] },
  { category: "DevOps & CI/CD", icon: "🔁", items: ["Continuous Integration and Continuous Delivery (CI/CD)", "Jenkins", "GitHub"] },
  { category: "AI & Automation", icon: "🤖", items: ["Agentic AI Development", "AI-Assisted Operations (AIOps)"] },
  { category: "Frontend & Backend", icon: "🔧", items: ["JavaScript", "Vue.js", "Nuxt.js", "React", "jQuery", "HTML/CSS", "PHP", "Laravel", "CakePHP", "FuelPHP", "Node.js", "Python (Programming Language)", "GraphQL", "REST APIs"] },
  { category: "Databases", icon: "🗄️", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
];

const experience = [
  {
    company: "Bizmates Philippines Inc.",
    role: "Senior Cloud Engineer",
    period: "June 2022 – Present",
    type: "Full-time",
    summary: "Leading cloud infrastructure and DevOps initiatives while contributing to full-stack development.",
    highlights: [
      "Led migration of 7 systems from legacy AWS to new Terraform-managed IaC environment",
      "Handled AWS cost analysis and prepared optimization proposals for company approval",
      "Provisioned and managed AWS infrastructure with Terraform, including reusable Terraform modules for automation and standardization",
      "Deployed and maintained AWS ECS/Fargate environments and Docker container setups",
      "Designed and implemented CI/CD pipelines and server configurations for evolving business requirements",
      "Performed Amazon RDS maintenance, performance tuning, and AWS resource monitoring",
      "Participated in DevOps operations, monitoring, troubleshooting, and production support",
      "Integrated AI solutions using OpenAI and AWS Bedrock",
      "Full-stack development and enhancements with Laravel, FuelPHP, VueJS, and Docker",
    ],
    tech: ["AWS", "Terraform", "Docker", "Laravel", "FuelPHP", "VueJS", "MySQL", "Redis", "MongoDB", "Jenkins", "Selenium", "n8n", "OpenAI", "AWS Bedrock"],
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
    role: "Mid Software Engineer",
    period: "September 2019 – May 2022",
    type: "Full-time",
    summary: "Led multiple project teams, designed AWS infrastructure, and delivered 10+ production applications for Japanese clients.",
    highlights: [
      "Promoted to Technical Lead — mentored developers and led project delivery",
      "Designed AWS infrastructure for production, staging, and test environments, and prepared AWS cost proposals approved by clients",
      "Delivered automated testing with unit tests and Selenium; produced specifications, test cases, and Swagger docs",
      "Contributed to server, database, and domain migrations",
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
    company: "Anderson Group BPO, Inc.",
    role: "Web Development Intern",
    period: "February – May 2018",
    type: "Internship",
    summary: "Web development internship building foundational skills in PHP and front-end technologies.",
    highlights: [],
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    projects: {},
  },
];

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

const LINKEDIN = "https://www.linkedin.com/in/joselin-macayanan-638b061a1";
const CREDLY = "https://www.credly.com/badges/d1ba98b8-2d4b-4987-83f9-cf63557f3553";
const EMAIL = "macayananjoselin@gmail.com";

const experienceSummary = [
  { company: "Anderson Group BPO, Inc.", role: "Web Development Intern", period: "Feb – May 2018", logo: "/logos/anderson.jpg" },
  { company: "YNS Philippines Inc.", role: "Mid Software Engineer", period: "Sep 2019 – May 2022", logo: "/logos/yns.png" },
  { company: "Bizmates Philippines Inc.", role: "Senior Cloud Engineer", period: "Jun 2022 – Present", logo: "/logos/bizmates.png", logoZoom: 1.3 },
];

function FullDetails() {
  return (
    <>
      <Section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3><span className="skill-icon">{group.icon}</span>{group.category}</h3>
              <div className="skill-items">
                {group.items.map((item) => <span key={item} className="skill-tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>

      </Section>

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

      <Section id="contact" className="contact">
        <div className="contact-hero">
          <h2>Let's Work Together</h2>
          <p className="contact-desc">Have a project in mind or want to discuss an opportunity? I'm always open to connecting.</p>
          <a href={`mailto:${EMAIL}`} className="btn btn-primary contact-cta">📧 {EMAIL}</a>
        </div>
        <div className="contact-grid">
          <a href="tel:09069279485" className="contact-card"><span className="contact-icon">📱</span><span className="contact-value">0906-927-9485</span></a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-card"><span className="contact-icon">💼</span><span className="contact-value">LinkedIn</span></a>
          <div className="contact-card"><span className="contact-icon">📍</span><span className="contact-value">Muntinlupa, Metro Manila</span></div>
        </div>
      </Section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Joselin T. Macayanan</p>
      </footer>
    </>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portfolio">
    <div id="top" className="dash">
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#top" className="nav-logo">JM</a>
        <div className="nav-links">
          <a href="#top">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      <main className="summary">
        <div className="hero-avatar"><img src="/my_pic.jpg" alt="Joselin T. Macayanan" /></div>
        <h1>Joselin T. Macayanan</h1>
        <a className="cert-standalone" href={CREDLY} target="_blank" rel="noopener noreferrer" aria-label="AWS Certified Cloud Practitioner (CLF-C02) on Credly">
          <img src="/aws-cloud-practitioner.png" alt="AWS Certified Cloud Practitioner CLF-C02" />
        </a>
        <p className="summary-desc">
          I build and manage cloud infrastructure on cloud computing platforms while delivering full-stack web applications.
          8+ years shipping production systems across cloud, backend, and frontend.
        </p>
        <ol className="career">
          {experienceSummary.map((job, i) => (
            <li key={job.company} className="career-step">
              {i > 0 && <span className="career-arrow" aria-hidden="true" />}
              <div className="career-item">
                <span className="career-logo">
                  <img src={job.logo} alt={`${job.company} logo`} style={job.logoZoom ? { transform: `scale(${job.logoZoom})` } : undefined} />
                </span>
                <span className="career-name">{job.company}</span>
                <span className="career-role">{job.role}</span>
                <span className="career-years">{job.period}</span>
              </div>
            </li>
          ))}
        </ol>
      </main>

      <div className="hero-dock">
          <div className="cta-bar">
            <a href={`mailto:${EMAIL}`} className="cta cta-primary">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              Contact Me
            </a>
            <a href="/joselin_macayanan_resume.pdf" download className="cta cta-secondary">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Download Resume
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="cta cta-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zm7 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z"/></svg>
              LinkedIn
            </a>
          </div>
          <a href="#skills" className="scroll-hint">
            <span>Scroll for full details</span>
            <span className="scroll-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
      </div>

    </div>
    <FullDetails />
    </div>
  );
}

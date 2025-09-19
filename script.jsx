// No imports needed — React & ReactDOM come from CDN in index.html
const { useEffect } = React;

/* ------------------------------
   Minimal UI primitives
--------------------------------*/
function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold transition focus:outline-none";
  const map = {
    primary: "bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow",
    secondary: "bg-black/40 hover:bg-black/30 text-slate-100 border border-white/10",
    outline: "bg-transparent hover:bg-white/10 text-slate-100 border border-white/40",
  };
  const style = map[variant] || map.primary;
  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border ${className}`}>{children}</div>;
}
function CardHeader({ children, className = "" }) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>;
}
function CardTitle({ children, className = "" }) {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
}
function CardContent({ children, className = "" }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${className}`}>
      {children}
    </span>
  );
}

/* ------------------------------
   Data (edit these!)
--------------------------------*/
const projects = [
  {
    title: "PhishGuard AI",
    tagline: "Interactive phishing-simulation web app with guided response flow",
    highlights: [
      "98% accurate URL reputation check on test set",
      "Gamified training: +42% task completion in pilot",
      "Stack: React, Tailwind, Flask API, scikit-learn",
    ],
    tags: ["React", "Python", "ML", "Security awareness"],
    links: {
      demo: "#", // e.g. "https://your-demo.example"
      code: "https://github.com/Anjaliiipatel", // replace with repo
    },
    icon: "🛡️",
  },
  {
    title: "Modern Port Scanner (PyQt6)",
    tagline: "Fast, concurrent TCP scanner with sleek desktop UI",
    highlights: [
      "Scans top 1k ports < 12s on LAN (8 threads)",
      "Custom ranges, timeouts, CSV export",
      "Stack: Python, PyQt6, asyncio, sockets",
    ],
    tags: ["Python", "PyQt6", "Networking", "Concurrency"],
    links: {
      demo: "#",
      code: "https://github.com/Anjaliiipatel", // replace with repo
    },
    icon: "🧪",
  },
  {
    title: "Secure Linux VM with Log Monitoring",
    tagline: "Hardened Ubuntu on Azure + live log pipeline",
    highlights: [
      "CIS-baseline hardening + Ansible automation",
      "RBAC + Key Vault; Fail2ban & auditd dashboards",
      "Stack: Azure, Bash, Ansible, Elastic",
    ],
    tags: ["Azure", "Linux", "SIEM", "DevSecOps"],
    links: {
      demo: "#",
      code: "https://github.com/Anjaliiipatel", // replace with repo
    },
    icon: "💻",
  },
  {
    title: "Generative RF Environments for Cyber Deception",
    tagline: "Research w/ NSWC & PARI Labs (Purdue)",
    highlights: [
      "Synthesized RF scenes from low-cost SDR captures",
      "Explored deception tactics for blue-team training",
      "Tools: GNU Radio, SDR, Python, PyTorch",
    ],
    tags: ["Research", "SDR", "RF", "GenAI"],
    links: {
      demo: "#",
      code: "https://github.com/Anjaliiipatel", // replace with repo
    },
    icon: "📡",
  },
];

const skills = [
  { group: "Core Languages", items: ["Python", "Java", "JavaScript/TypeScript", "Bash"] },
  { group: "Security & Networking", items: ["Linux", "Wireshark", "Nmap", "Fail2ban", "OWASP", "TLS"] },
  { group: "Cloud & DevOps", items: ["Azure (RBAC, Key Vault)", "AWS (Lambda, API GW)", "Docker", "CI/CD"] },
  { group: "Data & ML", items: ["Pandas", "scikit-learn", "PyTorch (basics)", "SQL"] },
  { group: "Frontend", items: ["React", "Tailwind", "Vite", "PyQt6 (desktop)"] },
];

const highlights = [
  { text: "Built 10+ security-focused projects; 3 featured below" },
  { text: "Shipped cloud labs on Azure & AWS (IAM, serverless, logging)" },
  { text: "Interests: Incident Response, SecEng, Security Automation" },
];

/* ------------------------------
   App
--------------------------------*/
function App() {
  useEffect(() => {
    // Inject basic Person schema (optional)
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Anjali Patel",
      url: "https://Anjaliiipatel.github.io/anjali-portfolio",
      sameAs: ["https://github.com/Anjaliiipatel", "https://www.linkedin.com/"], // update LinkedIn
      jobTitle: "Cybersecurity Student",
      knowsAbout: ["Incident Response", "Security Engineering", "Cloud Security"],
    });
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-burst" />

      {/* Header */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              Anjali Patel
            </span>
          </h1>
          <p className="mt-2 text-slate-300 max-w-2xl">
            Cybersecurity major • AI/ML minor @ Purdue — defensive security, secure software,
            and practical tools that strengthen digital resilience.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className="bg-fuchsia-700/30 text-fuchsia-200 border-fuchsia-500/30">Defensive Security</Badge>
            <Badge className="bg-cyan-700/30 text-cyan-200 border-cyan-500/30">Incident Response</Badge>
            <Badge className="bg-violet-700/30 text-violet-200 border-violet-500/30">Secure Dev</Badge>
          </div>
        </div>
        <nav className="mt-6 md:mt-0 flex flex-wrap gap-3">
          <a href="https://github.com/Anjaliiipatel" aria-label="GitHub">
            <Button variant="secondary" className="floaty">GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">
            <Button variant="secondary">LinkedIn</Button>
          </a>
          <a href="mailto:ap@example.com" aria-label="Email">
            <Button>Email</Button>
          </a>
          <a href="/Anjali_Patel_Resume.pdf" aria-label="Resume (PDF)">
            <Button variant="outline">Resume</Button>
          </a>
        </nav>
      </header>

      {/* Highlights */}
      <section className="relative z-10 mx-auto max-w-6xl px-6" id="content">
        <Card className="bg-black/30 border-violet-800/40">
          <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">✨ Highlights</h2>
              <ul className="mt-4 space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span className="text-slate-200">{h.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects"><Button>See projects →</Button></a>
                <a href="#experience"><Button variant="outline">Experience</Button></a>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="bg-slate-900/60 border-slate-700/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">🎓 Purdue Coursework</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-300 space-y-1">
                  <p><strong>Security/IT:</strong> CNIT 155, 176, 182 (planned)</p>
                  <p><strong>CS/Math:</strong> Java OOP, Data Structures, MA 161</p>
                  <p><strong>Interests:</strong> SOC Engineering, Security Automation</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/60 border-slate-700/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">🌍 Open to Internships (Summer ‘26)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-300">
                  <p>Security Engineer • SOC Analyst • Cloud Security</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 mt-12">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-4">{/* Add your project details here */}</p>
      </section>

      {/* Add more sections as needed */}

    </main>
  );
}

const { useEffect, useMemo, useState } = React;

const brand = {
  name: 'G1 Digitalizing',
  short: 'G1',
  tagline: 'Modern websites engineered for leads, speed, and scale.',
  email: 'hello@g1digitalizing.com',
  phone: '+91 82828 26731',
  city: 'Hyderabad, Telangana, India'
};

const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' }
];

const services = [
  {
    title: 'Website Development',
    copy: 'Conversion-focused, lightning-fast websites built with clean architecture and modern tooling.',
    icon: 'WD'
  },
  {
    title: 'UI/UX Design',
    copy: 'Premium interfaces, robust design systems, and thoughtful user flows that reduce friction.',
    icon: 'UX'
  },
  {
    title: 'E-commerce Solutions',
    copy: 'Storefronts engineered for checkout speed, catalog management, and repeat purchases.',
    icon: 'EC'
  },
  {
    title: 'Web Applications',
    copy: 'Scalable dashboards and SaaS platforms with secure APIs and role-based workflows.',
    icon: 'WA'
  },
  {
    title: 'SEO & Optimization',
    copy: 'Technical SEO, Core Web Vitals, and content structure tuned for discoverability and growth.',
    icon: 'SEO'
  }
];

const portfolio = [
  { name: 'SaaS Funnel Revamp', category: 'B2B SaaS', impact: '+137% demo requests', color: 'from-cyan-500 to-blue-600' },
  { name: 'Luxury Commerce Build', category: 'E-commerce', impact: '+62% conversion rate', color: 'from-indigo-500 to-violet-600' },
  { name: 'Fintech Landing System', category: 'Finance', impact: '-41% bounce rate', color: 'from-sky-500 to-cyan-500' },
  { name: 'Healthcare Portal', category: 'Healthcare', impact: '+4.2x qualified leads', color: 'from-blue-600 to-indigo-700' },
  { name: 'Education Platform', category: 'EdTech', impact: '+88% trial signups', color: 'from-violet-500 to-blue-700' },
  { name: 'Agency Website Stack', category: 'Services', impact: '+2.7x organic traffic', color: 'from-cyan-400 to-indigo-600' }
];

const whyUs = [
  { title: 'Senior Expertise', copy: '10+ years shipping websites and web products across startup and enterprise teams.' },
  { title: 'Speed to Launch', copy: 'Tight production sprints with clear milestones and demo-driven delivery.' },
  { title: 'Built to Scale', copy: 'Future-proof codebase, reusable components, analytics, and ongoing optimization.' }
];

const processSteps = [
  {
    title: 'Design',
    subtitle: 'Research + UX + visual direction',
    points: ['Business goals and audience mapping', 'Wireframes and high-fidelity prototypes', 'Design system and conversion pathways']
  },
  {
    title: 'Develop',
    subtitle: 'Production engineering + QA',
    points: ['Component-driven frontend architecture', 'Performance, SEO, and accessibility checks', 'CMS and API integration if needed']
  },
  {
    title: 'Launch',
    subtitle: 'Go-live + tracking + growth',
    points: ['Deployment pipeline and monitoring setup', 'Analytics and event conversion tracking', 'Post-launch support and growth roadmap']
  }
];

const testimonials = [
  {
    quote: 'The new site feels premium and converts better. We started getting qualified leads in the first week.',
    name: 'Aarav Mehta',
    role: 'Founder, InsightLoop'
  },
  {
    quote: 'From design to launch, the process was clear and fast. Every screen had purpose.',
    name: 'Ishita Rao',
    role: 'Marketing Head, NovaCare'
  },
  {
    quote: 'They handled UX, development, and SEO as one integrated system. Massive difference in performance.',
    name: 'Rohan Kulkarni',
    role: 'Co-founder, CartNexa'
  }
];

const pricing = [
  {
    tier: 'Starter',
    price: 'INR 49,000',
    note: 'Best for early-stage teams',
    features: ['Up to 5 pages', 'Responsive website', 'Basic on-page SEO', 'Lead form + WhatsApp integration']
  },
  {
    tier: 'Growth',
    price: 'INR 99,000',
    note: 'Most selected',
    featured: true,
    features: ['Up to 12 pages', 'Advanced UI/UX design', 'CMS setup', 'Performance optimization', 'Analytics and event tracking']
  },
  {
    tier: 'Scale',
    price: 'INR 1,79,000',
    note: 'For high-growth brands',
    features: ['Custom web app modules', 'Multi-step conversion funnels', 'Technical SEO stack', 'Priority support and iteration cycles']
  }
];

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header({ dark, setDark, progress }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = id => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-2 h-1 max-w-7xl overflow-hidden rounded-full bg-slate-200/60 dark:bg-slate-800/70">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-200" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="nav-glow mx-auto max-w-7xl rounded-2xl bg-white/80 p-3 backdrop-blur dark:bg-slate-900/70">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="font-display text-lg font-bold tracking-tight">
            {brand.short}
            <span className="text-brand-500"> Digitalizing</span>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-100"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="rounded-xl border border-slate-300/60 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-shine hidden rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600 md:block"
            >
              Get Proposal
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-slate-300/60 px-3 py-2 text-sm font-medium md:hidden dark:border-slate-700"
            >
              Menu
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 grid gap-2 rounded-xl border border-slate-200 bg-white p-3 md:hidden dark:border-slate-700 dark:bg-slate-900">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mesh-bg relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700 dark:border-brand-900/70 dark:bg-slate-900/60 dark:text-brand-200">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-brand-500"></span>
            Website Development Services
          </p>
          <h1 className="section-title text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Build High-Performance
            <span className="block text-brand-500">Websites That Convert</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {brand.tagline} From strategy and UI/UX to development and SEO optimization,
            we ship conversion-ready digital products in focused sprints.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-shine rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-600">
              Start My Project
            </a>
            <a href="#portfolio" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
              View Recent Work
            </a>
          </div>
        </div>

        <div className="fade-up lg:justify-self-end">
          <div className="glass-card float-soft max-w-md rounded-3xl p-5 shadow-2xl">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-500 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.14em] text-white/80">Live Delivery Metrics</p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-3xl font-bold">2.1s</p>
                  <p className="text-sm text-white/80">Avg load time</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold">+189%</p>
                  <p className="text-sm text-white/80">Lead growth</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold">95+</p>
                  <p className="text-sm text-white/80">Lighthouse score</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold">4-8w</p>
                  <p className="text-sm text-white/80">Typical launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title fade-up text-3xl font-bold sm:text-4xl">Services Built for Growth</h2>
        <p className="fade-up mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          A conversion-first service stack inspired by agency-grade execution and startup-level speed.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((item, index) => (
            <article key={item.title} className="fade-up glass-card rounded-2xl p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="inline-flex rounded-lg bg-brand-500/10 px-3 py-1 text-xs font-bold text-brand-700 dark:text-brand-200">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title fade-up text-3xl font-bold sm:text-4xl">Recent Work</h2>
        <p className="fade-up mt-4 max-w-2xl text-slate-600 dark:text-slate-300">Portfolio-style projects across SaaS, e-commerce, healthcare, and service businesses.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <article key={item.name} className="fade-up group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${index * 55}ms` }}>
              <div className={`h-60 bg-gradient-to-br ${item.color} transition duration-500 group-hover:scale-105`}></div>
              <div className="portfolio-overlay absolute inset-0 flex flex-col justify-end p-5 text-white">
                <p className="text-xs uppercase tracking-[0.14em] text-white/80">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-white/90">{item.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-slate-900 p-8 text-white sm:p-10 lg:p-12 dark:bg-slate-900">
        <h2 className="section-title fade-up text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {whyUs.map(item => (
            <div key={item.title} className="fade-up rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title fade-up text-3xl font-bold sm:text-4xl">Our Process</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="fade-up glass-card rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Step {index + 1}</p>
              <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{step.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {step.points.map(point => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title fade-up text-3xl font-bold sm:text-4xl">Client Testimonials</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure key={item.name} className="fade-up glass-card rounded-2xl p-6" style={{ transitionDelay: `${index * 70}ms` }}>
              <blockquote className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">"{item.quote}"</blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title fade-up text-3xl font-bold sm:text-4xl">Pricing Plans</h2>
        <p className="fade-up mt-4 max-w-2xl text-slate-600 dark:text-slate-300">Transparent packages for different growth stages.</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <article
              key={plan.tier}
              style={{ transitionDelay: `${index * 70}ms` }}
              className={`fade-up rounded-2xl border p-6 ${
                plan.featured
                  ? 'border-brand-400 bg-gradient-to-br from-brand-50 to-white shadow-xl dark:from-brand-900/40 dark:to-slate-900'
                  : 'glass-card'
              }`}
            >
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{plan.tier}</p>
              <h3 className="mt-2 font-display text-3xl font-bold">{plan.price}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{plan.note}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-shine mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-brand-500 dark:hover:bg-brand-600">
                Choose {plan.tier}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-8 text-white sm:p-10 lg:p-12">
        <h2 className="section-title fade-up text-3xl font-extrabold sm:text-5xl">Let's Build Your Website Today</h2>
        <p className="fade-up mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
          Tell us your goals and get a tailored roadmap with timeline, scope, and investment. First strategy response within 24 hours.
        </p>
        <div className="fade-up mt-7 flex flex-wrap gap-3">
          <a href={`mailto:${brand.email}`} className="btn-shine rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            {brand.email}
          </a>
          <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            {brand.phone}
          </a>
        </div>
        <form className="fade-up mt-8 grid gap-3 rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur sm:grid-cols-2">
          <input type="text" placeholder="Your name" className="rounded-lg border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/60" />
          <input type="email" placeholder="Work email" className="rounded-lg border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/60" />
          <input type="tel" placeholder="Phone number" className="rounded-lg border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/60" />
          <select className="rounded-lg border border-white/30 bg-white/20 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/60">
            <option className="text-slate-900">Budget range</option>
            <option className="text-slate-900">INR 50K - 1L</option>
            <option className="text-slate-900">INR 1L - 2L</option>
            <option className="text-slate-900">INR 2L+</option>
          </select>
          <textarea placeholder="Tell us what you want to build" className="sm:col-span-2 min-h-[90px] rounded-lg border border-white/30 bg-white/20 px-3 py-2 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/60"></textarea>
          <button type="button" className="btn-shine sm:col-span-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">Get Free Strategy Call</button>
        </form>
      </div>
    </section>
  );
}

function StickyLeadBar() {
  return (
    <div className="fixed bottom-3 left-1/2 z-40 w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:bottom-4 md:max-w-3xl dark:border-slate-700 dark:bg-slate-900/90">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">Need a conversion-ready website?</p>
          <p className="text-sm font-semibold">Book a free 20-min strategy call with {brand.short}</p>
        </div>
        <div className="flex gap-2">
          <a href="#contact" className="btn-shine rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">Book Call</a>
          <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-600">Call Now</a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-10 sm:px-6 lg:px-8 dark:border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">{brand.name}</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{brand.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            {navLinks.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-brand-600">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li>{brand.city}</li>
            <li><a href={`mailto:${brand.email}`} className="hover:text-brand-600">{brand.email}</a></li>
            <li><a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="hover:text-brand-600">{brand.phone}</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Social</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li><a href="#" className="hover:text-brand-600">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/g1digitalizing?igsh=b2dvb2R0M2I3M3V6" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">Instagram</a></li>
            <li><a href="#" className="hover:text-brand-600">Behance</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-slate-800">
        (c) 2026 {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : false;
  });

  useScrollReveal();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (top / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const stats = useMemo(
    () => [
      { label: 'Projects Delivered', value: '120+' },
      { label: 'Avg. Conversion Uplift', value: '2.4x' },
      { label: 'Client Satisfaction', value: '98%' }
    ],
    []
  );

  return (
    <div>
      <Header dark={dark} setDark={setDark} progress={progress} />
      <main>
        <Hero />
        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 sm:grid-cols-3 dark:border-slate-800 dark:bg-slate-900/60">
            {stats.map(item => (
              <div key={item.label} className="fade-up">
                <p className="font-display text-3xl font-bold text-brand-500">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
      <StickyLeadBar />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

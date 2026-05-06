import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Brain, 
  Phone, 
  PhoneCall, 
  Group, 
  MessageCircle, 
  TrendingUp, 
  ClipboardList, 
  Users, 
  TreePine, 
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import Login from './Login';
import AboutUs from './AboutUs';
import Impacts from './Impacts';
import Services from './Services';
import Careers from './Careers';
import Resources from './Resources';
import Contact from './Contact';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface Stat {
  usersHelped: string;
  sessionsCompleted: string;
  resilienceImprovement: string;
}

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

// --- Components ---

const CrisisBanner = () => (
  <div className="bg-error text-on-error px-6 py-2 md:py-3 text-center border-b border-on-error/10">
    <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2">
      <PhoneCall className="w-3.5 h-3.5 fill-current" />
      If you are in immediate distress, please call our 24/7 Crisis Hotline: +251 902142767
    </p>
  </div>
);

const Navbar = ({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-surface/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-secondary-container/20 p-1.5 rounded-lg border border-secondary/30">
            <Brain className="w-6 h-6 text-secondary" />
          </div>
          <span className="text-xl md:text-2xl font-heading font-bold text-on-surface tracking-tight">MindLift</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 font-medium text-sm">
          {[
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Impact', path: '/impacts' },
            { name: 'Careers', path: '/careers' },
            { name: 'Resources', path: '/resources' }
          ].map((item) => (
            <Link key={item.name} to={item.path} className="text-on-surface-variant hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/login" className="px-6 py-2.5 rounded-full border border-primary/30 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/5 transition-all">
            Login
          </Link>
          <button className="px-6 py-2.5 rounded-full bg-error text-on-error font-mono text-xs uppercase tracking-widest hover:brightness-110 shadow-sm flex items-center gap-2 active:scale-95 transition-all">
            <Phone className="w-4 h-4 fill-current" />
            Get Help Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-surface-container border-b border-outline-variant"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {[
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Impact', path: '/impacts' },
                { name: 'Careers', path: '/careers' },
                { name: 'Resources', path: '/resources' }
              ].map((item) => (
                <Link key={item.name} to={item.path} className="font-medium text-on-surface hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t border-outline-variant">
                <button 
                  onClick={() => { toggleTheme(); setIsOpen(false); }}
                  className="w-full py-3.5 rounded-full border border-outline-variant/30 text-on-surface flex items-center justify-center gap-3 font-medium"
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {dark ? 'Light Mode' : 'Dark Mode'}
                </button>
                <Link to="/login" onClick={() => setIsOpen(false)} className="w-full py-3.5 rounded-full border border-primary/30 text-primary font-mono text-xs uppercase tracking-widest text-center">Login</Link>
                <button className="w-full py-3.5 rounded-full bg-error text-on-error font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 fill-current" />
                  Get Help Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-[820px] flex items-center bg-surface-container overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000" 
        alt="Ethiopian community" 
        className="w-full h-full object-cover grayscale opacity-30"
      />
      <div className="absolute inset-0 hero-gradient" />
    </div>
    
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-2xl bg-surface-container-lowest/40 backdrop-blur-xl p-10 md:p-16 rounded-[40px] ambient-shadow border border-white/5"
      >
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-on-surface mb-8 leading-[1.1] tracking-tight">
          Empowering Mental Resilience Across Ethiopia
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant mb-12 leading-relaxed">
          We provide culturally sensitive, accessible mental health support and resources to build stronger, more resilient communities. Your journey to wellness begins with a single step.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-10 py-5 rounded-full bg-secondary-container text-on-secondary-container font-mono text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all shadow-xl active:scale-95">
            Take Assessment
          </button>
        </div>
      </motion.div>
    </div>
  </header>
);

const ImpactSnapshot = ({ stats }: { stats: Stat | null }) => {
  const statItems = [
    { label: 'Users Helped', value: stats?.usersHelped || '225', icon: Users, color: 'bg-secondary-container/20 text-secondary' },
    { label: 'Sessions Completed', value: stats?.sessionsCompleted || '15', icon: MessageCircle, color: 'bg-primary-container/40 text-primary' },
    { label: 'Avg Resilience Improvement', value: stats?.resilienceImprovement || '68%', icon: TrendingUp, color: 'bg-tertiary/20 text-tertiary' },
  ];

  return (
    <section className="py-24 bg-background px-6 relative z-20 -mt-16 sm:-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest p-10 rounded-[32px] ambient-shadow border border-white/5 text-center flex flex-col items-center justify-center group hover:border-primary/20 transition-all"
            >
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6", stat.color)}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-heading font-bold text-on-surface mb-2 tracking-tight group-hover:text-primary transition-colors">
                {stat.value}
              </h3>
              <p className="text-on-surface-variant font-medium font-mono text-xs uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CorePillars = ({ pillars }: { pillars: Pillar[] }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'clipboard-list': return ClipboardList;
      case 'message-circle': return MessageCircle;
      case 'users': return Users;
      case 'tree-pine': return TreePine;
      default: return ArrowRight;
    }
  };

  return (
    <section className="py-32 bg-surface-container-low px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-on-surface mb-6 tracking-tight">Our Core Pillars</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Comprehensive mental health support designed for the unique challenges of our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = getIcon(pillar.icon);
            return (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "bg-surface-container-lowest p-8 rounded-[32px] ambient-shadow flex flex-col h-full border border-white/5 group hover:border-secondary/20 transition-all",
                  pillar.highlight && "ring-1 ring-secondary/30"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-8 shadow-inner",
                  pillar.highlight ? "bg-secondary-container/20 text-secondary" : "bg-primary-container/20 text-primary"
                )}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-on-surface mb-4">{pillar.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">{pillar.description}</p>
                <a 
                  href="#" 
                  className={cn(
                    "font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/link",
                    pillar.highlight ? "text-secondary" : "text-primary"
                  )}
                >
                  {pillar.highlight ? 'Track Progress' : 'Learn More'}
                  <div className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover/link:bg-current group-hover/link:text-background transition-all">
                    <ArrowRight size={14} />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-surface-container-high pt-24 pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
      <div className="col-span-1 md:col-span-1">
        <Link to="/" className="flex items-center gap-3 mb-8">
          <div className="bg-secondary-container/20 p-1.5 rounded-lg border border-secondary/30">
            <Brain className="w-5 h-5 text-secondary" />
          </div>
          <span className="text-xl font-heading font-bold text-on-surface tracking-tight uppercase">MindLift</span>
        </Link>
        <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
          Empowering minds, supporting communities across Ethiopia with professional care and community support.
        </p>
        <p className="text-xs text-on-surface-variant opacity-60">© 2024 MindLift NGO. Building a resilient nation.</p>
      </div>
      
      {[
        { title: 'Organization', links: [
          { name: 'Impact Report 2023', path: '/impacts' },
          { name: 'Contact Us', path: '/contact' },
          { name: 'Our Partners', path: '/about' },
          { name: 'Careers', path: '/careers' }
        ] },
        { title: 'Get Involved', links: [
          { name: 'Volunteer Portal', path: '/careers' },
          { name: 'Growth Stories', path: '/impacts' },
          { name: 'Community Events', path: '/about' },
          { name: 'Crisis Toolkit', path: '/resources' }
        ] },
        { title: 'Legal', links: [
          { name: 'Privacy Policy', path: '#' },
          { name: 'Terms of Service', path: '#' },
          { name: 'Cookie Policy', path: '#' },
          { name: 'Ethical Guidelines', path: '#' }
        ] }
      ].map((section) => (
        <div key={section.title}>
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface font-bold mb-8">{section.title}</h4>
          <ul className="flex flex-col gap-4">
            {section.links.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-sm text-on-surface-variant hover:text-primary transition-colors font-medium">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex gap-8">
        <a href="#" className="text-xs font-mono text-on-surface-variant hover:text-primary tracking-widest transition-colors font-bold uppercase">Twitter</a>
        <a href="#" className="text-xs font-mono text-on-surface-variant hover:text-primary tracking-widest transition-colors font-bold uppercase">LinkedIn</a>
        <a href="#" className="text-xs font-mono text-on-surface-variant hover:text-primary tracking-widest transition-colors font-bold uppercase">Instagram</a>
      </div>
      <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-[0.3em] opacity-40">Addis Ababa • Dire Dawa • Gondar • Hawassa</div>
    </div>
  </footer>
);

const Home = ({ stats, pillars }: { stats: Stat | null; pillars: Pillar[] }) => (
  <>
    <Hero />
    <ImpactSnapshot stats={stats} />
    <CorePillars pillars={pillars} />
    
    <section className="py-32 bg-primary-container text-on-primary-container text-center px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight tracking-tight">Join Us in Building Resilient Communities</h2>
        <p className="text-lg md:text-xl text-on-primary-container/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Your contribution directly funds accessible mental health resources and professional counseling for those in need across Ethiopia.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-12 py-5 rounded-full bg-on-primary-container text-primary-container font-mono text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all shadow-2xl active:scale-95">
            Support Our Mission
          </button>
          <button className="px-12 py-5 rounded-full border border-on-primary-container/20 text-on-primary-container font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-on-primary-container/5 transition-all">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  </>
);

export default function App() {
  const [stats, setStats] = useState<Stat | null>(null);
  const [pillars, setPillars] = useState<Pillar[]>([]);
  const [isDark, setIsDark] = useState(true);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, pillarsRes] = await Promise.all([
          fetch('/api/stats'),
          fetch('/api/pillars')
        ]);
        const statsData = await statsRes.json();
        const pillarsData = await pillarsRes.json();
        setStats(statsData);
        setPillars(pillarsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-background min-h-screen selection:bg-primary/30 selection:text-white transition-colors duration-300">
      <CrisisBanner />
      <Navbar dark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home stats={stats} pillars={pillars} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

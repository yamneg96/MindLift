import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
  <div className="bg-error text-on-error px-6 py-2.5 text-center relative z-[60]">
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
      <PhoneCall className="w-3.5 h-3.5 fill-current" />
      Immediate Help: 800-123-4567
    </p>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-surface border-b border-black/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-24 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight uppercase">MindLift</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
          {['About', 'Services', 'Impact', 'Careers', 'Resources'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-on-surface hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors">
            Donate
          </a>
          <button className="px-8 py-2.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all active:scale-95">
            Help Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-black/5"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {['About', 'Services', 'Impact', 'Careers', 'Resources'].map((item) => (
                <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-8 border-t border-black/5">
                <button className="w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/10 rounded-full hover:bg-surface-container transition-all">Donate</button>
                <button className="w-full py-4 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary transition-all">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  Help Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ stats }: { stats: Stat | null }) => (
  <header className="relative min-h-[90vh] bg-surface flex flex-col pt-12">
    <main className="flex-grow grid grid-cols-12 gap-0 relative max-w-[1440px] mx-auto w-full px-8 md:px-12">
      {/* Left Column */}
      <div className="col-span-12 lg:col-span-7 flex flex-col justify-center py-12 lg:pr-20 z-10 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 bg-primary-container text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-10 rounded-sm w-fit"
        >
          Community Health Initiative Ethiopia
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tighter mb-10 text-on-surface"
        >
          Cultivating <br/>
          <span className="italic text-primary">Resilience</span> In <br/>
          Every Community.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-on-surface-variant max-w-md leading-relaxed mb-12 font-sans"
        >
          We build culturally sensitive mental health support systems across Ethiopia, 
          merging traditional wisdom with professional psychological care to foster lasting wellness.
        </motion.p>
        
        <div className="flex gap-8 border-l border-black/10 pl-8 flex-wrap">
          <div>
            <p className="text-3xl font-serif font-bold text-primary">{stats?.usersHelped || '25k+'}</p>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Families Supported</p>
          </div>
          <div className="border-l border-black/10 pl-8">
            <p className="text-3xl font-serif font-bold text-primary">{stats?.sessionsCompleted || '150k'}</p>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Safe Sessions</p>
          </div>
          <div className="border-l border-black/10 pl-8">
            <p className="text-3xl font-serif font-bold text-primary">{stats?.resilienceImprovement || '68%'}</p>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Resilience Growth</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-12 lg:col-span-5 relative min-h-[400px] lg:min-h-0 mt-12 lg:mt-0">
        <div className="absolute inset-y-0 right-0 left-0 lg:left-4 bg-surface-container rounded-3xl lg:rounded-l-[120px] lg:rounded-r-none overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000" 
            alt="Supportive community" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 flex flex-col">
            <div className="h-1/2 w-full bg-primary/10 p-10 md:p-12 lg:p-16 backdrop-blur-[2px]">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Regional Operations Status</span>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-black/10 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-black/10 rounded-full"></div>
                </div>
              </div>
              <div className="mt-8 md:mt-12 space-y-4">
                <div className="h-1 bg-black/5 w-full"></div>
                <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-1 bg-primary"></motion.div>
                <div className="h-1 bg-black/5 w-1/2"></div>
              </div>
            </div>
            <div className="h-1/2 w-full bg-primary-container p-10 md:p-12 lg:p-16 flex flex-col justify-end">
              <p className="text-3xl md:text-5xl font-serif leading-none mb-6 italic text-primary">Active in 42 Zones</p>
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-primary-container bg-surface-container animate-in fade-in zoom-in slide-in-from-left duration-500">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} className="rounded-full grayscale" alt="volunteer" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-primary-container bg-white flex items-center justify-center text-[10px] font-bold text-primary shadow-sm">+84</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </header>
);

const PillarsSection = ({ pillars }: { pillars: Pillar[] }) => {
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
    <section className="py-32 bg-surface px-8 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-4 lg:pr-12 border-l border-black/10 pl-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              Our Core <br/>
              <span className="italic">Foundations.</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-12">
              Our methodology bridges the gap between individual psychological needs 
              and communal resilience structures.
            </p>
            <div className="w-20 h-[1px] bg-primary"></div>
          </div>
          
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {pillars.map((pillar, i) => {
                const Icon = getIcon(pillar.icon);
                return (
                  <motion.div 
                    key={pillar.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">0{i+1}</span>
                    </div>
                    <h3 className="text-2xl font-serif italic text-primary mb-4">{pillar.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow pr-4">{pillar.description}</p>
                    <a 
                      href="#" 
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2 group/link"
                    >
                      {pillar.highlight ? 'Track Progress' : 'Inquire Now'}
                      <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-black/5 pt-24 pb-12 px-8 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-1 text-left">
            <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Next Milestone</span>
            <span className="text-sm font-medium uppercase italic font-serif">Addis Ababa Youth Summit</span>
          </div>
          <div className="flex flex-col space-y-1 text-left">
            <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Current Support Reach</span>
            <span className="text-sm font-medium uppercase">82% of Regional Goal</span>
          </div>
        </div>

        {[
          { title: 'Information', links: ['Impact Data', 'Methodology', 'Partners', 'Contact'] },
          { title: 'Community', links: ['Volunteer Portal', 'Growth Stories', 'Events', 'Training'] },
        ].map((section) => (
          <div key={section.title} className="flex flex-col space-y-6 text-left">
            <h4 className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{section.title}</h4>
            <ul className="flex flex-col space-y-3">
              {section.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium uppercase hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col lg:items-end justify-center">
          <div className="flex flex-col space-y-4 text-left lg:text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Join the movement</span>
            <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer group">
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <Brain className="w-3 h-3 text-white" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">MindLift NGO © 2024</span>
        </div>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
          <a href="#" className="hover:opacity-100 italic">Privacy</a>
          <a href="#" className="hover:opacity-100">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [stats, setStats] = useState<Stat | null>(null);
  const [pillars, setPillars] = useState<Pillar[]>([]);
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
    <div className="min-h-screen selection:bg-primary-container selection:text-white">
      <CrisisBanner />
      <Navbar />
      
      <main>
        <Hero stats={stats} />
        <PillarsSection pillars={pillars} />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-primary text-white text-center px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Join Us in Building Resilient Communities</h2>
            <p className="text-lg md:text-xl text-primary-container font-light mb-10">
              Your support directly funds mental health resources and professional counseling for those in need across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-4 rounded-full bg-white text-primary font-mono font-bold hover:bg-secondary-container hover:text-secondary transition-all shadow-xl active:scale-95">
                Support Our Mission
              </button>
              <button className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-mono font-bold hover:bg-white/10 transition-all active:scale-95">
                Volunteer Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

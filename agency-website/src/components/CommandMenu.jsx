import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, MessageCircle, Code, Briefcase, Zap, Mail } from 'lucide-react';

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Global CMD+K Listener
  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const executeAction = (action) => {
    setIsOpen(false);
    setSearch('');
    if (typeof action === 'function') {
      action();
    } else if (typeof action === 'string') {
      if (action.startsWith('http')) {
        window.open(action, '_blank');
      } else {
        const el = document.querySelector(action);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const actions = [
    { id: 'whatsapp', name: 'Start a Project via WhatsApp', icon: <MessageCircle size={18} className="text-emerald-500" />, action: 'https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20want%20to%20build%20something%20for%20my%20business.', category: 'Contact' },
    { id: 'email', name: 'Send an Email', icon: <Mail size={18} className="text-blue-500" />, action: 'mailto:g1digitalizing@gmail.com', category: 'Contact' },
    { id: 'services', name: 'View Engineering Services', icon: <Code size={18} />, action: '#services', category: 'Navigation' },
    { id: 'portfolio', name: 'View Live Portfolio', icon: <Briefcase size={18} />, action: '#portfolio', category: 'Navigation' },
    { id: 'home', name: 'Go to Hero Section', icon: <Zap size={18} />, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }), category: 'Navigation' }
  ];

  const filteredActions = actions.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100000]"
          />
          <div className="fixed inset-0 flex items-start justify-center pt-[15vh] z-[100001] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-xl bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            >
              <div className="flex items-center px-4 py-4 border-b border-slate-200/50">
                <Search size={20} className="text-slate-400 mr-3" />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent border-none text-slate-800 text-lg placeholder-slate-400 focus:outline-none focus:ring-0"
                />
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  ESC
                </div>
              </div>

              <div className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                {filteredActions.length === 0 ? (
                  <div className="p-8 text-center text-slate-500 text-sm">No results found.</div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Suggested Actions
                    </div>
                    {filteredActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => executeAction(action.action)}
                        className="flex items-center justify-between w-full text-left px-3 py-3 rounded-xl hover:bg-blue-50/80 group transition-colors"
                      >
                        <div className="flex items-center gap-3 text-sm font-medium text-slate-700 group-hover:text-blue-700">
                          <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                            {action.icon}
                          </div>
                          {action.name}
                        </div>
                        <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { tactileAudio } from '../utils/audio';

const faqs = [
  {
    question: "How will this actually bring me customers?",
    answer: "This is not just a website.\n\nWe create a simple system where people discover you, trust you, and take action.\n\nIf you choose the growth partnership, I help you use social media to drive traffic. We use content, posts, and positioning.\n\nYour website then converts that traffic into inquiries or sales.\n\nIt works like a flow:\nContent → Visitors → Website → Customers."
  },
  {
    question: "What makes your work different from a normal developer or agency?",
    answer: "Most developers build websites.\n\nI build systems that help your business grow.\n\nEverything is designed with one goal:\nGetting you more leads, customers, and results.\n\nAlso, you work directly with me. No teams. No confusion."
  },
  {
    question: "Will you understand my business and what I actually need?",
    answer: "Yes. That’s the first step.\n\nI take time to understand:\nWhat you sell, who your customers are, and how your business works.\n\nBased on that, I build something that fits your business. Not a generic template."
  },
  {
    question: "What is this AI event gallery and how does it help?",
    answer: "This is for events like weddings, functions, or large gatherings.\n\nInstead of searching through thousands of photos,\nyour guests just upload one photo of themselves.\n\nThe system finds and delivers all their photos quickly.\n\nThis saves time and creates a premium experience."
  },
  {
    question: "Is the AI gallery useful for my business?",
    answer: "If you handle events, photography, or client services, yes.\n\nIt adds a unique experience for your customers and makes your service more valuable.\n\nFor event organizers, it becomes a strong selling point.\nFor photographers, it improves delivery and client satisfaction."
  },
  {
    question: "Why should I trust you with my business?",
    answer: "Because I don’t work like an agency.\n\nYou work directly with me, and my focus is simple:\nYour business should grow.\n\nI keep things clear, simple, and result-focused.\n\nNo unnecessary promises. Only work that helps you move forward."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    tactileAudio.playPop();
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-12 md:py-24 relative section-bg-faq"
    >
      <div className="container mx-auto px-6 w-full max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
            Before you decide, <br className="block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">here’s what matters.</span>
          </h2>
          <p className="text-slate-500 font-medium text-md">
            Clear answers to the most important questions.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`border border-slate-200/50 rounded-2xl overflow-hidden transition-colors duration-200 ${isOpen ? 'bg-slate-50/50 shadow-sm' : 'bg-white hover:bg-slate-50/30'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold md:text-lg transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                    Q{index + 1}. {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-colors ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", paddingBottom: 24 },
                        collapsed: { opacity: 0, height: 0, paddingBottom: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="px-6"
                    >
                      <div className="pt-2 border-t border-slate-100">
                        {faq.answer.split('\n').map((line, i) => (
                          <p key={i} className="text-slate-600 text-md leading-relaxed mt-3 first:mt-0 font-medium">
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-200/50 text-center flex flex-col items-center"
        >
          <p className="text-slate-500 font-medium mb-6">Still have questions? Let’s talk directly.</p>
          <motion.a 
            href="https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20have%20a%20few%20questions."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => tactileAudio.playSubtleClick()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-center bg-slate-900 border border-slate-800 text-white font-semibold py-3 px-8 rounded-full shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            <span className="relative z-10">Start a Conversation</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

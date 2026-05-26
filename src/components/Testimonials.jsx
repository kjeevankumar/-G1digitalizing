import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow SaaS',
    content: 'My website looks amazing and now brings in consistent leads every single week.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Elevate E-Commerce',
    content: 'He built our e-commerce store for $0 upfront. Sales increased quickly. Incredible value.',
  },
  {
    name: 'Emma Roberts',
    role: 'Director, Nexus Events',
    content: 'Guests received their photos quickly. It completely transformed our event experience. Highly recommended.',
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      className="py-12 lg:py-20 relative overflow-hidden text-center section-bg-soft"
    >
      <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 lg:mb-24"
        >
          <span className="inline-flex py-1 px-4 rounded-full bg-white border border-slate-200/80 text-blue-600 font-bold text-[10px] md:text-[11px] tracking-widest uppercase shadow-sm mb-6">Client Testimonials</span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
            Proven <br className="block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 tracking-[-0.03em]">Business Results.</span>
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
              className="bg-white p-6 lg:p-10 rounded-2xl md:rounded-[2rem] border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.06)] transition-shadow duration-[250ms] text-left relative flex flex-col group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-50/50 rounded-full blur-xl md:blur-2xl -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] pointer-events-none" />
              
              <Quote className="absolute top-4 right-4 md:top-8 md:right-8 w-6 h-6 md:w-12 md:h-12 text-slate-100 group-hover:text-blue-50 transition-colors duration-[250ms]" />
              
              <p className="text-md text-slate-500/90 font-medium leading-[1.6] mb-6 lg:mb-12 relative z-10 flex-1 pr-6 md:pr-10">
                "{review.content}"
              </p>
              
              <div className="mt-auto border-t border-slate-200/50 pt-3 lg:pt-6 relative z-10">
                <h4 className="text-md font-bold text-slate-900 mb-1">{review.name}</h4>
                <div className="text-[9px] md:text-xs text-blue-600 font-bold uppercase tracking-widest">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

import { motion } from 'framer-motion';

export default function BusinessModel() {
  const models = [
    { title: "Standard Website Build", context: "Business Website", desc: "For growing businesses: Pay once and get a complete website designed to bring you customers.", price: "₹5,000 - ₹30,000", featured: false },
    { title: "Growth Partnership", context: "E-Commerce MVP", desc: "For e-commerce: Pay ₹0 upfront. I build the store, and you only pay when you make sales.", price: "₹0 Upfront", featured: true },
    { title: "AI Event Galleries", context: "AI Smart Albums", desc: "For events: Give your guests a world-class experience. Quick photo delivery for everyone.", price: "Custom Event Quote", featured: false }
  ];

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
      id="model" 
      className="py-12 lg:py-20 relative overflow-hidden text-center section-bg-dark"
    >
      <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 lg:mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-flex py-1 px-4 rounded-full bg-white border border-slate-200/80 text-blue-600 font-bold text-[10px] md:text-[11px] tracking-widest uppercase shadow-sm mb-6">Price Plans</span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Clear pricing. <br className="block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 tracking-[-0.03em]">No hidden fees.</span>
          </h3>
          <p className="text-slate-500/90 text-md font-medium leading-[1.6]">
            No agency layers. Just real business results. Pick the model that fits your business needs.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4 w-full"
        >
          {models.map((m, i) => (
             <motion.div 
               variants={itemVariants}
               key={i}
               whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
               className={`relative flex flex-col text-left w-full p-6 lg:p-10 rounded-2xl md:rounded-[2.5rem] border transition-shadow duration-[250ms] ${
                 m.featured 
                 ? 'bg-gradient-to-br from-[#0b172a] via-blue-900 to-[#1d4ed8] border-blue-500/30 text-white transform md:-translate-y-4 md:scale-[1.03] shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4),inset_0_2px_4px_rgba(255,255,255,0.2)] md:z-10 hover:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.5)]' 
                 : 'bg-white border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] text-slate-900 mt-4 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.06)]'
               }`}
             >
               {m.featured && (
                 <>
                   <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-blue-400/30 via-blue-500/0 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                   <div className="bg-blue-400/20 border border-blue-400 text-blue-50 text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full w-fit mb-6 shadow-sm relative z-10">Highly Requested</div>
                 </>
               )}
               <h4 className="text-md font-bold leading-tight mb-3 relative z-10">{m.title}</h4>
               <div className={`text-[10px] md:text-xs font-bold mb-4 lg:mb-8 uppercase tracking-widest relative z-10 ${m.featured ? 'text-blue-300' : 'text-slate-400'}`}>{m.context}</div>

               <p className={`text-md] font-medium leading-relaxed mb-auto pb-4 lg:pb-10 relative z-10 ${m.featured ? 'text-blue-100' : 'text-slate-500/90'}`}>
                 {m.desc}
               </p>

               <div className={`mt-4 lg:mt-8 pt-4 lg:pt-8 border-t relative z-10 ${m.featured ? 'border-blue-500/30' : 'border-slate-200/60'}`}>
                 <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5 md:mb-2 ${m.featured ? 'text-blue-300' : 'text-slate-400'}`}>Investment</div>
                 <div className={`text-lg md:text-2xl font-bold ${m.featured ? 'text-white' : 'text-slate-900'}`}>{m.price}</div>
                 <motion.a 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   href="https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20want%20to%20build%20something%20for%20my%20business."
                   target="_blank" rel="noopener noreferrer"
                   className={`mt-4 lg:mt-8 inline-flex items-center justify-center w-full px-6 py-4 rounded-xl font-bold text-md tracking-wide uppercase transition-all duration-300 ${
                     m.featured 
                     ? 'bg-white text-blue-600 shadow-md hover:bg-slate-50' 
                     : 'bg-slate-900 text-white hover:bg-slate-800'
                   }`}
                 >
                   Start Your Project
                 </motion.a>
               </div>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

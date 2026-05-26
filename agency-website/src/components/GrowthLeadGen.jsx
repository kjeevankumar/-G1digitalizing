import { motion } from 'framer-motion';

export default function GrowthLeadGen() {
  const steps = [
    { num: "01", title: "Automated Sales Funnels", desc: "Websites designed specifically to convert visitors into leads." },
    { num: "02", title: "Targeted Ad Campaigns", desc: "Advertising campaigns that bring the right customers to you." },
    { num: "03", title: "Growing Your Brand", desc: "Building a reputation that makes you the top choice." },
    { num: "04", title: "Google Search Ranking", desc: "Making sure you show up first when people search." },
    { num: "05", title: "Fast & Secure Hosting", desc: "Your website stays online, fast, and secure 24/7." },
    { num: "06", title: "Continuous Improvements", desc: "Constantly testing and improving to increase your sales." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
      id="growth" 
      className="py-12 lg:py-20 relative overflow-hidden section-bg-growth"
    >
      
      <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[40%] lg:sticky lg:top-32 mb-12 lg:mb-0 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex py-1 px-4 rounded-full bg-white border border-slate-200/80 text-slate-500 font-bold text-[10px] md:text-[11px] tracking-widest uppercase shadow-sm w-fit mb-8">
              Complete Business Setup
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.05] tracking-tight">
              The Complete <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 tracking-[-0.03em]">Growth System.</span>
            </h3>
            
            <p className="text-slate-500/90 mb-10 text-md font-medium leading-[1.6]">
              A website is not enough. You need a complete setup to bring in traffic and turn visitors into paying customers.
            </p>
            
            <motion.a 
              whileHover={{ x: 5 }}
              href="https://wa.me/917816006648?text=Hi,%20I%20saw%20your%20website.%20I%20want%20to%20build%20something%20for%20my%20business." target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 text-slate-900 font-bold uppercase tracking-widest text-[10px] md:text-xs group transition-colors hover:text-blue-600"
            >
              Start Your Project
              <span className="w-8 h-[1px] bg-slate-300 group-hover:bg-blue-600 transition-colors group-hover:w-12 block"></span>
            </motion.a>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            className="w-full lg:w-[60%]"
          >
            {/* Dense grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-[100vw] mx-auto overflow-hidden">
               {steps.map((feat, i) => (
                <motion.div 
                  variants={itemVariants}
                  key={i}
                  className="bg-white hover:bg-[#fcfdfd] p-4 lg:p-8 rounded-xl md:rounded-3xl border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:border-blue-200/60 hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.15)] hover:-translate-y-[6px] transition-all duration-[300ms] ease-out group relative overflow-hidden flex flex-col justify-center"
                >
                  {/* Subtle Gradient Hover Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Corner Glow Effect */}
                  <div className="absolute top-[-10%] right-[-10%] w-24 h-24 md:w-48 md:h-48 bg-blue-400/20 rounded-full blur-[40px] md:blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="text-[10px] md:text-[11px] font-bold tracking-widest text-slate-400 group-hover:text-blue-600 transition-all duration-300 mb-4 lg:mb-8 inline-flex border border-slate-200/50 px-2.5 py-0.5 md:py-1 rounded-full group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:translate-x-1 w-fit relative z-10 shadow-sm">
                    Step {feat.num}
                  </div>
                  
                  <h4 className="text-base sm:text-md md:text-lg font-bold text-slate-900 tracking-tight mb-2 lg:mb-3 relative z-10 break-words leading-tight transition-colors duration-300 group-hover:text-blue-950">{feat.title}</h4>
                  
                  <p className="text-xs sm:text-sm md:text-base text-slate-500/90 font-medium leading-[1.4] md:leading-relaxed relative z-10 break-words">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}

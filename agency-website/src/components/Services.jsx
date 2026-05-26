import { motion } from 'framer-motion';
import { Layout, Cpu } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      id="services" 
      className="py-12 lg:py-20 relative z-10 overflow-hidden section-bg-services"
    >
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-blue-50 rounded-[100%] blur-[100px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 lg:mb-16 space-y-3 lg:space-y-4 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-slate-200/80 text-blue-600 font-semibold text-xs tracking-widest uppercase shadow-sm">Core Competency</span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Systems built to <br className="block"/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">make you money.</span>
          </h3>
          <p className="text-slate-500/90 text-md lg:text-xl font-medium leading-[1.6]">
            No agency layers. Direct communication. Designed to generate consistent customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative rounded-xl md:rounded-[2rem] group hover:-translate-y-1 transition-all duration-[400ms] ease-out h-full w-full p-[1px] bg-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] flex flex-col"
          >
           {/* Animated Gradient Border Layer */}
           <div className="absolute inset-0 rounded-xl md:rounded-[2rem] bg-gradient-to-br from-blue-500 via-emerald-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
           <div className="relative bg-white rounded-[11px] md:rounded-[31px] w-full h-full flex flex-col overflow-hidden">
            <SpotlightCard className="w-full h-full p-5 sm:p-8 md:p-14 flex flex-col relative z-20" spotlightColor="rgba(59, 130, 246, 0.08)">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50/50 border border-blue-100/50 text-blue-600 rounded-lg md:rounded-2xl flex items-center justify-center text-md mb-4 md:mb-8 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-[250ms] ease-out shadow-sm relative z-10">
               <Layout className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            
            <div className="text-[10px] md:text-xs text-blue-600 font-bold uppercase tracking-widest mb-3">
              PREMIUM BUSINESS WEBSITES
            </div>

            <h4 className="text-lg md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Websites designed to turn visitors into customers</h4>
            
            <div className="text-md text-slate-500 font-medium leading-relaxed mb-4 md:mb-8 flex-1">
              <p className="mb-2">A high-performance website built to attract visitors, build trust, and convert them into real customers.</p>
              <p className="text-slate-600 font-semibold text-[13px] md:text-[15px]">Designed for businesses that want consistent leads. Not just an online presence.</p>
            </div>

            <div className="bg-[#fcfcfd] border border-slate-200/60 rounded-xl p-4 md:p-5 mb-4 md:mb-8 text-[12px] md:text-[14px] shadow-sm">
              <p className="font-bold text-slate-800 mb-3 tracking-tight">Perfect for:</p>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-slate-600 font-medium">
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>Local businesses</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>Startups</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>Service providers</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>Growing brands</span>
              </div>
            </div>

            <ul className="flex flex-col gap-4 md:gap-6 mb-4 md:mb-8">
              {[
                'Designed to convert visitors into customers',
                'Fast, mobile-friendly, and reliable',
                'Built for long-term business growth'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 lg:gap-4 text-slate-700 font-semibold text-md uppercase tracking-wide">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 text-[10px] md:text-xs border border-blue-100 shadow-sm"
                  >✓</motion.span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-md text-slate-900 font-bold tracking-tight mt-auto pt-4 md:pt-5 border-t border-slate-100 relative z-10">
               Turn your website into a consistent lead-generating system.
            </p>
           </SpotlightCard>
           </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-xl md:rounded-[2rem] group hover:-translate-y-1 transition-all duration-[400ms] ease-out h-full w-full p-[1px] bg-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] flex flex-col"
          >
           {/* Animated Gradient Border Layer */}
           <div className="absolute inset-0 rounded-xl md:rounded-[2rem] bg-gradient-to-br from-blue-500 via-emerald-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
           <div className="relative bg-white rounded-[11px] md:rounded-[31px] w-full h-full flex flex-col overflow-hidden">
            <SpotlightCard className="w-full h-full p-5 sm:p-8 md:p-14 flex flex-col relative z-20" spotlightColor="rgba(59, 130, 246, 0.08)">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50/50 border border-blue-100/50 text-blue-600 rounded-lg md:rounded-2xl flex items-center justify-center text-md mb-4 md:mb-8 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-[250ms] ease-out shadow-sm relative z-10">
               <Cpu className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            
            <div className="text-[10px] md:text-xs text-blue-600 font-bold uppercase tracking-widest mb-3">
              PERFECT FOR EVENTS, FUNCTIONS, AND PHOTO COLLECTIONS
            </div>
            
            <h4 className="text-lg md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Your photos, organized in a private digital album website
            </h4>
            
            <div className="text-md text-slate-500 font-medium leading-relaxed mb-4 md:mb-10 flex-1">
              <p className="mb-2">Turn any collection of photos into a private website where everything is organized, secure, and easy to access.</p>
              <p className="text-slate-600 font-semibold text-[13px] md:text-[15px]">Each person gets their own photos quickly. No searching required.</p>
            </div>

            <ul className="flex flex-col gap-4 md:gap-6 mb-4 md:mb-8">
              {[
                'Personal website for your photos',
                'Private access with secure login',
                'Everyone gets their photos quickly',
                'Easy sharing, comments, and memories'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 lg:gap-4 text-slate-700 font-semibold text-md uppercase tracking-wide">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 text-[10px] md:text-xs border border-blue-100 shadow-sm"
                  >✓</motion.span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-md text-slate-900 font-bold tracking-tight mt-auto pt-4 md:pt-5 border-t border-slate-100 relative z-10">
              Relive and share your moments in a smarter way.
            </p>
           </SpotlightCard>
           </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

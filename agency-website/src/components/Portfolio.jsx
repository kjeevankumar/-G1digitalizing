import { motion } from 'framer-motion';
import ScramblerText from './ScramblerText';
import ParallaxImage from './ParallaxImage';
import DirectionalButton from './DirectionalButton';
import { FocusGridWrapper, FocusCard } from './FocusGridWrapper';

const projects = [
  {
    title: 'SSMagic Printers',
    category: 'E-Commerce Store',
    description: 'A premium, lightning-fast e-commerce storefront engineered for personalized gifting. Features custom interactive visual showcases, smooth product catalogs, and a highly optimized direct-to-WhatsApp ordering flow that eliminates friction and maximizes conversions.',
    metrics: 'Boosted seasonal direct local orders by +185% through frictionless WhatsApp checkouts and sub-second page performance.',
    link: 'https://ss-magic-printers.vercel.app/',
    imgUrl: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://ss-magic-printers.vercel.app/',
  },
  {
    title: 'Petrol Bunk Management System',
    category: 'Management SaaS / Web App',
    description: 'A comprehensive, real-time management platform engineered for fuel station operations. Integrates sales reporting, digital inventory reconciliation, fuel level monitoring, and shift management into a high-performance administration dashboard.',
    metrics: 'Automated daily reconciliation and reduced shift handover administrative overhead by 40%.',
    link: 'https://pertrol-bunk-management-system.vercel.app/',
    imgUrl: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://pertrol-bunk-management-system.vercel.app/',
  },
  {
    title: 'Cinematic Gallery',
    category: 'AI Event Gallery',
    description: 'Upload one photo and get all your event photos quickly. A premium experience for your guests.',
    metrics: '100% instant private gallery delivery outperforming standard links.',
    link: 'https://v0-wedding-photo-gallery-three.vercel.app/',
    imgUrl: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://v0-wedding-photo-gallery-three.vercel.app/',
  },
  {
    title: 'FactoryIQ',
    category: 'B2B Business Website',
    description: 'A professional business website designed to build trust and get you more leads.',
    metrics: 'Scaled B2B organic lead capture by +42%.',
    link: 'https://kjeevankumar.github.io/FactoryIQ/',
    imgUrl: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://kjeevankumar.github.io/FactoryIQ/',
  }
];

export default function Portfolio() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      id="portfolio" 
      className="py-12 lg:py-20 relative z-10 w-full overflow-hidden section-bg-photo"
    >
      <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-24"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-slate-50 border border-slate-200/80 text-blue-600 font-bold text-[8px] md:text-[10px] tracking-widest uppercase shadow-sm mb-6">Live Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-slate-900 font-bold tracking-tight leading-[1.05]">
            <ScramblerText text="Websites " delay={0} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 tracking-[-0.03em]">
              <ScramblerText text="Built for Growth." delay={0.3} />
            </span>
          </h2>
        </motion.div>
        
        <FocusGridWrapper className="flex flex-col gap-12 lg:gap-24">
           {projects.map((proj, idx) => {
             const even = idx % 2 === 0;
             return (
               <FocusCard id={idx} key={idx} className="w-full">
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ duration: 0.6, ease: "easeOut" }}
                 className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 w-full`}
               >
                 <div className="w-full md:w-[55%] relative group">
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block overflow-hidden bg-slate-50 w-full rounded-xl md:rounded-2xl relative border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.1)] transition-shadow duration-[250ms] cursor-pointer"
                    >
                       <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-[250ms] pointer-events-none z-10 mix-blend-multiply" />
                       <div className="h-4 md:h-8 bg-slate-100 flex items-center px-4 border-b border-slate-200/80 gap-1.5 relative z-20">
                          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f57] shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] border-[0.5px] border-black/5"></div>
                          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#febc2e] shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] border-[0.5px] border-black/5"></div>
                          <div className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full bg-[#28c840] shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] border-[0.5px] border-black/5"></div>
                       </div>
                       <div className="w-full aspect-[16/10] overflow-hidden rounded-b-xl md:rounded-b-2xl relative block">
                         <ParallaxImage 
                           src={`https://api.microlink.io?url=${encodeURIComponent(proj.link)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1600&viewport.height=1000&viewport.deviceScaleFactor=2`} 
                           alt={proj.title}
                         />
                       </div>
                    </a>
                 </div>
                 
                 <div className="w-full md:w-[45%] flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <div className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-500 font-bold text-[10px] md:text-[11px] uppercase tracking-widest mb-3 md:mb-6 w-fit shadow-sm">
                      {proj.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 font-bold tracking-tight mb-3 md:mb-6 leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-slate-500/90 font-medium leading-[1.5] md:leading-[1.6] max-w-lg mb-4 md:mb-8">
                      {proj.description}
                    </p>
                    {proj.metrics && (
                      <div className="bg-blue-50/50 border border-blue-100/50 rounded-lg md:rounded-2xl p-4 md:p-6 mb-4 md:mb-8 w-fit shadow-sm relative group/metric cursor-default">
                        <div className="flex items-center gap-4">
                           <div className="w-6 h-6 md:w-12 md:h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm font-bold text-[10px] md:text-xl group-hover/metric:scale-110 transition-transform duration-300 ease-out">📈</div>
                           <div className="text-slate-900 font-bold text-xs sm:text-sm md:text-base lg:text-lg pr-2 md:pr-4">
                             {proj.metrics}
                           </div>
                        </div>
                      </div>
                    )}
                    <DirectionalButton 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      fillClass="bg-blue-600"
                      className="inline-flex items-center justify-center bg-slate-900 text-white px-5 sm:px-8 py-4 rounded-md md:rounded-xl font-bold tracking-wide shadow-md hover:shadow-lg hover:shadow-blue-600/30 transition-shadow duration-[200ms] w-fit text-xs sm:text-sm md:text-base cursor-pointer"
                    >
                      View Live Project
                    </DirectionalButton>
                 </div>
               </motion.div>
             </FocusCard>
             );
           })}
        </FocusGridWrapper>
      </div>
    </motion.section>
  );
}

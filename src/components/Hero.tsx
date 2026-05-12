import { motion } from 'framer-motion';
import MorphingBlob from './ui/MorphingBlob';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag mb-8 tracking-widest">
            Freshly Baked Daily
          </span>
          <h1 className="text-7xl lg:text-[88px] font-extrabold text-brand-dark leading-[1.05] mb-8">
            Minimalist Art <br/>on a <span className="text-brand-blue italic">Canvas of Cake</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-md leading-relaxed">
            HimSara Bake Studio by Sanduni Peris redefine the artisanal experience. 
            We craft bespoke confections where monochromatic elegance meets 
            exceptional gourmet flavors.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className="btn-primary">Order Online</a>
            <a href="#contact" className="btn-secondary">View Menu</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="absolute w-[500px] h-[500px] bg-brand-light rounded-full -z-10 opacity-60" />
          <MorphingBlob />
          <div className="relative z-10 p-6 bg-white rounded-2xl shadow-2xl rotate-3 border border-brand-light">
            <div className="w-80 h-[480px] rounded-lg overflow-hidden relative">
              <img 
                src="https://imgur.com/p6Ps2Uk.jpg" 
                alt="Signature Artisanal Cake" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-sm">
                  <p className="font-bold text-brand-dark">Signature Blue Velvet</p>
                  <p className="text-sm text-slate-500">LKR 8,500 — Bestseller</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  "https://imgur.com/p6Ps2Uk.jpg",
  "https://imgur.com/IlRovxh.jpg",
  "https://imgur.com/gwoZYSp.jpg",
  "https://imgur.com/78iZAIn.jpg",
  "https://imgur.com/SevrgHb.jpg",
  "https://imgur.com/0NTIhh5.jpg",
];

export default function Gallery() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
          <div className="max-w-xl">
            <span className="section-tag mb-4">The Studio Portfolio</span>
            <h2 className="text-5xl font-bold text-brand-dark mb-4">Artistry in Every Slice</h2>
            <p className="text-slate-500 text-lg">
              Explore our curated collection of artisanal creations. Each masterpiece is a 
              testament to our dedication to minimal elegance and exceptional flavor.
            </p>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary whitespace-nowrap">
            Follow Our Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-zoom-in group shadow-sm border border-white/50"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-[10px] bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-sm">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

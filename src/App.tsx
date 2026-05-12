import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import MorphingBlob from './components/ui/MorphingBlob';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './store/useCart';
import { ShoppingBag, Candy, Sparkles } from 'lucide-react';

function CandyRain() {
  const candies = Array.from({ length: 20 });
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {candies.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * 100 + 'vw', rotate: 0 }}
          animate={{ 
            y: '110vh', 
            rotate: 360,
            x: (Math.random() * 100 - 10) + 'vw' 
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          className="absolute"
        >
          <Candy className="text-brand-accent/20" size={Math.random() * 20 + 10} />
        </motion.div>
      ))}
    </div>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { clearCart } = useCart();

  const handleCheckout = () => {
    setIsOrderPlaced(true);
    clearCart();
    setIsCartOpen(false);
    
    setTimeout(() => {
      setIsOrderPlaced(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-blue selection:text-white">
      <CandyRain />
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        {/* Bottom Feature Bar */}
        <div className="px-4 sm:px-6 lg:px-12 py-16 bg-slate-50 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-blue shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Artisanal Purity</h4>
              <p className="text-sm text-slate-500">Every ingredient is hand-selected for the most authentic flavor experience.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-blue shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Conscious Delivery</h4>
              <p className="text-sm text-slate-500">Scheduled slots ensuring your treats arrive as fresh as they were when they left the oven.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-blue shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Minimalist Legacy</h4>
              <p className="text-sm text-slate-500">A relatively new studio, but one built on generations of shared baking secrets.</p>
            </div>
          </div>
        </div>

        {/* About Section - Sanduni Peris Story */}
        <section id="about" className="py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-light rounded-2xl overflow-hidden shadow-2xl border border-brand-light relative">
                 <img 
                    src="https://imgur.com/IlRovxh.jpg" 
                    alt="HimSara Artistic Creation" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <MorphingBlob />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-brand-light max-w-xs lg:block hidden">
                <span className="section-tag mb-4">Founder's Note</span>
                <p className="text-lg text-brand-dark font-medium leading-relaxed italic">
                  "Although HimSara is a new chapter in my life, baking has always been my language of love."
                </p>
                <div className="mt-4 font-bold text-brand-blue">— Sanduni Peris</div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag mb-6">Our Creative Soul</span>
              <h2 className="text-6xl font-bold text-brand-dark mb-8 leading-tight">The Modern Art of <br/><span className="text-brand-blue">Sanduni Peris</span></h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                HimSara Bake Studio is the fresh realization of a lifelong dream for our founder and 
                head baker, Sanduni Peris. While our studio doors opened only recently, the techniques 
                and recipes were perfected over years of obsessive private devotion to the art of 
                the minimalist crumb. We may be a new name, but every creation carries the weight 
                of a seasoned master's touch.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Sanduni brings a contemporary, minimalist perspective to traditional baking. Her 
                approach is defined by purity—using only the finest organic ingredients to ensure 
                that the elegance on the outside is matched by the depth of flavor within. 
                Every masterpiece is personally handcrafted, ensuring that even as we grow, 
                soul remains the primary ingredient.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-5xl font-bold text-brand-blue mb-2">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Handcrafted</div>
                </div>
                 <div>
                  <div className="text-5xl font-bold text-brand-blue mb-2">Soul</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">In Every Bite</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Menu />
        
        <Testimonials />
        
        <Gallery />

        {/* Custom Order Call to Action */}
        <section className="py-32 bg-brand-light relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="section-tag mb-8 tracking-widest bg-white">Bespoke Orders</span>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 leading-tight">Need Something Truly <span className="text-brand-blue italic">Bespoke</span>?</h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
              From majestic wedding cakes to themed corporate gift sets, we bring your vision 
               to life with unmatched minimalist artistry.
            </p>
            <a href="mailto:orders@himsara.studio" className="btn-primary inline-block text-lg shadow-xl shadow-brand-blue/20">
              Inquire Now
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={handleCheckout}
      />

      {/* Cart Float Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-[50] bg-brand-blue text-white p-4 rounded-xl shadow-2xl hover:bg-brand-dark transition-colors flex items-center gap-2 group border border-white/20"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold px-0 group-hover:px-2">View Order</span>
        <div className="relative">
          <ShoppingBag size={24} />
          <CartIndicator />
        </div>
      </motion.button>

      {/* Success Notification */}
      <AnimatePresence>
        {isOrderPlaced && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-brand-accent text-white px-8 py-4 rounded-full shadow-2xl font-bold flex items-center gap-3"
          >
            <div className="w-6 h-6 bg-white text-brand-accent rounded-full flex items-center justify-center">✓</div>
            Order Placed Successfully! We'll contact you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CartIndicator() {
  const { items } = useCart();
  const count = items.reduce((acc, item) => acc + item.quantity, 0);
  
  if (count === 0) return null;
  
  return (
    <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-blue">
      {count}
    </span>
  );
}

export default App;

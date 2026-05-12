import { ShoppingCart, Menu as MenuIcon, X, Cake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../store/useCart';

interface NavbarProps {
  onCartOpen: () => void;
}

export default function Navbar({ onCartOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border border-brand-light shadow-sm">
              <img 
                src="https://imgur.com/3DCZ45m.jpg" 
                alt="HimSara Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-dark tracking-tight leading-none">
                HimSara <span className="font-light italic text-slate-500">Bake Studio</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mt-1">
                Turning Moments into Memories
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Home</a>
            <a href="#menu" className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Menu</a>
            <a href="#about" className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Story</a>
            <a href="#contact" className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Contact</a>
            
            <button 
               onClick={onCartOpen}
               className="flex items-center gap-2 bg-brand-light text-brand-blue px-5 py-2 rounded-full font-medium hover:bg-brand-blue hover:text-white transition-all shadow-sm"
            >
              <ShoppingCart size={20} />
              <span className="text-sm">Cart ({itemCount})</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={onCartOpen}
              className="relative p-2 text-brand-blue"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-blue"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-light-blue"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 text-center">
              <a href="#" className="block py-2 font-medium">Home</a>
              <a href="#menu" className="block py-2 font-medium">Menu</a>
              <a href="#about" className="block py-2 font-medium">About</a>
              <a href="#contact" className="block py-2 font-medium">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

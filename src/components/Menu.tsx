import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { useState } from 'react';

const CATEGORIES = ['All', 'Cakes', 'Cupcakes', 'Cookies', 'Pastries'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-tag mb-6">Our Menu</span>
        <h2 className="text-5xl font-bold text-brand-dark mb-4">Signature Creations</h2>
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Handcrafted with the finest organic ingredients and a touch of magic. 
          Select your favorites for delivery or contactless pickup.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-lg font-bold text-sm uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                : 'bg-white text-slate-500 hover:text-brand-blue border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../store/useCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg flex justify-between items-center shadow-sm">
           <span className="font-bold text-brand-dark text-sm">LKR {product.price.toLocaleString()}</span>
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">{product.name}</h3>
        <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <button
          onClick={() => addItem(product)}
          className="w-full btn-primary flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-brand-blue"
        >
          <Plus size={18} />
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}

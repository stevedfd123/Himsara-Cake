import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../store/useCart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, onCheckout }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-brand-light-blue flex justify-between items-center bg-brand-blue text-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} />
                <h2 className="text-xl font-bold">Your Order</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-brand-light-blue rounded-full flex items-center justify-center text-brand-blue mb-4">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue mb-2">Cart is empty</h3>
                  <p className="text-gray-500 mb-8">Looks like you haven't added any treats yet!</p>
                  <button 
                    onClick={onClose}
                    className="btn-primary"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 p-4 border border-brand-light-blue rounded-xl"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-brand-blue">{item.name}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">LKR {item.price.toLocaleString()}</p>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-brand-light-blue rounded-full px-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:text-brand-accent"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-brand-accent"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-brand-blue ml-auto">
                            LKR {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-brand-light-blue bg-brand-light-blue/30 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-brand-blue">
                  <span>Total Amount</span>
                  <span>LKR {total().toLocaleString()}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  className="w-full btn-primary py-4 text-lg"
                >
                  Confirm Order
                </button>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                  Payments handled securely on pickup/delivery
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    text: "The wedding cake was more than we could have ever imagined. The blue sugar flowers were so delicate and matched our theme perfectly!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Event Planner",
    text: "HimSara Bake Studio is my go-to for all corporate events. Their attention to detail and consistent quality is unmatched.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Birthday Host",
    text: "Ordered the blueberry cupcakes for my daughter's birthday. They were a huge hit! Not too sweet, just perfect.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="section-tag mb-4">Guest Book</span>
          <h2 className="text-5xl font-bold text-brand-dark mb-4 tracking-tight">Sweet Words</h2>
          <p className="text-slate-500 text-lg">What our wonderful clients have to say about their boutique experiences.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-2xl border border-slate-100 bg-slate-50 relative group hover:bg-brand-blue transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent group-hover:fill-white group-hover:text-white transition-colors" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-brand-dark group-hover:text-white transition-colors">{testimonial.name}</h4>
                <p className="text-xs text-brand-blue font-bold uppercase tracking-widest group-hover:text-blue-100 transition-colors mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

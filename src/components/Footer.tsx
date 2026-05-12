import { Cake, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/20">
              <img 
                src="https://imgur.com/3DCZ45m.jpg" 
                alt="HimSara Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight leading-none">
                HimSara <span className="font-light italic text-blue-300">Bake Studio</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold mt-1">
                Turning Moments into Memories
              </span>
            </div>
          </div>
          <p className="text-blue-100/70 mb-10 max-w-sm leading-relaxed text-lg">
            We believe every celebration deserves a centerpiece as unique as the moments 
            being shared. Minimalist artisanal baking with a heart of blue.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-all">
              <Instagram size={22} />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-all">
              <Facebook size={22} />
            </a>
            <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-all">
              <Twitter size={22} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-blue">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-blue-50">
              <MapPin size={20} className="text-brand-blue shrink-0 mt-1" />
              <span className="text-blue-100/80 leading-relaxed">123 Baker Street, Suite 100<br/>Sweet City, SC 45678</span>
            </li>
            <li className="flex items-center gap-4 text-blue-50">
              <Phone size={20} className="text-brand-blue shrink-0" />
              <span className="text-blue-100/80">(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-4 text-blue-50">
              <Mail size={20} className="text-brand-blue shrink-0" />
              <span className="text-blue-100/80">hello@himsara.studio</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-blue">Studio Hours</h4>
          <ul className="space-y-4 text-blue-100/80">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Mon - Fri</span>
              <span className="font-medium">9:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Sun</span>
              <span className="font-medium">10:00 - 16:00</span>
            </li>
            <li className="flex justify-between text-brand-accent font-bold mt-4">
              <span>Saturday</span>
              <span className="uppercase text-[10px] bg-brand-blue/20 px-2 py-1 rounded">Closed</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-white/10 text-center text-xs text-blue-200/40 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} HimSara Bake Studio. Crafted with obsession.</p>
      </div>
    </footer>
  );
}

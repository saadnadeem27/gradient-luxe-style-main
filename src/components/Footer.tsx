import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-midnight text-luxury-cream py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h4 className="text-3xl font-bold tracking-tight mb-6 bg-gradient-luxury bg-clip-text text-transparent">ÉLÉGANCE</h4>
            <p className="text-luxury-cream/70 text-base leading-relaxed font-light">
              Crafting timeless luxury fashion for the modern individual who values quality, sophistication, and sustainable elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-6 text-luxury-gold uppercase tracking-widest text-sm">Collections</h5>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">Women</a></li>
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">Men</a></li>
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">Accessories</a></li>
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">New Arrivals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-semibold mb-6 text-luxury-gold uppercase tracking-widest text-sm">Support</h5>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">Size Guide</a></li>
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">Shipping & Returns</a></li>
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">Care Instructions</a></li>
              <li><a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 font-light hover:translate-x-1">Contact Us</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="font-semibold mb-6 text-luxury-gold uppercase tracking-widest text-sm">Connect</h5>
            <div className="flex space-x-6">
              <a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 hover:scale-125 p-2 hover:bg-luxury-gold/10 rounded-full">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 hover:scale-125 p-2 hover:bg-luxury-gold/10 rounded-full">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-luxury-cream/70 hover:text-luxury-gold transition-all duration-300 hover:scale-125 p-2 hover:bg-luxury-gold/10 rounded-full">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-luxury-cream/60 font-light">
              © 2024 Élégance. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-base text-luxury-cream/60 hover:text-luxury-gold transition-all duration-300 font-light">Privacy Policy</a>
              <a href="#" className="text-base text-luxury-cream/60 hover:text-luxury-gold transition-all duration-300 font-light">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
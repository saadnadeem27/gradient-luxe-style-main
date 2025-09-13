import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] font-medium">Luxury Fashion House</span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-luxury-cream mb-8 tracking-tight leading-none">
            Timeless
            <span className="block bg-gradient-luxury bg-clip-text text-transparent font-light">Elegance</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-luxury-cream/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our curated collection of luxury fashion that transcends seasons and trends. Where sophistication meets contemporary design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="luxury" size="lg" className="text-lg px-12 py-6 h-auto">
              Explore Collection
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-12 py-6 h-auto text-luxury-cream border-luxury-cream/20 hover:text-luxury-midnight">
              Watch Story
            </Button>
          </div>

          {/* Luxury Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-luxury-cream/60">
            <div className="text-center">
              <div className="text-2xl font-light text-luxury-gold mb-1">50+</div>
              <div className="text-sm uppercase tracking-widest">Exclusive Pieces</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-luxury-cream/20"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-luxury-gold mb-1">100%</div>
              <div className="text-sm uppercase tracking-widest">Sustainable</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-luxury-cream/20"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-luxury-gold mb-1">25+</div>
              <div className="text-sm uppercase tracking-widest">Years Heritage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border border-luxury-gold/40 rounded-full flex justify-center cursor-pointer hover:border-luxury-gold transition-colors duration-300">
          <div className="w-1 h-4 bg-luxury-gold/60 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
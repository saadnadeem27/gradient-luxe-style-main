import { Button } from "@/components/ui/button";
import womenCollection from "@/assets/women-collection.jpg";

const FeaturedCollection = () => {
  return (
    <section className="py-32 bg-luxury-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-4">
            <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] font-medium">Autumn/Winter 2024</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-extralight text-luxury-midnight mb-6 tracking-tight">
            Featured Collection
          </h3>
          <p className="text-xl text-luxury-bronze max-w-3xl mx-auto leading-relaxed font-light">
            Handpicked pieces that embody sophistication and contemporary elegance, crafted with the finest materials and attention to detail.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative group overflow-hidden rounded-none shadow-2xl">
              <img 
                src={womenCollection}
                alt="Featured Collection - Autumn/Winter 2024" 
                className="w-full h-[700px] object-cover transition-all duration-700 group-hover:scale-110 filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-luxury-cream/90 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-luxury-midnight text-sm font-medium uppercase tracking-widest">Explore Collection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            <div>
              <h4 className="text-4xl font-extralight text-luxury-midnight mb-6 tracking-tight">
                Sophisticated Minimalism
              </h4>
              <p className="text-lg text-luxury-bronze leading-relaxed mb-8 font-light">
                A sophisticated blend of modern minimalism and timeless luxury. Each piece is carefully crafted to create versatile wardrobe essentials that transcend seasonal trends. Our commitment to excellence is reflected in every stitch, every detail, and every silhouette.
              </p>
              <div className="w-20 h-px bg-luxury-gold"></div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-luxury-pearl/50 backdrop-blur-sm border border-luxury-gold/10">
                <div className="text-3xl font-extralight text-luxury-gold mb-3">50+</div>
                <div className="text-sm text-luxury-bronze uppercase tracking-widest font-medium">Unique Pieces</div>
              </div>
              <div className="text-center p-8 bg-luxury-pearl/50 backdrop-blur-sm border border-luxury-gold/10">
                <div className="text-3xl font-extralight text-luxury-gold mb-3">100%</div>
                <div className="text-sm text-luxury-bronze uppercase tracking-widest font-medium">Sustainable</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button variant="premium" size="lg" className="flex-1 h-14 text-base">
                Shop Collection
              </Button>
              <Button variant="elegant" size="lg" className="flex-1 h-14 text-base">
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
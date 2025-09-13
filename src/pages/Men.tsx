import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import menCollection from "@/assets/men-collection.jpg";
import menFormal from "@/assets/men-formal.jpg";
import menCasualWear from "@/assets/men-casual-wear.jpg";
import menAccessories from "@/assets/men-accessories.jpg";

const Men = memo(() => {
  const categories = [
    { name: "Suits", count: "16 pieces", image: menFormal },
    { name: "Casual Wear", count: "28 pieces", image: menCasualWear },
    { name: "Outerwear", count: "20 pieces", image: menCollection },
    { name: "Accessories", count: "14 pieces", image: menAccessories }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 block">Men's Collection</span>
            <h1 className="text-6xl md:text-7xl font-extralight text-luxury-midnight mb-6 tracking-tight">
              Modern
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">Gentleman</span>
            </h1>
            <p className="text-xl text-luxury-bronze max-w-3xl mx-auto leading-relaxed font-light">
              Sophisticated menswear that combines contemporary design with traditional craftsmanship for the discerning gentleman.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-luxury-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="glass" size="lg">
                      Shop {category.name}
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium text-luxury-midnight mb-2">{category.name}</h3>
                  <p className="text-luxury-bronze text-sm uppercase tracking-widest">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailoring Section */}
      <section className="py-20 bg-luxury-midnight">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extralight text-luxury-cream mb-6">Bespoke Tailoring</h2>
              <p className="text-luxury-cream/80 text-lg leading-relaxed mb-8 font-light">
                Experience the art of made-to-measure tailoring. Our master craftsmen create garments that fit perfectly and reflect your personal style.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-4"></div>
                  <span className="text-luxury-cream/80">Personal consultation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-4"></div>
                  <span className="text-luxury-cream/80">Premium fabrics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-4"></div>
                  <span className="text-luxury-cream/80">Expert craftsmanship</span>
                </div>
              </div>
              <Button variant="luxury" size="lg">
                Book Consultation
              </Button>
            </div>
            <div className="relative">
              <img 
                src={menFormal} 
                alt="Bespoke Tailoring"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

Men.displayName = 'Men';

export default Men;
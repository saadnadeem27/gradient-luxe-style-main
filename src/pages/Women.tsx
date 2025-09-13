import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import womenCollection from "@/assets/women-collection.jpg";
import eveningWear from "@/assets/evening-wear.jpg";
import womenCasualWear from "@/assets/women-casual-wear.jpg";
import womenAccessories from "@/assets/women-accessories.jpg";

const Women = memo(() => {
  const categories = [
    { name: "Dresses", count: "24 pieces", image: eveningWear },
    { name: "Outerwear", count: "18 pieces", image: womenCasualWear },
    { name: "Knitwear", count: "22 pieces", image: womenCollection },
    { name: "Accessories", count: "16 pieces", image: womenAccessories }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 block">Women's Collection</span>
            <h1 className="text-6xl md:text-7xl font-extralight text-luxury-midnight mb-6 tracking-tight">
              Feminine
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">Elegance</span>
            </h1>
            <p className="text-xl text-luxury-bronze max-w-3xl mx-auto leading-relaxed font-light">
              Discover sophisticated pieces designed for the modern woman who values timeless style and exceptional quality.
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

      {/* Featured Products */}
      <section className="py-20 bg-luxury-pearl/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight text-luxury-midnight mb-4">Featured Pieces</h2>
            <p className="text-luxury-bronze font-light">Handpicked selections from our latest collection</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={[womenCollection, eveningWear, womenCasualWear][item - 1]} 
                    alt={`Featured Product ${item}`}
                    className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-luxury-gold text-luxury-midnight text-xs px-3 py-1 font-medium uppercase tracking-widest">New</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-light text-luxury-midnight">Silk Evening Dress</h4>
                  <p className="text-luxury-bronze text-sm">€2,450</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

Women.displayName = 'Women';

export default Women;
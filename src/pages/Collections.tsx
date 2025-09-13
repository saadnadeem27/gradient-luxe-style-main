import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import womenCollection from "@/assets/women-collection.jpg";
import menCollection from "@/assets/men-collection.jpg";
import eveningWear from "@/assets/evening-wear.jpg";

// Memoized collection item for better performance
const CollectionItem = memo(({ collection, index }: { collection: any; index: number }) => (
  <div className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="relative overflow-hidden mb-6">
      <img 
        src={collection.image} 
        alt={collection.title}
        className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-luxury-midnight/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <Button variant="glass" className="w-full">
          Explore Collection
        </Button>
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-light text-luxury-midnight">{collection.title}</h3>
        <span className="text-sm text-luxury-gold uppercase tracking-widest">{collection.pieces}</span>
      </div>
      <p className="text-luxury-bronze font-light leading-relaxed">{collection.description}</p>
    </div>
  </div>
));

const Collections = memo(() => {
  const collections = [
    {
      title: "Autumn/Winter 2024",
      description: "Sophisticated minimalism meets contemporary luxury",
      pieces: "48 pieces",
      image: womenCollection
    },
    {
      title: "Spring/Summer 2024", 
      description: "Effortless elegance for the modern wardrobe",
      pieces: "52 pieces",
      image: menCollection
    },
    {
      title: "Resort Collection",
      description: "Timeless pieces for sophisticated travel", 
      pieces: "24 pieces",
      image: eveningWear
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 block">All Collections</span>
            <h1 className="text-6xl md:text-7xl font-extralight text-luxury-midnight mb-6 tracking-tight">
              Curated
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">Collections</span>
            </h1>
            <p className="text-xl text-luxury-bronze max-w-3xl mx-auto leading-relaxed font-light">
              Explore our carefully curated collections that define contemporary luxury fashion.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {collections.map((collection, index) => (
              <CollectionItem key={collection.title} collection={collection} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

Collections.displayName = 'Collections';

export default Collections;
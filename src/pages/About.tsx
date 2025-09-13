import React, { memo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heritageAtelier from "@/assets/heritage-atelier.jpg";
import creativeDirector from "@/assets/creative-director.jpg";
import headDesigner from "@/assets/head-designer.jpg";
import sustainabilityDirector from "@/assets/sustainability-director.jpg";

const About = memo(() => {
  return (
    <div className="min-h-screen bg-luxury-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-luxury-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 block">Our Story</span>
            <h1 className="text-6xl md:text-7xl font-extralight text-luxury-midnight mb-6 tracking-tight">
              Crafting
              <span className="block bg-gradient-luxury bg-clip-text text-transparent">Excellence</span>
            </h1>
            <p className="text-xl text-luxury-bronze max-w-3xl mx-auto leading-relaxed font-light">
              For over 25 years, Élégance has been at the forefront of luxury fashion, creating timeless pieces that embody sophistication and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extralight text-luxury-midnight mb-6">Our Heritage</h2>
              <p className="text-luxury-bronze text-lg leading-relaxed mb-6 font-light">
                Founded in 1999, Élégance emerged from a vision to create fashion that transcends trends and seasons. Our founder, inspired by the timeless elegance of European couture houses, set out to establish a brand that would honor traditional craftsmanship while embracing contemporary innovation.
              </p>
              <p className="text-luxury-bronze text-lg leading-relaxed mb-8 font-light">
                Today, we continue this legacy by working with the finest artisans and using only the most exceptional materials, ensuring that each piece in our collection meets the highest standards of quality and design.
              </p>
              <div className="w-20 h-px bg-luxury-gold mb-8"></div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-extralight text-luxury-gold mb-2">25+</div>
                  <div className="text-sm text-luxury-bronze uppercase tracking-widest">Years Heritage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-luxury-gold mb-2">50+</div>
                  <div className="text-sm text-luxury-bronze uppercase tracking-widest">Master Artisans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extralight text-luxury-gold mb-2">100%</div>
                  <div className="text-sm text-luxury-bronze uppercase tracking-widest">Sustainable</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heritageAtelier}
                alt="Our Heritage"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-luxury-pearl/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight text-luxury-midnight mb-4">Our Values</h2>
            <p className="text-luxury-bronze font-light max-w-2xl mx-auto">
              The principles that guide everything we create and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium text-luxury-midnight mb-4">Quality</h3>
              <p className="text-luxury-bronze font-light leading-relaxed">
                Every piece is crafted with meticulous attention to detail, using only the finest materials and traditional techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium text-luxury-midnight mb-4">Sustainability</h3>
              <p className="text-luxury-bronze font-light leading-relaxed">
                We are committed to responsible fashion, ensuring our practices protect the environment while supporting ethical manufacturing processes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-luxury-gold rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium text-luxury-midnight mb-4">Innovation</h3>
              <p className="text-luxury-bronze font-light leading-relaxed">
                While honoring tradition, we continuously embrace new technologies and design approaches to create fashion for the modern world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight text-luxury-midnight mb-4">Meet Our Team</h2>
            <p className="text-luxury-bronze font-light max-w-2xl mx-auto">
              The visionaries and craftspeople behind every Élégance creation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Isabella Laurent", role: "Creative Director", image: creativeDirector },
              { name: "Marco Valentino", role: "Head of Design", image: headDesigner },
              { name: "Sophie Chen", role: "Sustainability Director", image: sustainabilityDirector }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium text-luxury-midnight mb-2">{member.name}</h3>
                <p className="text-luxury-bronze text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-luxury-midnight">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extralight text-luxury-cream mb-6">Let's Create Together</h2>
          <p className="text-luxury-cream/80 text-lg mb-8 max-w-2xl mx-auto font-light">
            Whether you're interested in our collections, bespoke services, or partnerships, we'd love to hear from you.
          </p>
          <Button variant="luxury" size="lg" className="px-12">
            Get In Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
});

About.displayName = 'About';

export default About;
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

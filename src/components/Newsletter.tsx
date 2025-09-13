import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-light text-primary-foreground mb-6">
              Stay in the Know
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Be the first to discover new collections, exclusive events, and styling insights from our design team.
            </p>

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-luxury-gold"
              />
              <Button variant="luxury" className="sm:w-auto">
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
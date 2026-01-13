import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-background to-background" />
      
      {/* Gold glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
            Start Today
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Secure Your
            <span className="block gold-text">Financial Future?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of investors who trust Just Gold for their precious metal savings. 
            Start with as little as $50.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Create Free Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Talk to an Expert
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            No credit card required • Free for first 30 days • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

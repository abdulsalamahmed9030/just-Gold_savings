import { Shield, Zap, TrendingUp, Lock, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "Your savings are protected with institutional-grade security and comprehensive insurance coverage.",
  },
  {
    icon: Zap,
    title: "Instant Savings",
    description:
      "Start saving in gold or silver instantly with real-time pricing and seamless execution.",
  },
  {
    icon: TrendingUp,
    title: "Savings Growth",
    description:
      "Track how your gold and silver savings grow over time with clear insights and performance views.",
  },
  {
    icon: Lock,
    title: "Fully Allocated Storage",
    description:
      "Your gold and silver savings are fully allocated and stored in secure vaults.",
  },
  {
    icon: Globe,
    title: "Access Anytime",
    description:
      "Monitor and manage your savings anytime, anywhere with full transparency.",
  },
  {
    icon: Clock,
    title: "No Lock-In",
    description:
      "Add to or withdraw from your savings whenever you want with no hidden fees.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* GOLD FLOATING PARTICLES (BACKGROUND) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(200)].map((_, i) => {
          const size =
            Math.random() > 0.8 ? 5 :
            Math.random() > 0.5 ? 3 : 2;

          return (
            <span
              key={i}
              className="absolute rounded-full bg-gold/30 animate-gold-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The <span className="gold-text">Premium Standard</span> in
            <br />
            Gold & Silver Savings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A modern, secure way to save in gold and silver with clarity,
            control, and confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-8 group hover:border-gold/30 transition-all duration-500 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Gold Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default FeaturesSection;

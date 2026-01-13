import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import goldBarsImage from "@/assets/gold-bars.jpg";
import silverBarsImage from "@/assets/silver-bars.jpg";

const PricingCards = () => {
  // Simulated live prices
  const goldPrice = 2648.50;
  const goldChange = 12.30;
  const goldChangePercent = 0.47;
  
  const silverPrice = 31.45;
  const silverChange = -0.18;
  const silverChangePercent = -0.57;

  return (
    <section className="relative py-24 lg:py-32 bg-midnight-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Live Prices
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trade <span className="gold-text">Gold</span> & Silver
            <br />
            at Competitive Rates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access real-time precious metal prices with institutional-grade spreads.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Gold Card */}
          <div className="glass-card rounded-3xl overflow-hidden group hover:border-gold/40 transition-all duration-500">
            <div className="relative h-48 overflow-hidden">
              <img
                src={goldBarsImage}
                alt="24K Gold Bars"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium backdrop-blur-sm">
                  XAU/AED
                </span>
              </div>
            </div>
           <div className="p-8">
  <div className="flex items-start justify-between mb-4">
    <div>
      <h3 className="font-display text-2xl font-bold mb-1">Gold</h3>
      <p className="text-muted-foreground text-sm">Per Troy Ounce (AED)</p>
    </div>

    <div
      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
        goldChange >= 0
          ? "bg-emerald-500/10 text-emerald-400"
          : "bg-red-500/10 text-red-400"
      }`}
    >
      {goldChange >= 0 ? (
        <ArrowUpRight className="w-4 h-4" />
      ) : (
        <ArrowDownRight className="w-4 h-4" />
      )}
      {goldChangePercent >= 0 ? "+" : ""}
      {goldChangePercent.toFixed(2)}%
    </div>
  </div>

  <div className="flex items-baseline gap-2">
    <span className="font-display text-4xl font-bold gold-text">
      AED{" "}
      {goldPrice.toLocaleString("en-AE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>

    <span
      className={`text-sm ${
        goldChange >= 0 ? "text-emerald-400" : "text-red-400"
      }`}
    >
      {goldChange >= 0 ? "+" : ""}AED{" "}
      {goldChange.toLocaleString("en-AE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>
  </div>

  <button className="w-full mt-6 py-3 rounded-xl bg-gold/10 text-gold font-medium hover:bg-gold/20 transition-colors duration-300">
    Save in Gold
  </button>
</div>

          </div>

          {/* Silver Card */}
         <div className="glass-card rounded-3xl overflow-hidden group hover:border-silver/40 transition-all duration-500">
  <div className="relative h-48 overflow-hidden">
    <img
      src={silverBarsImage}
      alt="Silver Bars"
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
    <div className="absolute bottom-4 left-6">
      <span className="px-3 py-1 rounded-full bg-silver/20 text-silver text-sm font-medium backdrop-blur-sm">
        XAG/AED
      </span>
    </div>
  </div>

  <div className="p-8">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-display text-2xl font-bold mb-1">Silver</h3>
        <p className="text-muted-foreground text-sm">Per Troy Ounce (AED)</p>
      </div>

      <div
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
          silverChange >= 0
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-red-500/10 text-red-400"
        }`}
      >
        {silverChange >= 0 ? (
          <ArrowUpRight className="w-4 h-4" />
        ) : (
          <ArrowDownRight className="w-4 h-4" />
        )}
        {silverChangePercent >= 0 ? "+" : ""}
        {silverChangePercent.toFixed(2)}%
      </div>
    </div>

    <div className="flex items-baseline gap-2">
      <span className="font-display text-4xl font-bold text-silver">
        AED{" "}
        {silverPrice.toLocaleString("en-AE", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>

      <span
        className={`text-sm ${
          silverChange >= 0 ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {silverChange >= 0 ? "+" : ""}AED{" "}
        {silverChange.toLocaleString("en-AE", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </div>

    <button className="w-full mt-6 py-3 rounded-xl bg-silver/10 text-silver font-medium hover:bg-silver/20 transition-colors duration-300">
      Save in Silver
    </button>
  </div>
</div>

        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Prices updated every 10 seconds • Spread as low as 0.25%
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;

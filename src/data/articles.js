// Edit this list with your real articles. Each entry needs a unique slug
// and a Body component (in src/content/articles/<slug>.jsx).
import RussiaOilSovereignty from "../content/articles/russia-oil-sovereignty.jsx";
import InterestRateParticipationHouseholds from "../content/articles/interest-rate-participation-households.jsx";
import MicronMemorySupercycle from "../content/articles/micron-memory-supercycle.jsx";

export const articles = [
  {
    slug: "micron-memory-supercycle",
    title: "Micron Technology: Is the Memory Supercycle Just Getting Started?",
    date: "2026-09-22",
    excerpt:
      "Why I took a long position in Micron despite AI-demand jitters: the case for a structurally undersupplied DRAM and HBM market, and what it implies for earnings and the stock's valuation multiple.",
    Body: MicronMemorySupercycle,
  },
  {
    slug: "russia-oil-sovereignty",
    title: "Is Russia Really Sovereign Over the Price of Its Own Oil?",
    date: "2026-09-17",
    excerpt:
      "From the Seven Sisters to OPEC to financial markets: how pricing power over crude shifted over the decades, and why Urals still trades as a discount off Brent rather than a price Russia sets itself.",
    Body: RussiaOilSovereignty,
  },
  {
    slug: "interest-rate-participation-households",
    title: "Interest Rates, Stock Market Participation, and Households",
    date: "2026-09-12",
    excerpt:
      "Replicating Juan M. Morelli's model of how rising equity-market participation changes the way interest rate shocks pass through to consumption, investment, and output.",
    Body: InterestRateParticipationHouseholds,
  },
];

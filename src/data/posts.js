// Edit this list with your real posts. Each entry needs a unique slug
// and a Body component (in src/content/posts/<slug>.jsx).
import BitcoinMacroDivergence from "../content/posts/bitcoin-macro-divergence.jsx";
import StagflationRiskRateHikes from "../content/posts/stagflation-risk-rate-hikes.jsx";
import DevelopedMarketBondYields from "../content/posts/developed-market-bond-yields.jsx";

export const posts = [
  {
    slug: "bitcoin-macro-divergence",
    title: "Something Weird Is Happening With Bitcoin",
    date: "2026-09-17",
    excerpt:
      "Rate hikes, a stronger dollar, and $100 oil aren't stopping Bitcoin's rally. Is the market already pricing in the storm, or is Bitcoin seeing something the macro data hasn't caught yet?",
    Body: BitcoinMacroDivergence,
  },
  {
    slug: "stagflation-risk-rate-hikes",
    title: "Are We Heading Toward Stagflation?",
    date: "2026-09-15",
    excerpt:
      "Why hiking rates into exogenous, supply-driven inflation slows growth without curing it — and what that could mean for valuations.",
    Body: StagflationRiskRateHikes,
  },
  {
    slug: "developed-market-bond-yields",
    title: "What's Really Driving the Rise in Developed-Market Bond Yields?",
    date: "2026-09-07",
    excerpt:
      "Breakeven inflation has been falling since the Hormuz Strait conflict, yet Treasury yields keep climbing. The gap is the term premium — and hyperscaler debt issuance.",
    Body: DevelopedMarketBondYields,
  },
];

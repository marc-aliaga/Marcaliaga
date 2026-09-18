import breakevenInflation from "../../assets/posts/developed-market-bond-yields/breakeven-inflation.png";
import treasuryYield from "../../assets/posts/developed-market-bond-yields/treasury-yield.png";
import termPremium from "../../assets/posts/developed-market-bond-yields/term-premium.png";

export default function DevelopedMarketBondYields() {
  return (
    <>
      <p>
        What's really driving the recent rise in developed-market bond
        yields? To answer that, we need to separate two things: breakeven
        inflation and the term premium.
      </p>

      <figure>
        <img
          src={breakevenInflation}
          alt="US 5-, 10-, and 20-year breakeven inflation rates over the past year"
        />
        <figcaption>US breakeven inflation rates (MacroMicro)</figcaption>
      </figure>
      <p>
        As the chart shows, breakeven inflation has been falling since the
        first month of the Hormuz Strait conflict (May 2026).
      </p>

      <figure>
        <img
          src={treasuryYield}
          alt="Market yield on 10-year US Treasury securities, past year"
        />
        <figcaption>10-year Treasury yield (FRED)</figcaption>
      </figure>
      <p>
        In contrast, U.S. Treasury yields have kept climbing since that same
        date. So the question is: why? We just saw that the main driver
        isn't breakeven inflation, which is essentially the nominal bond
        yield minus the TIPS yield.
      </p>
      <p>
        That points to the other component: the term premium — the extra
        return investors demand for the risk of holding longer-dated bonds.
        Before COVID, the term premium was negative, because the Fed was
        constantly buying bonds. That's changed as fiscal policy has grown
        looser, following a more Keynesian playbook.
      </p>

      <figure>
        <img
          src={termPremium}
          alt="10-year Treasury yield decomposed into TIPS yield, breakeven inflation, and term premium since 2004"
        />
        <figcaption>
          10-year Treasury yield decomposition: TIPS yield, breakeven
          inflation, and term premium (MacroMicro)
        </figcaption>
      </figure>
      <p>
        The term premium now sits around 0.88%. That means if the 10-year
        yield is around 4.8%, roughly 0.88 points of that yield has nothing
        to do with inflation or rate expectations.
      </p>

      <h3>A new source of pressure: corporate bond supply</h3>
      <p>
        On top of that, government bonds are now competing with a wave of
        AI-related corporate debt.
      </p>
      <p>
        Over the past decade, big AI companies funded their investment mostly
        out of CapEx. That era is ending, as hyperscalers need far more
        capital than internal cash flow can provide. Between 2020 and 2024,
        the five hyperscalers issued roughly $35 billion of debt per year on
        average. Year-to-date in 2026, they've issued around $132 billion —
        including one $53 billion multi-tranche offering, among the largest
        corporate bond sales on record, and a bond that matures 100 years
        from issuance. Estimates for total AI-related debt issuance in
        2026 — including chipmakers, data-center developers, and utilities —
        range from roughly $300 billion to $570 billion.
      </p>
    </>
  );
}

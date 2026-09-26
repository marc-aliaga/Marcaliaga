import vostokOilMap from "../../assets/articles/rosneft-dcf/vostok-oil-map.png";
import vostokProductionRampUp from "../../assets/articles/rosneft-dcf/vostok-production-ramp-up.png";
import brentScenarios from "../../assets/articles/rosneft-dcf/brent-scenarios.png";
import otherAssumptions from "../../assets/articles/rosneft-dcf/other-assumptions.png";
import revenue from "../../assets/articles/rosneft-dcf/revenue.png";
import ebit from "../../assets/articles/rosneft-dcf/ebit.png";
import depreciationAmortization from "../../assets/articles/rosneft-dcf/depreciation-amortization.png";
import capex from "../../assets/articles/rosneft-dcf/capex.png";
import beta from "../../assets/articles/rosneft-dcf/beta.png";
import countryRiskPremium from "../../assets/articles/rosneft-dcf/country-risk-premium.png";
import damodaranRussia from "../../assets/articles/rosneft-dcf/damodaran-russia.png";
import wacc from "../../assets/articles/rosneft-dcf/wacc.png";
import freeCashFlow from "../../assets/articles/rosneft-dcf/free-cash-flow.png";
import enterpriseToSharePrice from "../../assets/articles/rosneft-dcf/enterprise-to-share-price.png";

export default function RosneftDcfVostokOil() {
  return (
    <>
      <p>
        <strong>
          How do you value one of Russia’s largest companies when it operates
          in a market driven by oil prices, sanctions and geopolitical
          uncertainty?
        </strong>
      </p>
      <p>
        I recently finished my DCF of Rosneft (ROSN) and, honestly, the
        process turned out to be far more interesting than the final result.
      </p>
      <p>
        Those of you already familiar with valuation are probably wondering
        why I didn’t simply use a relative valuation, comparing multiples with
        other companies in the sector. The truth is that it would have been a
        much faster and more efficient approach.
      </p>
      <p>
        However, I chose a DCF because I wanted to isolate, as far as
        possible, the risk and market sentiment that weigh on investors when
        taking positions on the MOEX. An intrinsic valuation lets us analyse
        how, and how much, the oil price affects Rosneft, what its growth
        prospects are, and which new projects could benefit the company in the
        future.
      </p>
      <p>
        Had I based the analysis solely on multiples, I would have been
        indirectly baking in the market sentiment and the negative momentum
        the company has carried in recent years, driven, among other factors,
        by growing tensions with the West and restricted access to the
        international financial system.
      </p>
      <p>
        But before getting to the result, let me walk you through the process
        and the questions that came up as I dug deeper into its financial
        statements.
      </p>

      <h3>1. Gathering the information</h3>
      <p>
        The first step, as in any DCF, was to find and gather as much
        information as possible.
      </p>
      <p>
        The main source was, naturally, Rosneft’s Investor Relations section
        (rosneft.com). I also used other sources, such as Russtock.ru, to
        complement the information available on the company.
      </p>
      <p>
        The first difficulty appeared quickly:{" "}
        <strong>
          how do you value a company when the available financial information
          is far more limited than for a Western company?
        </strong>
      </p>
      <p>
        Since 2022, the Russian government has introduced measures allowing
        certain companies and financial institutions to restrict the
        disclosure of financial information. In 2023, a presidential decree
        extended these measures to certain companies deemed strategic,
        allowing them, under specific circumstances, not to publish their IFRS
        financial statements.
      </p>
      <p>
        Even so, Rosneft still publishes some basic financial and operating
        metrics, which makes it possible to build a valuation, albeit with
        limitations and with the need to cross-check the information against
        different sources.
      </p>

      <h3>2. Projections</h3>
      <p>
        Once the financial statements were gathered, the second step is to
        project them five years ahead (2026–2030). This is genuinely the most
        interesting part, because Rosneft’s profitability and growth depend
        above all on two factors: <strong>production volume</strong> and{" "}
        <strong>the oil price</strong>.
      </p>

      <h4>Production: the Vostok Oil project</h4>
      <p>
        To project revenue, for example, I couldn’t simply assume linear
        growth based on history. Why? Basically, because Rosneft has launched
        its oil megaproject in the Krasnoyarsk region, in the Arctic. As I
        have discussed in other articles, the fossil fuel sector periodically
        requires large CAPEX investments to develop new fields and sustain
        production.
      </p>
      <p>
        In Russia’s case, the centre of gravity of production has kept
        shifting: from Baku in the south in the 1930s and 40s, through the
        Siberian fields, to today’s Arctic fields.
      </p>
      <p>
        With Vostok Oil, Rosneft expects to reach a full-capacity output of
        between 50 and 100 million tonnes a year. For my analysis I took the{" "}
        <strong>conservative scenario of 50 million tonnes</strong>, with a
        linear ramp-up that starts at 30 million tonnes in 2027 and reaches
        full capacity in 2030.
      </p>
      <figure>
        <img
          src={vostokOilMap}
          alt="Map of the Vostok Oil project: fields, pipeline network and the Sever export terminal on the Taimyr Peninsula"
        />
        <figcaption>
          Vostok Oil: fields, pipeline network and the Sever export terminal
          on the Taimyr Peninsula.
        </figcaption>
      </figure>
      <p>
        From here we can estimate revenue. We take 2026 revenue as the base
        (keeping production from existing fields in line with previous years)
        and, from 2027 onwards, add the incremental production from Vostok.
      </p>
      <p>
        For reference, one tonne of oil is roughly 7.3 barrels. With 30
        million tonnes in the first projected year, that means{" "}
        <strong>
          around 220 million barrels a year, or roughly 602,000 barrels per
          day
        </strong>
        .
      </p>
      <figure>
        <img
          src={vostokProductionRampUp}
          alt="Vostok Oil production ramp-up, base case: 30.0 Mt in 2027 rising to 50.0 Mt in 2030, from 602 to 1,004 thousand barrels per day, adding RUB 1,471 bn to 2,045 bn of revenue"
        />
      </figure>

      <h4>Oil price: three scenarios</h4>
      <p>
        This is where the oil price comes into play. As of this writing,
        benchmark crudes such as Brent and WTI are trading around $100 per
        barrel in the futures market due to tensions with Iran.
      </p>
      <p>
        That said, I built three scenarios for the oil price over the coming
        years. In all of them, prices trend towards stabilising around $60–70
        per barrel by the end of the projection period.
      </p>
      <figure>
        <img
          src={brentScenarios}
          alt="Brent annual average price by scenario (bear, base and bull), 2027–2030"
        />
      </figure>
      <ul>
        <li>
          <strong>Bear case:</strong> we simply take the forecasts from J.P.
          Morgan and Russia’s Ministry of Economic Development.
        </li>
        <li>
          <strong>Base case:</strong> we start from an anchor value (the EIA
          STEO forecast of $73.7 for 2027 and a long-run mid-cycle Brent of
          $65 thereafter) and blend it with the price of long-dated futures
          contracts (
          <a
            href="https://www.cmegroup.com/markets/energy/crude-oil/light-sweet-crude.quotes.html"
            target="_blank"
            rel="noreferrer"
          >
            CME Group
          </a>
          ), with the weight on futures falling from 50% to 25% over time. On
          top of that, we apply the Urals discount to Brent.
        </li>
        <li>
          <strong>Bull case:</strong> simply reflects what the market is
          willing to pay today, taking into account all the geopolitical
          tension and supply chain disruptions.
        </li>
      </ul>
      <figure>
        <img
          src={otherAssumptions}
          alt="Other base-case assumptions: Urals discount to Brent widening from $8 to $12 per barrel and USD/RUB rising from 87.4 to 100.0 between 2027 and 2030"
        />
      </figure>

      <h4>Revenue</h4>
      <p>
        If we combine these oil price projections with the production coming
        from Vostok, revenue jumps by 18% in 2027, when Vostok starts
        producing, and then keeps growing steadily as the project matures and
        approaches its target capacity of 50 million tonnes a year.
      </p>
      <figure>
        <img
          src={revenue}
          alt="Revenue in RUB bn: 8,164 in 2025, 8,128 in 2026, 9,599 in 2027 (+18.1%), 9,716 in 2028, 9,932 in 2029 and 10,173 in 2030"
        />
      </figure>

      <h4>Margins: EBIT and D&amp;A</h4>
      <p>
        For EBIT, instead of assuming the same margin for existing production
        and for the new Vostok production, I give the latter a higher margin
        thanks to the reductions in the{" "}
        <strong>Mineral Extraction Tax (MET)</strong> granted by the Russian
        government: tax relief of roughly RUB 2.6 trillion.
      </p>
      <p>
        In addition, to keep the identity EBIT = EBITDA − D&amp;A, we subtract
        the year-over-year increase in D&amp;A from EBITDA. As a result, the
        EBIT margin gradually narrows from 21.9% in 2027 to 19.3% in 2030.
      </p>
      <figure>
        <img src={ebit} alt="EBIT in RUB bn and EBIT margin, 2025–2030" />
      </figure>
      <p>
        Why does D&amp;A increase? When a project like this starts producing,
        all the infrastructure investment accumulated on the balance sheet as{" "}
        <strong>Construction Work in Progress (CWIP)</strong> is reclassified
        as Property, Plant &amp; Equipment in service. From that moment it
        starts to be depreciated, and that depreciation hits the income
        statement through D&amp;A, affecting EBIT and, via taxes, future cash
        flows.
      </p>
      <figure>
        <img
          src={depreciationAmortization}
          alt="Depreciation and amortization in RUB bn, 2025–2030"
        />
      </figure>

      <h4>CapEx</h4>
      <p>
        As the project matures, infrastructure investment declines just as
        D&amp;A rises: CapEx peaks at RUB 1,880 bn in 2027 and falls to RUB
        1,526 bn in 2030, converging towards D&amp;A. This makes sense: if
        CAPEX grew indefinitely above D&amp;A, it would mean Rosneft is
        constantly expanding; conversely, CAPEX systematically below D&amp;A
        would indicate that assets are depreciating faster than the company
        invests to maintain or improve them.
      </p>
      <figure>
        <img
          src={capex}
          alt="CapEx in RUB bn: 1,538 in 2025, 1,716 in 2026, peaking at 1,880 in 2027 and falling to 1,526 in 2030, with CapEx/D&A declining from 2.1x to 1.1x"
        />
      </figure>

      <h3>3. Discount rate</h3>

      <h4>Risk-free rate: the Russian monetary context</h4>
      <p>
        This is probably the most important point for a company operating in
        Russia. Russia is currently going through financial isolation, which
        is the single most important structural factor for the share price
        performance and access to funding of companies listed on the MOEX.
      </p>
      <p>
        However, the Russian financial system has, to some extent, managed to
        develop domestic mechanisms and alternative channels for the
        circulation of capital.
      </p>
      <p>
        As a result of this exclusion, the Russian economy has suffered a
        considerable loss in the value of money: CPI rose from 3–5% before
        2022 to a peak of 17% in mid-2022. This forced the Central Bank of
        Russia to raise interest rates as high as 21%, although the situation
        now appears to have stabilised at around 6–7%. According to the
        Central Bank itself, this recent stabilisation has opened the door to
        talk of future monetary easing.
      </p>
      <p>
        This matters when calculating the WACC because, with a{" "}
        <strong>local risk-free rate of around 16%</strong>, investors will
        demand a higher return to put their money into Rosneft rather than
        into government bonds.
      </p>

      <h4>Beta: which index should we measure risk against?</h4>
      <p>
        The next factor is estimating the stock’s implied risk relative to a
        reference portfolio. Here I had two options:
      </p>
      <ul>
        <li>
          <strong>A local Russian reference portfolio:</strong> however, this
          would not strip out the market risk, and we would not really be able
          to isolate Rosneft’s idiosyncratic risk.
        </li>
        <li>
          <strong>A global reference portfolio, such as the MSCI World:</strong>{" "}
          this is the approach I decided to use, in order to really separate
          Rosneft’s risk from Russia’s country risk. Obviously, this has made
          the beta very small (0.15), since the correlation is close to zero,
          or even negative, due to the different realities resulting from
          Western financial exclusion.
        </li>
      </ul>
      <figure>
        <img src={beta} alt="Beta of ROSN on URTH (MSCI World ETF), weekly: 0.152" />
        <figcaption>
          The data is available on{" "}
          <a
            href="https://github.com/marc-aliaga/Valuation-Methods/tree/main/Valuation/Case_Studies/Rosneft_2026/Rosneft/Beta_Rosneft"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </figcaption>
      </figure>

      <h4>Country risk premium</h4>
      <p>
        Next, we need to add Russia’s Country Risk Premium (CRP) separately.
        For this, we can use the data compiled by Professor Aswath Damodaran
        of New York University (NYU).
      </p>
      <p>
        The idea behind the country risk premium is to use CDS (credit default
        swap) spreads as a reference and multiply them by the ratio of equity
        market volatility to bond volatility. Damodaran uses CDS because they
        represent the credit risk of a default on debt, whether government or
        corporate bonds.
      </p>
      <p>
        However, Russian sovereign CDS have not traded since 2022, so
        Damodaran uses the PRS (Political Risk Services) Country Risk Score
        instead. Russia scores roughly 70 points, which Damodaran equates to a
        2.56% default spread, and then multiplies it by about 1.5 (equity
        volatility / bond volatility). That gives us the following result:
      </p>
      <figure>
        <img
          src={countryRiskPremium}
          alt="Russia country risk premium: 3.90% PRS-based premium, from a PRS score of 70.3 and a 2.56% default spread"
        />
        <img
          src={damodaranRussia}
          alt="Damodaran's table row for Russia: not rated, 2.56% default spread, 3.90% country risk premium"
        />
        <figcaption>
          Source:{" "}
          <a
            href="https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/ctryprem.html"
            target="_blank"
            rel="noreferrer"
          >
            Damodaran Online – Country Default Spreads and Risk Premiums
          </a>
        </figcaption>
      </figure>

      <h4>WACC</h4>
      <p>
        Putting it all together gives a{" "}
        <strong>cost of equity of 19.5%</strong>, against a risk-free rate of
        16%. Weighting it with the much cheaper cost of debt (5% pre-tax, with
        a 21% tax rate) at a capital structure of roughly 34% debt and 66%
        equity, we arrive at a{" "}
        <strong>final discount rate (WACC) of 14.2%</strong>.
      </p>
      <figure>
        <img
          src={wacc}
          alt="WACC build-up: 34.2% debt at 5.0% cost of debt and 21% tax rate, 66% equity at 19.5% cost of equity, giving a WACC of 14.17%"
        />
        <figcaption>Cost of equity and WACC build-up.</figcaption>
      </figure>

      <h3>4. Valuation</h3>
      <p>
        Now that we have the final discount rate for Rosneft under the current
        situation, we can move on to calculating the present value of the
        future cash flows.
      </p>
      <figure>
        <img
          src={freeCashFlow}
          alt="Free cash flow and its present value in RUB bn, 2026–2030"
        />
      </figure>
      <p>
        For the terminal value I assume a perpetual growth rate (TGR) of 3%.
        It is worth noting that the terminal value accounts for around
        two-thirds of the enterprise value, which is common in a
        capital-intensive business like this one.
      </p>
      <figure>
        <img
          src={enterpriseToSharePrice}
          alt="From enterprise value to share price: RUB 10,063 bn enterprise value, plus 630 bn cash, minus 3,900 bn debt, gives 6,793 bn equity value over 10,598 million shares, an implied share price of RUB 641"
        />
      </figure>

      <h3>Conclusion</h3>
      <p>
        According to the model, Rosneft shares should be trading at around{" "}
        <strong>RUB 641</strong>, while they currently trade at around RUB
        360 per share. That represents{" "}
        <strong>an upside of roughly 78%</strong> (the stock trades at about
        56% of its fair value) if we rely on the future production coming from
        the Vostok project. Obviously, the Russian market is currently very
        sensitive to any political or geopolitical change, on top of
        Rosneft’s own risks from depending on a commodity like oil, which the
        major powers use as a tool of geopolitical pressure.
      </p>
      <p>
        If the oil price stays elevated, Rosneft’s earnings could skyrocket.
        However, this analysis assumes that the conflict with Iran and the
        disruptions in the Strait of Hormuz will ease, and that oil will
        therefore start flowing again through the strait and the various
        pipelines.
      </p>
      <p>
        To access the DCF, you can visit{" "}
        <a href="/valuations/rosneft-2026/">this link</a>. From there you can
        also go to GitHub to see the code used to calculate the beta and the
        different oil price forecasting models.
      </p>
      <p>
        All criticism is welcome, as long as it is respectful and aimed at
        learning and improving my analysis. You can send your suggestions to{" "}
        <a href="mailto:marcaliagaborras@gmail.com">
          marcaliagaborras@gmail.com
        </a>
        .
      </p>
      <p>
        <strong>Thank you very much!</strong>
      </p>
    </>
  );
}

import longRunOilPrice from "../../assets/articles/russia-oil-sovereignty/long-run-oil-price.png";
import nationalOilCompanies from "../../assets/articles/russia-oil-sovereignty/national-oil-companies.png";
import chinaIndiaGrowth from "../../assets/articles/russia-oil-sovereignty/china-india-growth.png";
import oilPriceEvents from "../../assets/articles/russia-oil-sovereignty/oil-price-events-1970-2015.png";
import asianCurrencies from "../../assets/articles/russia-oil-sovereignty/asian-currencies-1997-98.png";
import chinaOilDemand from "../../assets/articles/russia-oil-sovereignty/china-oil-demand.png";
import crudeFuturesVolumes from "../../assets/articles/russia-oil-sovereignty/crude-futures-volumes.png";
import brentUralsSpread from "../../assets/articles/russia-oil-sovereignty/brent-urals-spread.png";

export default function RussiaOilSovereignty() {
  return (
    <>
      <p>
        Russia is one of the main players in the global energy system. And
        yet, despite that status, the price of Russian oil closely tracks
        Brent crude. Urals futures were launched precisely to move away from
        that dependence — but to this day, prices are still largely set off
        the Brent benchmark.
      </p>
      <p>
        As a consequence, Russia does not have full sovereignty over the
        pricing of its own commodity: that price is determined in
        international markets. Several studies examine this in more depth.
        Bouoiyour et al. (2015) analyze the relationship between oil prices
        and Russia's real exchange rate across different time horizons.
        Vasiljeva et al. (2019) look at how exchange-based trading could give
        Russia more direct control over crude pricing. Both arrive at a
        similar prescription: state oil purchases, so the domestic market has
        enough liquidity and traders get more stable pricing.
      </p>
      <p>
        More concerning are the points raised by Polbin (2017) and Chernyaev
        &amp; Kreydenko (2018). Polbin estimates the impact of terms-of-trade
        shocks on Russian output, investment, and consumption using a VECM
        model, and finds that a permanent oil-price increase produces a
        short-term boom followed by a negative contribution to long-term
        growth. Chernyaev and Kreydenko argue that Russia's oil and gas
        industry is already operating with exhausted industrial potential,
        facing challenges that threaten its energy security.
      </p>
      <p>
        Put together: Russia is trapped between an international market that
        dictates its prices, an economic structure that suffers when oil
        prices rise too far given its dependence on the sector, and a
        physical infrastructure that keeps getting older.
      </p>

      <figure>
        <img
          src={longRunOilPrice}
          alt="Long-run oil price history from 1861 to 2018, annotated with major supply and geopolitical events"
        />
        <figcaption>
          Oil price, 1861–2018, in money-of-the-day and 2018 dollars.
        </figcaption>
      </figure>
      <p>
        Before going deeper into Russia specifically, it's worth seeing how
        control over oil prices has shifted over time — from large
        international corporations, to producing countries organized as
        OPEC, and ultimately to financial markets.
      </p>

      <h3>Stage 1: The rise of OPEC (1970s)</h3>
      <p>
        Until the late 1960s, the global oil market was dominated by a small
        group of major international oil companies known as the “Seven
        Sisters” (Exxon, Shell, BP, and others). They controlled not just
        extraction but pricing, under concession systems that heavily favored
        them. The 1970s marked a structural shift in that balance of power,
        driven by producing countries organized within OPEC.
      </p>
      <p>
        OPEC quickly became a political weapon. During the 1973 oil crisis,
        in response to Western support for Israel in the Yom Kippur War, Arab
        OPEC members imposed an embargo; prices spiked and shortages hit
        Western economies hard. Between the collapse of Bretton Woods (1971)
        and that 1973 shock, a new monetary order emerged: oil-exporting
        countries — Saudi Arabia especially — agreed to price oil exclusively
        in U.S. dollars, in exchange for American security guarantees in the
        Gulf, protection of allied regimes, and access to global financial
        markets. A second shock followed in 1979, triggered by the Iranian
        Revolution.
      </p>
      <p>
        The more lasting change, though, was the reassertion of sovereignty
        over natural resources by producing states. Countries nationalized
        their oil industries or renegotiated the terms foreign companies
        operated under — moving from concession systems, where foreign firms
        held broad rights over exploration, production, and profits, to
        long-term contracts and production-sharing agreements, where the
        state retained ownership and dictated the terms.
      </p>
      <p>
        Production was nationalized, but transport largely stayed private,
        and FOB (free on board) pricing became the standard: oil is priced at
        the loading port, and buyers take on transport, insurance, and
        related risk from there. So producing countries controlled the value
        of crude at the source, while international oil companies kept their
        influence through tanker fleets and global distribution.
      </p>
      <p>
        The rise of national oil companies (NOCs) like Saudi Aramco and PDVSA
        wasn't just ideological “resource nationalism” — it was economically
        rational once governments realized that most of the value in oil
        comes from owning the reserves, not just operating them. Nationalizing
        captured resource rents, tax and royalty flows, and control over
        production pace, and turned oil into a policy tool: funding welfare
        states in the Gulf, supporting industrialization, or serving as
        leverage in foreign policy. NOCs aren't just companies — they're
        extensions of the state.
      </p>

      <figure>
        <img
          src={nationalOilCompanies}
          alt="Scatter chart of national oil companies by production cost, national dependence on oil revenue, production volume, and market openness"
        />
        <figcaption>National oil companies along four dimensions.</figcaption>
      </figure>

      <p>
        By this stage, OPEC was setting an Official Selling Price,
        coordinating production among members, and responding strategically
        to geopolitical events like the 1973 embargo. For the first time,
        pricing power had shifted decisively from private corporations to
        sovereign states.
      </p>

      <h3>Stage 2: Stabilization and the role of Saudi Arabia</h3>
      <p>
        After the turbulence of the 1970s, the late 1970s and especially the
        1980s brought an attempt to restore stability. The U.S. didn't
        negotiate with OPEC as a bloc — instead it built a special strategic
        relationship with Saudi Arabia, which took on the role of “swing
        producer,” raising output to cool prices when they rose too high and
        cutting it to support prices when they fell too low. That role came
        at a cost: Saudi Arabia often sacrificed market share while other
        members overproduced and captured the benefit of higher prices. The
        tension became especially visible in the mid-1980s, when Saudi
        Arabia temporarily abandoned the role, contributing to the 1986 price
        collapse.
      </p>
      <p>
        The result was a kind of informal order — OPEC setting production
        targets, Saudi Arabia enforcing discipline indirectly through its own
        output. Prices weren't fully free-market, but they weren't strictly
        fixed either: a fragile equilibrium, stable enough to avoid extreme
        volatility but dependent on cooperation that was often imperfect.
      </p>
      <p>
        Meanwhile, on the demand side, China and India began accelerating
        industrialization and urbanization — the same dynamic behind the
        rising export volumes and Baltic Dry Index I've written about
        before. That meant surging energy consumption, growing dependence on
        imported oil, and long-term upward pressure on global demand. In the
        1980s this was still an emerging trend; by the 1990s and especially
        the 2000s, it became a decisive force reshaping the oil market.
      </p>

      <figure>
        <img
          src={chinaIndiaGrowth}
          alt="Line chart of economic growth in China and India, 1950 to 2010, in 1990 international dollars"
        />
        <figcaption>Economic growth, China and India, 1950–2010.</figcaption>
      </figure>

      <h3>Stage 3: The strategic turn of 1998</h3>
      <p>
        Russia gained new importance in this stage after the collapse of the
        USSR in 1991: the new Russian state shifted from a planned economy to
        an exporter and participant in the open market. Russia saw oil as a
        source of foreign currency, but didn't coordinate with OPEC — which
        destabilized the group, as other members produced and exported more,
        leading to oversupply and falling prices.
      </p>

      <figure>
        <img
          src={oilPriceEvents}
          alt="Oil price per barrel from 1970 to 2015, annotated with the Arab oil embargo, Iranian revolution, Gulf War, Asian financial crisis, 9/11, and other events"
        />
        <figcaption>Oil price, 1970–2015, constant 2013 dollars.</figcaption>
      </figure>

      <p>
        Things reached their worst point with the 1997 Asian Financial
        Crisis — a loss of confidence in Southeast Asian currencies,
        starting with the Thai baht. After years of heavy foreign capital
        inflows and rising debt, the bubble collapsed: investors pulled their
        money and rushed into dollars, currencies devalued sharply, and
        dollar-denominated debt became far more expensive to service. Capital
        flight, bank failures, and a deep recession followed.
      </p>

      <figure>
        <img
          src={asianCurrencies}
          alt="Bar chart showing the depreciation of the Thai baht, Indonesian rupiah, Philippine peso, Malaysian ringgit, and South Korean won between June 1997 and July 1998"
        />
        <figcaption>Asian currencies, June 1997 – July 1998.</figcaption>
      </figure>

      <p>
        The recession cut regional demand for oil, adding to the fall in
        global crude prices — down to around $10 a barrel, driven by weaker
        demand and a supply glut from major producers. For oil exporters like
        OPEC members and Russia, that was a severe fiscal shock. In Russia's
        case, collapsing oil revenue left the state unable to service its
        external debt, triggering the 1998 default, a sharp ruble
        devaluation, and a banking crisis driven by insolvency and loss of
        confidence.
      </p>

      <figure>
        <img
          src={chinaOilDemand}
          alt="Line chart of China's oil demand in million barrels per day from 1990 to 2024"
        />
        <figcaption>China oil demand, 1990–2024 (mb/d).</figcaption>
      </figure>

      <p>
        The real shift after 1998 was one of mindset. The 1970s were defined
        by limited supply, with prices mainly driven by supply shocks and
        armed conflict. After the Asian crisis, it became clear that OPEC
        needed to manage risk and prices more actively — and from that point
        on, the financial system and demand from Asia, especially mainland
        China, increasingly determined the value of oil. Between 1998 and
        the early 2000s, financial hedging instruments for oil pricing
        multiplied, marking crude's full entry into the futures markets.
      </p>

      <figure>
        <img
          src={crudeFuturesVolumes}
          alt="Stacked bar chart of average daily crude futures trading volumes by benchmark (Brent, WTI, Shanghai, Dubai, Murban, Oman) from 2021 to 2025"
        />
        <figcaption>Crude futures average daily volumes.</figcaption>
      </figure>

      <p>
        Investment funds, banks, and hedge funds began operating heavily in
        futures and options on crude, and oil stopped being just a physical
        commodity — it became a global financial asset that also prices in
        interest rates, inflation, and global risk conditions. That adds a
        layer of volatility that has nothing to do with the physical
        consumption of oil: large financial flows can move the price without
        any change in actual supply or demand.
      </p>
      <p>
        For oil-exporting countries seeking economic independence, that's bad
        news. Russian Urals crude is increasingly priced off dynamics well
        outside Russia's control. Although Russia remains a major exporter,
        the price of Urals is no longer primarily set by its own production
        and export balance — it's set by international benchmarks like Brent
        or WTI, which are themselves shaped by global financial markets.
        Central bank decisions, speculative flows, or shifts in market
        sentiment can move the value of Russian oil even when Russian output
        hasn't changed at all.
      </p>

      <figure>
        <img
          src={brentUralsSpread}
          alt="Brent and Urals oil price per barrel since 2019, showing the discount that opened up after February 2022 sanctions and narrowed by September 2025"
        />
        <figcaption>Brent and Urals oil price, $/barrel.</figcaption>
      </figure>

      <p>
        In other words, the price of Urals has stopped being a “national
        reflection” of Russian supply and become a globalized price,
        determined by foreign markets and international financial actors.
        That increases both the volatility of Russian state revenue and its
        dependence on global market behavior — well beyond the physical
        fundamentals of the oil itself.
      </p>
    </>
  );
}

import consumptionResponse from "../../assets/articles/interest-rate-participation-households/consumption-response.png";
import outputResponse from "../../assets/articles/interest-rate-participation-households/output-response.png";

export default function InterestRateParticipationHouseholds() {
  return (
    <>
      <p>
        This week I replicated the model built by Juan M. Morelli (research
        economist at the NY Fed) to see how interest rate hikes affect
        households that participate in the equity market — and how that
        connects to the real economy.
      </p>
      <p>
        In the mid-1980s, less than 30% of retail investors held equity. By
        the 2000s, more than 50% of households were invested in the stock
        market, through mutual funds or direct equity.
      </p>
      <p>
        This shift in market participation has changed how output responds to
        interest rate changes: stock market fluctuations are now spread
        across a much larger share of households, which moderates the swings
        in consumer spending.
      </p>

      <h3>The mechanism</h3>
      <p>
        To answer the underlying question — why does this new participation
        matter? — consider a simple setup before turning to the data. There
        are two groups: participants and non-participants.
      </p>
      <ul>
        <li>Participants trade bonds and equity.</li>
        <li>Non-participants trade only bonds.</li>
        <li>
          Participants finance their equity holdings with debt, which exposes
          them to procyclical assets. Because of this, they bear more risk
          than non-participants and are more sensitive to interest rate
          changes.
        </li>
      </ul>
      <p>
        When interest rates rise: stock prices fall → debt costs increase →
        consumption falls.
      </p>
      <p>
        But as participation increases, that shock to the aggregate equity
        market gets spread across a larger pool of households. Each
        participant now holds a smaller equity position and carries less
        leverage, so the effect of stock price moves and financing pressure
        from higher rates is weaker. In short: adding more participants — the
        group most sensitive to rates — produces a smaller aggregate
        consumption response.
      </p>
      <p>
        In the real economy, when stock prices fall, the market value of
        installed capital declines relative to the cost of building new
        capital, making investment projects less attractive. So smaller moves
        in stock prices translate into smaller adjustments in investment
        spending.
      </p>
      <p>
        With this mechanism in mind, we can turn to the model and match the
        empirical response of equity prices and investment spending to an
        unexpected interest rate change.
      </p>

      <h3>Participants cut consumption more than non-participants</h3>
      <figure>
        <img
          src={consumptionResponse}
          alt="Consumption response of participants vs. non-participants to a monetary policy shock, low vs. high participation"
        />
      </figure>

      <h3>Aggregate output response</h3>
      <figure>
        <img
          src={outputResponse}
          alt="Aggregate consumption and output impulse response to a monetary policy shock, low vs. high participation"
        />
      </figure>

      <p className="entry-source">
        Source: Juan M. Morelli (2021), “Limited Participation in Equity
        Markets and Business Cycles,” Federal Reserve Board, Finance and
        Economics Discussion Series 2021-026.
      </p>
    </>
  );
}

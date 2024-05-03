import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#0d9488" />
        </header>

        <strong>R$ {summary.income.toFixed(2)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#e11d48" />
        </header>

        <strong>R$ {summary.outcome.toFixed(2)}</strong>
      </SummaryCard>
      <SummaryCard variant="positive">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#e4e4e7" />
        </header>

        <strong>R$ {summary.total.toFixed(2)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

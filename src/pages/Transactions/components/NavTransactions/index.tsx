import { CaretLeft, CaretRight } from "phosphor-react";
import {
  DivTransactionButton,
  NavTransactionsButton,
  NavTransactionsContainer,
} from "./style";

export function NavTransactions() {
  return (
    <NavTransactionsContainer>
      <button>
        <CaretLeft size={24} color="#323238" />
      </button>

      <DivTransactionButton>
        <NavTransactionsButton variant="active">1</NavTransactionsButton>
        <NavTransactionsButton variant="inactive">2</NavTransactionsButton>
        <NavTransactionsButton variant="inactive">3</NavTransactionsButton>
      </DivTransactionButton>
      {/* Escreve o resto aqui*/}

      <button>
        <CaretRight size={24} color="#00875F" />
      </button>
    </NavTransactionsContainer>
  );
}

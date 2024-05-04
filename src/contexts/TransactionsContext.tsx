import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  price: number;
  type: "income" | "outcome";
  category: string;
  createdAt: Date;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchData: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(data: CreateTransactionInput) {
    const { description, category, price, type } = data;

    const response = await api.post("/transactions", {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  async function fetchData(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(() => response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchData, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

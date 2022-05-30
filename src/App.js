import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Dummy_expenses = [

  {
    title: "Furniture",
    amount: 999.12,
    date: new Date(2020, 7, 14),
  },
  {
    title: "Apple TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },

  {
    title: "Bicycle",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "Chair (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

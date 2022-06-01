import React, { useState } from 'react'

import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItem from './components/Expenses/ExpenseItem';
import data from './data'
import './index.css'

function App() {
  const [expenses, setExpenses] = useState(data)
  // const addExpense = (expense) => setExpenses([...expenses, expense])

  const onAddExpenseHandler = (expense) => {
    setExpenses([...expenses, expense])
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      {
        expenses.map((expense) => {
          return <div className='expenses' key={expense.id}>
            <ExpenseItem key={expense.id} {...expense} />
          </div>
        })
      }
    </div>
  );
}

export default App;

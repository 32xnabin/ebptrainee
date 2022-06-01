import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './index.css'
import { useState } from 'react'

function ExpenseItem({ date, title, amount }) {
  // const [expenseTitle, setExpenseTitle] = useState(title)

  const handleChange = () => {
    console.log('change')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button className='btn' onClick={handleChange}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;

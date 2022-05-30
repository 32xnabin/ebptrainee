import React from 'react';
import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date ? props.date.toLocaleString('en-US', { month: 'long'}):null;
  const day = props.date ? props.date.toLocaleString('en-US', { day: '2-digit'}):null;
  const year = props.date ? props.date.getFullYear():null;

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
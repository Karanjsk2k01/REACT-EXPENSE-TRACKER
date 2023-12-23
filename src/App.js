import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

var App = () => {

  const DummyData = [
    {
      id: 'e1',
      Title: 'Toilet Paper',
      Amount: 94.12,
      Date: new Date(2020, 7, 14),
    },
    { id: 'e2', Title: 'New TV', Amount: 799.49, Date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      Title: 'Car Insurance',
      Amount: 294.67,
      Date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      Title: 'New Desk (Wooden)',
      Amount: 450,
      Date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setexpense] = useState(DummyData);

  const expense = (expenseDetails) => {
    setexpense((prev) => {
      return [...prev, expenseDetails]
    })
  }

  return (
    <div>
      <NewExpense onSaveExpenseDetails={expense} />
      <Expenses expenseData={expenses} />
    </div>
  )
}

export default App;

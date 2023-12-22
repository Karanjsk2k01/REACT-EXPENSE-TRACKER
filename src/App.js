import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


var App = () => {

  const [expenses, setexpense] = useState([]);

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

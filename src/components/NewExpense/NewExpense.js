import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const expenseData = (expenseDetails) => {

    let formDateExpense = {
      ...expenseDetails,
      id: Math.random().toString()
    }

    // console.log('In newExpenses.js');
    // console.log(formDateExpense);
    props.onSaveExpenseDetails(formDateExpense);

  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={expenseData} />
    </div>
  )


}

export default NewExpense;
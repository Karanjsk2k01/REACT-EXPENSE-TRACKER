import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

  const [enteredtitle, setenteredtitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setenteredDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);


  const enteredtitleHandler = (e) => {
    setenteredtitle(e.target.value);
  }
  const enteredAmountHandler = (e) => {
    setenteredAmount(e.target.value);
  }
  const enteredDateHandler = (e) => {
    setenteredDate(e.target.value);
  }

  const enteredDetails = (e) => {

    e.preventDefault();

    let userObject = {
      Title: enteredtitle,
      Amount: enteredAmount,
      Date: new Date(enteredDate)
    }

    props.onSaveExpense(userObject);

    //clearing the inputs
    setenteredtitle('');
    setenteredAmount('');
    setenteredDate('');
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    // Clearing the inputs
    setenteredtitle('');
    setenteredAmount('');
    setenteredDate('');
    // Exiting edit mode without saving
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={enteredDetails}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input type='text' required value={enteredtitle} onChange={enteredtitleHandler} />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input type='number' required min='0' step='1' value={enteredAmount} onChange={enteredAmountHandler} />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input type='date' required min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={enteredDateHandler} />
            </div>
          </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            <button type='button' onClick={cancelEditingHandler}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className='new-expense__actions'>
          <button type='button' onClick={startEditingHandler}>
            Add Expense
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpenseForm;
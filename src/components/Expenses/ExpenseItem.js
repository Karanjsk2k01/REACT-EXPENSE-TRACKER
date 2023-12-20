import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/card';
import { useState } from 'react';

var ExpenseItem = (props) => {

  let [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);

  const updateExpense = () => {
    setExpense('$100');
  }

  const clickHandlers = () => {
    setTitle('Updated');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={expense}
        locationOfExpenditure={props.locationOfExpenditure}
        title={title}
      />
      <button onClick={updateExpense}>Update Expense Amount</button>
      <button onClick={clickHandlers}>DeleteExpenses</button>
    </Card>
  )
}

export default ExpenseItem;
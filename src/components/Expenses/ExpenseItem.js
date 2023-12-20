import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/card';

var ExpenseItem = (props) => {

  const clickHandlers = () => {

    console.log('clicked');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        locationOfExpenditure={props.locationOfExpenditure}
        title={props.title}
      />
      <button onClick={clickHandlers}>DeleteExpenses</button>
    </Card>
  )
}

export default ExpenseItem;
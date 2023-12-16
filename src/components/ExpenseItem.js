import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function Expense(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        locationOfExpenditure={props.locationOfExpenditure}
        title={props.title}
      />
    </div>
  )
}

export default Expense;
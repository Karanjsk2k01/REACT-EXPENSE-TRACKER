import './ExpenseItem.css';

function Expense(props) {
  // const date = new Date(2023, 2, 28);
  // const expenses = "Car Insurance";
  // const expense_price = "$294.95";
  // const LocationOfExpenses = "AutoMobiles";

  return (
    <div className="expense-item">
      <div>
        <h2>{props.date.toISOString()}</h2>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.locationOfExpenditure}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <div></div>
      </div>

    </div>
  )
}

export default Expense;
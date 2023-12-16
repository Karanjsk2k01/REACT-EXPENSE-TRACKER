
var ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title} - {props.locationOfExpenditure}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  )
}

export default ExpenseDetails;
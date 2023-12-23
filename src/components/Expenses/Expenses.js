import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import "./expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

var Expense = (props) => {

  const [filteredValue, setFilteredValue] = useState('2020');

  const expenseData = props.expenseData || [];

  const onFilterChange = (selectedValue) => {
    setFilteredValue(selectedValue);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredValue} onchangeFilter={onFilterChange} />
      {expenseData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.Title}
          amount={expense.Amount}
          date={expense.Date}
        />
      ))}
    </Card>
  );
}

export default Expense;
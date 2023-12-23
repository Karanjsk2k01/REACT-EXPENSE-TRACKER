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

  const filteredExpenses = expenseData.filter(
    (expense) => {
      return expense.Date.getFullYear().toString() === filteredValue
    }

  );

  let expenseslist = null;
  if (filteredExpenses.length === 0) {
    expenseslist = (
      <p style={{ color: 'white', fontWeight: 500 }}>No Expenses Found!! </p>
    );
  }

  if (filteredExpenses.length === 1) {
    expenseslist = (
      <>
        <p style={{ color: "white", fontWeight: 500 }}>
          Only single Expense here. Please add more...
        </p>
        <ExpenseItem
          key={filteredExpenses[0].id}
          title={filteredExpenses[0].Title}
          amount={filteredExpenses[0].Amount}
          date={filteredExpenses[0].Date}
        />
      </>
    );
  }
  else if (filteredExpenses.length > 1) {
    expenseslist =
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.Title}
          amount={expense.Amount}
          date={expense.Date}
        />
      ))
  }



  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredValue} onchangeFilter={onFilterChange} />
      {expenseslist}
    </Card >
  );

}

export default Expense;
import logo from './logo.svg';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


var App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  )
}

export default App;

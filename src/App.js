import React, {useState} from 'react';
import Expenses from './tables/Expenses';
import AddExpensesForm from './forms/AddExpensesForm';

const App = () => {
  const expensesData = [
    {id: 1, name: 'Milk', price: '2$'},
    {id: 2, name: 'Bread', price: '1$'},
    {id: 3, name: 'Coffee', price: '4$'},
  ];

  const [expenses, setExpenses] = useState(expensesData);

  const addExpense = (expense) => {
    expense.id = expenses.length + 1;
    setExpenses([...expenses, expense]);
    console.log(expenses);
  };

  const deleteExpense = (id) => {};

  return (
    <div className="container">
      <h1>Expenses Tracker</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Expense</h2>
          <AddExpensesForm addExpense={addExpense} />
        </div>
        <div className="flex-large">
          <h2>View Expenses</h2>
          <Expenses expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;

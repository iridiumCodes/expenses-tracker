import React, {useEffect, useState} from 'react';
import Expenses from './tables/Expenses';
import AddExpensesForm from './forms/AddExpensesForm';
import EditExpenseForm from './forms/EditExpenseForm';

const App = () => {
  useEffect(() => {
    document.title = 'Expenses Tracker';
  }, []);

  const expensesData = [
    {id: 1, date: '2021-03-17', type: 'Milk', amount: '2$'},
  ];

  const initialFormState = {id: null, type: '', amount: ''};

  const [expenses, setExpenses] = useState(expensesData);
  const [editing, setEditing] = useState(false); //is edit mode on? starts as false
  const [currentExpense, setCurrentExpense] = useState(initialFormState);

  const addExpense = (expense) => {
    expense.id = expenses.length + 1;
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setEditing(false);
    setExpenses(expenses.filter((expense) => expense.id !== id)); //filter out the current expense
  };

  const editExpense = (expense) => {
    setEditing(true);

    setCurrentExpense({
      id: expense.id,
      type: expense.type,
      amount: expense.amount,
    });
  };

  const updateExpense = (id, updatedExpense) => {
    setEditing(false);
    setExpenses(
      expenses.map((expense) => (expense.id === id ? updatedExpense : expense)),
    );
  };

  return (
    <div className="container">
      <h1>Expenses Tracker</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Expense</h2>
              <EditExpenseForm
                setEditing={setEditing}
                currentExpense={currentExpense}
                updateExpense={updateExpense}
              />
            </div>
          ) : (
            <div>
              <h2>Add Expense</h2>
              <AddExpensesForm addExpense={addExpense} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Expenses</h2>
          <Expenses
            expenses={expenses}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import Expenses from './tables/Expenses';

const App = () => {
  return (
    <div className="container">
      <h1>Expenses Tracker</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Expense</h2>
        </div>
        <div className="flex-large">
          <h2>View Expenses</h2>
          <Expenses />
        </div>
      </div>
    </div>
  );
};

export default App;

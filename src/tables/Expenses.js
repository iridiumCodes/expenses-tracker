import React from 'react';

const Expenses = (props) => (
  <table>
    <thead>
      <tr>
        <th>Expense</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.expenses.length > 0 ? (
        props.expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.price}</td>
            <td>
              <button
                onClick={() => props.editExpense(expense)}
                className="button muted-button">
                Edit
              </button>
              <button
                onClick={() => props.deleteExpense(expense.id)}
                className="button muted-button">
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Empty log</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Expenses;

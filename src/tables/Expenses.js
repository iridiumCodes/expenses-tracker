import React from 'react';

const Expenses = () => (
  <table>
    <thead>
      <tr>
        <th>Expense</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Expense Data</td>
        <td>Price Data</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default Expenses;

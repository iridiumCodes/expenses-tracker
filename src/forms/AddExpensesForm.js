import React, {useState} from 'react';

const AddExpensesForm = (props) => (
  <form>
    <label>Name</label>
    <input type="text" name="name" value="" />
    <label>Price</label>
    <input type="text" name="price" value="" />
    <button>Add new expense</button>
  </form>
);

export default AddExpensesForm;

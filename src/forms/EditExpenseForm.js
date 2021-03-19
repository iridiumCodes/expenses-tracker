import React, {useState, useEffect} from 'react';

const EditExpenseForm = (props) => {
  useEffect(() => {
    setExpense(props.currentExpense);
  }, [props]);

  const [expense, setExpense] = useState(props.currentExpense);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setExpense({...expense, [name]: value});
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //prevents default form submission
        props.updateExpense(expense.id, expense); //pass input to expenses state
      }}>
      <label>Date</label>
      <input
        onChange={handleInputChange}
        type="date"
        name="date"
        value={expense.date}
        required
      />
      <label htmlFor="type">Expense Type:</label>
      <select
        onChange={handleInputChange}
        id="type"
        name="type"
        value={expense.type}
        required>
        <option value="Groceries">Groceries</option>
        <option value="Housing">Housing</option>
        <option value="Delivery">Delivery</option>
        <option value="Utilities">Utilities</option>
        <option value="Personal">Personal</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
        <option value="Misc">Misc</option>
      </select>
      <label>Amount</label>
      <input
        onChange={handleInputChange}
        type="number"
        name="amount"
        min="0,01"
        value={expense.amount}
        required
      />
      <button>Update expense</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button">
        Cancel
      </button>
    </form>
  );
};
export default EditExpenseForm;

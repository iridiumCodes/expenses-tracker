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
      <label>Type</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="type"
        value={expense.type}
        required
      />
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

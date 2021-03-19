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
      />
      <label>Type</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="type"
        value={expense.type}
      />
      <label>Amount</label>
      <input
        onChange={handleInputChange}
        type="number"
        name="amount"
        value={expense.amount}
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

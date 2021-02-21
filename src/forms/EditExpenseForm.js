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
      <label>Name</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="name"
        value={expense.name}
      />
      <label>Price</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="price"
        value={expense.price}
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

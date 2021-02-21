import React, {useState} from 'react';

const AddExpensesForm = (props) => {
  const initialFormState = {id: null, name: '', price: ''};
  const [expense, setExpense] = useState(initialFormState);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setExpense({...expense, [name]: value});
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //prevents default form submission
        if (!expense.name || !expense.price) return; //validation no empty values allowed

        props.addExpense(expense); //pass input to expenses state
        console.log(expense);
        setExpense(initialFormState); //reset the form to initial value
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
      <button>Add new expense</button>
    </form>
  );
};

export default AddExpensesForm;

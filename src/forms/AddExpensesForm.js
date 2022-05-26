import React, {useState, setState, useEffect} from 'react';

const AddExpensesForm = (props) => {
  useEffect(() => {
    setExpense(initialFormState);
  }, [props]);


  const initialFormState = {id: null, date: '', type: '', amount: ''};
  const [expense, setExpense] = useState(initialFormState);

    useEffect(() => {
        // storing input name
        localStorage.setItem("expense", JSON.stringify(expense));
    }, [expense]);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setExpense({...expense, [name]: value});
  };


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //prevents default form submission
        if (!expense.date || !expense.type || !expense.amount) {
          return; //validation no empty values allowed
        }
        props.addExpense(expense); //pass input to expenses state
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
      <label>Amount (&#8364;)</label>
      <input
        onChange={handleInputChange}
        type="number"
        name="amount"
        min="0,01"
        value={expense.amount}
        required
      />
      <button>Add new expense</button>
    </form>
  );
};

export default AddExpensesForm;

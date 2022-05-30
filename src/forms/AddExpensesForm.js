import React, {useState, useEffect} from 'react';

const initialFormState = {id: null, date: '', type: '', amount: ''};

const AddExpensesForm = (props) => {
  useEffect(() => {
    setExpense(initialFormState);
  }, [props]);

const [expense, setExpense] = useState(initialFormState);

const handleInputChange = (event) => {
    const {name, value} = event.target;
    setExpense({...expense, [name]: value});
  };
  
const handleMaxDate = (event) => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  } 
      
  today = yyyy + '-' + mm + '-' + dd;

  document.getElementById("datefield").setAttribute("max", today);
}

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
        onClick={handleMaxDate}
        onChange={handleInputChange}
        id = "datefield"
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

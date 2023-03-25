import './ExpenseForm.css';
import React, {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredName,setEnteredName]=useState('');
    const [enteredPrice,setEnteredPrice]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const nameHandler = (event) => {
      setEnteredName(event.target.value);
    }

    const priceHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title : enteredName ,
          amount : +enteredPrice ,
          date : new Date(enteredDate)
      };
      props.onSaveExpense(expenseData);
      setEnteredDate("");
      setEnteredPrice("");
      setEnteredName("");
    };


    return(
        <form onSubmit={submitHandler}>
        <div className={"new-expense__controls"}>
            <div className={"new-expense__control"}>
                <label>Item Name</label>
                <input type={"text"} value={enteredName} onChange={nameHandler} />
            </div>
            <div className={"new-expense__control"}>
                <label>Item Price</label>
                <input type={"number"} min={"0.01"} step={"0.01"} value={enteredPrice} onChange={priceHandler}/>
            </div>
            <div className={"new-expense__control"}>
                <label>Date</label>
                <input type={"date"} value={enteredDate} onChange={dateHandler}/>
            </div>
        </div>
            <button type={"submit"}>Submit</button>
        </form>
    );
}

export default ExpenseForm;
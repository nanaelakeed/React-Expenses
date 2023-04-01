import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import React from "react";

const NewExpense = (props) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onSaveNewExpense(expenseData);
    };

    return(
        <div className={"new-expense"}>
        <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );

}


//to import this function in another file
export default NewExpense;
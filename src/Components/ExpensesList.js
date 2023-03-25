import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {
    if(props.items.length===0){
        return <h2 className={"expenses-list__fallback"}>No Expense found</h2>
    }

    return(
        <ul className={"expenses-list"}>
            {props.items.map((expense) => (
                <ExpenseItem
                    itemName={expense.title}
                    itemAmount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                />
            ))}
        </ul>
    );


}

export default ExpensesList;
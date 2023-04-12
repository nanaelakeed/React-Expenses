import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import React , { useState } from "react";
import Card from './Card';

const ExpenseItem =(props)=>{

    
    return(
        <Card className="expense-item">
            <div className={"expense-item__description"}>
                <h2>{props.itemName}</h2>
                <ExpenseDate date={props.date} />
                <div className={"expense-item__price"}>
                    <h2>{props.itemAmount} $</h2>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
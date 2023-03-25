import Card from "./Card";
import './Expenses.css';
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear , setFilteredYear]=useState('2019');

    const filterYearHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
    
    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString()=== filteredYear;
    });
      


    return (
        <li>
        <Card className="expenses">
            <ExpenseFilter
            selected={filteredYear}
            onYearChange={filterYearHandler}
            />
            <ExpensesChart expenses={filterExpenses} />
            <ExpensesList items={filterExpenses}/>
        </Card>
        </li>
    );
}

export default Expenses;
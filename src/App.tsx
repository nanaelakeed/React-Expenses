import React, {useState} from 'react';
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";
import NewUserForm from "./Components/Users/NewUserForm";
import NewUser from "./Components/Users/NewUser";
import User from "./Components/Users/User";

const DummyExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const USers = [
    {
        id : 1,
        name : "afnan",
        age : 22,
    },
]
function App() {
    const [expenses, setExpenses] = useState(DummyExpenses);
    const [users,setUser]=useState([]);

    const saveExpense = (expense) => {
        setExpenses(prevState => {
            return [expense, ...prevState];
        });
    };

    const saveUser = (user) => {
        // @ts-ignore
        setUser((prevState) => {
           return [...prevState,user];
        });
    };

    return (
        <div>
            <NewUser onSaveNewUser={saveUser} />
            <User users={users} />
            <NewExpense onSaveNewExpense={saveExpense}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;

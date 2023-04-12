import React from "react"
import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
    const saveNewHandller = (enteredUserData) => {
        const usersList = {
          ...enteredUserData,
            id: Math.random().toString()
        }
        props.onSaveNewUser(usersList);
    }


    return(
        <div className={"new-expense"}>
          <NewUserForm onSaveUser={saveNewHandller}/>
        </div>
    );
}

export default NewUser;
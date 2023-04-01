import React from "react"
import {useState} from "react";
import User from "./User";


const NewUserForm = (props) => {
    const [enteredName,setName]=useState("");
    const [enteredAge,setAge]=useState("");

    const nameHandller = (event) =>{
        setName(event.target.value);
    }

    const ageHandller = (event) => {
      setAge(event.target.value);
    }


    const SubmitHandller = (event) => {
      event.preventDefault();

        const userData = {
            name : enteredName ,
            age : enteredAge ,
        };
        if(enteredName.trim().length===0 || enteredAge.trim().length===0){

        }
        if( +enteredAge<1){

        }
        props.onSaveUser(userData);
        setName("");
        setAge("");

      }


    return (
        <form onSubmit={SubmitHandller}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label>Name</label>
                    <input type={"text"} value={enteredName} onChange={nameHandller} />
                </div>
                <div className={"new-expense__control"}>
                    <label>Age</label>
                    <input type={"number"} min={"0.01"} step={"0.01"} value={enteredAge} onChange={ageHandller}/>
                </div>
            </div>
            <button type={"submit"}>Submit</button>
        </form>

    );
}

export default NewUserForm;
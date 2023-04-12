import React from "react"
import {useState} from "react";
import ErrorModel from "../Error/ErrorModel";


const NewUserForm = (props) => {
    const [enteredName,setName]=useState("");
    const [enteredAge,setAge]=useState("");
    const [error,setError]=useState("");

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
            setError("Please Enter a valid name and age!")
            //Not to save empty user I put return
            return;
        }
        if( +enteredAge<1){
            setError("Enter a valid age!")
            //Not to save empty user I put return
            return;
        }
        props.onSaveUser(userData);
        setName("");
        setAge("");

      }

      const ErroHandller = () => {
        setError(null);
      }


    return (
        <div>
            {error && <ErrorModel message={error} error1={ErroHandller}/> }
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
        </div>
    );
}

export default NewUserForm;
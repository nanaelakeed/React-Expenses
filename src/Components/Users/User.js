import React from "react";
import "./User.css";
import UserShow from "./UserShow";

const User = (props) => {

    return(
        <div className={"users"}>
        <ul className={"expenses-list"}>
            {props.users.map( (user) => (
            <UserShow
                name={user.name}
                age={user.age}
                key={user.id}
            />
            ) )}
        </ul>
        </div>
    );

}

export default User;
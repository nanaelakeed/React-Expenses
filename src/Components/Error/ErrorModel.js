import React from "react";
import "./ErrorModel.css";
import Card from "../Card";

const ErrorModel = (props) => {

    return(
        <div>
            <div className={"goOut"} onClick={props.error1} />
        <Card className={"appear"}>
        <header className={"header"}>
            <h2 className={"headerh2"}>Error</h2>
        </header>
        <div className={"content"}>
            <p>{props.message}</p>
        </div>
            <footer className={"actions"}>
                <button type={"submit"} onClick={props.error1}>Done</button>
            </footer>
        </Card>
        </div>
    );
};

export default ErrorModel;
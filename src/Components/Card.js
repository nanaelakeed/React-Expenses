import React from "react";
import './Card.css';

const Card =(props)=>{
    const classes='card '+props.className;

    return(
        // children holds all content exists in this component
        <div className={classes}>{props.children}</div>
    );

}

export default Card;
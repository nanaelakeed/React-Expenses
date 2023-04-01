import './Card.css';

const Card =(props)=>{
    const classes='card '+props.className;

    return(
        // eslint-disable-next-line no-template-curly-in-string
        <div className={classes}>{props.children}</div>
    );

}

export default Card;
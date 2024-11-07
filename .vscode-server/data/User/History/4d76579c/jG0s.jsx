import React from "react";
import classes from './MyButton.module.css';

const MyButton = ({text}) => {

    return (
        <button className={classes.myBtn}>
            {text}
        </button>
    )
}

export default MyButton;
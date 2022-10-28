import React from "react";
import s from './Button.module.css';


const Button = ({ handleClick }) => {
    return (
        <>
            <button className={s.btn} onClick = {handleClick}>
                test
            </button>
        </>

    )
       
}


export default Button;
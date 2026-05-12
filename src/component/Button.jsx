import React from 'react';

const Button = (props) => {
    return (
        <button className="btn" onclick={props.onClick}>
            {props.value}
        </button>
    )
}
export default Button;
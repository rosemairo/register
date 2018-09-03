import React from 'react';

const Button = (props) => {
    return(
        <div>
            <button onClick={props.onClick} type="button">click me</button>
        </div>
    );
};

export default Button;
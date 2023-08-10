import React from 'react';

const Button = ({myOnClick, title, disabled}) => {
    return (
        <button className='operand' onClick={myOnClick}>{title}</button>
    );
};

export default Button;
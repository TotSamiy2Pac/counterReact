import React, {useEffect, useState} from 'react';

const Button = ({clickOperand,value}) => {
    return (
        <input className={'operand'} type="button" value={value} onClick={event => {
            clickOperand(event.target.value)
        }}/>
    );
};

export default Button;
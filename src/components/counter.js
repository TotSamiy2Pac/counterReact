import React, {useEffect, useState} from 'react';
import Button from "./button";
import Numbers from "./numbers";
import button from "./button";
import {logDOM} from "@testing-library/react";


const Counter = () => {
    const  [count, setCount] = useState('')
    const [value, setValue] = useState(0)
    const [operations, setOperations] = useState()
    // let valueOne = 0
    const clickOperand = (title) => {
        setValue(count)
        setOperations(title.target.innerText)
        setCount(Number(count - count))
    }
    // const handleDecrease = () => {
    //     setCount(count - 1)
    // }

    const result = (res) => {
        if (operations === '+'){
            setCount(Number(value) + Number(count))
        }
        else if (operations === '-') {
            setCount(Number(value) - Number(count))
        }
        else if (operations === '*') {
            setCount(Number(value) * Number(count))
        }
        else if (operations === '/') {
            setCount(Number(value) / Number(count))
        }
    }

    const clearCount = () => {
        setValue('')
        setCount('')
        // setOperations('')

    }

    const handleClick = (e) => {
        setCount(count + e)
    }


    useEffect((title) => {
    }, [])
    // console.log(value)

    return (
        <div>
            <span>{value}</span>
            {/*<input type="text"  value={}/>*/}
            <h3>{Number(count)}</h3>
            <div className='row'>
                <div className='col-10 numbers'>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='0'>0</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='1'>1</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='2'>2</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='3'>3</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='4'>4</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='5'>5</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='6'>6</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='7'>7</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='8'>8</button>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='9'>9</button>
                </div>
                <div className='col-2 gap-4'>
                    <Button title={'+'} myOnClick={clickOperand} />
                    <Button title={'-'} myOnClick={clickOperand} />
                    <Button title={'*'} myOnClick={clickOperand} />
                    <Button title={'/'} myOnClick={clickOperand} />
                    <Button title={'='} myOnClick={result} />
                    <Button title={'Clear'} myOnClick={clearCount} />
                </div>
            </div>
        </div>
    );
};

export default Counter;
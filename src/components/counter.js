import React, {useEffect, useState} from 'react';
import Button from "./button";
import button from "./button";


const Counter = () => {
    const  [count, setCount] = useState('')
    const [value, setValue] = useState(0)
    const [operations, setOperations] = useState(null)
    const clickOperand = (event) => {
        setOperations(event)
        if (operations === null) {
            if (event === '+'){
                setValue(Number(value) + Number(count))
            }
            else if (event === '-') {
                value === 0 ? setValue(Number(count)) : setValue(Number(value) - Number(count))
            }
            else if (event === '*') {
                value === 0 ? setValue(Number(count)) : setValue(Number(value) * Number(count))
            }
            else if (event === '/') {
                value === 0 ? setValue(Number(count)) : setValue(Number(value) / Number(count))
            }
        }
        else {
            if (operations === '+'){
                setValue(Number(value) + Number(count))
            }
            else if (operations === '-') {
                setValue(Number(value) - Number(count))
            }
            else if (operations === '*') {
                value === 0 ? setValue(Number(count)) : setValue(Number(value) * Number(count))
            }
            else if (operations === '/') {
                setValue(Number(value) / Number(count))
            }
        }
        setCount('')
    }

    const result = () => {
        // setCount(value + count)
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


    return (
        <div>
            <span>{value}</span>
            <h3>{count}</h3>
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
                <div  className='col-2 gap-4'>
                    <Button clickOperand={clickOperand} value={'+'}/>
                    <Button clickOperand={clickOperand} value={'-'}/>
                    <Button clickOperand={clickOperand} value={'*'}/>
                    <Button clickOperand={clickOperand} value={'/'}/>
                    <input className={'operand'} type="button" value={'='} onClick={result}/>
                    <input className={'operand'} type="button" value={'clear'} onClick={clearCount}/>
                    <button onClick={e => handleClick(e.target.value)} className='number' value='.'>.</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
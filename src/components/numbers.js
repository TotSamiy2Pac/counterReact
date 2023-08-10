import React from 'react';

const Numbers = ({handleCLick}) => {

    return (
        <div className='col-10 numbers'>
            <button onClick={(e) => handleCLick(e.target.value)} className='number' value='0'>0</button>
            <button className='number'  value='1'>1</button>
            <button className='number' value='2'>2</button>
            <button className='number' value='3'>3</button>
            <button className='number' value='4'>4</button>
            <button className='number' value='5'>5</button>
            <button className='number' value='6'>6</button>
            <button className='number' value='7'>7</button>
            <button className='number' value='8'>8</button>
            <button className='number' value='9'>9</button>
        </div>
    );
};

export default Numbers;
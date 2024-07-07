import React from 'react'
import Rect, { useState } from 'react'

const Calculator = () => {
    const [userInp, setUserInp] = useState('');

    const detectKey = (e) => {
        if (e.key === 'Enter') {
            let result = eval(userInp);
            setUserInp(result);
        }
    }
    const handleClick = (e) => {
        if
        (e.target.value == 'backspace')
        {
           let newStr = userInp.substring(0,userInp.length-1)
           setUserInp(newStr);
        }
        else if(e.target.value == 'clear')
        {
            setUserInp('');
        } else if (e.target.value == '=')
        {
            let result = eval(userInp);
            setUserInp(result);
        } else {
            setUserInp(userInp + e.target.value)
        }

    }
    return (
        <div className='container'>
            <h1 className='text-center my-3'>MyCalc</h1>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div>
                    <input type="text" className='form-control fs-1 w-100 text-end mb-3' onChange={(e) => setUserInp(e.target.value)} onKeyDown={e => detectKey(e)} value={userInp} />
                </div>
                <div className='w-50'>
                    <div className="row">
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="clear" onClick={(e) => handleClick(e)}>Clear</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="backspace" onClick={(e) => handleClick(e)}>BackSpace</button>
                    </div>
                    <div className='row'>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="9" onClick={(e) => handleClick(e)}>9</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="8" onClick={(e) => handleClick(e)}>8</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="7" onClick={(e) => handleClick(e)}>7</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="+" onClick={(e) => handleClick(e)}>+</button>
                    </div>
                    <div className='row'>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="6" onClick={(e) => handleClick(e)}>6</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="5" onClick={(e) => handleClick(e)}>5</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="4" onClick={(e) => handleClick(e)}>4</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="-" onClick={(e) => handleClick(e)}>-</button>
                    </div>
                    <div className='row'>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="3" onClick={(e) => handleClick(e)}>3</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="2" onClick={(e) => handleClick(e)}>2</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="1" onClick={(e) => handleClick(e)}>1</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="*" onClick={(e) => handleClick(e)}>*</button >
                    </div>
                    <div className='row'>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="." onClick={(e) => handleClick(e)}>.</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="0" onClick={(e) => handleClick(e)}>0</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="=" onClick={(e) => handleClick(e)}>=</button>
                        <button className='col btn btn-secondary m-2 py-4 fs-3' value="/" onClick={(e) => handleClick(e)}>/</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
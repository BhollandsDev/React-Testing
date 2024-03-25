
import React, {useState, useEffect} from 'react'

import './Counter.css'

function Counter (){
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(1)
    
    useEffect(() => {
        document.title = `Counter`
    }, [])
    
    const reset = () => {
        setCount(0);
        setAmount(1);
    }
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    
    function handleResize (){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
   
    
    

    return(<div className='counter-container'>
        <output className='counter-display'>Count: {count}</output><br></br>
        <button type='button' className='counter-button' onClick={() => setCount(count + parseFloat(amount))}>Increment</button>
        <button  type='button' className='counter-button' onClick={() => setCount(count - amount)}>Decrement</button>
        <button type='button' className='counter-button' onClick={reset}>Reset</button>
        <input className='amount-input'  value={amount} onChange={evt => setAmount(evt.currentTarget.value)} /><br></br>
        <output className='amount-output'>Amount: {amount}</output>
        <p>Windows Width:{width}</p>
        <p>Window Height:{height}</p>
    </div>)
}

export default Counter
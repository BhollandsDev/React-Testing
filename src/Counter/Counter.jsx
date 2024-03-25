
import React, {useState} from 'react'

import './Counter.css'

function Counter (){
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(1)
    
    const reset = () => {
        setCount(0);
        setAmount(1);
    }
   
    
    

    return(<div className='counter-container'>
        <output className='counter-display'>Count: {count}</output><br></br>
        <button type='button' className='counter-button' onClick={() => setCount(count + parseFloat(amount))}>Increment</button>
        <button  type='button' className='counter-button' onClick={() => setCount(count - amount)}>Decrement</button>
        <button type='button' className='counter-button' onClick={reset}>Reset</button>
        <input className='amount-input' type='number' value={amount} onChange={evt => setAmount(evt.currentTarget.value)} /><br></br>
        <output>Amount: {amount}</output>
    </div>)
}

export default Counter
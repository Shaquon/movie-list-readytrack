import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    let [count, setCount] = useState(0);

    const handleIncrementCount = () => {
        // increment count
        console.log('increment count!', count)

        setCount(count++);
    }

    const handleDecrementCount = () => {
        // decrement count
        console.log('decrement count!', count)
        setCount(count--);
    }
    return (
        <div className='counter_wrapper'>
            <h3 className='counter_header'>Counter</h3>
            <p className='counter_paragraph'>{count}</p>
            <button onClick={handleIncrementCount}>count up</button>
            <button onClick={handleDecrementCount}>count down</button>
        </div>
    )
}

export default Counter
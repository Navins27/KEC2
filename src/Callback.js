import React, { useState, useCallback } from 'react';

const Callbacks =() => {
    //state using usestate
    const [count, setCount]=useState(0);

    //function that we  want to memoize
    const handleClick = useCallback(()=>{
        //do something with the count
        console.log(`Button clicked. Count: ${count}`);
    },[count]);
    return(
        <div>
            {/*Button that triggers the memoized function */}
            <button onClick={handleClick}>Click me</button>

            {/*Display the current count */}
            <p>Count: {count}</p>

            {/*Button to increment the count */}
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    );
};

export default Callbacks;
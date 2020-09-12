import React, { useState, useEffect, useCallback } from 'react';
import useCounter from "../components/CustomHook";

/*useEffect: take a function and an array as parameter
  function runs at first component render and every subsequent render/update
  great for add log, accessing 3rd party API - see githubUser.js, etc...
*/

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [myCount, udpateCount] = useCounter();

    // useEffect(()=>console.log(count),[]);

    useEffect(() => {
        console.log("Count:", count);
        console.log("Cust count:", myCount);
    });

    //Use cust hook
    const handleClick = useCallback(() => {
        setCount(count + 1);
        udpateCount(myCount + 1);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Hooks;
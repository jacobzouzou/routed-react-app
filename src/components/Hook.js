import React, { useState, useEffect, useCallback } from 'react';

/*useEffect: take a function and an array as parameter
  function runs at first component render and every subsequent render/update
  great for add log, accessing 3rd party API - see githubUser.js, etc...
*/

const Hook = () => {
    const [count, setCount] = useState(0);
    // useEffect(()=>console.log(count),[]);

    useEffect(() => {
        console.log("Count:", count);
    });

    //Use cust hook
    const handleClick = useCallback(() => {
        setCount(count + 1);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Hook

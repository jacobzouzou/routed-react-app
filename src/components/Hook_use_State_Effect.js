import React, { useState, useEffect, useCallback } from 'react';
import style from "../Hook.module.css"

/*useEffect: take a function and an array as parameter
  function runs at first component render and every subsequent render/update
  great for add log, accessing 3rd party API - see githubUser.js, etc...
*/

const Hook_use_State_Effect = () => {
    const [count, setCount] = useState(0);

    // //at once function
    // useEffect(()=>console.log(count),[]);

    // //param function
    // useEffect(()=>console.log(count),[count]);

    //generic function
    useEffect(() => {
        console.log("Count :", count);
    });

    //Use cust hook
    const increment = useCallback(()=>{
        setCount(count + 1);
    });
    const decrement = useCallback(()=>{
        if(count>=1){
            setCount(count-1);
        }
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button className={style.button} onClick={increment}>+</button>
            <button className={style.button} onClick={decrement}>-</button>
        </div>
    );
};

export default Hook_use_State_Effect

import React, { useEffect, useCallback, useState } from 'react';

function useCounter(value) {
    const [count, setCount] = useState(value);
    return [count, setCount];
}

const CustomHook = () => {
    const [count, updateCount] = useCounter(100);
    useEffect(() => {
        console.log("Cust count:", count);
    });

    const handleClick = useCallback(() => {
        updateCount(count + 1);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default CustomHook
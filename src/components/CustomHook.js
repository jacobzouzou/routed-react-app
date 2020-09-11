import React from 'react';


/* Custom hook is a function with name wich starts with : use... */

export default function useCounter (value) {
    let count = value;
    function updateCount (){
        count = count + 1;
    }
    return [count, updateCount];
}

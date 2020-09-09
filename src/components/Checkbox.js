import React,{useState, useEffect} from 'react';

//useState and useEffect
const Checkbox = () => {
    const [checked, setChecked]=useState(false);

    useEffect(()=>{
        console.log("click checkbox");
    });
    
    return (
        <div>
            <input type="checkbox" value={checked} onChange={(checked)=>setChecked(checked=>!checked)} />
            {checked? "checked": "not checked"}
        </div>
    );
};

export default Checkbox;
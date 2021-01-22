// import React,{useState} from 'react';
// //useState version
// const Checkbox = () => {
//     const [checked, setChecked]=useState(false);

//     const toggle=()=>{
//         setChecked(checked=>!checked);
//     };

//     return (
//         <div>
//             <input type="checkbox" value={checked} onChange={toggle} />
//             {checked? "checked": "not checked"}
//         </div>
//     );
// };

import React,{useReducer} from 'react';

//useReducer version
const Hook_useReducer = () => {
    const [checked, toggle]=useReducer(checked=>!checked, false);
    return (
        <div>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked? "checked": "not checked"}
        </div>
    );
};


export default Hook_useReducer

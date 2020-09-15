import React,{useState, useReducer} from 'react';

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

//useReducer version
const Checkbox2 = () => {
    const [checked, toggle]=useReducer(checked=>!checked, false);
    return (
        <div>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked? "checked": "not checked"}
        </div>
    );
};


export default Checkbox2

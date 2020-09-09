import React, { useState } from 'react';
import PropsTypes from "prop-types";

//args version
// const User = ({firstName, lastName, age}) => {
//     const [status, setStatus]= useState("enable");
//     return (
//         <div>
//             <div>Status: {status}</div>
//             <h1>{firstName} {lastName} {age}</h1>
//             <button onClick={()=>{ setStatus("disable");}}>Click here</button>
//         </div>
//     );
// };

//props version
const User = (props) => {
    //function hook
    const [status, setStatus] = useState("enable");
    return (
        <div>
            <div>Status: {status}</div>
            <h1>{props.firstName} {props.lastName} {props.age}</h1>
            <button onClick={() => { setStatus("disable"); }}>Click here</button>
        </div>
    );
};

User.PropsTypes={
    firstName:PropsTypes.string.isRequired,
    lasttName:PropsTypes.string.isRequired,
    age:PropsTypes.number
}
export default User;
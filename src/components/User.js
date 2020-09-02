import React,{useState} from 'react';


const User = ({firstName, lastName, age}) => {
    const [status, setStatus]= useState("enable");
    return (
        <div>
            {/* <h3>Status: {{status}}</h3> */}
            <h1>{firstName} {lastName} {age}</h1>
            {/* <button onClick={()=>{ setStatus("disable");}}/> */}
        </div>
    );
};

export default User;
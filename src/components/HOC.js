import React from 'react';

const withButton=Button=>()=><Button/>
const Button=()=>{
    return <button>Hoc test</button>
}

const WrappedButton=withButton(Button);

export default WrappedButton;
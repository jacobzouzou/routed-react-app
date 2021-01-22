import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    boder:solid thick black;
    background-color: white;
    font-size: 1.5em;
`
const ExtendedButton = styled(Button)`
    color: red;
`
const Button2 = styled.button`
    background: ${props => (props.primary ? 'black' : 'white')};
    color: ${props => (props.primary ? 'white' : 'black')};
`


const StyledComponent = () => {
    return (
        <div>
            <Button>Styled Button</Button>
            <br/>
            <Button2>Normal button</Button2>
            <Button2 primary>Primary button</Button2>
            <br/> 
            <ExtendedButton>Extended button</ExtendedButton>

        </div>
    );
};

export default StyledComponent;
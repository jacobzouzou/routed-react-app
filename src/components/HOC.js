import React from 'react';
import WrappedMouse from './HOC _2';


const Button = (props) => {
  return <button style={{ color: props.color }}>Wrapped button</button>
}

const withButton = Button => (props) => <Button color={props.color} />

const WrappedButton = withButton(Button)

export default WrappedButton
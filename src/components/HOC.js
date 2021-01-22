import React from 'react';


//with value from props
const MyButton = (props) => {
  return <button style={{ color: props.color }} className="button">My button</button>
}

//inline style with js object
const RedButton = () => {
  return <button style={{ color: "red" }} className="button">Red button</button>
}

//inline style with js object
const blueStyle={color:"blue"}
const BlueButton = () => {
  return <button style={blueStyle} className="button">Blue button</button>
}

const withButton = (Button) => (props) => <Button color={props.color} />

const WrappedButton = withButton(MyButton);

export default WrappedButton
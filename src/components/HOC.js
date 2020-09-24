import React from 'react';


//with value from props
const Button = (props) => {
  return <button style={{ color: props.color }} className="button">Wrapped button</button>
}

// //inline style with js object
// const Button = () => {
//   return <button style={{ color: "red" }} className="button">Wrapped button</button>
// }

// //inline style with js object
// const redStyle={color:"blue"}
// const Button = () => {
//   return <button style={redStyle} className="button">Wrapped button</button>
// }

const withButton = Button => (props) => <Button color={props.color} />

const WrappedButton = withButton(Button)

export default WrappedButton
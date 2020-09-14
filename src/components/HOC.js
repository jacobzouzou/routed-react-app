import React from 'react';


const Button = (props) => {
  return <button style={{color:props.color}}>Wrapped button</button>
}

const withButton = Button => (props) => <Button color={props.color} />

const WrappedButton = withButton(Button);

/*HOC: Higher Order Component */
export default function App() {
  return (
    <div className="App">
      <WrappedButton color="green"/>
    </div>
  );
}

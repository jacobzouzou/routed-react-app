import React from 'react';
import { Mouse, Cat } from "./PropRender"

/* HOC: Higher Order Component: has Mouse as child*/

function withMouse(Component) {
  //return a component
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mousePosition => (
          <Component {...this.props} position={mousePosition} />
        )} />
      );
    }
  }
}

const MyMouse = () => {
  return <Mouse render={mousePosition => (<Cat position={mousePosition} />)}/>
}

const WrappedMouse = withMouse(MyMouse);

export default WrappedMouse





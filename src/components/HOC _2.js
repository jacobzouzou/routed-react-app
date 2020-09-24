import React from 'react';
import { Mouse, Cat } from "./PropRender"

/* HOC: Higher Order Component: has Mouse as child*/

function withMouse(Component) {
  //return a component
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <Component {...this.props} mouse={mouse} />
        )} />
      );
    }
  }
}

const MyMouse = () => {
  return <Mouse render={position => (<Cat mouse={position} />)}/>
}

const WrappedMouse = withMouse(MyMouse);

export default WrappedMouse





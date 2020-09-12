/*
    Props render: a technic that consist to share code between components "prop" whose value is a function
    component with prop render: receive a function, call it, rather build its own logic
*/
import React from 'react';
import cat from "../assets/cat.jpg"

export class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={cat } width="150" height="100" 
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Au lieu de fournir une représentation statique de ce qu’affiche <Mouse>,
            utilisez la prop `render` pour déterminer dynamiquement quoi afficher.
          */}
          {/* {this.props.render(this.state)} */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Déplacez votre souris sur l’écran !</h1>
          <Mouse render={mousePosition => (<Cat mouse={mousePosition} />)}/>
        </div>
      );
    }
  }
  
/* HOC*/
 export function withMouse(Component) {
    return class extends React.Component {
      render() {
        return (
          <Mouse render={mouse => (
            <Component {...this.props} mouse={mouse} />
          )}/>
        );
      }
    }
  }
  
  export default MouseTracker;
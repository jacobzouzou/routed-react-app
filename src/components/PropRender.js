/*
    Props render: technic that consists to share code between components from a function: "props.render"
    component with "prop.render": receive a function, call it, rather build its own logic
*/
import React from 'react';
import myCat from "../assets/cat.jpg"

export class Cat extends React.Component {

    render() {
      const position = this.props.position;

      return (
        <img src={myCat } width="80" height="80" 
        style={{ position: 'absolute', left: position.x, top: position.y }} />
      );
    }
  }
  
  export class Mouse extends React.Component {
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
            Mouse call "prop.render()"
            use  prop.render() to set ui dynamicly.
            prop.render() receive value from class component sate
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }


  class MouseTraker extends React.Component {
    render() {
      return (
        <div>
          <h1>Moove mouse</h1>
          {/** Mouse receive a function in 'render" prop */}
          <Mouse render={mousePosition => (<Cat position={mousePosition} />)}/>
        </div>
      );
    }
  }

  export default MouseTraker;
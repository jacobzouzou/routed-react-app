/*
    Props render: technic that consists to share code between components from a function: "props.children()"
    component with "prop.children()": receive a function, call it, rather build its own logic
*/
import React from 'react';
// import {PropTypes} from 'react';

import cat from "../assets/cat.jpg"

export class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={cat } width="80" height="80" 
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}  alt=""/>
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
            use  prop `render` to set ui dynamicly.
          */}
          {this.props.children(this.state)}
        </div>
      );
    }
  }

  class MouseTracker2 extends React.Component {
    render() {
      return (
        <div>
          <h1 style={{textAlign:"center"}}>Moove mouse</h1>
          <Mouse children={mousePosition => (<Cat mouse={mousePosition} />)}/>
        </div>
      );
    }
  }  
  
  // Mouse.propTypes = {
  //   children: PropTypes.func.isRequired
  // };

export default MouseTracker2;
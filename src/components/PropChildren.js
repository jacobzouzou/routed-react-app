/*
    Props render: a technic that consist to share code between components from a function: "props.render"
    component with prop render: receive a function, call it, rather build its own logic
*/
import React,{PropTypes} from 'react';
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
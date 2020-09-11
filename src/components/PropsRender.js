import React, { Component } from 'react';

export class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            /* */
            firstName:"Jacob",
            lastName: "ZOUZOU",
            age: 35
        }
    }
    render() {
        return (
            <div>
                {this.props.children(this.state.firstName)} {this.props.children(this.state.lastName)} {this.props.children(this.state.age)}
            </div>
            // `
            // <div>
            //     ${this.props.children(this.state.firstName)}
            //     ${this.props.children(this.state.lastName)}
            //     ${this.props.children(this.state.age)}
            // </div>

            // `
        )
    }
}

export const Children1 = props => {
    return <span>{props.params}</span>
}




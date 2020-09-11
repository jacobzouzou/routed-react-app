import React, { Component } from 'react';

export class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "Jacob",
            lastName: "ZOUZOU",
            age: 35
        }
    }
    render() {
        return (
            <div>
                {this.props.firstName(this.state.firstName)} {this.props.lastName(this.state.lastName)} {this.props.age(this.state.age)}
            </div>
        );
    }
}

export const Red = props => {
    return <span style={{ color: "red" }}>{props.firstName}</span>
}
export const Green = props => {
    return <span style={{ color: "green" }}>{props.lastName}</span>
}
export const Blue = props => {
    return <span style={{ color: "blue" }}>{props.age} an(s)</span>
}
export const Bold = props => {
    return (<div>
        <span style={{ fontWeight:"bold" }}>{props.firstName} {props.lastName} {props.age}</span>
    </div>);
}


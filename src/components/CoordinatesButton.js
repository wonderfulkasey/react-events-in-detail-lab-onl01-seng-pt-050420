// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        let coordinates = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button onClick={this.handleClick} ></button>
        );
    }
} 
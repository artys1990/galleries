import React, { Component } from 'react'

export default class Gallery extends Component {
    backStyle = {
        backgroundImage: "url(" + this.props.pic + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    titleStyle = {
        color:"white",

    }
    render() {
        return (
                <div className="galleryContainer" style={this.backStyle}>
                    <h3 style={this.titleStyle}>{this.props.title}</h3>
                </div>
        )
    }
}

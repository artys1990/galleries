import React, { Component } from 'react'

export default class Picture extends Component {
    backStyle = {
        backgroundImage: "url(" + this.props.pic + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    render() {
        return (
                <div className="galleryContainer" style={this.backStyle}>
                    <img src={this.props.url} alt="" />
                </div>
        )
    }
}

import React, { Component } from 'react';


export default class NewGallery extends Component {
    state = {
        title:''
    }

    changeHandler = (event) => {
        this.setState({
            title: event.target.value
        })
        console.log(this.state.title)
    }
    render() {
        return (
            <div>
                <input type="text" name="title" onChange={this.changeHandler} placeholder="Galerijas nosaukums:" />
                <input type="text" name="url" placeholder="Attēla adrese" />
                <button>Pievienot</button>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { GalleryContext } from '../context/galleryContext';

export default class NewGallery extends Component {
    static contextType = GalleryContext;
    state = {
        title:''
    }

    changeHandler = (event) => {
        this.setState({
            title: event.target.value
        })
        console.log(this.state.title)
    }

    add = () => {
        this.context.addGallery();
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <input type="text" name="title" onChange={this.changeHandler} placeholder="Galerijas nosaukums:" />
                <input type="text" name="url" placeholder="Attēla adrese" />
                <button onClick={this.add}>Pievienot</button>
                {console.log(this.context.galleries)}
            </div>
        )
    }
}

import React, { Component } from 'react'
import Gallery from './Gallery';
export default class GalleryList extends Component {
    state = {
        galleries: [{
          id: "",
          title: "test",
          pictures:[]
        }]
    
      };

    render() {
        return (
            <div>
                {this.state.galleries.map(gallery=>{
                    return <div key={gallery.id}>
                        <Gallery title={gallery.title} />
                    </div>
        })}
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

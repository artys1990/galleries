import React, { Component } from 'react'
import Gallery from './Gallery';
import Button from './Button';
import Grid from '@material-ui/core/Grid';
export default class GalleryList extends Component {
    state = {
        galleries: [{
          id: "1",
          title: "test",
          pictures:["https://images.unsplash.com/photo-1564414872027-5ae7dac9a76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"]
        }, {
            id: "2",
            title: "MyGallery",
            pictures:["https://images.unsplash.com/flagged/photo-1564373020761-b9e8ab5c03b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"]
            }, 
            {
                id: "3",
                title: "MyGallery",
              pictures:["https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"]
            }, 
            {
                id: "4",
                title: "MyGallery",
              pictures:["https://images.unsplash.com/photo-1564345440082-155c43c5532f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"]
            }, 
            {
                id: "5",
                title: "MyGallery",
              pictures:["https://images.unsplash.com/photo-1564345440082-155c43c5532f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"]
            }, 
            {
                id: "6",
                title: "MyGallery",
              pictures:["https://images.unsplash.com/photo-1564345440082-155c43c5532f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"]
            }
    
        ]
    
      };
    
      test= () => {
          
      } 
    render() {
        return (
            <div className="galleryList">
                <Button text="Pievienot jaunu galeriju" click={this.test}/>
                <Grid container spacing={3}>
                    {this.state.galleries.map(gallery=>{
                        return <Grid item xs={3} key={gallery.id}>
                            <Gallery title={gallery.title} pic={gallery.pictures[0]}/>
                        </Grid>
                    })}
               </Grid>
            </div>
        )
    }
}

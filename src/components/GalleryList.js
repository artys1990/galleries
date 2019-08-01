import React, { Component } from 'react'
import Gallery from './Gallery';
import Button from './Button';
import Grid from '@material-ui/core/Grid';
import { GalleryContext } from '../context/galleryContext';

export default class GalleryList extends Component {
    static contextType = GalleryContext;

    
    addNewHandler= () => {
      this.props.history.push('/newGallery');
    } 

    openHandler = (id) => {
      this.props.history.push('/pictureList', {id});
    }
    render() {
      console.log(this.context);
        return (
            <div className="galleryList">
              
                <Button text="Pievienot jaunu galeriju" 
                    click={this.addNewHandler}
                />
                 <Grid container spacing={3}>
                    {this.context.galleries.map(gallery=>{
                        return <Grid item xs={3} key={gallery.id}>
                                  <Gallery click={()=>this.openHandler(gallery.id)} title={gallery.title} pic={gallery.pictures[0]}/>
                              </Grid>
                    })}
               </Grid> */
               
            </div>
        )
    }
}

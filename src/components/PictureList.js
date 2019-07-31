import React, { Component } from 'react'
import Button from './Button';
import Grid from '@material-ui/core/Grid';
import { GalleryContext } from '../context/galleryContext';
import Picture from './Picture';

export default class PictureList extends Component {
    static contextType = GalleryContext;
    // state = {
        
    //   };
    
    deleteHandler= (id) => {
        console.log("id=="+ id)
        console.log("context ir: "+this.context.addGallery)
        this.context.deleteGallery(id);
        this.props.history.push('/');
    } 
    render() {
        console.log(this.props.location.state)
        const gallery = this.context.galleries.find( gallery => gallery.id === this.props.location.state.id);
        console.log(gallery)
        return (
            <div className="galleryList">
                <Button text="Dzēst galeriju" 
                    click={() => this.deleteHandler(this.props.location.state.id)}
                />
                 <Grid container spacing={3}>

                     {gallery.pictures.map((pic, index)=>{
                        return <Grid item xs={3} key={index}>
                                  <Picture url={pic} />
                              </Grid>
                    })} 
               </Grid> 
               
            </div>
        )
    }
}

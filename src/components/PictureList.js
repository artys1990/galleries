import React, { Component } from 'react'
import Button from './Button';
import Grid from '@material-ui/core/Grid';
import { GalleryContext } from '../context/galleryContext';
import Picture from './Picture';
import {Dialog, ListItemAvatar, Avatar, List, ListItem, ListItemText} from '@material-ui/core';
import {DialogTitle} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

export default class PictureList extends Component {
    static contextType = GalleryContext;
     state = {
        openDeleteDialog: false,
        showCarousel: false
    };
    
    openDialog = () => {
        this.setState({openDeleteDialog: true});
    }
    closeDialog = () => {
        this.setState({openDeleteDialog: false});
    }
    openCarousel = () => {
        this.setState({showCarousel: true});
    }
    closeCarousel = () => {
        this.setState({showCarousel: false});
    }

    deletePicture = (index, galleryId) => {
        this.context.deletePicture(index, galleryId);
    }

    deleteHandler= (id) => {
        console.log("id=="+ id)
        console.log("context ir: "+this.context.addGallery)
        this.context.deleteGallery(id);
        this.props.history.push('/');
    } 

    generateImgs = (input)=> {
        const result = [];
         input.map((img)=> {
            return (
                result.push(<diV><img src={img} width="600" height="400" /></diV>)
            )
        })
        return result;
    }  
    
    render() {
        const handleOnDragStart = e => e.preventDefault() // carousel
        const {openDeleteDialog} = this.state;
        

       // const {galleryID} = this.props.location.state.id;
        const gallery = this.context.galleries.find( gal => gal.id ===  this.props.location.state.id);
       
      
        const items = this.generateImgs(gallery.pictures)
        console.log("items: "+gallery.pictures)
        return (
            <div className="galleryList">
                <Button text="Dzēst galeriju" 
                     //click={() => this.deleteHandler(this.props.location.state.id)}
                    click={this.openDialog}
                />
                 <Grid container spacing={3}>

                     {gallery.pictures.map((pic, index)=>{
                        return <Grid item xs={3} key={index}>
                                  <Picture zoom={this.openCarousel} url={pic} deleteClick={()=>this.deletePicture(index, gallery.id )}/>
                              </Grid>
                    })} 
               </Grid> 
               
             
               <Dialog open={this.state.showCarousel} onClose={this.closeCarousel}>
               <AliceCarousel mouseDragEnabled startIndex={0} autoHeight={true}>
               {items}
      {/* <img src="" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
    </AliceCarousel>
    </Dialog>

               
               <Dialog open={openDeleteDialog} onClose={this.closeDialog}>
                   <DialogTitle>Vai tiešām dzēst galeriju?</DialogTitle>
                   <List>
                       <ListItem button onClick={() => this.deleteHandler(this.props.location.state.id)}>
                           <ListItemAvatar>
                               <Avatar style={{backgroundColor: blue[100], color:blue[600]}}>
                                   <CheckIcon/>
                               </Avatar>
                           </ListItemAvatar>
                           <ListItemText>Dzēst</ListItemText>
                       </ListItem>
                       <ListItem button onClick={this.closeDialog}>
                           <ListItemAvatar>
                               <Avatar style={{backgroundColor: red[100], color:red[600]}}>
                                   <CloseIcon/>
                               </Avatar>
                           </ListItemAvatar>
                           <ListItemText>Atcelt</ListItemText>
                       </ListItem>
                   </List>
               </Dialog>
               
            </div>
        )
    }
}

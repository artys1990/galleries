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
import red from '@material-ui/core/colors/red'

export default class PictureList extends Component {
    static contextType = GalleryContext;
     state = {
        openDeleteDialog: false
    };
    
    openDialog = () => {
        this.setState({openDeleteDialog: true});
    }
    closeDialog = () => {
        this.setState({openDeleteDialog: false});
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
    render() {
        const {openDeleteDialog} = this.state;
       // const {galleryID} = this.props.location.state.id;
        const gallery = this.context.galleries.find( gallery => gallery.id ===  this.props.location.state.id);
        return (
            <div className="galleryList">
                <Button text="Dzēst galeriju" 
                     //click={() => this.deleteHandler(this.props.location.state.id)}
                    click={this.openDialog}
                />
                 <Grid container spacing={3}>

                     {gallery.pictures.map((pic, index)=>{
                        return <Grid item xs={3} key={index}>
                                  <Picture url={pic} deleteClick={()=>this.deletePicture(index, gallery.id )}/>
                              </Grid>
                    })} 
               </Grid> 
               
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

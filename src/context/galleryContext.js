import React, { Component, createContext } from 'react';
export const GalleryContext = createContext();

export default class GalleryProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            galleries: [{
                id: "1",
                title: "test",
                pictures:["https://images.unsplash.com/photo-1564414872027-5ae7dac9a76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
                    "https://images.unsplash.com/photo-1564504358774-0b889fbd6252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1564496448875-9a73a6e81bdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            ]
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
        }
        this.addGallery = this.addGallery.bind(this)
        this.deleteGallery = this.deleteGallery.bind(this)
    }
 
    addGallery= (title, urls) => {
        console.log("clicked")
        this.setState(prevState => ({
            galleries: [...prevState.galleries, {id: new Date().getTime(), 
                title:title,
                pictures:urls
            }]
        }))
    }

    deleteGallery = (id) => {
        const removeIndex = this.state.galleries.map((gallery) => { 
            return gallery.id}).indexOf(id);
         
        const updated = [...this.state.galleries]
            updated.splice(removeIndex,1)
        this.setState({
            galleries: updated
        })
    }
    deletePicture = (picIndex, galleryId) => {
        let newGallery = [...this.state.galleries];
        newGallery = newGallery.map((gal) => {
            if(gal.id===galleryId){
                gal.pictures.splice(picIndex, 1);
            }
            return gal;
            }
        )
        this.setState({
            galleries: newGallery
        })
     }
    

    render() {
        return (
            <GalleryContext.Provider value={{...this.state, 
                                    addGallery: this.addGallery,
                                    deleteGallery:this.deleteGallery,
                                    deletePicture:this.deletePicture
                            }}>
                {this.props.children}
            </GalleryContext.Provider>
        );
    }
}

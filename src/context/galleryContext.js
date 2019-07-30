import React, { Component, createContext } from 'react'

export const GalleryContext = createContext();

export default class galleryProvider extends Component {

    state = {

    }
    render() {
        return (
            <GalleryContext.Provider value={{...this.state}}>
                {this.props.children}
            </GalleryContext.Provider>
        );
    }
}

import React, { Component } from 'react';
import GalleryList from './components/GalleryList';
import './App.css';
import NewGallery from './components/NewGallery';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import GalleryProvider from './context/galleryContext';
import PictureList from './components/PictureList';
class App extends Component {
//sdsaxsd

  render() {
    return (
      <Router>
      <div className="App">
          <GalleryProvider>
              <Route path="/" exact strict component={GalleryList} />
              <Route path='/newGallery' strict exact component={NewGallery} />
              <Route path='/PictureList' strict exact component={PictureList} />
          </GalleryProvider>
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import GalleryList from './components/GalleryList';
import './App.css';
import NewGallery from './components/NewGallery';
import {Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Button from './components/Button';

class App extends Component {



  nextPath(path) {
    this.props.history.push(path);
  }


  render() {
    return (
      <Router>
      <div className="App">
       <Button />
       
             <Route path="/" exact strict component={GalleryList} />
              <Route path='/newGallery' strict exact component={NewGallery} />

      </div>
      </Router>
    );
  }
}

export default App;

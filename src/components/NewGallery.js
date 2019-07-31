import React, { Component } from 'react';
import { GalleryContext } from '../context/galleryContext';

export default class NewGallery extends Component {
    static contextType = GalleryContext;
    state = {
        title:'',
        urls:[]
    }

    changeHandler = (event, index) => {
        if (event.target.name==="title"){
            this.setState({
                
                [event.target.name] : event.target.value
            })
        } else {
            this.state.urls[index] = event.target.value
            this.setState({
                urls: this.state.urls
            })
        }
        console.log(this.state.title)
    }

    add = (event) => {
        event.preventDefault();
        const newUrls = this.state.urls.filter(Boolean) //izņem tukšās adreses
        console.log(newUrls)
        this.context.addGallery(this.state.title, newUrls);
        this.props.history.push('/');
    }

    addPicFieldHandler = (event) => {
        event.preventDefault();
        this.setState({
            urls: [...this.state.urls, '']
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.add}>
                    <input type="text" required name="title" value={this.state.name} onChange={this.changeHandler} placeholder="Galerijas nosaukums:" />
                    <br />
                    {
                        this.state.urls.map((url, index)=>{
                            return (
                                <div key={index}>
                                    <input name={index} onChange={(e)=>this.changeHandler(e, index)} value={url} placeholder="Attēla Adrese:"/>
                                </div>
                            )
                        })
                    }
                    <button onClick={this.addPicFieldHandler}>Pievienot Attēlu...</button>
                    <hr/>
                    <button type="submit">Izveidot galeriju</button>
             
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';


export default class Picture extends Component {
    backStyle = {
        backgroundImage: "url(" + this.props.url + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        cursor:"pointer"
    }
    render() {
        return (
                <div className="galleryContainer" style={this.backStyle} onClick={this.props.zoom}>
                    <DeleteIcon 
                    onClick={(e)=> {
                            e.stopPropagation();
                            this.props.deleteClick()}}
                        style={{color: "white",
                                        width:"20px",
                                        backgroundColor:"red", 
                                        height:"20px", 
                                        position:"absolute", 
                                        right:"0px", 
                                        top:"0px",
                                        cursor:"pointer"}}/>


                
                    {/* <img src={this.props.url} alt="" onClick={this.props.zoom}/> */}
                </div>
        )
    }
}
